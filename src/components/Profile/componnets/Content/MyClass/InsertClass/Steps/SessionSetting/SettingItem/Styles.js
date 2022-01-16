import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    joinBeforeStartContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: '0 19px 23px 19px',
        borderBottom: '1px solid ' + theme.textColor.border,
        '&>div': {
            width: '100%'
        },
        '&>svg': {
            marginRight: 15
        },
        '& .MuiInput-underline': {
            '&:before': {
                display: 'none !important',
                content: "''"
            },
            '&:after': {
                display: 'none !important',
                content: "''"
            }
        },
        '& .MuiSelect-select.MuiSelect-select': {
            backgroundColor: '#fff',
            fontSize: 14
        },
        '& .MuiFormLabel-root': {
            color: theme.textColor.secondary,
            fontSize: 14
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: theme.textColor.secondary,
            fontSize: 14
        }
    },
    rollCallContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '23px 19px',
        borderBottom: '1px solid ' + theme.textColor.border,
        '&>div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&>img': {
                marginRight: 15
            },
            '&>p': {
                margin: 0
            }

        }

    }
}));
