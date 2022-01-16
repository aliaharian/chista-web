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
                fontFamily:"chistaYekanR",
                fontWeight:"bold",
                color:"#536B88",
            }
    },
    root:
    {
        display:"flex",
        justifyContent:'center',
        flexDirection:"column",
        alignItems: 'center',
        margin:"15px 70px",
        [theme.breakpoints.down('sm')]: {
            margin:"15px 24px",
        },
    },
    tagsWrapper:
        {
            display:"flex",
            flexDirection:"row",
            position:"relative",
            width:"100%",
            justifyContent:"start",
            flexWrap: 'wrap',
        },
    tagItem:{
        width:"max-content",
        height:"53px",
        margin:"5px",
        padding: '5px',
        border:"1px solid rgb(189,200,214)",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:"16px",
        '& span':
            {
                fontFamily:"chistaYekanR",
                color:"#536B88",
                fontSize:"14px",
                minWidth: '118px',
                width: 'max-content',
                textAlign: 'center',
                cursor: 'pointer',
            },
        '&:hover':{
            backgroundColor:"#536B88",
            '& span':
                {
                    color:"#fff",
                },
        }

    },
    tagsMoreWrapper:
        {
            display:"flex",
            justifyContent:"center",
            alignItems:"flex-end",
            height: 95,
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6390756131554185) 20%, rgb(255, 255, 255) 66%, rgb(255, 255, 255) 100%)',
            position: 'absolute',
            bottom: 0,
            width: '100%',
        },
    readMoreBtn:
        {
            height:"25px",
            color:"#1641FF"
        }
}));
