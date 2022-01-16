import React from "react"
import classNames from "classnames"
import ReactSelect from "react-select"
import { withStyles } from "@material-ui/core/styles"
import { Typography, TextField, Paper, Chip, MenuItem } from "@material-ui/core"
import CancelIcon from "@material-ui/icons/Cancel"
import { emphasize } from "@material-ui/core/styles/colorManipulator"

const styles = (theme) => ({
  input: {
    display: "flex",
    padding: 4,
    minHeight: 41,
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
    marginLeft: 8,
  },
  placeholder: {
    position: "absolute",
    left: 8,
    fontSize: 14,
  },
  paper: {
    position: "absolute",
    zIndex: 9999999,
    marginTop: 0,
    left: 0,
    right: 0,
  },
})

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      چیزی یافت نشد !
    </Typography>
  )
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

function Control(props) {
  const {
    meta: { touched, error },
  } = props.selectProps

  return (
    <TextField
      fullWidth
      margin="dense"
      variant="outlined"
      helperText={touched && error ? error : null}
      error={touched && error !== undefined}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  )
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  )
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  )
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  )
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  )
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
}

class IntegrationReactSelect extends React.Component {
  render() {
    const {
      classes,
      theme,
      label,
      input: { value, onBlur, onChange },
      meta,
      ...custom
    } = this.props

    const selectStyles = {
      input: (base) => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit",
        },
      }),
    }

    return (
      <ReactSelect
        classes={classes}
        styles={selectStyles}
        textFieldProps={{
          label: label,
          InputLabelProps: {
            shrink: true,
          },
        }}
        value={value}
        onBlur={() => onBlur(value)}
        onChange={(value) => onChange(value)}
        options={this.props.options}
        components={components}
        placeholder={label + " را انتخاب کنید"}
        meta={meta}
        isMulti={this.props.isMulti}
        {...custom}
      />
    )
  }
}

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect)
