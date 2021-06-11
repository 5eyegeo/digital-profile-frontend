import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DateTimePicker, KeyboardDateTimePicker,
} from '@material-ui/pickers';
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({});

const useTimePicker = makeStyles((theme) => ({
  timePickerWrapper: {
    marginBottom: theme.spacing(2)
  },
}));


const StyledDateTimePicker = (props) => {
  const classes = useTimePicker();
  const {name, label, values, setFieldValue} = props;
  return (
    <>
      <Grid container className={classes.timePickerWrapper}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              fullWidth
              autoOk
              variant="inline"
              inputVariant="outlined"
              name={name}
              label={label}
              value={values[name]}
              size="small"
              onChange={(e) => setFieldValue(name, e)}
            />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Grid>
    </>
  );
};

export default StyledDateTimePicker;
