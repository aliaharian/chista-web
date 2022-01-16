import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Style from "./../../../../assets/stylesheet/index.module.scss";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import theme from "../../../../theme/theme";

const Accordion = withStyles({
    root: {
        backgroundColor: 'transparent',
        maxWidth: '100%',
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {
        '& .MuiAccordionDetails-root': {
            '&:after': {
                content: '""',
                position: 'absolute',
                width: 'calc(100% - 0px)',
                height: 1,
                backgroundColor: theme.textColor.border + ' !important',
                bottom: 0,
                right: 0
            }
        }
    },
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        '&:not(:last-child)': {
            transition: 'all 0.4s ease-in-out',
            position: 'relative',
            '&:after': {
                content: '""',
                position: 'absolute',
                width: 'calc(100% - 0px)',
                height: 1,
                backgroundColor: theme.textColor.border,
                bottom: 0,
                right: 0
            }
        },
        '&$expanded': {
            '&:after': {
                backgroundColor: '#fff !important',
                transition: 'all 0.1s ease-in-out',
            },
            transition: 'all 0.1s ease-in-out',
        },
    },
    content: {
        backgroundColor: 'transparent',
        margin: '0',
        '& h4': {
            margin: ' 0',
            padding: '22px 0'
        },
        '&$expanded': {
            margin: '0',
        },
    },
    expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        width: '100%',
        textAlign: 'right',
        paddingTop: 0,
        paddingLeft: 18,
        paddingRight: 14,
        '& p': {
            marginTop: 0,
            textAlign: 'justify !important'
        },
        '&:after': {
            backgroundColor: '#fff !important',
        },
    },
}))(MuiAccordionDetails);

export default function FeaturesTitleRes({active, data, features, ...props}) {
    const handleChange = (key) => {
        props._handleChange(key)
    }

    return (
        <Accordion expanded={active} item className={Style.singleWhy}
                   onChange={() => handleChange(data.key)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <div className={Style.etcIconContainer}>
                    <div>
                        <div>
                            <img src={data.iconClass} className={`${Style.whyIcon}`}/>
                        </div>
                    </div>

                </div>
                <h4>{data.title}</h4>
            </AccordionSummary>

            <AccordionDetails className={Style.singleEtcBody}>
                <p style={{
                    textAlign: 'right',
                    direction: 'rtl',
                    width: 'calc(100vw - 80px)'
                }}>{data.desc || data.legend}</p>
            </AccordionDetails>
        </Accordion>
    )
}
