import React from 'react';
import { HiHome } from 'react-icons/hi';
import { VscSettingsGear } from 'react-icons/vsc';
import NavItem from './NavItem';
import Avatar from '../Avatar';

function Tapbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-14 rounded-2xl bg-white shadow-lg tablet:hidden">
      <ul className="grid h-full w-full grid-cols-2 items-center justify-center gap-4 px-6">
        <NavItem link="/">
          <HiHome className="mx-auto my-5 text-2xl" />
        </NavItem>
        <div className="w-10 justify-self-center">
          <Avatar address="CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M" />
        </div>
      </ul>
    </nav>
  );
}

export default Tapbar;
