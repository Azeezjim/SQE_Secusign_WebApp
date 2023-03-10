import Select from 'react-select';
import { useState } from 'react';
import currencies from '../../data/currencies.json';
import { useCurrency } from '../../context/CurrencyContext';
import { type Option } from './Index';

interface CurrencySelectProps {
  options: Array<Option>;
}

function CurrencySelect({ options }: CurrencySelectProps) {
  const { currency, setCurrency } = useCurrency();
  const [countryCode, setCountryCode] = useState<string>('US');
  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      setCurrency(selectedOption.value);
      setCountryCode(selectedOption.countryCode);
    }
  };
  return (
    <Select
      name="currency"
      options={options}
      defaultValue={options.find((option) => option.value === currency)}
      onChange={handleChange}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderRadius: 24,
          backgroundColor: '#fafafa',
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          paddingInline: 6,
          paddingBlock: 4,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          color: '#000000',
          zIndex: 100,
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          position: 'relative',
          paddingLeft: '30px',
          height: '25px',
          '&:before': {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            height: '25px',
            width: '25px',
            borderRadius: '20px',
            boxShadow:
              '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
            background: `url('http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg') center/cover no-repeat`,
          },
        }),
      }}
    />
  );
}

export default CurrencySelect;
