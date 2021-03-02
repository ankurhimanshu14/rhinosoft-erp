import { FormControl, TextField, FormHelperText } from '@material-ui/core';
import useStyles from '../customStyles';

const FormBuilder = ({items}) => {
    const classes = useStyles();
    return (
        items.map(({ name, label, type, helperId, helperText, ...rest}) => (
            <FormControl fullWidth variant="outlined" className={classes.margin}>
                <TextField
                key={name}
                variant="outlined"
                margin="dense"
                name={name}
                id={name}
                label={label}
                type={type}
                aria-describedby={helperId}
                {...rest}
                />
                <FormHelperText id={helperId}>{helperText}</FormHelperText>
            </FormControl>
        ))
    )
};

export default FormBuilder;