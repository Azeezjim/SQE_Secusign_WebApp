import { Outlet } from 'react-router-dom';
import React from 'react';
import SearchForm from '../components/Form/Form';
import Header from '../components/Header/Index';
import Tapbar from '../components/Tapbar/Index';
import { AccountsProvider } from '../context/AcountsContext';
import { CurrencyProvider } from '../context/CurrencyContext';

function Root() {
  return (
    <div className="h-[100%] w-screen scroll-m-0">
      <Header />
      <main className="grid max-h-screen w-screen max-w-screen-2xl grid-cols-1 grid-rows-1 items-center justify-center gap-8 bg-neutral-50 font-grotesk">
        <div className="h-full py-4 w-screen">
          <CurrencyProvider>
            <AccountsProvider>
              <Outlet />
            </AccountsProvider>
          </CurrencyProvider>
        </div>
      </main>
      <SearchForm />
      <Tapbar />
    </div>
  );
}

export default Root;
