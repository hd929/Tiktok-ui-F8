import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

export default function Button({
  to,
  href,
  primary = false,
  outline = false,
  rounded = false,
  text = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button'
  const props = {
    onClick,
    ...passProps,
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    rounded,
    text,
    disabled,
    small,
    large,
  })

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  )
}
