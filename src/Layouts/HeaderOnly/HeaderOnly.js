import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import styles from '../DefaultLayout/DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;
