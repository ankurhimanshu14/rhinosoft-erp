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
                {items.map(({items: subItems, ...rest}) => (
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor={items.propName}>{items.label}</InputLabel>
                    <OutlinedInput
                        margin="dense"
                        required = {items.required}
                        type={items.text}
                        name={items.propName}
                        id={items.propName}
                        aria-describedby={items.helperId}
                        value={items.propName}
                        labelWidth={80}
                    />
                    <FormHelperText id={items.helperId}>{items.helperLabel}</FormHelperText>
                </FormControl>
                ))}
        </Grid>
    )
}

export default Form;