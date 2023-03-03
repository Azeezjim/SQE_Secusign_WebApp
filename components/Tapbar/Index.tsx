import { HiHome } from 'react-icons/hi';
import { VscSettingsGear } from 'react-icons/vsc';
import Avatar from '../Avatar';
import NavItem from './NavItem';

function Tapbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 mx-4 h-14 rounded-2xl bg-white shadow-lg lg:hidden">
      <ul className="grid h-full w-full grid-cols-3 items-center justify-start gap-4 px-6">
        <NavItem link="/">
          <HiHome className="mx-auto text-2xl" />
        </NavItem>
        <NavItem link="/settings">
          <VscSettingsGear className="mx-auto text-2xl" />
        </NavItem>
        <Avatar address="CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz632J9M" />
      </ul>
    </nav>
  );
}

export default Tapbar;
