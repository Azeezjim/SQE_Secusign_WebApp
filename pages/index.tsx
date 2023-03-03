// import { Outlet } from 'react-router-dom';
import React from 'react';
import SearchForm from '../components/Form/Form';
import Header from '../components/Header/Index';
import Tapbar from '../components/Tapbar/Index';
// import { AccountsProvider } from './contexts/AccountsContext';

function Root() {
  return (
    <div className=''>
      <Header />
      
          <SearchForm />
      
    </div>
  );
}

export default Root;
