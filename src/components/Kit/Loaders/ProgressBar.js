import clsx from 'clsx';
import React from 'react';
import Style from '../../../components/Kit/Style/kits.module.scss';

function ProgressBar({...props}) {
    return (
        <div className={clsx(Style.progressBarContainer, props.customClassContainer)}>
            <div
            style={{width: props.value}}
            />
        </div>
    )
}

export default ProgressBar;