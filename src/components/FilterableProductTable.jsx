import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
  const [filterInput, setFilterInput] = useState('');
  return (
    <>
      <h1>Ironstore</h1>
      <SearchBar
        filterInput={filterInput}
        updatedInput={(input) => setFilterInput(input)}
      />
      <ProductTable products={props.products} filterInput={filterInput} />
    </>
  );
}

export default FilterableProductTable;
