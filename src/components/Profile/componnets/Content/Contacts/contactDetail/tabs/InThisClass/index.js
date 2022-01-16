import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { changeRole, memberTrack } from "../../../../../../../../../redux/userDetails";
import { Button, Grid, Typography } from "@material-ui/core";
import useStyles from '../style'
import history from '../../../../../../../../assets/images/historyIcon.svg'
import chart from '../../../../../../../../assets/images/chartIcon.svg'

import MemberTrack from "./MemberTrack";
import SessionReport from "./SessionReport";
import Summery from "./Summery";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import clsx from "clsx";
import TrackDialog from "./TrackDialog";
import ChangeRoleDialog from "./ChangeRoleDialog";
import { enqueueText, errorSnackbar } from "../../../../../../../../../redux/user";

function InThisClass(props) {
    const Dispatch = useDispatch();
    const tracksData = useSelector((state) => state.userDetails.memberTrack);
    const [tracks, setTracks] = useState()
    const [openTrackModal, setOpenTrackModal] = React.useState(false)
    const [openEditRole, setOpenEditRole] = React.useState(false)
    const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(580));
    const changeRoleResponse = useSelector((state) => state.userDetails.changeRoleResponse);
    const changeRoleLoading = useSelector((state) => state.userDetails.changeRoleLoading);
    const errorText = useSelector((state) => state.user.errorText);
    const [role, setRole] = useState(props.data.memberRoleStr)
    const [assistants, setAssistants] = useState([])
    console.log('props.id',props.id)
    useEffect(() => {
        !tracksData && Dispatch(memberTrack(props.id, 6))

        setTracks(tracksData)
    }, [tracks, tracksData])

    useEffect(() => {
        let tmp = []
        props.classData.membersInfo.map((member) => {
            if (member.roleType == process.env.REACT_APP_ASSISTANT_ROLE_TYPE) {
                tmp.push(member.id)
            }
        })
        setAssistants([...tmp])
        console.log('assistantSet', tmp)

    }, [])

    useEffect(() => {
        if (props.data && !role) {
            setRole(props.data.memberRoleStr)
        }
    }, [props.data, role])



    const handleEditRole = () => {
        setOpenEditRole(true)
        Dispatch(enqueueText(''))
    }
    const handleChangeRole = (roleType) => {
        let members = []
        if (roleType !== process.env.REACT_APP_ASSISTANT_ROLE_TYPE) {
            members.push({ id: props.id })
        } else {
            assistants.map((user) => {
                members.push({ id: user })
            })
            members.push({ id: props.id })
        }

        if (roleType == process.env.REACT_APP_ASSISTANT_ROLE_TYPE && members.length > 5) {
            Dispatch(errorSnackbar({ response: { data: { message: 'تعداد ناظر بیشتر از ۵ نفر نمی تواند باشد' } } }));
            return;
        }

        Dispatch(changeRole(members, roleType, props.groupId))
        // setOpenEditRole(false)
    }
    useEffect(() => {
        if (!changeRoleLoading && errorText === '') {
            setOpenEditRole(false)
            console.log(changeRoleResponse)
            console.log(changeRoleResponse?.members?.find((x) => x.id == props.data.id)?.memberRoleStr)
            setRole(changeRoleResponse?.members?.find((x) => x.id == props.data.id)?.memberRoleStr)
        }
        console.log(errorText)
    }, [changeRoleLoading])

    return (
        <>
            <ChangeRoleDialog errorText={errorText} open={openEditRole} closeModal={() => setOpenEditRole(false)} memberInfo={props.data}
                handleSubmit={(roleType) => handleChangeRole(roleType)} />
            {tracks?.result && openTrackModal &&
                <TrackDialog open={openTrackModal} id={props.id} closeModal={() => setOpenTrackModal(false)} />
            } <div className={classes.summeryContainer}>
                <Summery memberInfo={props.data} role={role} editRole={handleEditRole} />
            </div>
            <div className={classes.inThisClassContainer}>
                {!isMobile &&
                    <>
                        <div className={classes.trackTable}>
                            <MemberTrack tracks={tracks} setOpenTrackModal={(e) => setOpenTrackModal(e)} />
                        </div>
                        <div className={classes.SessionTable}>
                            <SessionReport tracks={tracks} />
                        </div>
                    </>
                }

                {isMobile &&
                    <div style={{ marginBottom: 114, width: '100%' }}>
                        <Button className={classes.memberTrackRes} onClick={tracks?.total > 0 ? () => {
                            setOpenTrackModal(true)
                        } : null}>
                            <div>
                                <img src={history} alt="" />
                                <Typography>تاریخچه فعالیت</Typography>
                            </div>
                            {tracks?.total > 0 ? <ChevronLeftOutlinedIcon /> : 'ندارد'}
                        </Button>
                        <Button className={clsx(classes.memberTrackRes, classes.afterNone)}>
                            <div>
                                <img src={chart} alt="" />
                                <Typography>گزارش جلسات</Typography>
                            </div>
                            <ChevronLeftOutlinedIcon />
                        </Button>
                    </div>
                }
            </div>
        </>
    )
}

export default InThisClass