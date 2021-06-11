import React from 'react';
import {Autocomplete} from "@material-ui/lab";
import {Checkbox, TextField} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


const StyledAutoCompleteMultiple = (props) => {
  const {label, name, options, multiple = true, values, setFieldValue} = props
  return (
    <>
      {values ? (
        <Autocomplete
          style={{marginBottom: "16px"}}
          multiple={multiple}
          options={options}
          disableCloseOnSelect
          getOptionSelected={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.title ? option.title : ""}
          value={values[name].id ? values[name].id : values[name]}
          onChange={(event, value) => setFieldValue(name, value)}
          renderOption={(option, {selected}) => (
            <>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon/>}
                checkedIcon={<CheckBoxIcon/>}
                style={{marginRight: 8}}
                checked={selected}
                name={name}
              />
              {option.title}
            </>
          )}
          renderInput={(params) => (
            <TextField {...params} size={"small"} variant="outlined" label={label} placeholder={label}/>
          )}
        />) : null}
    </>
  );
};

export default StyledAutoCompleteMultiple;