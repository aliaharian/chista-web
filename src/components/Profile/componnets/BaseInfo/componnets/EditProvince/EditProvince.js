import React, {useEffect, useRef, useState} from 'react';
import useStyles from './../styles';
import {
    Typography,
    Grid,
    TextField,
    IconButton,
    Button,
    DialogContent,
    CircularProgress,
    Dialog, Slide
} from "@material-ui/core";
import BorderColorIcon from '../../../../../../assets/images/pen-edit.svg';
import userProvinceIcon from '../../../../../../assets/images/profile/registerOstad/Pin.svg'
import userProvinceIconActive from '../../../../../../assets/images/profile/registerOstad/Pin.svg'
import numberFormat from "../../../../../../utilities/numberFormat";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import EditProvinceDialog from "./EditProvinceDialog";
import Icon from "../../../../../Icon/Icon";
import {updateInfo} from "../../../../../../../redux/user";
import {getCityList, getProvinceList} from "../../../../../../../redux/filters";
import {Select} from "../../../../../form";
import {required} from "../../../../../../utilities";
import AdviserProfileSelect from "../../../../../form/AdviserProfileSelect";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


function EditProvince(props) {
    const classes = useStyles();
    const [active, setActive] = useState(false)
    const [showEdit, setShowEdit] = useState(false);
    const [provinceListProp, setProvinceListProp] = useState([]);


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(()=>{
        props.initialize(props.initialValues)
    },[isMobile])

    // useEffect(() => {
    //
    //     if (!props.provinceList) {
    //         props.getProvinceList();
    //     }
    //     props.getCityList(props.initialValues.provinceId);
    //
    // }, [])

    useEffect(() => {

        if (props.list.filters.provinceList!==null) {
            setProvinceListProp(props.list.filters.provinceList)
        }

    }, [props.list.filters.provinceListLoad])



    function editToggle() {
        setShowEdit(!showEdit);
    }




    function submited(data) {
        props.updateInfo(data,function () {
        })

    }

    let submitter = props.handleSubmit((values) => submited(values));

    return (

        <>
            <EditProvinceDialog show={showEdit} handleClose={()=>setShowEdit(false)}/>
            <form onSubmit={submitter} style={{width: '100%'}}>

                <Grid container spacing={1} justify='space-between' alignItems="flex-start"
                      style={{margin: '8px 0', width: "100%"}} className={classes.profileFieldContainer}>
                    <Grid item container md={10} xs={11} className={classes.profileFieldWrapper}>
                        <Grid item>
                            <img src={active ? userProvinceIconActive : userProvinceIcon}
                                 style={{width: 24, marginTop: 16}}/>
                        </Grid>
                        <Grid item  style={{width:'100%'}}>
                            <div className={classes.profileField}>
                                <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                                <Typography className={classes.profileFieldValue}>
                                    {/*<Field*/}
                                    {/*    name='provinceId'*/}
                                    {/*    label="استان"*/}
                                    {/*    component={AdviserProfileSelect}*/}
                                    {/*    options={provinceListProp.map((item) => ({ label: item.name, value: item.id }))}*/}
                                    {/*    validate={[required]}*/}
                                    {/*    onChange={(e) => { props.getCityList(e.target.value);editToggle()  }}*/}
                                    {/*//    {...{*/}
                                    {/*    //    open:showEdit,*/}
                                    {/*      //  closeSelectProp:()=>setShowEdit(false)*/}
                                    {/*   // }}*/}
                                    {/*/>*/}
                                    <p style={{margin:0}}>{props.value}</p>

                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item md={2} xs={1}>
                        <IconButton aria-label="edit" onMouseEnter={() => {
                            setActive(true)
                        }} onMouseLeave={() => {
                            setActive(false)
                        }} className={classes.editButton} onClick={editToggle}>
                            <Icon src={BorderColorIcon} style={{width: 20, height: 20}}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

EditProvince.propTypes = {};



const mapStateToProps = (state) => {

    const user = state.user.adviser

    return {
        list:state,
        adviser: state.user.adviser,
        initialValues: user
    }
}

export default connect(
    mapStateToProps,
    {updateInfo , getProvinceList , getCityList}
)(reduxForm({form: "updateProvince", enableReinitialize: true})(EditProvince));

