import { type ReactNode, type ComponentPropsWithoutRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type BaseProps = {
  textOnly?: boolean;
  children: ReactNode;
};

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'> & { to?: never; };
type ButtonLinkProps = BaseProps & LinkProps & { to: string; };

const isLinkProps = (props: ButtonProps | ButtonLinkProps): props is ButtonLinkProps =>  {
  return 'to' in props;
}

const Button = (props: ButtonProps | ButtonLinkProps) => {
  const classValue = props.textOnly ? 'button button--text-only' : 'button';

  if (isLinkProps(props)) {
    const { textOnly, children, ...otherProps } = props;
    return (
      <Link {...otherProps} className={classValue}>{children}</Link>
    )
  }

  const { textOnly, children, ...otherProps } = props;
  return (
    <button {...otherProps} className={classValue}>{children}</button>
  )
};

export default Button;
