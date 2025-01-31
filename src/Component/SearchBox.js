import React, { useState } from 'react';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Optionally, you can dispatch a Redux action to filter the list
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Search contacts"
        value={searchTerm}
        onChange={handleSearchChange}
        className="form-control"
      />
    </div>
  );
};

export default SearchBox;
