import { FormControl, TextField, FormHelperText } from '@material-ui/core';
import useStyles from '../customStyles';

const FormBuilder = ({items}) => {
    const classes = useStyles();
    return (
        <>
        {items.map(item => (
            <>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <TextField
                    variant="outlined"
                    margin="dense"
                    name={item.name}
                    required={item.required}
                    id={item.name}
                    label={item.label}
                    type={item.type}
                    aria-describedby={item.helperId}
                    ref = {item.ref}
                    />
                    <FormHelperText id={item.helperId}>{item.helperText}</FormHelperText>
                </FormControl>
                </>
        ))}
        </>
    )
}

export default FormBuilder;