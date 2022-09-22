import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68539fa0a7334eba095bcd494efa88be~c5_100x100.jpeg?x-expires=1663916400&x-signature=WmGjqeuyZTCnSRFeFqmm50c%2FGKw%3D'
        alt='Hoaa'
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Hoaa989</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>hoaa</span>
      </div>
    </div>
  )
}

export default AccountItem
