import {
    Checkbox
} from '@material-ui/core';

const CheckBox = (props) => {
    return (
        <>
            <Checkbox
            name={props.name}
            id={props.id}
            defaultChecked
            size = 'small'
            inputProps = {{'aria-label': props.name}}
            />
        </>
    )
}

export default CheckBox;