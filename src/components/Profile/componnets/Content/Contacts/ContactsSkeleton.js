import React, { Fragment} from "react";

import useStyles from "./Styles";
import {Grid} from "@material-ui/core";
import clsx from "clsx";
import Skeleton from "@material-ui/lab/Skeleton";
import ContactsItemSkeleton from "./ContactsItemSkeleton";
import classes from './Contacts.module.scss';

const ContactsSkeleton = ({display = 'desktop'}) => {
    // const classes = useStyles();

    // const renderAlphabet = () => {
    //     let alphabet =[]
    //     for (let i = 0; i < 25; i++) {
    //          alphabet.push(
    //             <li>
    //                 <Skeleton variant="rect" style={{borderRadius: 5, backgroundColor: '#0c0b310d'}}
    //                           animation="wave" width={22} height={22}/>
    //             </li>
    //         )
    //     }
    //     return alphabet
    // }
    const contactItem = () => {
        let contactItem =[]
        for (let i = 0; i < 30; i++) {
            contactItem.push(
                 <ContactsItemSkeleton />
            )
        }
        return contactItem
    }
    return (
        <>


            <Grid className={classes.contactsMainWrapper}>

                <div className={classes.contactsActions}>
                    <div
                        className={clsx(
                            classes.contactsSearch,
                            classes.contactsSearchExpand
                        )}
                    >
                        <div className={classes.contactsSearchFormSkeleton}>
                            <Skeleton variant="rect" style={{borderRadius: 12, backgroundColor: '#0c0b310d'}}
                                      animation="wave" width={75} height={11}/>
                            <Skeleton variant="rect" style={{borderRadius: 5, backgroundColor: '#0c0b310d'}}
                                      animation="wave" width={22} height={22}/>

                        </div>
                    </div>
                    <div
                        className={classes.contactsSkeletonAddContact}

                    >
                        <div className={classes.contactsResBreadcumbSkeleton}>
                            <Skeleton variant="rect" style={{borderRadius: 5, backgroundColor: '#0c0b310d'}}
                                      animation="wave" width={18} height={18}/>
                            <Skeleton variant="rect" style={{borderRadius: 12, backgroundColor: '#0c0b310d'}}
                                      animation="wave" width={75} height={11}/>
                        </div>

                        <div style={
                            {
                                width: 110,
                                height: 40,
                                backgroundColor: '#0c0b310d',
                                display: 'flex',
                                borderRadius: 24,
                                padding: '0 24px',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }
                        }>
                            {/*<Skeleton variant="rect" style={{borderRadius: 5, backgroundColor: '#0c0b310d'}}*/}
                            {/*          animation="wave" width={18} height={18}/>*/}
                            <Skeleton variant="rect" style={{borderRadius: 12, backgroundColor: '#0c0b310d'}}
                                      animation="wave" width={75} height={11}/>
                        </div>
                    </div>
                </div>


                <Grid className={classes.contactsWrapper}>
                    {/* <Grid>
                        <ul className={classes.alphabetList}>
                            {renderAlphabet()}

                        </ul>

                    </Grid> */}
                    <Grid>

                            <Grid container spacing={3}>
                                {contactItem()}

                            </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </>
    );
};

export default ContactsSkeleton;
