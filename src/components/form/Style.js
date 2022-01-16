import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    switchLabel: {
        color: theme.textColor.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchContainer:{
        '& .MuiSwitch-thumb':{
            height:20,
            width:20,
            boxShadow:'0 3px 6px rgba(0,0,0,0.16)',
            backgroundColor:'#fff'
        },
        '& .MuiSwitch-track':{
            backgroundColor:theme.textColor.primary,
            opacity:0.15
        },
        '& .Mui-checked':{
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor:theme.buttonColor.normal
            }
        }
    }
}))
;
