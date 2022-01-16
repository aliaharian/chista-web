import React from 'react';
import useStyles from './styles';
import logoImg from '../../assets/images/blackLogo.svg';
import logoImgWhite from '../../assets/images/logo-text-white.svg';
import logoIcon from '../../assets/images/logo-type-icon.png';
import Link from '../Link/Link';

function Logo(props) {
  const classes = useStyles();
  return (
      <>
          <Link href="/">
           {props.showIcon && <img src={logoIcon} alt="چیستا" className={classes.logoIcon}/>} 
           {!props.showIcon && !props.whiteLogo && !props.darkMode && <img src={logoImg} alt="چیستا" className={classes.logoImg}/> }
           {props.whiteLogo && <img src={logoImgWhite} alt="چیستا" className={classes.logoImg}/> }
           {props.darkMode && <img src={logoImgWhite} alt="چیستا" className={classes.logoImg}/> }
          </Link>
      </>
  );
}

Logo.propTypes = {
};

export default Logo;