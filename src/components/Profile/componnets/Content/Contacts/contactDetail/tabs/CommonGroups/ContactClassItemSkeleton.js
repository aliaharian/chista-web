import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
    Grid,
    useTheme
} from "@material-ui/core";
import NextLink from "next/link";
import Link from "../../../../../../../Link/Link";
import Skeleton from "@material-ui/lab/Skeleton";
import classes from '../ContactDetailTabs.module.scss'
const ContactClassItemSkeleton = ({ spacing }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={spacing ? { padding: `0 ${spacing}px ${isMobile ? 26 : 24}px ${spacing}px` } : { padding: `0 12px 24px 12px` }}
            className={classes.contactDetailClassItemWrapper}>
            <div>
                <NextLink href={`#`}>
                    <div className={classes.contactDetailClassItemCardBody} style={{width:'100%'}}>
                        <div className={classes.contactDetailGroupInfoContainer}>
                            <div className={classes.contactDetailGroupAvatarContainer}>
                                <Link href={`#`}>
                                    <Skeleton variant="rect" style={{
                                        borderRadius: 24,
                                        backgroundColor: '#0c0b310d'
                                    }}
                                        animation="wave" width={48} height={48} />
                                </Link>
                                <div className={classes.groupName}>
                                    <Skeleton variant="rect" style={{
                                        borderRadius: 12,
                                        backgroundColor: '#0c0b310d',
                                        marginBottom: 14
                                    }}
                                        animation="wave" width={102} height={11} />
                                    <Skeleton variant="rect" style={{
                                        borderRadius: 12,
                                        backgroundColor: '#0c0b310d'
                                    }}
                                        animation="wave" width={48} height={11} />
                                </div>
                            </div>
                            <div className={classes.contactDetailGroupActions}>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className={classes.contactDetailGroupMembers} style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                            <div className={classes.contactDetailMemberCnt}>
                                <Skeleton variant="rect" style={{
                                    borderRadius: 12,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    animation="wave" width={48} height={11} />
                            </div>
                            <div className={classes.contactDetailActionClass}>

                                    <Skeleton variant="rect" style={{
                                        borderRadius: 14,
                                        backgroundColor: '#0c0b310d'
                                    }}
                                        animation="wave" width={67} height={28} />

                            </div>
                        </div>
                    </div>
                </NextLink>

            </div>
        </Grid>

    );
};

export default ContactClassItemSkeleton;
