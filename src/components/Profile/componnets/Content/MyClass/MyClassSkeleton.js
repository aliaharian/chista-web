import React, { Fragment } from "react";
import classes from "../../../../../assets/stylesheet/profile/myClass/myClassSkeleton.module.scss"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
    Paper,
    Table,
    TableContainer,
    useTheme
} from "@material-ui/core";
import clsx from "clsx";
import Skeleton from "@material-ui/lab/Skeleton";
import ClassItemSkeleton from "./ClassItemSkeleton";

const MyClassSkeleton = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(480));
    return (
        <div>
            <Fragment>
                {isMobile ?
                    <>
                        <div className={classes.actionsRes}>
                            <div>
                                <Skeleton variant="rect" style={{
                                    borderRadius: 5,
                                    backgroundColor: '#0c0b310d',
                                    marginLeft: 8
                                }}
                                    animation="wave" width={22} height={22} />
                                <Skeleton variant="rect" style={{
                                    borderRadius: 12,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    animation="wave" width={75} height={11} />

                            </div>
                            <div>
                                <Skeleton variant="rect" style={{
                                    borderRadius: 12,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    animation="wave" width={54} height={11} />
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 30
                        }}>
                            <div
                                className={clsx(
                                    classes.search,
                                    classes.searchExpandMobile
                                )}
                            >

                                <Skeleton variant="rect" style={{
                                    borderRadius: 12,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    animation="wave" width={75} height={11} />

                                <Skeleton variant="rect" style={{
                                    borderRadius: 5,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    className={classes.searchIcon}
                                    animation="wave" width={22} height={22} />


                            </div>
                            <div style={{
                                maxWidth: 40,
                                minWidth: 40,
                                height: 40,
                                border: '1px solid ' + theme.textColor.border,
                                borderRadius: 8,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Skeleton variant="rect" style={{
                                    borderRadius: 8,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    animation="wave" width={21} height={21} />

                            </div>
                        </div>
                    </>


                    :
                    <div className={classes.actions}>
                        <div>
                            <div
                                className={clsx(
                                    classes.search,
                                    classes.searchExpand
                                )}
                            >

                                <Skeleton variant="rect" style={{
                                    borderRadius: 12,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    animation="wave" width={75} height={11} />

                                <Skeleton variant="rect" style={{
                                    borderRadius: 5,
                                    backgroundColor: '#0c0b310d'
                                }}
                                    className={classes.searchIcon}
                                    animation="wave" width={22} height={22} />


                            </div>
                            <div className={classes.classFilterSkeleton}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Skeleton variant="rect" style={{
                                        borderRadius: 12,
                                        backgroundColor: '#0c0b310d'
                                    }}
                                        animation="wave" width={82} height={11} />

                                </div>
                                <div>
                                    <Skeleton variant="rect" style={{
                                        borderRadius: 5,
                                        backgroundColor: '#0c0b310d'
                                    }}
                                        animation="wave" width={22} height={22} />
                                </div>
                            </div>
                        </div>
                        <div
                            className={clsx(
                                classes.addClass
                            )}
                        >
                            <Skeleton variant="rect" style={{
                                borderRadius: 20,
                                backgroundColor: '#0c0b310d'
                            }}
                                animation="wave" width={60} height={11} />
                        </div>
                    </div>}
                <div>
                    <TableContainer component={Paper} className={classes.myClassDesktop}>
                        <Table>
                            <div container className={classes.skeletonMyClassesMainContainer}>
                                <ClassItemSkeleton />
                                <ClassItemSkeleton />
                                <ClassItemSkeleton />
                                <ClassItemSkeleton />
                                <ClassItemSkeleton />
                                <ClassItemSkeleton />
                                <ClassItemSkeleton />
                                <ClassItemSkeleton />
                                <ClassItemSkeleton />
                            </div>

                        </Table>
                    </TableContainer>
                </div>


            </Fragment>

        </div>
    );
};

export default MyClassSkeleton;
