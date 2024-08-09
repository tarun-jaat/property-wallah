import React, { useState, useMemo, useEffect } from 'react';

const locations = [
  { description: 'New York, NY, USA' },
  { description: 'Los Angeles, CA, USA' },
  { description: 'Chicago, IL, USA' },
  { description: 'Houston, TX, USA' },
  { description: 'Phoenix, AZ, USA' },
  { description: 'Mumbai, Maharashtra, India' },
  { description: 'Delhi, India' },
  { description: 'Bangalore, Karnataka, India' },
  { description: 'Hyderabad, Telangana, India' },
  { description: 'Chennai, Tamil Nadu, India' },
];

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default function SimpleAutocomplete() {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [placeholder, setPlaceholder] = useState('PG in Noida');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (placeholder === 'PG in Noida') {
        setPlaceholder('Rooms in Delhi');
      } else {
        setPlaceholder('PG in Noida');
      }
    }, 3000);
    return () => clearInterval(intervalId);
  }, [placeholder]);

  const fetch = useMemo(
    () =>
      debounce((input) => {
        if (input) {
          setOptions(
            locations.filter((location) =>
              location.description.toLowerCase().includes(input.toLowerCase())
            )
          );
        } else {
          setOptions([]);
        }
      }, 400),
    []
  );

  useEffect(() => {
    fetch(inputValue);
  }, [inputValue, fetch]);

  return (
    <div className="relative flex gap-4 items-center w-full">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="w-full outline-none p-2 placeholder:text-sm placeholder:text-richblack-400  border-b-2 focus:border-primary"
      />
      <buttn className="bg-primary text-white px-3 py-2 rounded-md ">
        Search
      </buttn>
      {options.length > 0 && (
        <ul className="absolute z-10 w-full p-0 mt-24 overflow-y-auto bg-white border border-gray-300 rounded max-h-52">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setValue(option);
                setInputValue(option.description);
                setOptions([]);
              }}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {option.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}