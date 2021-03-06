import React from 'react';
import createSvgIcon from '@material-ui/core/utils/createSvgIcon';

export default createSvgIcon(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g fill="none">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5px" d="M4 8L0 4l4-4" transform="translate(24) rotate(90) translate(10 8)" />
            <path d="M24 0H0v24h24z" transform="translate(24) rotate(90)" />
        </g>
    </svg>
    , 'ArrowTop'
);