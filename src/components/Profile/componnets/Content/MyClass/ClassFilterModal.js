import React, { useState, useEffect } from "react";


import ModalLayoutWithHeader from "../../../../Kit/Layouts/ModalLayoutWithHeader";
import { Divider } from "@material-ui/core";
import classes from '../../../../../assets/stylesheet/profile/myClass/createClass.module.scss';
import close from '../../../../../assets/images/close.svg';
import blackboardIcon from '../../../../../assets/images/Blackboard.svg';
import ChistaButton from "../../../../Kit/Buttons/ChistaButton";
import SingleSelectChistaDropdown from "../../../../Kit/Dropdown/SingleSelectChistaDropdown";

const ClassFilterModal = (props) => {
    // const classes = useStyles();
    return (

        <ModalLayoutWithHeader
            openDialog={props.open}
            closeModal={() => props.closeModal()}
            style={{ position: 'unset' }}
        // hideBackdrop
        >

            <div className={classes.addClassHeaderWrapper}>
                <div className={classes.selectAddClassTitle}>
                    <div>
                        <img
                            src={close}
                            alt="icon"
                            style={{ marginLeft: 13, width: 17 }}
                            onClick={() => props.closeModal()}
                        />
                        <p>نمایش وضعیت کلاس ها</p>
                    </div>
                </div>
            </div>
            <Divider className={classes.divider} />

            <div className={classes.editNameModalBody}>

                <SingleSelectChistaDropdown
                    icon={blackboardIcon}
                    title={'نمایش وضعیت کلاس ها'}
                    options={[
                        {
                            title: `همه`,
                            value: `all`
                        },
                        {
                            title: `فعال`,
                            value: `true`
                        },
                        {
                            title: `غیر فعال`,
                            value: `false`
                        },
                        // {
                        //     title: `شروع نشده`,
                        //     value: `notStarted`
                        // },
                    ]}
                    selectedValue={props.classFilter}
                    // customClassRoot={classes.filterDropdown}

                    handleChange={(e) => {
                        props.changeClassFilter(e)
                        // debouncedFunction({ q: props.searchText, active: e.target.value })
                    }}
                    customSize={170}
                    dropdownCustomContainer={classes.filterClassesDropDown}
                />
                <div className={classes.stepBtnContainer}>
                    <ChistaButton
                        // customClassName={classes.disableBtn}
                        onClick={() => props.submit()}>
                        تایید
                    </ChistaButton>
                </div>
            </div>

        </ModalLayoutWithHeader>
    );
};

export default ClassFilterModal;
