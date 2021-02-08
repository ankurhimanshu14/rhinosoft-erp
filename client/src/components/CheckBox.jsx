import { useState } from 'react';

import {
    Checkbox
} from '@material-ui/core';

const CheckBox = (props) => {
    return (
        <>
            <Checkbox
            name={props.name}
            is={props.id}
            defaultChecked
            size = 'small'
            inputProps = {{'aria-label': props.name}}
            />
        </>
    )
}

export default CheckBox;