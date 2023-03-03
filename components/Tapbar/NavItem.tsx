import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  link: string;
  children: React.ReactNode;
}

function NavItem({ link, children }: NavItemProps) {
  return (
    <li className="h-full ">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? 'grid h-full grid-flow-row items-center justify-center text-sky-900'
            : 'grid h-full grid-flow-row items-center justify-center text-slate-400 hover:text-sky-900'
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
