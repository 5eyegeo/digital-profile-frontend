import React from 'react';
import {Checkbox, FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";

const StyledMultipleCheckBox = (props) => {
  const {label, options, values, name, setFieldValue} = props
  const checkedValues = values[name] || []

  const handleSelect = (checkedName) => {
    const newNames = checkedValues?.includes(checkedName)
      ? checkedValues?.filter(name => name !== checkedName)
      : [...(checkedValues ?? []), checkedName];
    setFieldValue(name, newNames);
    return newNames;
  }

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup row>
        {options.map((value, index) => (
          <FormControlLabel
            key={index}
            checked={checkedValues.includes(value)}
            control={<Checkbox/>}
            name={value.name}
            value={value.name}
            label={value.label}
            onChange={() => handleSelect(value)}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default StyledMultipleCheckBox;