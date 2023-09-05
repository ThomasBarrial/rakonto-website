/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

interface IProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
}

function TextInput({ value, onChange, name }: IProps) {
  return (
    <div>
      <label htmlFor="text">
        {name}
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
}

export default TextInput;
