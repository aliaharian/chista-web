import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    notFound: {
        maxWidth: 1440,
        width: '100%',
        margin: '121px auto 0 auto',
        padding: '0 0 0 309px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 24px',
        },
        '&>p': {
            '&:nth-child(1)': {
                fontFamily: theme.font.bold,
                fontSize: 16,
                color: theme.textColor.primary,
                marginBottom: 30
            },
            '&:nth-child(2) , &:nth-child(3)': {
                fontFamily: theme.font.regular,
                maxWidth:443,
                fontSize: 13,
                color: theme.textColor.secondary,
                marginBottom: 12
            },
            '&:nth-child(3)': {
                marginBottom: 60
            }
        },
        '&>a': {
            width: 167,
            height: 56,
            borderRadius: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            marginBottom: 240,
            backgroundColor: theme.buttonColor.normal,
            [theme.breakpoints.down("sm")]: {
                height: 40,
                width: 129,
            },
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
