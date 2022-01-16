import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    titleRoot:
    {
        display:"flex",
        justifyContent:'space-between',
        alignItems: 'center',
        margin:"15px 70px",
        [theme.breakpoints.down('sm')]: {
            margin:"15px 24px",
        },
    },
    titleWrapper:
    {
        display:"flex",
        justifyContent:'flex-start',
        alignItems: 'center',
        '&>img':
            {
                height:29,
                width:29,

            },
        '&>h2':
            {
                fontSize:"22px",
                fontFamily:theme.font.regular,
                fontWeight:"bold",
                color:"#536B88"
            }
    },
    root:
    {
        display:"flex",
        justifyContent:'center',
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems: 'center',
        margin:"15px 70px",
    },
    itemRoot:
        {
            display:"flex",
            justifyContent:"center",
            flexDirection:'column',
            width: '145px',
            alignItems: 'center',
            margin: '5px'
        },
    avatarContainer:
        {
            width:"82px",
            height:"82px",
            borderRadius:"50%",
            border:"1px solid #92A4BB",
            position:"relative",
            flexShrink: 0
        },
    avatar:{
        width:"100% !important",
        height:"100% !important",
        border:'1px solid #fff',
        fontSize: 18
    },
    status:{
        width: "20px",
        height: '20px',
        borderRadius: '50%',
        bottom: "0px",
        left: "4px",
        position: "absolute",
        zIndex:9,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    statusOnline:{
        backgroundColor: '#34c278',
    },
    statusOffline:{
        backgroundColor: '#c5c9cc',
    },
    statusBusy:{
        backgroundColor: '#fa418d',
    },
    itemTitle:{
        marginTop:"12px",
        fontSize: "22px",
        fontWeight: 'bolder',
        color:"#1A172D",
        textAlign: 'center'
    },
    titleContainer:{
        height:70,
        marginRight: '9px',
        display:"flex",
        flexDirection:"column",
        width: '100%',
    },
    desc:
    {
        fontSize:12,
        color:'#536B88',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    itemPriceContainer:{
        display: 'flex',
        alignItems: 'center'
    },
    itemPrice:{
        fontSize:"14px",
        marginTop: '15px',
        color:"#536B88",
        fontWeight:"bold"
    },
    itemPriceUnit:
        {
            fontSize:"12px",
            fontFamily:"yekanLight",
            color:"#92A4BB"
        },
    itemLink:
        {
            '&:hover':
                {
                    textDecoration:'none !important'
                }
        }
}));
