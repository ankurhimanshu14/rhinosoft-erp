import {
    Checkbox,
    FormControl,
    InputLabel
} from '@material-ui/core';

const CheckBox = (props) => {
    return (
        <FormControl>
            <InputLabel htmlFor="role">{props.label}</InputLabel>
                <Checkbox
                name={props.id}
                id={props.id}
                defaultChecked
                size = 'small'
                inputProps = {{'aria-label': props.id}}
                />
        </FormControl>
    )
}

export default CheckBox;