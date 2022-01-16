import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({

    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        backgroundColor: theme.textColor.disabled,
        // position: 'relative',
    },
    saveBtn: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 38,
        left: 38,
        backgroundColor: theme.textColor.primary,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '7px',
        borderRadius: 40,
        cursor: 'pointer',
        '& svg': {
            fontSize: 24
        }
    },
    closeBtn: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 38,
        right: 38,
        backgroundColor: theme.textColor.primary,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '8px 9px',
        borderRadius: 40,
        cursor: 'pointer',
        '& svg': {
            fontSize: 24
        }
    },
    mainImageContainer: {
        '& img': {
            maxWidth: 'calc(100vw - 116px)',
            maxHeight:'calc(100vh - 380px)'
        }
    },
    thumbContainer: {
        height: 132,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '5vh',
        position: 'absolute',
        overflow: 'scroll',
        width:'calc(100vw - 60px)',
        padding:'0 30px',
        '&>div': {
            maxHeight: 132,
            marginLeft: 13,
            cursor:'pointer',
            '&>img': {
                maxHeight: 132,

            }
        },

    }
}));
