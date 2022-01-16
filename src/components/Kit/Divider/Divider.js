import React from 'react';
import Style from '../Style/kits.module.scss';

//this component needs container for horizontal or vertical to set width and height
function ChistaDivider({...props}) {
    return (
        <div
        className={props.direction == 'vertical' ? Style.verticalDivider : Style.horizontalDivider}
        />
    )
}

export default ChistaDivider;