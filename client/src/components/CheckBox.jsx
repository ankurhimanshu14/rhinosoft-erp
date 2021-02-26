import {forwardRef} from 'react';
import {
    FormGroup,
    FormControlLabel,
    Checkbox
} from '@material-ui/core';

const CheckBox = forwardRef((props, ref) => {
    return (
        <>
        <FormGroup row>
            <FormControlLabel
            control = {<Checkbox
            name={props.name}
            id={props.id}
            aria-disabled = "false"
            size = 'small'
            color = "primary"
            inputProps = {{'aria-label': props.name}}
            ref={ref}
            />}
            label={props.label}
            />
        </FormGroup>
        </>
    )
});

export default CheckBox;