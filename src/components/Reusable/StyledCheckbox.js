import React, {useEffect, useState} from "react";
import {Field} from "formik";
import {FormControlLabel} from "@material-ui/core";
import {CheckboxWithLabel} from "formik-material-ui";
import Typography from "@material-ui/core/Typography";

const StyledCheckbox = (props) => {
  const {name, label, values, setFieldValue} = props;
  const [checkBoxes, setCheckBoxes] = useState(null)

  const checkBoxArray = () => {
    let checkBoxList = []
    for (let key in values) {
      if (values.hasOwnProperty(key)) {
        checkBoxList[key] = values[key]
      }
    }
    return checkBoxList
  }

  useEffect(() => {
    setCheckBoxes(checkBoxArray)
  }, []);

  const handleCheckbox = (event, setFieldValue) => {
    if (name === event.target.value) {
      setFieldValue(name, event.target.checked)
      setCheckBoxes[name] = event.target.checked
    }
  }

  return (
    <>
      {checkBoxes ? (<FormControlLabel
        style={{marginLeft: 3}}
        label={<Typography>{label}</Typography>}
        labelPlacement="end"
        disabled={false}
        control={
          <Field
            component={CheckboxWithLabel}
            name={name}
            value={name}
            checked={values[name]}
            type="checkbox"
            color="primary"
            onClick={event => handleCheckbox(event, setFieldValue)}
          />
        }
      />) : null}
    </>
  );
}
export default StyledCheckbox