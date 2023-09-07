/* eslint-disable no-unused-vars */
import React, { ChangeEvent } from 'react';

interface IProps {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
}

function EmailInput({ value, onChange, name }: IProps) {
  return (
    <label className="flex flex-col font-josefin" htmlFor="email">
      {name}
      <input
        className="w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1"
        id="email"
        type="email"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

export default EmailInput;
