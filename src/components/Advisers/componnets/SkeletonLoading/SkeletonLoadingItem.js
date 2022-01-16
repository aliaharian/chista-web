import React from 'react';
import useStyles from './styles';
import {Grid, Divider} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

function SkeletonLoadingItem() {
    const classes = useStyles();
    return (
        <Grid container justify="space-between" className={classes.itemRoot}>
            <div className={classes.itemTop}>
                <Skeleton variant="circle" animation="wave" width={82} height={82}/>
                <div className={classes.itemDetailRoot}>
                    <div className={classes.itemDetailTop}>
                        <Skeleton variant="text" animation="wave" width={127} height={12}/>
                        <Skeleton variant="text" width={46} height={12}/>
                    </div>
                    <div className={classes.itemDetailBottom}>
                        <Skeleton variant="text" animation="wave" width={"100%"} height={12}/>

                    </div>
                </div>
            </div>
            <Divider orientation="horizontal" className={classes.divider}/>
            <div className={classes.itemBottom}>
                <div className={classes.itemBottomRight}>
                    <Skeleton variant="text" animation="wave" width={76} height={12}/>
                </div>
                <div className={classes.itemBottomLeft}>
                    <Skeleton variant="text" animation="wave" width={71} height={12}/>
                    <Skeleton variant="text" animation="wave" width={65} height={12}/>
                </div>
            </div>
        </Grid>
    );
}

SkeletonLoadingItem.propTypes = {};

export default SkeletonLoadingItem;