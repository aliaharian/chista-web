import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../../../../../../../assets/stylesheet/profile/myClass/changeRoleModal.module.scss"
import { Divider } from "@material-ui/core";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { enqueueText } from "../../../../../../../../../redux/user";
import ModalLayoutWithHeader from "../../../../../../../Kit/Layouts/ModalLayoutWithHeader";
import close from "../../../../../../../../assets/images/close.svg";
import ChistaButton from '../../../../../../../Kit/Buttons/ChistaButton'
import SingleSelectChistaDropdown from "../../../../../../../Kit/Dropdown/SingleSelectChistaDropdown";
const ChangeRoleDialog = (props) => {
    const tracks = useSelector((state) => state.userDetails.memberTrack);
    const Dispatch = useDispatch();
    // const classes = useStyles()
    const [memberRoleType, setMemberRoleType] = useState(props.memberInfo?.memberRoleType || process.env.REACT_APP_MEMBER_ROLE_TYPE)
    const theme = useTheme();
    return (
        <ModalLayoutWithHeader
            openDialog={props.open}
            closeModal={() => {
                props.closeModal()
                setMemberRoleType(props.memberInfo?.memberRoleType || process.env.REACT_APP_MEMBER_ROLE_TYPE)
            }}
            style={{ position: 'unset' }}
        >
            <div className={classes.shareModalHeaderWrapper}>
                <div className={classes.shareModalTitle}>
                    <div>

                        <img
                            src={close}
                            alt="icon"
                            style={{ marginLeft: 13, width: 17 }}
                            onClick={() => {
                                props.closeModal()
                                setMemberRoleType(props.memberInfo?.memberRoleType || process.env.REACT_APP_MEMBER_ROLE_TYPE)
                            }}
                        />
                        <p>ویرایش نقش</p>
                    </div>

                </div>
            </div>
            <Divider className={classes.divider} />
            <div className={clsx(classes.selectRoleContainer)}>
                <SingleSelectChistaDropdown

                    options={[
                        {
                            title: 'استاد',
                            value: process.env.REACT_APP_OSTAD_ROLE_TYPE
                        },
                        {
                            title: 'ناظر',
                            value: process.env.REACT_APP_ASSISTANT_ROLE_TYPE
                        },
                        {
                            title: 'شرکت کننده',
                            value: process.env.REACT_APP_MEMBER_ROLE_TYPE
                        },
                    ]}
                    title="نقش در کلاس"
                    selectedValue={memberRoleType}
                    isRequired
                    handleChange={(e) => {
                        Dispatch(enqueueText(''))
                        setMemberRoleType(e.target.value)
                    }}
                />
               
            </div>
            <div className={classes.nextBtn}>
                <ChistaButton onClick={() => props.handleSubmit(memberRoleType)}>
                    تایید
                </ChistaButton>
            </div>

        </ModalLayoutWithHeader>
    )
};
export default ChangeRoleDialog