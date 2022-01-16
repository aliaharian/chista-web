import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { commonGroups } from "../../../../../../../../../redux/userDetails";
import { Grid } from '@material-ui/core'
// import ClassItem from "./ClassItem";
// import useStyles from "../style";
import noData from '../../../../../../../../assets/images/BlackboardPink.svg'

import ContactClassItemSkeleton from "./ContactClassItemSkeleton";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import InfiniteScroll from 'react-infinite-scroll-component';
import classes from '../ContactDetailTabs.module.scss';
import ContactDetailClassItem from './ContactDetailClassItem';
function CommonGroups({ data }) {
    const Dispatch = useDispatch()
    // const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    let commonClasses = useSelector(
        (state) => state.userDetails.commonGroups
    );

    React.useEffect(() => {
        if ((!commonClasses && (data.userId))) {
            Dispatch(commonGroups(data.userId))
        } else if ((!commonClasses && (data.chatUserId))) {
            Dispatch(commonGroups(data.chatUserId, 0, 10, true))
        }

    }, [commonClasses, data])

    console.log('con', commonClasses)
    return (

        <div className={classes.commonGroupsContainer}>
                  {
                    !commonClasses ?
                        <>

                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                            <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                        </>
                        :
                        // <></>
                        <InfiniteScroll
                            dataLength={commonClasses?.result?.length}

                            // scrollThreshold={0.5}
                            next={() => {
                                if (data.userId) {
                                    Dispatch(commonGroups(data.userId, commonClasses.offset + 1))
                                } else if (data.chatUserId) {
                                    Dispatch(commonGroups(data.chatUserId, commonClasses.offset + 1, 10, true))
                                }
                            }
                            }
                            hasMore={(commonClasses?.offset + 1) * commonClasses?.max < commonClasses?.total}

                            loader={
                                <Grid container style={{ width: !commonClasses ? '101%' : '100%' }}>
                                    <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                                    <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                                    <ContactClassItemSkeleton spacing={isMobile ? 1 : 0} />
                                </Grid>
                            }
                        >
                                {commonClasses.result.map((common) => (
                                    <ContactDetailClassItem spacing={isMobile ? 1 : 0} data={common} />
                                ))}
                        </InfiniteScroll>

                } 
                {
                    commonClasses?.total === 0 &&
                    <div className={classes.commonGroupsNoData}>
                        <img src={noData} alt="no data" />
                        <p style={{ fontSize: 13, marginTop: 40, marginBottom: 47 }}>
                            شما  در هیچ کلاس مشترکی حضور ندارید

                        </p>
                    </div>
                }
        </div>
    )
}

export default CommonGroups