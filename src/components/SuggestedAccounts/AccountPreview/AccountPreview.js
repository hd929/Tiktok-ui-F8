import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/image';
import * as userServices from '~/services/userService';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  const handleFollow = () => {
    userServices.follow(data.id, true);
  };

  return (
    <div className={cx('wrapper')}>
      {/* Header */}
      <header className={cx('header')}>
        <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
        <Button className={cx('follow-btn')} primary onClick={handleFollow}>
          Follow
        </Button>
      </header>

      {/* Body */}
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>{data.nickname}</strong>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <p className={cx('name')}>{data.full_name}</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>{numeral(data.followings_count).format('0.0a').toUpperCase()}</strong>
          <span className={cx('label')}>Follower</span>
          <strong className={cx('value')}>{numeral(data.likes_count).format('0.0a').toUpperCase()}</strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
