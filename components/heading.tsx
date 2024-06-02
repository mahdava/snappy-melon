import cx from "classnames";
import React, { FC } from "react";

interface HeaderTitleProps {
  title: string;
  description?: React.ReactElement | string;
  className?: string;
}

const HeaderTitle: FC<HeaderTitleProps> = ({
  title,
  description,
  className = "",
}) => (
  <hgroup className={cx("border-2 border-red-600 text-center p-4", className)}>
    <h1 className="text-3xl mb-0 pb-0">{title}</h1>
    {description &&
      (typeof description === "string" ? (
        <p className="m-0">{description}</p>
      ) : (
        <div className="m-0">{description}</div>
      ))}
  </hgroup>
);

export default HeaderTitle;
