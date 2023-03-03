import Link from "next/link";
import React from "react";
import User from "../UserInfo/Index";
function Navbar() {
  return (
    <div>

      <header className="fixed top-0 z-50 h-20 w-full border-b border-b-neutral-200 bg-white shadow-sm">
        <div className="flex flex-row items-center justify-between px-4">
          <Link href="https://www.sqeholdings.com">
            <img src="/assrts/logo.svg" alt="sqe-logo" />
          </Link>
        </div>
      </header>
      <main className="grid max-h-screen w-screen max-w-screen-2xl grid-cols-1 grid-rows-1 items-center justify-center gap-8 bg-neutral-50 font-grotesk">
        <div className="h-full p-4 pt-24 pb-20">
      <User />
      </div>
      </main>
    </div>
  );
}

export default Navbar;
