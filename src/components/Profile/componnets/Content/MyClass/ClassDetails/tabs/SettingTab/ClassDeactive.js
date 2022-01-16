import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Grid, Switch} from "@material-ui/core";
import axios from "axios";
import clsx from "clsx";

import {loadClassDetails} from "../../../../../../../../../redux/adviserDashboard";

import useStyles from "./Styles";
import Switch2 from "../../../../../../../form/Switch";
import forbidden from '../../../../../../../../assets/images/forbidden.svg'
import DeactiveModal from "./DeactiveModal";
import {errorSnackbar} from "../../../../../../../../../redux/user";
import Style from '../../../../../../../../assets/stylesheet/profile/myClass/myClasses.module.scss';
const ClassDeactive = ({data}) => {
    const classes = useStyles();
    const Dispatch = useDispatch();
    const [state, setState] = useState(!data.active);
    const [showModal, setShowModal] = useState(false);

    const handleChange = async (e) => {
        if (data.myRights.includes("CRR_GROUP_ACTIVE") && data.active) {
            // setState(e.target.checked);
            try {
                const response = await axios(`group/deactivate?id=${data.id}`);
                console.log("response:", response.data);
                Dispatch(loadClassDetails(response.data));
            } catch (err) {
                Dispatch(errorSnackbar(err));

                console.log("err", err);
            }
        } else {
            console.log('unauthorized')
        }
    };

    console.log("state:", state);

    return (
        <>
            <DeactiveModal
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                handelSubmit={() => handleChange()}
            />
            <div className={Style.myClassSettingContainer} onClick={()=>setShowModal(!showModal)} style={{cursor: 'pointer'}}>
                <div className={clsx(classes.settingItem)}>
                    <img src={forbidden} alt=""/>
                    <div className={classes.settingInput}>
                        <span style={{color:'#ff6575'}}>غیر فعال سازی کلاس</span>
                    </div>
                    {/*<Switch2*/}
                    {/*    // label={`غیر فعال سازی کلاس`}*/}
                    {/*    checked={state}*/}
                    {/*    value={state}*/}
                    {/*    disabled={state || !data.myRights.includes("CRR_GROUP_ACTIVE")}*/}
                    {/*    onChange={() => setShowModal(!showModal)}*/}
                    {/*    color="primary"*/}
                    {/*    name="deactivate"*/}
                    {/*    inputProps={{"aria-label": "primary checkbox"}}*/}
                    {/*/>*/}

                </div>
            </div>
        </>
    );
};

export default ClassDeactive;
