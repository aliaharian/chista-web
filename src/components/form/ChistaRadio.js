import React from "react"
import {
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles";

const useStyles= makeStyles(theme => ({
    root:{
       height:"53px",
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       borderRadius:"16px",
       direction: "rtl",
       '& span':
       {
           fontFamily:theme.font.regular,
           color:"#536B88",
           fontSize:"13px"
       }
    },
    selected:{
        '& span':
            {
                color:"#1641FF",
            }
    }
}));

const Radio2=function(props)
{
    const classes=useStyles();

    return (<>
        <div className={[classes.root,props.selected?classes.selected:''].join(' ')}>
            <span>{props.label}</span>
            <Radio {...props} type='radio' style={{display:"block"}}  checked={props.selected}/>
        </div>
    </>);
}

const ChistaRadio = ({ input, label, defaultValue, options, ...rest }) => {
    const [value, setValue] = React.useState(defaultValue);

    const handleChange = (event,value) => {
        setValue(value);
        input.onChange(value)
    };
    return(
        <FormControl component="fieldset">
            <RadioGroup
                {...input}
                {...rest}
                onChange={handleChange}
                style={{ display: "flex", flexDirection: "row" }}
            >
                {options.map((item) => (
                    <FormControlLabel
                        value={item.value}
                        key={item.value}

                        control={<Radio2 selected={value==item.value} label={item.label} />}

                        style={{ marginLeft: 30,marginRight:"0px",marginTop:6 }}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default ChistaRadio
