import {Menu, withStyles} from "@material-ui/core";

const StyledMenu = withStyles((theme) => ({
    paper: {
        overflow: 'visible',
        transform: "translateY(12px)!important",
        border: 'none',
        width:'170px',
        borderRadius:'8px!important',
        boxShadow: '0 3px 10px 0 rgba(0, 5, 52, 0.11)',
        '& ul':{
            marginRight:4,
            marginLeft:4,
        },
        '& li':{
            borderRadius:8,
            [theme.breakpoints.down("sm")]: {
                minHeight:'34px !important'
            },
        }
    },
}))(Menu)


export default StyledMenu