import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CurrencySelect from './SelectCurrency';
import Search from './UserSearchDialog';
import currencies from '../../data/currencies.json';
import { useCurrency } from '../../context/CurrencyContext';
import user from '../../data/user.json';

export interface Option {
  value: string;
  label: string;
  countryCode: string;
}

function User() {
  const { currency } = useCurrency();
  // pick from the begining and end of Id and concatenate with ellipsis
  const shortID = `${user.id.slice(0, 6)}...${user.id.slice(-6)}`;
  const options: Array<Option> = Object.entries(currencies).map(
    ([key, value]) => ({
      value: key,
      label: key,
      countryCode: value.country_code,
      decimalDigits: value.decimal_digits,
      rounding: value.rounding,
    })
  );
  // console.log('currency', context)

  return (
    <div className="relative mx-auto grid w-full max-w-4xl grid-flow-dense  grid-cols-2 grid-rows-auto-1fr justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-900 to-sky-600 p-4 text-center text-white">
      <h1 className="self-center justify-self-start text-lg font-semibold sm:text-xl">
        Hi, @{user.user_name}
      </h1>
      <div className="col-start-1 flex flex-col items-start">
        <span>Total Asset</span>
        <h1 className="text-lg font-bold">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currencyDisplay: 'narrowSymbol',
            currency
          }).format(user.balance)}
        </h1>
      </div>
      <div className="w-max self-center justify-self-end">
        <CurrencySelect options={options} />
      </div>
      <div className="col-start-2 row-start-1 flex flex-row items-center justify-center gap-1 justify-self-end">
        <h1 className="font-semibold uppercase">{shortID}</h1>
        <CopyToClipboard text={user.id}>
          <button
            className="grid aspect-square rounded-full border border-transparent p-1 active:border-sky-500 active:text-sky-500"
            type="button"
          >
            <FaCopy />
          </button>
        </CopyToClipboard>
        <Search />
      </div>
    </div>
  );
}

export default User;
