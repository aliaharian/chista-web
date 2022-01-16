import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => (
    {
        activityItemsMain: {
            height: '580px !important',
            paddingTop: 21,
            [theme.breakpoints.down('sm')]: {
                paddingTop: 0,
            },
            '&>div:last-child': {
                '&>div': {
                    '&:after': {

                        display: 'none'
                    }
                }
            }
        },
        activityItem: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 35px",
            cursor: "pointer",
            position: 'relative',
            height: 81,
            '&:after': {
                content: '""',
                bottom: 0,
                width: 'calc(100% - 35px)',
                backgroundColor: theme.textColor.border,
                height: 1,
                position: 'absolute',
                right: 0,
                [theme.breakpoints.down('sm')]: {
                    right: 0,
                    width: 'calc(100% - 38px)',
                },
            },
            [theme.breakpoints.down('sm')]: {
                padding: "21px 24px",
            },
            "& svg:first-child": {
                marginRight: 15,
                color: theme.textColor.primary
            },
            "& img:first-child": {
                marginRight: 15,
            },
            "& img:last-child": {
                cursor: "pointer",
            },
            "& > div:first-child": {
                display: "flex",
                alignItems: 'center',
            },
            "& > div:last-child": {
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                "&>svg": {
                    marginRight: 0,
                    color: theme.textColor.primary
                },
            },
        },
        flex: {
            display: 'flex !important',
            alignItems: 'center !important',
            justifyContent: 'space-between !important',
            width: '100%',
        },
        activityInput: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            "& > span:first-child": {
                color: theme.textColor.secondary,
                fontSize: 13,
            },
            "& > p:last-child": {
                color: theme.textColor.primary,
                fontSize: 13,
                fontFamily: theme.font.medium,
                maxWidth:313,
                [theme.breakpoints.down(1800)]: {
                    maxWidth:220,
                },
            },
        }
    }
));
