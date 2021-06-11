import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function StyledSwitch(props) {
  const {isActive, name, handleChange} = props


  return (
    <>
      <Switch
        checked={isActive}
        onChange={handleChange}
        name={`${name}`}
        inputProps={{'aria-label': 'secondary checkbox'}}
      />
    </>
  );
}