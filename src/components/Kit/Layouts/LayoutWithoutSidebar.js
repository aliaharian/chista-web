import React from 'react';
import Style from '../Style/kits.module.scss';

function LayoutWithoutSidebar({children, customStyles}) {
    return (
        <div 
        className={Style.layoutWithoutSidebarContainer}
        style={customStyles}>
            {children}
        </div>
    )
} 

export default LayoutWithoutSidebar;