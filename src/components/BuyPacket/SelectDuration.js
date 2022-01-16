import React, {useEffect} from "react"
import {
    Button,
    Dialog,
    DialogContent,
    Slide,
    Typography,
    CircularProgress, Fade

} from "@material-ui/core"
import {numberFormat, required} from "../../utilities"
import classes from '../../assets/stylesheet/profile/buyPacket.module.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PacketSelect from "../form/PacketSelect";
import calendarIcon from '../../assets/images/profile/registerOstad/calendarAlt.svg'

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function SelectDuration(props) {
    const [transition, setTransition] = React.useState(false)
    const [duration, setDuration] = React.useState( null)

    useEffect(()=>{
        if (duration===null && props.pid !==null){
            setDuration(props.selectedPid!==null?props.selectedPid:props.pid?.result[0].id)
        }
    },[props.pid])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH) {
                setTransition(true)
            }
        } else {
            setTransition(false)
        }
    })
    const handleChangeDuration = (e) => {
        setDuration(e.target.value)
    }
    return (
        <Dialog
            fullScreen
            open={props.open}
            TransitionComponent={transition ? Transition : NoTransition}
            transition={false}
            keepMounted
            onClose={props.handleClose}
            classes={{
                scrollPaper: classes.dialog
            }}
            PaperProps={{className: classes.root}}
        >
            <div className={classes.modalHead}>
                <div className={classes.modalTitle}>
                    <ArrowForwardIcon onClick={() => props.handleBack()}/>
                    <Typography>
                        بسته ماهانه
                    </Typography>
                    <ArrowBackIosIcon/>
                    <Typography>
                        طول مدت
                    </Typography>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={()=>props.handleNext(duration)}
                        className={classes.actionBtn}
                    >
                        {props.load ? (
                            <CircularProgress
                                color="primary"
                                style={{width: 20, height: 20}}
                            />
                        ) : (
                            "ادامه"
                        )}
                    </Button>
                </div>
            </div>
            <DialogContent className={classes.BuyPacketContainer}>
                <Typography className={classes.phoneInputLabel}>طول مدت بسته</Typography>
                <PacketSelect
                    name='duration'
                    label="طول مدت بسته"
                    icon={calendarIcon}
                    options={props.pid && props.pid?.result.map((item) => {
                            return ({label: `${numberFormat.toPersianDigits(item.interval)} ماه`, value: item.id})
                        }
                    ) || []}
                    validate={[required]}
                    onChange={(e) => handleChangeDuration(e)}
                    selectedValue={duration || props.pid?.result[0].id}
                />
            </DialogContent>
        </Dialog>
    )
}

export default SelectDuration