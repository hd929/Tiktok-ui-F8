import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      {/* Header */}
      <header className={cx('header')}>
        <img className={cx('avatar')} src="https://picsum.photos/200/200" alt="" />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </header>

      {/* Body */}
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>kogi_1011</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>KOGI</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M</strong>
          <span className={cx('label')}>Follower</span>
          <strong className={cx('value')}>8.2M</strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
