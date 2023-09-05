/* eslint-disable no-unused-vars */
import React, { ChangeEvent } from 'react';

interface IProps {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
}

function EmailInput({ value, onChange, name }: IProps) {
  return (
    <div>
      <label htmlFor="email">
        {name}
        <input
          id="email"
          type="email"
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
}

export default EmailInput;
