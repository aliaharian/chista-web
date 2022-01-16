import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    logoImg:
    {
        margin: "10px 0 5px 0",
        maxHeight: '51px',
        display:'flex',
        width: '120px',
    },
    '@media (max-width: 480px)': {
        logoImg: {
            width: 105,
            margin: "5px 2px 2px 2px",
        }
    },
    logoIcon:
    {
        [theme.breakpoints.down('md')]: {
            width: 150,
        },
    },
}));
