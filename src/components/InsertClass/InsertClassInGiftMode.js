import { DialogContent } from '@material-ui/core';
import { connect } from 'react-redux';
import React, { useState } from 'react'
import DialogLayout from '../Profile/componnets/Content/Contacts/dialog/DialogLayout';
import useStyles from './styles';
import {authUpdateField} from "../../../redux/auth"
import GiftBox from '../../../src/assets/images/gift_box.png';
import InsertClassDialog from '../Profile/componnets/Content/MyClass/InsertClass/Dialog';

function InsertClassInGiftMode(props) {
    const classes = useStyles();
    const [inCreateClass, setInCreateClass] = useState(false);
    function handleClose() {
        props.authUpdateField({prop: "openCreateClassInGiftMode", value: false})
    }

    return (
        <div>
        {
            !props.openCreateClassInGiftMode && inCreateClass ? <InsertClassDialog intro open={props.createClassModalOpen}
            toggleOpen={() => props.authUpdateField({prop: "createClassModalOpen", value: !props.createClassModalOpen})} />
            :
            <DialogLayout
                open={props.openCreateClassInGiftMode && props.user?.packetStat == 463}
                className={{
                    root: classes.root
                }}
                noHeader={true}
                closeModal={handleClose}
                customBack
            >
                <DialogContent className={classes.loginFormContainer}>
                    <div className={classes.iconContainer}>
                        <img src={GiftBox} alt={""}/>
                    </div>
                    <p className={classes.welcomeToChista}>{`${props.user.fullName} عزیز، به چیستا خوش آمدید `}</p>
                    <p className={classes.giftDet}>بسته هدیه ایجاد کلاس و تعریف فعالیت برای شما فعال گردید</p>
                    <div className={classes.btnContainer}>
                        <button className={classes.createClassBtn} onClick={() => {props.authUpdateField({prop: "createClassModalOpen", value: true}), handleClose(), setInCreateClass(true)}}>
                            ایجاد کلاس
                        </button>
                        <button className={classes.closeBtn} onClick={handleClose}>
                            فعلا نه
                        </button>
                    </div>
                </DialogContent>
            </DialogLayout>
        }
        </div>
    )
}

const mapStateToProps = (state) => ({
    openCreateClassInGiftMode: state.auth.openCreateClassInGiftMode,
    user: state.user.user,
    createClassModalOpen: state.auth.createClassModalOpen
})

export default connect(mapStateToProps, {authUpdateField})(InsertClassInGiftMode);