import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root:
    {
        display:"flex",
        justifyContent:'center',
        height:500,
        width:"100%",
        flexDirection:"column",
        alignItems: 'center',
    },
    emptyImg:
    {
        width: 371,
        height: 282,
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: 'auto',
          },
    },
    emptyListText:
    {
        fontFamily:theme.font.regular,
        fontSize:'14px',
        color:'#92A4BB',
        fontWeight:'bold',
        textAlign: "center",
    }
}));
