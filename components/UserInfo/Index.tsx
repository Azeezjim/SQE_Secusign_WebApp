import { FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
    <div className="relative mx-auto grid w-full max-w-4xl grid-flow-dense  grid-cols-2 grid-rows-auto-1fr justify-center gap-3 rounded-xl bg-gradient-to-br from-blue-900 to-sky-600 p-4 text-center text-white">
      <h1 className="self-center spacy justify-self-start text-lg font-semibold sm:text-x py-8 ">
        Hi, @{user.user_name}
      </h1>
      <div className="col-start-2 row-start-1 flex flex- items-center justify-center gap-2 justify-self-end ">
        <div className= ' flex'>
        <h1 className="font-semibold uppercase">{shortID}</h1>
        <CopyToClipboard text={user.id}>
          <button
            className="grid sm:flex sm:justify-end aspect-square rounded-full border border-transparent p-1 active:border-sky-500 active:text-sky-500 "
            type="button"
          >
            <FaCopy />
          </button>
        </CopyToClipboard>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default User;
