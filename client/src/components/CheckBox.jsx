import {
    Checkbox
} from '@material-ui/core';

const CheckBox = (props) => {
    return (
        <>
            <Checkbox
            name={props.name}
            id={props.id}
            aria-disabled = "false"
            size = 'small'
            color = "primary"
            inputProps = {{'aria-label': props.name}}
            />
        </>
    )
}

export default CheckBox;