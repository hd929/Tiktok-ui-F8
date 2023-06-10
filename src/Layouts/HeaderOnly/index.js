import classNames from 'classnames/bind';

import Header from '../components/Header';
import styles from '../DefaultLayout/DefaultLayout.module.scss';

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}
