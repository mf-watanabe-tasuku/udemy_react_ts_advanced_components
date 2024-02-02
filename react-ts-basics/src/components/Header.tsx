import { type ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
};

export default function Header({ children, image }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  )
}
