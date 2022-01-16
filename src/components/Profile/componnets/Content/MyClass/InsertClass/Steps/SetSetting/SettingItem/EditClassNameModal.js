import React, { useState, useEffect } from "react";


// import useStyles from "../../Styles";
import BlackBoard from '../../../../../../../../../assets/images/Blackboard.svg';
import ChistaInput from "../../../../../../../../../utilities/chistaInput";
import ChistaTextField from "../../../../../../../../Kit/Inputs/ChistaTextField";
import ModalLayoutWithHeader from "../../../../../../../../Kit/Layouts/ModalLayoutWithHeader";
import { Divider } from "@material-ui/core";
import classes from '../../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss';
import back from '../../../../../../../../../assets/images/arrowBack.svg';
import ChistaButton from "../../../../../../../../Kit/Buttons/ChistaButton";
import { numberFormat } from "../../../../../../../../../utilities";

const EditClassNameModal = (props) => {
    // const classes = useStyles();
    const [classNameModal, setClassNameModal] = useState(true);
    return (

        <ModalLayoutWithHeader
            openDialog={classNameModal}
            closeModal={() => props.closeModal()}
            style={{ position: 'unset' }}
        // hideBackdrop
        >

            <div className={classes.addClassHeaderWrapper}>
                <div className={classes.selectAddClassTitle}>
                    <div>
                        <img
                            src={back}
                            alt="icon"
                            style={{ marginLeft: 13, width: 17 }}
                            onClick={() => props.closeModal()}
                        />
                        <p>ویرایش نام کلاس</p>
                    </div>
                </div>
            </div>
            <Divider className={classes.divider} />

            <div className={classes.editNameModalBody}>

                <ChistaTextField
                    customClassContainer={classes.myClassNameContainer}
                    // titleClassName
                    title="نام کلاس"
                    isRequired
                    inError={props.error}
                    icon={BlackBoard}
                    errorIcon={BlackBoard}
                    onChange={(e) => props.onChangeInput(e.target.value)}
                    placeholder={'مثلا: ریاضی'}
                    inputValue={props.value}
                    minLength={process.env.REACT_APP_MIN_CLASS_NAME}
                    maxLength={process.env.REACT_APP_MAX_CLASS_NAME}
                    errorText={props.error}
                />
                <div className={classes.stepBtnContainer}>
                    <ChistaButton
                        disabled={props.value == ''}
                        customClassName={classes.disableBtn}
                        onClick={() => props.submit()}>
                        تایید
                    </ChistaButton>
                </div>
            </div>

        </ModalLayoutWithHeader>
    );
};

export default EditClassNameModal;
