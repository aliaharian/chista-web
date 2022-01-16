import React from 'react';
import Style from '../Style/kits.module.scss';

function FramesLayout({children, customStyles}) {
    return (
        <div
        className={Style.framesLayoutContainer}
        style={customStyles}>
            {children}
        </div>
    )
}

export default FramesLayout;