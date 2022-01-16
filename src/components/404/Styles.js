import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    notFound: {
        maxWidth: 1440,
        width: '100%',
        margin: '137px auto 214px auto',
        padding: '0 0 0 309px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 24px',
        },
        '&>p': {
            '&:nth-child(1)': {
                fontFamily: theme.font.bold,
                fontSize: 28,
                color: theme.textColor.primary,
                marginBottom: 30,
                [theme.breakpoints.down("sm")]: {
                    fontSize: 16,
                },
            },
            '&:nth-child(2) , &:nth-child(3)': {
                fontFamily: theme.font.regular,
                fontSize: 13,
                color: theme.textColor.secondary,
                marginBottom: 40
            },
            '&:nth-child(3)': {
                marginBottom: 30
            }
        },
        '&>a': {
            width: 160,
            height: 48,
            borsederRadius: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            marginBottom: 240,
            backgroundColor: theme.buttonColor.normal,
            '&>svg': {
                fontSize: 18,
                marginLeft: 10,
                transition: 'all 250ms ease'
            },
            '&:hover': {
                textDecoration: 'none',
                backgroundColor: theme.buttonColor.hover,
                '&>svg': {
                    transform: 'translateX(5px)'
                }
            },
        }
    }
}));
