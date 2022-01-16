import React from 'react';
import useStyles from './styles';
import { Typography, Button } from "@material-ui/core";
import pinIcon from '../../../../../../assets/images/pin-icon.svg';
import infoIcon from '../../../../../../assets/images/infoIcon.svg';

function AdviserLongDesc(props) {
    const classes = useStyles();
    const logDesc = React.useRef(null);
    const readMore = React.useRef(null);

    function readMoreToggle() {
        logDesc.current.style.height = "max-content";
        readMore.current.style.display = "none";
    }
    return (
        <>
            {props.desc ? <div className={classes.longDescWrapper}>
                <Typography className={classes.longDescTitle}>
                    <img src={infoIcon} alt="" className={classes.info} />
                    درباره من
                   <div className={classes.itemLocContainer}>
                        <img src={pinIcon} alt="" className={classes.itemLoc} />
                        <Typography className={classes.itemLocText}>{props.city}</Typography>
                    </div>
                </Typography>
                <Typography className={classes.longDesc} ref={logDesc}>
                    {props.desc}
                </Typography>
                {props.desc && props.desc.split(' ').length > 80 &&
                    <div className={classes.descMoreWrapper} ref={readMore}>
                        <Button className={classes.readMoreBtn} onClick={readMoreToggle}>بیشتر</Button>
                    </div>}
            </div> : null}
        </>
    );
}

AdviserLongDesc.propTypes = {};

export default AdviserLongDesc;
