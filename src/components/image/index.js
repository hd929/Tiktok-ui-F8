import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
  const [fallbackSrc, setFallbackSrc] = useState('');

  const handleError = () => {
    setFallbackSrc(fallback);
  };

  return (
    <img
      ref={ref}
      className={cx('wrapper', className)}
      src={fallbackSrc || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
