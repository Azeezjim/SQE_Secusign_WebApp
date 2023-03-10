import { createContext, useState, useMemo, useContext } from 'react';

interface CurrencyProviderProps {
  children: JSX.Element;
}

interface ICurrencyContext {
  currency: string;
  setCurrency: (currency: string) => void;
}

const CurrencyContext = createContext<ICurrencyContext | undefined>(undefined);

function CurrencyProvider({ children }: CurrencyProviderProps): JSX.Element {
  const [currency, setCurrency] = useState('USD');
  const value = useMemo(() => ({ currency, setCurrency }), [currency]);
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

function useCurrency(): ICurrencyContext {
  const context = useContext(CurrencyContext);
  if (!context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}

export { useCurrency, CurrencyProvider };
