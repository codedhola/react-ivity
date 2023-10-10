import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Footer = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Footer;
