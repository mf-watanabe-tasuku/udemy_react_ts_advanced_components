import { type ReactNode, type ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  to?: never;
  textOnly?: boolean;
  children: ReactNode;
};

type LinkProps = ComponentPropsWithoutRef<'a'> &{
  to: string;
  textOnly?: boolean;
  children: ReactNode;
};

const isLinkProps = (props: ButtonProps | LinkProps): props is LinkProps =>  {
  return 'to' in props;
}

const Button = (props: ButtonProps | LinkProps) => {
  const classValue = props.textOnly ? 'button button--text-only' : 'button';

  if (isLinkProps(props)) {
    return (
      <Link {...props} className={classValue}>{props.children}</Link>
    )
  }

  return (
    <button {...props} className={classValue}>{props.children}</button>
  )
};

export default Button;
