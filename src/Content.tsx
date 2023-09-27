import React, { ReactElement, FC } from "react";

type Props = { children: React.ReactNode };

const Content: FC<Props> = ({ children }): ReactElement => {
  return <main>{children}</main>;
};

export default Content;
