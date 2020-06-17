import React from 'react';
import PropTypes from 'prop-types';
import { FilterBlock, Label, Input } from './FilterValue.styled';

const FilterValue = ({ value, onChangeFilter }) => (
  <FilterBlock>
    <Label>Find contacts by name</Label>
    <Input type="text" value={value} onChange={onChangeFilter} />
  </FilterBlock>
);

FilterValue.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default FilterValue;
