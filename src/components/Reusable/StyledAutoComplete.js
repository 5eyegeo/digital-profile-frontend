import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const StyledAutoCompleteV2 = (props) => {
  const {label, name, values, setFieldValue, options, variant, onChange, ...other} = props
  return (
    <>
      {options && values ? (<Autocomplete
        name={name}
        options={options}
        getOptionSelected={(option, value) => option.value === value.value}
        getOptionLabel={(option) => option.title ? option.title : ""}
        value={values[name]}
        onChange={(e, value) => setFieldValue(name, value)}

        renderInput={(params) => <TextField {...params} label={label} variant={variant}
                                            size={'small'} style={{marginBottom: '16px'}}/>}
        {...other}
      />) : null}
    </>
  );
}
export default StyledAutoCompleteV2;