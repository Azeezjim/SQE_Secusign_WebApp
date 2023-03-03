import Link from 'next/link';
import React from 'react';



function NavItem({ link, children }) {
  return (
    
    <li className="h-full ">
      <Link
        href={link}
        className={({ isActive }) =>
          isActive
            ? 'grid h-full grid-flow-row items-center justify-center text-sky-900'
            : 'grid h-full grid-flow-row items-center justify-center text-slate-400 hover:text-sky-900'
        }
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
