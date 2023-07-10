import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Image from '~/components/image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[600, 0]} placement="bottom" offset={[0, 8]} render={renderPreview}>
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{data.nickname}</strong>
              {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>{data.full_name}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
