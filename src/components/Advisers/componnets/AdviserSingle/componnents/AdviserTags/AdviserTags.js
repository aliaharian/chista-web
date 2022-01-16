import React from 'react';
import useStyles from './styles';
import {Typography, Button} from "@material-ui/core";
import tagsIcon from "../../../../../../assets/images/tags-icon.png";

function AdviserTags(props) {
    const classes = useStyles();
    const tagsMore = React.useRef(null);
    const readMore = React.useRef(null);
    function readMoreToggle()
    {
        tagsMore.current.style.height="max-content";
        readMore.current.style.display="none";
    }
    return (
        <>
            <div className={classes.titleRoot}><div className={classes.titleWrapper}><img src={tagsIcon}/>  <Typography component="h2" className={classes.commentsTitle}>تخصص ها</Typography></div>
            </div>
            <div className={classes.root}>
                <div className={classes.tagsWrapper} ref={tagsMore}>
                    {props.tags&&props.tags.length>0&&
                        props.tags.map((item)=> (
                        <div className={classes.tagItem}>
                            <span>{item}</span>
                        </div>
                    ))}
                    {props.tags&&props.tags.length>12&&
                    <div className={classes.tagsMoreWrapper} ref={readMore}>
                        <Button className={classes.readMoreBtn} onClick={readMoreToggle}>بیشتر</Button>
                    </div>}
                </div>
            </div>
        </>
    );
}

AdviserTags.propTypes = {};

export default AdviserTags;
