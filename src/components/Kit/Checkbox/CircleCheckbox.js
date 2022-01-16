import React from 'react';
import CheckedCircle from '../../../assets/kit/icons/checkedCircleType2.svg';
import UnCheckedCircle from '../../../assets/kit/icons/unCheckedCircle.svg';
import Style from '../Style/kits.module.scss';

function CircleCheckbox({...props}) {
    return (
        props.isChecked ? 
            <img src={CheckedCircle} className={Style.circleCheckbox} alt={'checked'}/>
        : 
            <img src={UnCheckedCircle} className={Style.circleCheckbox} alt={'checked'}/>
    )
}

export default CircleCheckbox;