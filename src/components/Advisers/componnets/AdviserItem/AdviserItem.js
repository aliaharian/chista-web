import React from 'react';
import useStyles from './styles';
import { Typography, Grid } from "@material-ui/core";
import rateIcon from '../../../../assets/images/Favorite.svg';
import emptyRateIcon from '../../../../assets/images/favorite-empty.svg';
import { numberFormat } from "../../../../utilities";
import ProfileAvatar from "../../../ProfileAvatar/ProfileAvatar";
import Link from "../../../Link/Link";
import { transform } from "../../../../utilities";

function AdviserItem(props) {
    const classes = useStyles();
    return (
        <Link href='/adviser/[id]' as={'/adviser/' + props.item.id} className={classes.itemLink}>
            <Grid spacing={0} className={classes.itemTop} xs={12}>
                <Grid className={classes.avatarWrapper} xs={3} sm={3} md={3} lg={4}>
                    <ProfileAvatar user={props.item} variant="circle" avatar={classes.avatar}
                        status={classes.status + " " + transform.parseStatus(props.item.state, classes)}
                        avatarContainer={classes.avatarContainer}/>
                </Grid>

                <Grid className={classes.itemDetail} xs={9} sm={9} md={9} lg={8}>
                    <div className={classes.itemDetailTop} >
                        <div className={classes.titleContainer}><Typography className={classes.adviserTitle}>{props.item.fullName}</Typography></div>

                        <div className={classes.rateBox}>
                            {props.item.score > 0 &&<div className={classes.rateTextContainer}>
                                <Typography className={classes.rateText}>{numberFormat.toPersianDigits(props.item.score)}</Typography>
                            </div>}
                            <div className={classes.rateContainer}>
                                <img src={props.item.score > 0 ? rateIcon : emptyRateIcon} className={classes.rate} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.itemDetailBottom}>
                        <Typography className={classes.subtitle}>{props.item.intro}</Typography>
                    </div>
                </Grid>
            </Grid>
        </Link>
    );
}

export default AdviserItem;