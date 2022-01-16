import React from 'react';
import useStyles from './styles';

function Icon(props) {
  const classes = useStyles();
  return (
     <>
         <img  src={props.src} className={props.className||classes.img} style={props.style}/>
     </>
  );
}

Icon.propTypes = {
};

export default Icon;