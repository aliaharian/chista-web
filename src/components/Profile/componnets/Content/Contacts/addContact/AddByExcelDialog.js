import DialogLayout from "../contactDialogLayout/ContactDialogLayout";
import React, { useCallback } from "react";
import {
    Button,
} from "@material-ui/core";
// import useStyles from "./Styles";
import classes from './AddContact.module.scss'
import { isPhone, numberFormat, required, transform } from "../../../../../../utilities";
import clsx from "clsx";
import { DropzoneArea } from "material-ui-dropzone";
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import { useTheme, withStyles } from "@material-ui/core/styles";
import excelIcon from '../../../../../../assets/images/excelIcon.svg'
import FileIcon from '../../../../../../assets/images/FileIcon'
import SuccessIcon from '../../../../../../assets/images/successIcon'
import LinearProgress from '@material-ui/core/LinearProgress';
import CloseIcon from '@material-ui/icons/Close';
import { useSnackbar } from "notistack";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from "axios";

const dropZoneIcon = () => (
    <div>
        <FileIcon viewBox="0 0 50 50" />
    </div>
)
const dropZoneSuccessIcon = () => (
    <div>
        <SuccessIcon viewBox="0 0 37 37"/>
    </div>
)

const AddByExcelDialog = (props) => {
    // const classes = useStyles();
    const [excelFile, setExcelFile] = React.useState();
    const [progressValue, setProgressValue] = React.useState(100);
    const { enqueueSnackbar } = useSnackbar();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const StyledDropZone = withStyles((theme) => ({
        root: {
            height: 220,
            minHeight: 220,
            marginTop: 34,
            [theme.breakpoints.down(1800)]: {
                minHeight: 182,
                height: 182,
                padding: '30px 65px',
            },
            [theme.breakpoints.down(480)]: {
                padding: '22px 35px',
                minHeight: 100,
                height: 'calc((100vw - 48px)*0.567)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            backgroundColor: 
            // excelFile ? theme.textColor.fivePercent : 
            'rgba(63,83,217,0.05)',
            // borderColor: excelFile ? '#0c0b31b3' : '#3f53d9b3',
            // borderWidth: 2,
            border: 'none',
            backgroundImage:
            //  excelFile ?
            //     `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%230C0B31B3' stroke-width='1' stroke-dasharray='5%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
            //     :
                `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%233F53D9B3' stroke-width='1' stroke-dasharray='5%2c4' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            borderRadius: 8,
            animation:'none !important',
            backgroundSize:'cover !important',
            padding: '22px 65px',

            outline: 'none !important',
            pointerEvents: 
            // excelFile ? 'none' : 
            'auto',
          
        },
        active:{
            animation:'none !important',
            backgroundSize:'cover !important'
        },
        textContainer: {
            outline: 'none !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: "column-reverse",
            height: 170,
            [theme.breakpoints.down(1800)]: {
                height: 'auto'
            },
            '&>div': {
                width: 70,
                height: 70,
                backgroundColor: 
                // excelFile ? '#0c0b311a' :
                 'rgba(63,83,217,0.1)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                [theme.breakpoints.down(1800)]: {
                    width: 60,
                    height: 60,
                },
                '& svg': {
                    width: 40,
                    height: 40,
                    color: 
                    // excelFile ? '#0c0b3199' : 
                    'rgba(63,83,217,1)',
                    [theme.breakpoints.down(1800)]: {
                        width: 34,
                        height: 34,
                    },
                    [theme.breakpoints.down(480)]: {
                        width: 30,
                        height: 30,
                    }
                }

            }
        },
        text: {
            marginTop: 31,
            fontSize: 13,
            marginBottom: 0,
            lineHeight: 2.14,
            color: excelFile ? '#0c0b31b3' : theme.textColor.primary,
            [theme.breakpoints.down(1800)]: {
                fontSize: '12px !important',
                marginTop: 21,
                lineHeight: '21px',

            },
            [theme.breakpoints.down(480)]: {
                fontSize: '13px !important',
            
            },
            '&>span': {
                color: excelFile ? '#0c0b3199' : '#3f53d9',
                fontSize: 13,
                fontFamily: theme.font.regular,
                [theme.breakpoints.down(1800)]: {
                    fontSize: '12px !important',
                
                },
                [theme.breakpoints.down(480)]: {
                    fontSize: '13px !important',
                    display:'inline-block',
                    marginTop:13
                },
            }
        }
    }))(DropzoneArea);

    const handleUpload = (files) => {
        console.log('files', files[0]?.type)
        if (files.length > 0) {
            if (
                files[0].type.search('application/vnd.ms-excel') !== -1
                ||
                files[0].type.search('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') !== -1
            ) {
                setProgressValue(100)
                setExcelFile(files)
                setTimeout(() => {
                    setProgressValue(0)
                }, 500)

            } else {
                enqueueSnackbar('فرمت فایل انتخابی صحیح نمی باشد', {
                    variant: 'error',
                    // persist:true,
                    style: {},
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    },
                });
            }
        }

    }
    const handleSubmit = () => {
        excelFile && transform.getBase64(excelFile[0], (result) => {
            props.addContactFromExcel(result.substring(result.indexOf("base64,") + 7))
        });
    }

    return (
        <DialogLayout
            open={props.open}
            title={`افزودن فایل اکسل`}
            closeModal={props.closeModal}
            style={{ position: 'unset' }}
        // customBack
        // className={{
        //     root: classes.inviteDialogRoot
        // }}
        >
            <div className={classes.contactsAddContactBody} style={{ padding: '0 19px' }}>


                <StyledDropZone
                    Icon={excelFile?dropZoneSuccessIcon:dropZoneIcon}
                    showPreviews={false}
                    showPreviewsInDropzone={false}
                    filesLimit={1}
                    previewText={false}
                    showAlerts={false}


                    dropzoneText={
                        excelFile ?
                            <div className={classes.contactsPreviewContainer}>
                                <div>
                                    <CloseIcon onClick={() => setExcelFile(null)} />
                                </div>
                                <div>
                                    <p>{excelFile[0].name}</p>
                                    <LinearProgress variant="determinate" value={progressValue} />
                                </div>
                                {/* <div>
                                    <img src={excelIcon} alt="" />
                                </div> */}
                            </div> :
                            isMobile ?
                                <> فایل خود را در اینجا بارگذاری نمایید<br /><span>انتخاب فایل</span> </>
                                :
                                <> فایل خود را بکشید و در اینجا رها کنید<br />یا جهت <span>انتخاب فایل</span> کلیک کنید </>

                    }
                    onChange={(files) => {
                        handleUpload(files)
                    }}
                />

                {/* {excelFile &&
                    <div className={classes.contactsPreviewContainer}>
                        <div>
                            <CloseIcon onClick={() => setExcelFile(null)} />
                        </div>
                        <div>
                            <p>{excelFile[0].name}</p>
                            <LinearProgress variant="determinate" value={progressValue} />
                        </div>
                        <div>
                            <img src={excelIcon} alt="" />
                        </div>
                    </div>

                } */}
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}

                    className={clsx(classes.addContactActionBtn, !excelFile && classes.addContactDisabledBtn)}

                >
                    تایید
                </Button>
            </div>
        </DialogLayout>
    )
}

export default AddByExcelDialog