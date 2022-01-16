import React, { useState } from 'react';
import useStyles from './styles';
import {
    Typography,
    Grid,
    Button,
    AppBar,
    Dialog,
    Toolbar,
    IconButton,
    Slide,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails, FormControlLabel, Radio, Select
} from "@material-ui/core";
import { connect } from "react-redux";
import { getCategoryList, filterList, getProvinceList, getCityList, getPriceList, getAgeList } from '../../../redux/filters'
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileCategoriesDialog(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [toAge, setToAge] = useState({ age: '', name: props.filters?.toAge });
    const [fromAge, setfromAge] = useState({ age: '', name: props.filters?.fromAge });
    const [course, setCourse] = useState({ course: '', name: props.filters?.courseIds });

    React.useEffect(() => {
        if (!props.cityList)
            props.getCityList();
        
        if (!props.provinceList)
            props.getProvinceList();

        if (!props.priceList)
            props.getPriceList();
        
        if (!props.ageList)
            props.getAgeList();
    }, [])

    function handleChangeGender(event) {
        props.filterList({ male: event.target.value });
    }

    function handleChangeFromAge(event) {
        const name = event.target.name;
        setfromAge({ [name]: event.target.value });
        props.filterList({ fromAge: event.target.value });
    }

    function handleChangeFromCourse(event) {
        const name = event.target.name;
        setCourse({ [name]: event.target.value });
        props.filterList({ courseIds: event.target.value });
    }

    function handleChangeToAge(event) {
        const name = event.target.name;
        setToAge({ [name]: event.target.value });
        props.filterList({ toAge: event.target.value });
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function handleClose() {
        props.handleClose();
    }

    return (<Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    فیلتر ها
                  </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                    مشاهده {props.totalAdvisers && props.totalAdvisers} استاد
                  </Button>
            </Toolbar>
        </AppBar>
        <Grid container justify="space-between" className={classes.root}>
            <ExpansionPanel className={classes.filterPanel} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.filterPanelExpandBtn} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.filterPanelHeading}>جنسیت</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormControlLabel
                        value="true"
                        control={<Radio color="primary" checked={props.filters.male === "true"} onChange={handleChangeGender} />}
                        label="مرد"
                        labelPlacement="end"
                        className={classes.radioLabel}
                    />
                    <FormControlLabel
                        value="false"
                        control={<Radio color="primary" checked={props.filters.male === "false"} onChange={handleChangeGender} />}
                        label="زن"
                        labelPlacement="end"
                        className={classes.radioLabel}
                    />
                    <FormControlLabel
                        value={''}
                        control={<Radio color="primary" checked={props.filters.male == ''} onChange={handleChangeGender} />}
                        label="هردو"
                        labelPlacement="end"
                        className={classes.radioLabel}
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.filterPanel} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.filterPanelExpandBtn} />}
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
                            classes={{
                                root: classes.selectList
                            }}
                            className={classes.filterPanelSelect}
                            onChange={handleChangeFromAge}
                            label="سن"
                            value={fromAge.age}
                            inputProps={{
                                name: 'age',
                                id: 'age-from',
                            }}
                        >
                            <option value={null} className={classes.priceSelectOption}>مهم نیست</option>
                            {props.ageList && props.ageList.map((item) => (<option value={item.key} key={'opt' + item.key} className={classes.priceSelectOption}>{item.value}</option>))
                            }
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
                            value={toAge.age}
                            inputProps={{
                                name: 'age',
                                id: 'age-to',
                            }}
                        >
                            <option value={null} className={classes.priceSelectOption}>مهم نیست</option>
                            {props.ageList && props.ageList.map((item) => (<option value={item.key} key={'opt' + item.key} className={classes.priceSelectOption}>{item.value}</option>))
                            }

                        </Select>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.filterPanel} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.filterPanelExpandBtn} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.filterPanelHeading}>استان</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.filterOptionRoot}>
                    <Autocomplete
                        id="combo-box-demo"
                        noOptionsText={''}
                        options={props.provinceList || []}
                        getOptionLabel={(option) => option.name}
                        defaultValue={props.provinceList && props.provinceList.filter(item => item.id == props.filters.provinceId)[0]}
                        className={classes.filterPanelSelect}
                        style={{ width: 300 }}
                        onChange={(e, newValue) => { props.getCityList(newValue ? newValue.id : null); props.filterList({ provinceId: newValue ? newValue.id : '', cityId: null}) }}
                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className={classes.filterPanel} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.filterPanelExpandBtn} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.filterPanelHeading}>شهر</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.filterOptionRoot}>
                    <Autocomplete
                        id="city-search"
                        noOptionsText={''}
                        fullwidth
                        options={props.cityList || []}
                        getOptionLabel={(option) => option.name}
                        className={classes.filterPanelSelect}
                        defaultValue={props.cityList && props.cityList.filter(item => item.id == props.filters.cityId)[0]}
                        style={{ width: 300 }}
                        onChange={(e, newValue) => { props.filterList({ cityId: newValue ? newValue.id : '' }) }}
                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            {props.courseList && (props.courseList || []).length > 0 &&
                <ExpansionPanel className={classes.filterPanel} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className={classes.filterPanelExpandBtn} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.filterPanelHeading}>عنوان درس</Typography>
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
                                    name: 'course',
                                    id: 'course',
                                }}
                            >
                                <option value={null} className={classes.priceSelectOption}>مهم نیست</option>
                                {props.courseList && props.courseList.map((item) => (<option value={item.id} key={'opt' + item.id} className={classes.priceSelectOption}>{item.name}</option>))
                                }
                            </Select>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            }
        </Grid>
    </Dialog>
    )
}

MobileCategoriesDialog.propTypes = {};
const mapStateToProps = (state) => ({
    categoryList: state.adviserDashboard.categories,
    cityList: state.filters.cityList,
    provinceList: state.filters.provinceList,
    priceList: state.filters.priceList,
    ageList: state.filters.ageList,
    filters: state.filters.filters,
    totalAdvisers: state.advisers.total,
    courseList: state.adviserDashboard.courses,
});

export default connect(mapStateToProps, { getCategoryList, getProvinceList, filterList, getCityList, getPriceList, getAgeList })(MobileCategoriesDialog);