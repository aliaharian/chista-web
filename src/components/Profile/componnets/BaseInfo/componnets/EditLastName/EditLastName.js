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
    Dialog, Slide, Input, useTheme
} from "@material-ui/core";
import BorderColorIcon from '../../../../../../assets/images/pen-edit.svg';
import userProfileIcon from '../../../../../../assets/images/profile/registerOstad/User.svg'
import userProfileIconActive from '../../../../../../assets/images/profile/registerOstad/User.svg'
import numberFormat from "../../../../../../utilities/numberFormat";
import {Field, reduxForm} from "redux-form";
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from "react-redux";
import Icon from "../../../../../Icon/Icon";
import {updateInfo} from "../../../../../../../redux/user";


function EditLastName(props) {
    const classes = useStyles();
    const inputRef = useRef(null);
    const theme = useTheme();
    const [active, setActive] = useState(false)
    const [showEdit, setShowEdit] = useState(false);
    const [value, setValue] = useState(props.value);


    function editToggle(response) {
        setShowEdit(!showEdit);
        if (!showEdit) {
            setTimeout(() => {
                inputRef.current.focus()
            }, 100);
        }
        // else {
        //     inputRef.current.blur()
        // }
    }

    function closeEdit() {
        setShowEdit(false);
    }

    function submited() {
        let data= {
            firstName:props.user.firstName,
            lastName:inputRef.current.value
        }
        props.updateInfo(data, function (response) {
            editToggle()
        })
    }

    return (

        <>
            <Grid container spacing={1} alignItems="flex-start" justify='space-between'
                  style={{margin: '8px 0', width: "100%"}} className={classes.profileFieldContainer}>
                <Grid item container md={10} xs={11} className={classes.profileFieldWrapper}>
                    <Grid item>
                        <img src={active ? userProfileIconActive : userProfileIcon} style={{width: 24 , marginTop:16}}/>
                    </Grid>
                    <Grid item>
                        <div className={classes.profileField}>
                            <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                            <Typography className={classes.profileFieldValue}>
                                {showEdit?<Input
                                    inputRef={inputRef}
                                    disabled={!showEdit}
                                    disableUnderline
                                    autoFocus
                                    className={classes.EditInput}
                                    value={value}
                                    minLength={2}
                                    maxLength={30}
                                    onChange={(e) => setValue(numberFormat.toPersianDigits(e.target.value))}
                                    defaultValue={numberFormat.toPersianDigits(props.value)}/>
                                :
                                    <div className={classes.inputValue}>

                                        {props.initialValues.lastName}
                                    </div>
                                }
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid item md={2} xs={1}>

                    {!showEdit && <IconButton aria-label="edit" onMouseEnter={() => {
                        setActive(true)
                    }} onMouseLeave={() => {
                        setActive(false)
                    }} className={classes.editButton} onClick={editToggle}>
                        <Icon src={BorderColorIcon} style={{width: 20, height: 20}}/>
                    </IconButton>}

                    {showEdit &&
                    <div className={classes.editButton}>


                        <IconButton aria-label="edit" onMouseEnter={() => {
                            setActive(true)
                        }} onMouseLeave={() => {
                            setActive(false)
                        }} style={{borderRadius: "25%", width: "26px", height: "26px" , border:'1px solid #657686'}} className={classes.closeIcon} onClick={editToggle}>
                            <CloseIcon style={{width: 20, height: 20}}/>
                        </IconButton>

                        <IconButton aria-label="edit" onMouseEnter={() => {
                            setActive(true)
                        }} onMouseLeave={() => {
                            setActive(false)
                        }} style={{borderRadius: "25%", width: "26px", height: "26px" , border:'1px solid #3f53d9' , marginRight:7}} onClick={submited}>
                            <DoneIcon style={{width: 20, height: 20 , color:theme.buttonColor.normal}}/>
                        </IconButton>
                    </div>

                    }


                </Grid>
            </Grid>
        </>
    );
}

EditLastName.propTypes = {};
const mapStateToProps = (state) => {

    const user = state.user.user;

    return {
        user: state.user.user,
        initialValues: user

    }
}

export default connect(
    mapStateToProps,
    { updateInfo }
)(EditLastName);

