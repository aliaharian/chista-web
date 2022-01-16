import React, { Fragment } from "react";

import useStyles from "./Styles";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import Skeleton from "@material-ui/lab/Skeleton";
import classes from './Contacts.module.scss'

const ContactsItemSkeleton = ({ display = 'desktop', fullSize, disableChat }) => {
    // const classes = useStyles();

    return (
        <Grid container item xs={12} sm={fullSize ? 12 : 6} lg={fullSize ? 12 : 4} className={classes.contactsItemParent}>
            <div
                className={classes.contactsContactItem}
            >
                <Fragment>
                    <Grid xs={3} className={classes.contactsAvatarWrapper} style={{ marginLeft: 15 }}>

                        <Skeleton variant="rect" style={{ borderRadius: 24, backgroundColor: '#0c0b310d' }}
                            animation="wave" width={48} height={48} />

                    </Grid>
                    <Grid xs={9} className={classes.contactDataContainer}>
                        <div
                            className={clsx(
                                classes.contactItemName,
                                display === "mobile" && classes.contactItemNameMobile
                            )}
                        >
                            <div className={classes.contactDetailContainer}>
                                <Skeleton variant="rect" style={{ borderRadius: 12, backgroundColor: '#0c0b310d', marginBottom: 14 }}
                                    animation="wave" width={102} height={11} />
                                <Skeleton variant="rect" style={{ borderRadius: 12, backgroundColor: '#0c0b310d' }}
                                    animation="wave" width={48} height={11} />
                            </div>
                            <div
                                className={clsx(classes.contactStar)}
                            >
                                {!disableChat && <Skeleton className={classes.contactsRemoveRes} variant="rect"
                                    style={{ borderRadius: 5, backgroundColor: '#0c0b310d', marginLeft: 22 }}
                                    animation="wave" width={22} height={22} />}

                                <Skeleton variant="rect" style={{ borderRadius: 11, backgroundColor: '#0c0b310d', marginLeft: 8 }}
                                    animation="wave" width={11} height={24} />


                            </div>
                        </div>

                    </Grid>
                </Fragment>
            </div>
        </Grid>
    );
};

export default ContactsItemSkeleton;
