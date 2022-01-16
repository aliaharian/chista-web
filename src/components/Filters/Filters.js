import React, { useState } from "react";
import useStyles from "./styles";
import {
  Typography,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Radio,
  FormControlLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Icon from "../../components/Icon/Icon";
import expandMoreIcon from "../../assets/images/arrow-bottom.svg";
import { connect } from "react-redux";
import {
  filterList,
  getCategoryList,
  getProvinceList,
  getCityList,
  getPriceList,
  getAgeList,
} from "../../../redux/filters";

function Filters(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  React.useEffect(() => {
    if (!props.provinceList) 
      props.getProvinceList();
    
    if (!props.priceList) 
      props.getPriceList();
    
    if (!props.ageList) 
      props.getAgeList();
  }, []);

  function handleChangeFromCourse(event) {
    props.filterList({ courseIds: event.target.value });
  }

  function handleChangeGender(event) {
    props.filterList({ male: event.target.value });
  }

  function handleChangeFromAge(event) {
    props.filterList({ fromAge: event.target.value });
  }

  function handleChangeToAge(event) {
    props.filterList({ toAge: event.target.value });
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container justify="space-between" className={classes.root}>
      {props.courseList && (props.courseList || []).length > 0 && (
        <ExpansionPanel
          className={classes.filterPanel}
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <ExpansionPanelSummary
            className={classes.panelSummary}
            expandIcon={
              <Icon
                src={expandMoreIcon}
                className={classes.filterPanelExpandBtn}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.filterPanelHeading}>
              عنوان درس
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.filterPanel}>
            <div className={classes.selectWrapper}>
              <Select
                variant="outlined"
                fullWidth
                className={classes.filterPanelSelect}
                onChange={handleChangeFromCourse}
                label="عنوان درس"
                inputProps={{
                  name: "age",
                  id: "price-from",
                }}
              >
                <MenuItem value={null} className={classes.priceSelectOption}>
                  مهم نیست
                </MenuItem>
                {props.courseList &&
                  props.courseList.map((item) => (
                    <MenuItem
                      value={item.id}
                      key={"opt" + item.id}
                      className={classes.priceSelectOption}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
              </Select>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )}

      <ExpansionPanel
        className={classes.filterPanel}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          className={classes.panelSummary}
          expandIcon={
            <Icon
              src={expandMoreIcon}
              className={classes.filterPanelExpandBtn}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.filterPanelHeading}>جنسیت</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControlLabel
            value="true"
            control={
              <Radio
                color="primary"
                checked={props.filters.male === "true"}
                onChange={handleChangeGender}
              />
            }
            label="مرد"
            labelPlacement="end"
            className={classes.radioLabel}
          />

          <FormControlLabel
            value="false"
            control={
              <Radio
                color="primary"
                checked={props.filters.male === "false"}
                onChange={handleChangeGender}
              />
            }
            label="زن"
            labelPlacement="end"
            className={classes.radioLabel}
          />

          <FormControlLabel
            value={""}
            control={
              <Radio
                color="primary"
                checked={props.filters.male == ""}
                onChange={handleChangeGender}
              />
            }
            label="هردو"
            labelPlacement="end"
            className={classes.radioLabel}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        className={classes.filterPanel}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          className={classes.panelSummary}
          expandIcon={
            <Icon
              src={expandMoreIcon}
              className={classes.filterPanelExpandBtn}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.filterPanelHeading}>سن</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.filterPanel}>
          <div className={classes.selectWrapper}>
            <span className={classes.selectLabel}>از</span>
            <Select
              variant="outlined"
              fullWidth
              className={classes.filterPanelSelect}
              onChange={handleChangeFromAge}
              label="سن"
              inputProps={{
                name: "age",
                id: "price-from",
              }}
            >
              <MenuItem value={null} className={classes.priceSelectOption}>
                مهم نیست
              </MenuItem>
              {props.ageList &&
                props.ageList.map((item) => (
                  <MenuItem
                    value={item.key}
                    key={"opt" + item.key}
                    className={classes.priceSelectOption}
                  >
                    {item.value}
                  </MenuItem>
                ))}
            </Select>
          </div>

          <div className={classes.selectWrapper}>
            <span className={classes.selectLabel}>تا</span>
            <Select
              onChange={handleChangeToAge}
              variant="outlined"
              fullWidth
              className={classes.filterPanelSelect}
              label="سن"
              inputProps={{
                name: "age",
                id: "age-to",
              }}
            >
              <option value={null} className={classes.priceSelectOption}>
                مهم نیست
              </option>
              {props.ageList &&
                props.ageList.map((item) => (
                  <option
                    value={item.key}
                    key={"opt" + item.key}
                    className={classes.priceSelectOption}
                  >
                    {item.value}
                  </option>
                ))}
            </Select>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        className={classes.filterPanel}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <ExpansionPanelSummary
          className={classes.panelSummary}
          expandIcon={
            <Icon
              src={expandMoreIcon}
              className={classes.filterPanelExpandBtn}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.filterPanelHeading}>استان</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.filterOptionRoot}>
          <Autocomplete
            id="combo-box-demo"
            noOptionsText={""}
            options={props.provinceList || []}
            getOptionLabel={(option) => option.name}
            className={classes.filterPanelSelect}
            defaultValue={
              props.provinceList &&
              props.provinceList.filter(
                (item) => item.id == props.filters.provinceId
              )[0]
            }
            style={{ width: 300 }}
            onChange={(e, newValue) => {
              props.getCityList(newValue ? newValue.id : null);
              props.filterList({
                provinceId: newValue ? newValue.id : "",
                cityId: null,
              });
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        className={classes.filterPanel}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <ExpansionPanelSummary
          className={classes.panelSummary}
          expandIcon={
            <Icon
              src={expandMoreIcon}
              className={classes.filterPanelExpandBtn}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.filterPanelHeading}>شهر</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.filterOptionRoot}>
          <Autocomplete
            id="combo-box-demo"
            noOptionsText={""}
            options={props.cityList || []}
            getOptionLabel={(option) => option.name}
            className={classes.filterPanelSelect}
            defaultValue={
              props.cityList &&
              props.cityList.filter(
                (item) => item.id == props.filters.cityId
              )[0]
            }
            style={{ width: 300 }}
            onChange={(e, newValue) => {
              props.filterList({ cityId: newValue ? newValue.id : "" });
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
}

Filters.propTypes = {};
const mapStateToProps = (state) => ({
  categoryList: state.adviserDashboard.categories,
  cityList: state.filters.cityList,
  provinceList: state.filters.provinceList,
  priceList: state.filters.priceList,
  ageList: state.filters.ageList,
  courseList: state.adviserDashboard.courses,
  filters: state.filters.filters,
});

export default connect(mapStateToProps, {
  getCategoryList,
  getProvinceList,
  filterList,
  getCityList,
  getPriceList,
  getAgeList,
})(Filters);
