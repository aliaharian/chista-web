import React, { useState, Fragment } from "react";
import classes from "../../../../../assets/stylesheet/profile/myClass/myClassSkeleton.module.scss"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
    Button,
    Divider,
    Grid,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    useTheme
} from "@material-ui/core";
import clsx from "clsx";
import NextLink from "next/link";
import Link from "../../../../Link/Link";
import Skeleton from "@material-ui/lab/Skeleton";

const ClassItemSkeleton = ({ myClass, checkOwner, spacing }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(480));
    return (

        <div
            className={classes.classItemWrapper}>
            <div>
                <NextLink href={`#`}>
                    <div className={classes.cardBody}>
                        <div className={classes.groupInfoContainer}>
                            <div className={classes.groupAvatarContainer}>
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
                            <div className={classes.groupActions}>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className={classes.groupMembers}>
                            <div>
                                <Skeleton variant="rect" style={{
                                    borderRadius: 12,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    animation="wave" width={48} height={11} />
                            </div>
                            <div className={classes.memberAvatar}>

                                {/* <div
                                    className={clsx(
                                        classes.enterClass
                                    )}
                                > */}
                                    <Skeleton variant="rect" style={{
                                        borderRadius: 20,
                                        backgroundColor: '#0c0b310d',
                                        marginLeft:20
                                    }}
                                        animation="wave" width={35} height={11} />
                                {/* </div> */}
                                <div
                                    className={clsx(
                                        classes.enterClass
                                    )}
                                >
                                    <Skeleton variant="rect" style={{
                                        borderRadius: 20,
                                        backgroundColor: '#0c0b310d'
                                    }}
                                        animation="wave" width={35} height={11} />
                                </div>


                            </div>

                        </div>
                    </div>
                </NextLink>

            </div>
        </div>

    );
};

export default ClassItemSkeleton;
