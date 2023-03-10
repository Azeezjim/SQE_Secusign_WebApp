import { createContext, useReducer, useMemo } from 'react';
import accounts from '../data/accounts.json';

export interface Account {
  id: number;
  name: string;
  image: string;
  balance: number;
  selected: boolean;
}

interface AccountsState {
  accounts: Record<string, Account>;
  totalSelected: number;
}

const initialState = accounts.reduce(
  (acc, account): AccountsState => {
    acc.accounts[account.id] = { selected: false, ...account };
    return acc;
  },
  { accounts: {}, totalSelected: 0 } as AccountsState
);

type Action = { type: string; payload: number };

const reducer = (state: AccountsState, action: Action): AccountsState => {
  switch (action.type) {
    case 'TOGGLE_ACCOUNT': {
      const account = state.accounts[action.payload];
      const newAccount = { ...account, selected: !account.selected };
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [action.payload]: newAccount,
        },
        totalSelected: state.totalSelected + (newAccount.selected ? 1 : -1),
      };
    }
    default:
      return state;
  }
};

const AccountsContext = createContext<{
  state: AccountsState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

function AccountsProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <AccountsContext.Provider value={value}>
      {children}
    </AccountsContext.Provider>
  );
}

export { AccountsContext, AccountsProvider };
