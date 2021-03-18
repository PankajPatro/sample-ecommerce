import { InputAdornment, TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filter, useItemDataSelector } from '../../services/itemDataSlice';
import './GlobalSearch.css';

const GlobalSearch: React.FC = () => {
  const dispatch = useDispatch()
  const filterText = useItemDataSelector((state) => state.itemDataReducer.filterText);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filter(event.target.value))
  }

  return (
    <TextField className="GlobalSearch" value={filterText} onChange={handleChange}
      InputProps={{
        startAdornment: <InputAdornment position="start">
          <SearchOutlined></SearchOutlined>
        </InputAdornment>,
      }}
      variant="filled"
    />
  );
}

export default GlobalSearch;
