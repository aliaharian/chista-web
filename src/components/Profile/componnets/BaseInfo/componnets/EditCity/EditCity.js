import React, {useEffect, useState} from 'react';
import useStyles from './../styles';
import {
    Typography,
    Grid,
    IconButton,
} from "@material-ui/core";
import BorderColorIcon from '../../../../../../assets/images/pen-edit.svg';
import userCityIcon from '../../../../../../assets/images/profile/registerOstad/PinAlt.svg'
import userCityIconActive from '../../../../../../assets/images/profile/registerOstad/PinAlt.svg'
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import EditProvinceDialog from "../EditProvince/EditProvinceDialog";
import Icon from "../../../../../Icon/Icon";
import {updateInfo} from "../../../../../../../redux/user";
import {getCityList} from "../../../../../../../redux/filters";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function EditCity(props) {
    const classes = useStyles();
    const [active, setActive] = useState(false)
    const [showEdit, setShowEdit] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        props.initialize(props.initialValues)
    },[isMobile])

    function editToggle() {
        setShowEdit(!showEdit);
    }

    function submited(data) {
        props.updateInfo({cityId: (data) },function () {
        })
    }

    let submitter = props.handleSubmit((values) => submited(values));

    return (
        <>
            <EditProvinceDialog show={showEdit} handleClose={editToggle}/>
            <form onSubmit={submitter} style={{width: '100%'}}>
                <Grid container spacing={1} alignItems="flex-start" justify='space-between'
                      style={{margin: '8px 0', width: "100%"}} className={classes.profileFieldContainer}>
                    <Grid item container md={10} xs={11} className={classes.profileFieldWrapper}>
                        <Grid item>
                            <img src={active ? userCityIconActive : userCityIcon} style={{width: 24, marginTop: 16}}/>
                        </Grid>
                        <Grid item style={{width: '100%'}}>
                            <div className={classes.profileField}>
                                <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                                <Typography className={classes.profileFieldValue}>
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

EditCity.propTypes = {};

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
    {updateInfo, getCityList}
)(reduxForm({form: "updateCity", enableReinitialize: true})(EditCity));
