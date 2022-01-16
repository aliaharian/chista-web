import React from 'react';
import Style from '../Style/kits.module.scss';
import clsx from 'clsx';

function LayoutWithSidebar({ children, customStyles, className }) {
    return (
        <div
            className={clsx(Style.layoutWithSidebarContainer, className && className)}
            style={customStyles}>
            {children}
        </div>
    )
}

export default LayoutWithSidebar;