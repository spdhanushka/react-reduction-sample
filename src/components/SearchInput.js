import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';

import history from '../history';

const SearchInput = (props) => {
  const handleSearch = e => {
    e.preventDefault();
    props.setSearch(e.target.search.value);
    
    history.push('/search');
  }
  return (
    <Form inline className="cr-search-form" onSubmit={handleSearch}>
      <MdSearch
        size="20"
        className="cr-search-form__icon-search text-secondary"
      />
      <Input
        name="search"
        type="search"
        className="cr-search-form__input"
        placeholder="Search..."
      />
    </Form>
  );
};

export default SearchInput;
