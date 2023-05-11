import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://source.unsplash.com/user/c_v_r/100x100" alt="Hoaa" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Hoaa989</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>hoaa</span>
      </div>
    </div>
  );
}

export default AccountItem;
