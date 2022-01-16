import React from 'react';
import CheckedRectangle from '../../../assets/kit/icons/checkedRectangle.svg';
import UnCheckedRectangle from '../../../assets/kit/icons/unCheckedRectangle.svg';
import Style from '../Style/kits.module.scss';

function RectangleCheckbox({...props}) {
    let classes = [Style.rectangleCheckbox];
    if(props.customClass) {
        classes.push(props.customClass);
    }
    return (
        props.isChecked ? 
            <img onClick={props.onClick} src={CheckedRectangle} className={classes.join(' ')} alt={'checked'}/>
        : 
            <img onClick={props.onClick} src={UnCheckedRectangle} className={classes.join(' ')} alt={'checked'}/>
    )
}

export default RectangleCheckbox;