import React from 'react';
import {Field} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {color, font} from "../util/globalTheme";


const useAutosizeTextarea = makeStyles(theme => ({
  autosizeTextareaWrapper: {
    padding: '1rem',
    width: '100%',
    '&:active, &:focus': {
      borderColor: `${color.Soft_red}`,
      outlineColor: `${color.Soft_red}`,
    },
  },
}))

const StyledAutoSizeTextarea = ({ name, values, setFieldValue}) => {
  const classes = useAutosizeTextarea();
  return (
    <>
      <Field
        style={{height: '7rem', fontSize: `${font.font_regular}`}}
        className={classes.autosizeTextareaWrapper}
        component={TextareaAutosize}
        rowsMax={4}
        value={values.message}
        aria-label="maximum height"
        placeholder="Your Special Message"
        name={name}
        onChange={(e) => setFieldValue(name, e.target.value)} // for  locally set field value
        // onChange={(e) => handleChange(e, setFieldValue)} // to handle field value globally
        // onChange={(e)=>console.log(e.target.value)} // console current entered value

      />

    </>
  );
}

export default StyledAutoSizeTextarea;