/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from 'react';

interface IProps {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
}

function PhoneInput({ value, onChange, name }: IProps) {
  return (
    <label className="flex flex-col  font-josefin" htmlFor={name}>
      {name}

      <input
        className='"w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1 '
        type="tel"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        required
      />
    </label>
  );
}

export default PhoneInput;
