import React, { useState } from 'react';
import useStyles from './styles';
import {
    Typography, Divider, AppBar, Dialog,
    Toolbar, IconButton, List, ListItem, ListItemText, Slide, ListItemIcon, Collapse
} from "@material-ui/core";

import { connect } from "react-redux";
import { filterList } from '../../../redux/filters';
import {
    getCategoryList,
} from "../../../redux/adviserDashboard";
import { transform } from '../../utilities'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AllCatsIcon from '../../assets/images/allCategories.svg'

function ExpandlableListItem(props) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={props.item.name} />
                {props.item.sortedChildren.length > 0 ? <ChevronLeftIcon /> : null}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.item && props.item.sortedChildren && props.item.sortedChildren.map((item) => (
                        <ListItem button key={'lsitel' + item.id}>
                            <ListItemText key={'lsitelT' + item.id} primary={item.name} key={'item' + item.id} onClick={() => { props.setSelected(item) }} />
                            {item.sortedChildren.length > 0 ? <ChevronLeftIcon /> : null}
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </>
    )
}
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function MobileCategoriesDialog(props) {
    const classes = useStyles();
    const [selectCat1, setSelectCat1] = useState(null);
    const [selectCat2, setSelectCat2] = useState(null);

    function handleClose() {
        props.handleClose();
    }
    function handleBack() {
        if (selectCat2) 
            setSelectCat2(null);
        else 
            setSelectCat1(null);
    }

    return (<Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
                {(selectCat1 || selectCat2) && <IconButton edge="start" color="inherit" onClick={handleBack} aria-label="close">
                    <ChevronRightIcon />
                </IconButton>}
                {(!selectCat1 && !selectCat2) && <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <ChevronRightIcon />
                </IconButton>}
                <Typography variant="h6" className={classes.title}>
                    {selectCat2?.name || selectCat1?.name || 'انتخاب دسته بندی'}
                </Typography>


            </Toolbar>
        </AppBar>
        {!selectCat1 &&
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.navRoot}
            >
                {
                    props.hasAll&&(
                        <ListItem button onClick={() => {props.setSelectAll()}} className={classes.listItem} >
                            <ListItemIcon className={classes.listItemIcon}>
                                <img src={AllCatsIcon} alt="" className={classes.imageIcon} />
                            </ListItemIcon>
                            <ListItemText primary="همه دسته بندی ها" className={classes.listItemText} />
                        </ListItem>
                    )
                }
                {props.categoryList && props.categoryList.map((item, index) => (
                    <>

                        <ListItem button onClick={() => setSelectCat1(item)} className={classes.listItem} >
                            <ListItemIcon className={classes.listItemIcon}>
                                <img src={transform.getImage(item.icon)} alt="" className={classes.imageIcon} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} className={classes.listItemText} />
                            {item.sortedChildren.length > 0 ? <ChevronLeftIcon className={classes.expandMoreIcon} /> : null}
                        </ListItem>
                        {index != props.categoryList.length - 1 && <Divider orientation="horizontal" className={classes.divider} />}
                    </>
                ))}
            </List>
        }
        {selectCat1 && !selectCat2 &&
            <List component="div" disablePadding className={classes.navRoot}>
                <ListItem button key={'lsitel' + selectCat1.id} className={classes.listItem}
                    onClick={() => { props.setSelected(selectCat1) }} >
                    <ListItemText primary={'انتخاب همه'} className={classes.listItemText} />
                </ListItem>
                <Divider orientation="horizontal" className={classes.divider} />

                {selectCat1 && selectCat1.sortedChildren && selectCat1.sortedChildren.map((item, index) => (
                    <>
                        <ListItem button key={'lsitel' + item.id} className={classes.listItem}>

                            <ListItemText key={'lsitelT' + item.id} primary={item.name} key={'item' + item.id}
                                className={classes.listItemText}
                                onClick={() => { item.sortedChildren.length == 0 ? props.setSelected(item) : setSelectCat2(item) }} />
                            {item.sortedChildren.length > 0 ? <ChevronLeftIcon className={classes.expandMoreIcon} /> : null}
                        </ListItem>
                        {index != props.categoryList.length - 1 && <Divider orientation="horizontal" className={classes.divider} />}
                    </>
                ))}

            </List>
        }
        {selectCat1 && selectCat2 &&
            <List component="div" disablePadding className={classes.navRoot}>
                <ListItem button key={'lsitel' + selectCat2.id} className={classes.listItem}
                    onClick={() => { props.setSelected(selectCat2) }} >
                    <ListItemText primary={'انتخاب همه'} className={classes.listItemText} />
                </ListItem>
                <Divider orientation="horizontal" className={classes.divider} />
                {selectCat2 && selectCat2.sortedChildren && selectCat2.sortedChildren.map((item, index) => (
                    <>
                        <ListItem button key={'lsitel' + item.id} className={classes.listItem}>

                            <ListItemText key={'lsitelT' + item.id} primary={item.name} key={'item' + item.id}
                                className={classes.listItemText}
                                onClick={() => { props.setSelected(item) }} />
                            {item.sortedChildren.length > 0 ? <ChevronLeftIcon className={classes.expandMoreIcon} /> : null}
                        </ListItem>
                        {index != props.categoryList.length - 1 && <Divider orientation="horizontal" className={classes.divider} />}
                    </>
                ))}
            </List>
        }
    </Dialog>
    )
}

MobileCategoriesDialog.propTypes = {};
const mapStateToProps = (state) => ({
    categoryList: state.adviserDashboard.categories,
    filters: state.filters.filters,
});

export default connect(mapStateToProps, { getCategoryList, filterList })(MobileCategoriesDialog);