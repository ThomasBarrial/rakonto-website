/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

interface IProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
}

function TextInput({ value, onChange, name }: IProps) {
  return (
    <label className="flex flex-col font-josefin" htmlFor="text">
      {name}
      <input
        className='"w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1 '
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

export default TextInput;
