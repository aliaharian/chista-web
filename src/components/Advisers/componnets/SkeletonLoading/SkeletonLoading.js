import React from 'react';
import useStyles from './styles';
import {Grid} from "@material-ui/core";
import SkeletonLoadingItem from "./SkeletonLoadingItem";

function SkeletonLoading({count = 9 ,sm=6 ,xs=12 ,md=4, lg=4 , style}) {
    const classes = useStyles();

    function renderSkeletons()
    {
        let items=[];
        for(let i=0;i<count;i++)
        {
            items.push(<Grid style={style||{}} item sm={sm} xs={xs} md={md} lg={lg} className={classes.sklItem} key={i}><SkeletonLoadingItem/></Grid>);
        }
        return  items;
    }
    return (
        <Grid container spaceing={0} justify="flex-start" className={classes.root}>
            {renderSkeletons()}
        </Grid>
    );
}

SkeletonLoading.propTypes = {};

export default SkeletonLoading;