import React, { FormEvent, useState } from 'react';

interface SearchProps {
  className: string;
  onSubmit: (term?: string, e?: React.SyntheticEvent) => void;
  onChange?: (term?: string, e?: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Search = (props: SearchProps) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(term, e);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
    if (props.onChange) {
      props.onChange(term, e);
    }
  };

  return (
    <form className='search-form' onSubmit={e => handleSubmit(e)}>
      <input
        className='search'
        placeholder={props.placeholder || ''}
        onChange={e => handleChange(e)}
        value={term}
      />
    </form>
  );
};
