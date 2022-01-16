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
                            label="دسته بندی ها"
                            onClick={categoryToggle} />
                    )}
                <Chip
                    icon={<LocalBarIcon />}
                    label="فیلتر ها"

                    onClick={filterToggle} />
                {props.filters.cityId &&
                    <Chip
                        label={'شهر ' + (props.cityList && props.cityList.filter((item) => item.id == props.filters.cityId)[0])}
                        onDelete={() => { props.filterList({ cityId: null }) }} />
                }
                {props.filters.male &&
                    <Chip
                        label={'جنسیت ' + (props.filters.male === 'true' ? 'مرد' : 'زن')}
                        onDelete={() => { props.filterList({ male: null }) }} />
                }
                {props.filters.toPrice && props.filters.fromPrice &&
                    <Chip
                        label={'قیمت از ' + (props.filters.fromPrice + ' تا' + props.filters.toPrice)}
                        onDelete={() => { props.filterList({ toPrice: null, fromPrice: null }) }} />
                }
                {props.filters.fromPrice && !props.filters.toPrice &&
                    <Chip
                        label={'قیمت از ' + (props.filters.fromPrice) + ' تومان'}
                        onDelete={() => { props.filterList({ fromPrice: null }) }} />
                }
                {props.filters.toPrice && !props.filters.fromPrice &&
                    <Chip
                        label={'قیمت تا ' + (props.filters.toPrice) + ' تومان'}
                        onDelete={() => { props.filterList({ toPrice: null }) }} />
                }
                {props.filters.fromAge && !props.filters.toAge &&
                    <Chip
                        label={'سن از ' + (props.filters.fromAge) + ' سال'}
                        onDelete={() => { props.filterList({ fromAge: null }) }} />
                }
                {props.filters.toAge && !props.filters.fromAge &&
                    <Chip
                        label={'سن تا ' + (props.filters.toAge) + ' سال'}
                        onDelete={() => { props.filterList({ toAge: null }) }} />
                }
                {props.filters.toAge && props.filters.fromAge &&
                    <Chip
                        label={'سن از ' + (props.filters.fromAge + ' تا' + props.filters.toAge)}
                        onDelete={() => { props.filterList({ toAge: null, fromAge: null }) }} />
                }
                {props.filters.state != '0' &&
                    <Chip
                        label={'وضعیت ' + (props.filters.state == 211 ? 'آنلاین' : props.filters.state == 213 ? 'مشغول' : 'آفلاین')}
                        onDelete={() => { props.filterList({ state: "0" }) }} />
                }
                {props.filters.courseIds &&
                    <Chip
                        label={'عنوان درس '}
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