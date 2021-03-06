import React from 'react';
import useStyles from './styles';
import { Chip } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { filterList } from '../../../redux/filters'
import { getCourseList, getCategoryList } from "../../../redux/adviserDashboard";
import MenuIcon from '@material-ui/icons/Menu';
import MobileCategoriesDialog from "./MobileCategoriesDialog";
import LocalBarIcon from '@material-ui/icons/LocalBar';
import MobileFiltersDialog from "./MobileFiltersDialog";
import ScrollContainer from 'react-indiana-drag-scroll'

function MobileFilters(props) {
    const classes = useStyles();
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [categoryDialog, setCategoryDialog] = React.useState(false);
    const [filterDialog, setFilterDialog] = React.useState(false);

    const Dispatch = useDispatch();

    React.useEffect(() => {
        if (!props.categoryList)
            props.getCategoryList();
    }, []);
    React.useEffect(() => {
        if (!selectedItem){
            props.filterList({ cat1Ids: null, cat2Ids: null, cat3Ids: null, courseIds: null });
        } else if (selectedItem.id != props.filters.cat3Ids && selectedItem.id != props.filters.cat2Ids && selectedItem.id != props.filters.catIds ) {
            if (selectedItem.sortedChildren.length == 0) Dispatch(getCourseList(selectedItem.id));
            const type = `cat${selectedItem?.level}Ids`
            props.filterList({ [type]: selectedItem ? selectedItem.id : null })
        }
    }, [selectedItem]);

    React.useEffect(() => {
        if (!!props.filters.cat3Ids) {
            let seleted = props.categoryList.find((category) => {
              return (
                category.sortedChildren &&
                category.sortedChildren.some((item) => {
                  return item.sortedChildren.some((subItem) => {
                    return subItem.id === props.filters.cat3Ids;
                  })
                })
              );
            });
            setSelectedItem(seleted);
          } else if (!!props.filters.cat2Ids) {
            let cat2Selected = null;
            let seleted = props.categoryList.find((category) => {
              return (
                category.sortedChildren &&
                category.sortedChildren.some((item) => {
                  if (item.id === props.filters.cat2Ids) {
                    cat2Selected = item;
                  }
                  return item.id === props.filters.cat2Ids
                })
              );
            });
            setSelectedItem(cat2Selected);
          } else if (!!props.filters.cat1Ids) {
            let seleted =
              props.categoryList &&
              props.categoryList.some((item) => {
                if (item.id === props.filters.cat1Ids) {
                  setSelectedItem(item);
                }
              });
          } 

    }, [props.filters.cat1Ids, props.filters.cat2Ids, props.filters.cat3Ids]);

    function categoryToggle() {
        setCategoryDialog(!categoryDialog);
    }

    function filterToggle() {
        setFilterDialog(!filterDialog);
    }

    function _renderCategories() {
        return <MobileCategoriesDialog open={categoryDialog} handleClose={categoryToggle} setSelected={(item) => { setSelectedItem(item); categoryToggle(); }} />
    }
    function _renderFilters() {
        return <MobileFiltersDialog open={filterDialog} handleClose={filterToggle} />
    }
    return (
        <>
            {_renderCategories()}
            {_renderFilters()}
            <ScrollContainer vertical={false} horizontal={true} className={classes.scrollableContainer}>
                {selectedItem ? (
                    <Chip
                        icon={<MenuIcon />}
                        label={selectedItem.name}
                        onDelete={() => { setSelectedItem(null) }} />
                ) : (
                        <Chip
                            icon={<MenuIcon />}
                            label="???????? ???????? ????"
                            onClick={categoryToggle} />
                    )}
                <Chip
                    icon={<LocalBarIcon />}
                    label="?????????? ????"

                    onClick={filterToggle} />
                {props.filters.cityId &&
                    <Chip
                        label={'?????? ' + (props.cityList && props.cityList.filter((item) => item.id == props.filters.cityId)[0])}
                        onDelete={() => { props.filterList({ cityId: null }) }} />
                }
                {props.filters.male &&
                    <Chip
                        label={'?????????? ' + (props.filters.male === 'true' ? '??????' : '????')}
                        onDelete={() => { props.filterList({ male: null }) }} />
                }
                {props.filters.toPrice && props.filters.fromPrice &&
                    <Chip
                        label={'???????? ???? ' + (props.filters.fromPrice + ' ????' + props.filters.toPrice)}
                        onDelete={() => { props.filterList({ toPrice: null, fromPrice: null }) }} />
                }
                {props.filters.fromPrice && !props.filters.toPrice &&
                    <Chip
                        label={'???????? ???? ' + (props.filters.fromPrice) + ' ??????????'}
                        onDelete={() => { props.filterList({ fromPrice: null }) }} />
                }
                {props.filters.toPrice && !props.filters.fromPrice &&
                    <Chip
                        label={'???????? ???? ' + (props.filters.toPrice) + ' ??????????'}
                        onDelete={() => { props.filterList({ toPrice: null }) }} />
                }
                {props.filters.fromAge && !props.filters.toAge &&
                    <Chip
                        label={'???? ???? ' + (props.filters.fromAge) + ' ??????'}
                        onDelete={() => { props.filterList({ fromAge: null }) }} />
                }
                {props.filters.toAge && !props.filters.fromAge &&
                    <Chip
                        label={'???? ???? ' + (props.filters.toAge) + ' ??????'}
                        onDelete={() => { props.filterList({ toAge: null }) }} />
                }
                {props.filters.toAge && props.filters.fromAge &&
                    <Chip
                        label={'???? ???? ' + (props.filters.fromAge + ' ????' + props.filters.toAge)}
                        onDelete={() => { props.filterList({ toAge: null, fromAge: null }) }} />
                }
                {props.filters.state != '0' &&
                    <Chip
                        label={'?????????? ' + (props.filters.state == 211 ? '????????????' : props.filters.state == 213 ? '??????????' : '????????????')}
                        onDelete={() => { props.filterList({ state: "0" }) }} />
                }
                {props.filters.courseIds &&
                    <Chip
                        label={'?????????? ?????? '}
                        onDelete={() => { props.filterList({ courseIds: null }) }} />
                }
            </ScrollContainer>
        </>
    )
}

MobileFilters.propTypes = {};
const mapStateToProps = (state) => ({
    categoryList: state.adviserDashboard.categories,
    cityList: state.filters.cityList,
    filters: state.filters.filters,
});

export default connect(mapStateToProps, { getCategoryList, filterList })(MobileFilters);