import React, {useEffect} from "react"
import {
    Button,
    Dialog,
    DialogContent,
    Slide,
    Typography,
    Fade
} from "@material-ui/core"
import {connect, useDispatch} from "react-redux"
import {authUpdateField} from "../../../redux/auth"
import useStyles from './styles';
import Icon from "../Icon/Icon";
import warningIcon from '../../assets/images/warning.svg'
import successIcon from '../../assets/images/success.svg'
import Link from "next/link";
import {Close} from "@material-ui/icons";
import {withSnackbar} from 'notistack';
import {infoSnackbar} from "../../../redux/user";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}

function PacketStatus(props) {
    const classes = useStyles();
    const [packetText, setPacketText] = React.useState(``);
    const [packetTitle, setPacketTitle] = React.useState(``);
    const [packetColor, setPacketColor] = React.useState(`#f64d4d`);
    const [packetIcon, setPacketIcon] = React.useState(warningIcon);
    const [packetButton, setPacketButton] = React.useState(['', '#']);

    const [transition, setTransition] = React.useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH)
                setTransition(true)
        } else {
            setTransition(false)
        }
    })

    const Dispatch=useDispatch();

    const handleComingSoon = (link) => {
        if (link === '#')
            Dispatch(infoSnackbar(0))
    }

    function handleClose() {
        props.authUpdateField({prop: "openPacketStatus", value: false})
    }

    useEffect(() => {
        if (props.user !== null)
            switch (props.user.packetStat) {
                case 461:
                    setPacketColor(`#f64d4d`)
                    setPacketTitle(`شما یک بسته فعال دارید`)
                    setPacketText(`شما یک بسته فعال دارید، برای ایجاد کلاس روی دکمه زیر کلیک کنید`)
                    setPacketIcon(warningIcon)
                    setPacketButton([`کلاس های من`, '/profile/dashboard/myClass'])
                    break;
                case 462:
                    setPacketColor(`#f64d4d`)
                    setPacketTitle(`بسته فعال موجود نیست`)
                    setPacketText(`شما بسته فعالی ندارید، ابتدا بسته جدید خریداری کرده و سپس اقدام
به ایجاد کلاس نمایید`)
                    setPacketIcon(warningIcon)
                    setPacketButton([`خرید بسته`, '#'])
                    break;
                case 463:
                    setPacketColor(`#34c278`)
                    setPacketTitle(`بسته هدیه برای شما فعال شد`)
                    setPacketText(`بسته هدیه با موفقیت برای شما فعال شد،برای ایجاد کلاس روی
 دکمه زیر  کلیک کنید`)
                    setPacketIcon(successIcon)
                    setPacketButton([`کلاس های من`, '/profile/dashboard/myClass'])
                    break;
            }
    }, [props.user]);

    return (
        <Dialog
            fullWidth
            open={props.openPacketStatus}
            transition={Slide}
            keepMounted
            TransitionComponent={transition ? Transition : NoTransition}
            onClose={handleClose}
            classes={{
                scrollPaper: classes.dialog
            }}
            PaperProps={{className: classes.root}}
        >
            <Close className={classes.closeButton} onClick={handleClose}/>
            <form className={classes.modalContent}>
                <div className={classes.modalHead}>
                    <Icon src={packetIcon} className={classes.modalIcon} style={{backgroundColor:`${packetColor}0d`}}/>
                    <Typography className={classes.modalTitle} style={{color: packetColor}}>{packetTitle}</Typography>
                    <Typography className={classes.modalUserName}>{props.user && props.user.firstName} عزیز</Typography>
                    <Typography className={classes.modalTitleDesc}>{packetText}</Typography>
                </div>
                <DialogContent>
                    <Link href={packetButton[1]}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={props.load || (props.pristine || props.submitting)}
                            className={classes.actionBtn}
                            onClick={() => handleComingSoon(packetButton[1])}
                        >
                            {packetButton[0]}
                        </Button>
                    </Link>
                </DialogContent>
            </form>
        </Dialog>
    )
}

const mapStateToProps = ({auth: {load, openPacketStatus}, user: {user}}) => ({
    load,
    openPacketStatus,
    user
})

export default connect(
    mapStateToProps,
    {authUpdateField}
)(withSnackbar(PacketStatus))