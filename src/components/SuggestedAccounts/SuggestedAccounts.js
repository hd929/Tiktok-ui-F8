import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import * as userServices from '~/services/userService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, followed }) {
  const [amounts, setAmounts] = useState(3);
  const [suggestedResult, setSuggestedResult] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await userServices.suggested(followed, amounts);

      // FIX: Fix fetch API 4 times
      console.log(result);

      setSuggestedResult(result);
    };

    fetchApi();
  }, [followed, amounts]);

  const handleSeeMore = () => {
    setAmounts(amounts + 3);
  };

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {suggestedResult.map((result) => (
        <AccountItem key={result.id} data={result} />
      ))}

      {amounts < 10 && suggestedResult.length > 3 && (
        <div className={cx('more-btn')} onClick={handleSeeMore}>
          See all
        </div>
      )}
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
