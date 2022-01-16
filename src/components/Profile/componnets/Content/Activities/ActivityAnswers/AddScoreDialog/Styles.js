import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => (
    {
        root: {
            position: 'relative'
        },
        dialogContent: {
            padding: '40px 24px'
        },
        scoreTitle: {
            '&>p': {
                fontSize: 13,
                fontFamily: theme.font.medium,
                marginBottom: 0,
                '&>span': {
                    fontFamily: theme.font.bold
                }
            }
        },
        baseInfoContainer: {
            padding: '24px 0 16px 0 !important',
            [theme.breakpoints.down('sm')]: {
                padding: '16px 0 !important',
            },
        },
        decription: {
            marginTop: 0,
            "& .MuiInputBase-root": {
                backgroundColor: "#fff",
                padding: "16px 20px",
                '&>textarea': {
                    height: '125px !important',
                }
            },
            "& .MuiInputAdornment-positionStart": {
                top: "25px",
                position: "absolute",
                left: "10px",
            },
        },
        formError: {
            top: "100%",
            margin: "0",
            display: "flex",
            alignItems: "center",
            fontFamily: theme.font.regular,
            '&>span': {
                color: '#f64d4d',
                fontSize: '13px',
                marginRight: 5
            }
        },
        stepBTN: {
            right: 35,
            width: '78px',
            zIndex: 55,
            position: "absolute",
            top: -60,
            height: 30,
            cursor: "pointer",
            backgroundColor: '#fff',
            borderRadius: 15,
            color: theme.buttonColor.normal,
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            margin: "0",
            outline: "none",
            fontSize: 13,
            border: "1px solid " + theme.buttonColor.normal,
            fontFamily: theme.font.medium,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                backgroundColor: theme.buttonColor.hover,
                color: '#fff',
            },
            [theme.breakpoints.down(1800)]: {
                top: -48
            },
            [theme.breakpoints.down('sm')]: {
                top: -46,
                backgroundColor: '#fff',
                margin: 0,
                right: 24,
                color: theme.buttonColor.hover,
                '&:hover': {
                    backgroundColor: '#fff',
                    color: theme.buttonColor.hover,
                },
            },
        },
        disableBtn: {
            pointerEvents: 'none',
            borderColor: theme.textColor.border + ' !important',
            color: theme.textColor.border + ' !important'
        },
        countModalBody: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 0 0 0',
            width: '100%',
            [theme.breakpoints.down("sm")]: {
                width: '100%',
                padding: '0',
            },
            '& > .Mui-disabled':{
                '& svg':{
                    color:theme.textColor.fivePercent
                }
            },
            '&>div , &>button': {
                height: 56,
                border: '1px solid ' + theme.textColor.border,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            '&>button:nth-child(1) , &>button:nth-child(3)': {
                flexBasis: '56px',
                maxWidth: 56,
                minWidth: 56,
                color: theme.buttonColor.normal,
                fontSize: 28,
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: theme.buttonColor.normal,
                    '& svg': {
                        color: '#fff'
                    }
                },
                [theme.breakpoints.down("sm")]: {
                    flexBasis: '48px',
                    maxWidth: 48,
                    minWidth: 48,
                    height: 48
                },
            },
            '&>div:nth-child(2)': {
                flexBasis: '256px',
                margin: '0 8px',
                [theme.breakpoints.down("sm")]: {
                    flexBasis: '100%',
                    height: 48
                },
                '& .MuiInput-root': {
                    '&:after , &:before': {
                        display: 'none !important'
                    }
                },
                '& input': {
                    width: 35,
                    fontSize: 16,
                    fontFamily: theme.font.bold
                },
                '&>span': {
                    fontSize: 16,
                    fontFamily: theme.font.bold
                }
            },
        },
    }
));
