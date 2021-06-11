import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {color} from "../../helpers/globalTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${color.Soft_red}`,
    },
  },
});

const useDatePicker = makeStyles((theme) => ({
  datePickerWrapper: {
    "& .MuiTextField-root": {
      // backgroundColor: theme.palette.grey[100],
      '& .MuiInputBase-root': {
        height: '40px',
      }
    },
    marginBottom: theme.spacing(2),
    opacity: "0.6",
    // letterSpacing: "1.5px",
  },
}));

const StyledDatePicker = (props) => {
  const classes = useDatePicker();
  const {label, name, setFieldValue, value} = props;
  return (
    <>
      <Grid className={classes.datePickerWrapper}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disablePast
              autoOk
              size="small"
              variant="inline"
              name={name}
              label={label}
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={value}
              onChange={(e) => setFieldValue(name, e)}
              KeyboardButtonProps={{
                "aria-label": "change date",
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

export default StyledDatePicker;