import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as userServices from '~/services/userService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, followed }) {
  const [amounts, setAmounts] = useState(3);
  const [seeAll, setSeeAll] = useState(false);
  const [suggestedResult, setSuggestedResult] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await userServices.suggested(followed);

      // TODO: Fix fetch API 4 times
      console.log(result);

      setSuggestedResult(result);
    };

    fetchApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSeeAll = () => {
    if (!seeAll) {
      setAmounts(9);
      setSeeAll(true);
    } else {
      setAmounts(3);
      setSeeAll(false);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {(seeAll || suggestedResult.length <= 3) &&
        suggestedResult.map((result) => <AccountItem key={result.id} data={result} />)}

      {!seeAll &&
        suggestedResult.length > 3 &&
        suggestedResult.slice(0, amounts).map((result) => <AccountItem key={result.id} data={result} />)}

      {suggestedResult.length > 3 && (
        <div className={cx('more-btn')} onClick={handleSeeAll}>
          {!seeAll && <span>See all</span>}
          {seeAll && <span>See less</span>}
        </div>
      )}
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
