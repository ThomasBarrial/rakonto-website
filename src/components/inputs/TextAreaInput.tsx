/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

interface IProps {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
}

function TextAreaInput({ value, onChange, name }: IProps) {
  return (
    <div>
      <label htmlFor="textArea">
        {name}
        <input
          type="textarea"
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
}

export default TextAreaInput;
