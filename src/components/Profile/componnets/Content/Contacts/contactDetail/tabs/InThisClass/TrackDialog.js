import DialogLayout from "../../../dialog/DialogLayout";

import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useRef, useState } from "react";
import { memberTrack } from "../../../../../../../../../redux/userDetails";
import { useDispatch, useSelector } from "react-redux";
import MemberTrack from "./MemberTrack";
import MemberTrackItem from "./MemberTrackItem";
import useStyles from './../style'
import { Scrollbars } from "react-custom-scrollbars";
import { Button } from "@material-ui/core";
import clsx from "clsx";

const TrackDialog = (props) => {
    const tracks = useSelector((state) => state.userDetails.memberTrack);
    const Dispatch = useDispatch();
    const classes = useStyles()
    const addContactScroll = useRef();

    const [addListShadow, setAddListShadow] = useState('none');

    const handleScroll = () => {
        if (addContactScroll.current.viewScrollTop < 5) {
            setAddListShadow('none')
        } else {
            setAddListShadow('0 3px 6px #00053412')
        }
    }
    console.log(tracks)
    return (
        <DialogLayout
            open={props.open}
            closeModal={props.closeModal}
            title={`تاریخچه فعالیت`}
            withCloseIcon
            style={{ height: '100%', padding: '0 0 15px 0', overflow: 'scroll', marginBottom: '-34px' }}
            headerClass={classes.trackDialogHeader}
            headerStyle={{ boxShadow: addListShadow }}
            id={'scrollDiv'}
        >

            {tracks &&
                // <Scrollbars id={`scrollDiv`} className={classes.scrollBars} onScroll={handleScroll} ref={addContactScroll}>
                    <InfiniteScroll
                    style={{overflow: 'visible', hht: '400px'}}
                    dataLength={tracks.result?.length}
                    onScroll={() => {
                        console.log('scrolled')
                    }}
                    // scrollThreshold={0.5}
                    scrollableTarget={`scrollDiv`}
                    next={() => {
                        console.log('vdvdvddv')
                        Dispatch(
                            memberTrack(
                                props.id,
                                6,
                                tracks.offset + 1
                            )
                        )
                    }
                    }
                    hasMore={(tracks?.offset + 1) * tracks?.max < tracks?.total}

                    loader={<p style={{textAlign: "center"}}>...</p>}
                >

                    <div>
                        {
                            tracks.result?.map((track) => (
                                <MemberTrackItem track={track} style={{ margin: '0 35px' }} />
                            ))
                        }
                    </div>
                    </InfiniteScroll>
                //     {(tracks?.offset + 1) * tracks?.max < tracks?.total &&
                //         <Button
                //             className={clsx(
                //                 classes.statusWrapper,
                //                 classes.statusWrapperActive
                //             )}
                //             style={{ margin: '45px auto' }}
                //             // href="/profile/dashboard/myClass/insertClass"
                //             onClick={() => {
                //                 Dispatch(
                //                     memberTrack(
                //                         props.id,
                //                         5,
                //                         tracks.offset + 1
                //                     )
                //                 )
                //             }}
                //         >
                //             {/*<AddCircleOutlineIcon/>*/}
                //             <span>مشاهده بیشتر</span>
                //         </Button>}
                // </Scrollbars>

            }
        </DialogLayout>
    )
};
export default TrackDialog