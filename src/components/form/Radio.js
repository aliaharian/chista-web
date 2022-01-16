import React from "react"
import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core"

const Radio2 = ({ input, label, options, ...rest }) => (
  <FormControl component="fieldset">
    <Typography variant="caption" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
      {label}
    </Typography>
    <RadioGroup
      {...input}
      {...rest}
      onChange={(event, value) => input.onChange(value)}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {options.map((item) => (
        <FormControlLabel
          value={item.value}
          key={item.value}
          control={<Radio />}
          label={item.label}
          style={{ marginLeft: 30 }}
        />
      ))}
    </RadioGroup>
  </FormControl>
)

export default Radio2
