import cx from "classnames";
import Link from "next/link";
import { FC } from "react";

interface MenuProps {
  className?: string;
}

const Menu: FC<MenuProps> = ({ className = "" }) => (
  <nav className={cx(className)}>
    <ul className="p-4 grid gap-4 grid-cols-4">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/articles">Articles</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
