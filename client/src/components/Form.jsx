import {
    Grid,
    FormControl,
    InputLabel,
    OutlinedInput,
    FormHelperText
} from '@material-ui/core'

import useStyles from '../customStyles';

const Form = ({items}) => {
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                {items.map(({propName, text, helperId, label, helperLabel, required, type, ...rest}) => (
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor={propName}>{label}</InputLabel>
                    <OutlinedInput
                        margin="dense"
                        required = {required}
                        type={type}
                        name={propName}
                        id={propName}
                        aria-describedby={helperId}
                        labelWidth={80}
                    />
                    <FormHelperText id={helperId}>{helperLabel}</FormHelperText>
                </FormControl>
                ))}
        </Grid>
    )
}

export default Form;