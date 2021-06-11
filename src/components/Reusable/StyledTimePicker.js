import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core";
import {color} from "../util/globalTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${color.Soft_red}`,
    },
  },
});

const useTimePicker = makeStyles((theme) => ({
  timePickerWrapper: {
    opacity: "0.6",
  },
}));

const StyledTimePicker = (props) => {
  const classes = useTimePicker();
  const {name, setFieldValue, value} = props;
  return (
    <>
      <Grid container className={classes.timePickerWrapper}>
        <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            InputLabelProps={{ style: { fontSize: 21 } }}
            fullWidth
            autoOk
            variant="inline"
            label="Time"
            inputVariant="outlined"
            value={value}
            name={name}
            onChange={(e) => setFieldValue(name, e)}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            inputProps={{
              style: {
                padding: "1rem",
              },
            }}
          />
        </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Grid>
    </>
  );
};

export default StyledTimePicker;
