import React from "react";
import useStyles from "./styles";
import { connect, useDispatch } from "react-redux";
import { filterList } from "../../../redux/filters";
import {
  getCategoryList,
  getCourseList,
} from "../../../redux/category";
import { transform } from "../../utilities";
import ArrowBack from '../../assets/images/arrowBack.svg';
import Style from '../../components/Kit/Style/kits.module.scss';
import { useMediaQuery } from "@material-ui/core";
import {useTheme} from "@material-ui/core";
import ModalLayoutWithHeader from "../Kit/Layouts/ModalLayoutWithHeader";
import Close from '../../assets/images/close_search.svg';
import AllCategories from '../../assets/images/all_categories.svg';
import ArrowLeft from '../../assets/images/arrowLeftDisabled.svg';

function CategoryFilters(props) {
  const classes = useStyles();
  const Dispatch = useDispatch();
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedCat2, setSelectedCat2] = React.useState(null);
  const [selectedCat3, setSelectedCat3] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

  React.useEffect(() => {
    if (!props.categoryList) {
      props.getCategoryList(-1, props.url);
    }
    if (!!props.filters.cat3Ids) {
      let cat2Selected = null;
      let cat2Id = null;
      let seleted = props.categoryList.find((category) => {
        return (
          (category.childCount > 0 && typeof props.cat2Children !=='undefined') &&
          props.cat2Children.some((item) => {
              if (item.id === props.filters.cat3Ids) {
                cat2Id = item.parentId;
              }
              return item.id === props.filters.cat3Ids;
          })
        );
      });

      props.categoryList.find((category) => {
        return (
          (category.childCount > 0 && typeof props.cat2Children !=='undefined') &&
          props.cat2Children.some((item) => {
            if (item.id === cat2Id) {
              cat2Selected = item;
            }
          })
        );
      });
      setSelectedItem(seleted);
      setSelectedCat2(cat2Selected);
    } else if (!!props.filters.cat2Ids) {
      let cat2Selected = null;
      let seleted = props.categoryList.find((category) => {
        return (
          (category.childCount > 0 && typeof props.cat1Children !=='undefined') &&
          props.cat1Children.some((item) => {
            if (item.id === props.filters.cat2Ids) {
              cat2Selected = item;
            }
            return item.id === props.filters.cat2Ids
          })
        );
      });
      setSelectedItem(seleted);
      setSelectedCat2(cat2Selected);
    } else if (!!props.filters.cat1Ids) {
      let seleted =
        props.categoryList &&
        props.categoryList.some((item) => {
          if (item.id === props.filters.cat1Ids) {
            setSelectedItem(item);
          }
        });
    } else {
      setSelectedItem(null);
    }
  }, [props.filters.cat1Ids, props.filters.cat2Ids, props.filters.cat3Ids]);

  const handleCat2Selected = (item) => {
    item.childCount != 0 ? window.history.replaceState({}, null, `/${props.url}/${item.id}`) : null
    //props.filterList({ cat2Ids: item.id, cat1Ids: null, courseIds: null });
    if(item.childCount > 0) {
      Dispatch(getCategoryList(item.id));
    }
    else if(item.childCount == 0) {
      props.filterList({ cat2Ids: item.id, cat1Ids: null, courseIds: null });
    }
    setSelectedCat2(item);
    //if (item.sortedChildren.length == 0) Dispatch(getCourseList(item.id));
  }

  // if parent category for mobile view: 
  if(isMobile && selectedItem == null && selectedCat2 == null) {
    return(
      <ModalLayoutWithHeader
      customClass={classes.modalLayoutCustomPadding}
      openDialog={false}
      >
        <div className={classes.headerContainer}>
          <img src={Close} alt={'close'}/>
          <span>انتخاب دسته بندی ها</span>
        </div>
        <div className={classes.categoriesContainer}>
          <div>
            <img src={AllCategories} alt={'allCategories'}/>
            <span>همه دسته بندی ها</span>
          </div>
          <ul>
            {props.categoryList && props.categoryList.length > 0 ? (
            props.categoryList.map((item) => (
              <li onClick={() => {
                item.childCount == 0 ? window.history.replaceState({}, null, `/${props.url}/${item.id}`) : null
                props.filterList({ cat1Ids: item.id, cat2Ids: null, cat3Ids: null, courseIds: null });
                setSelectedItem(item);
              }} className={Style.categoryItem}>
                <img src={transform.getImage(item.icon)} alt="" />
                <span>
                  {item.name}
                </span>
                <img src={ArrowLeft} alt={'go'}/>
              </li>
            ))) : null}
          </ul>
        </div>
      </ModalLayoutWithHeader>
    )
  }

  // if children category for mobile view level 1:
  else if(isMobile && selectedItem != null && selectedCat2 == null) {
    return (
      <ModalLayoutWithHeader
      customClass={classes.modalLayoutCustomPadding}
      openDialog={false}>
        <div className={classes.headerContainer}>
          <img src={ArrowBack} alt={'back'} onClick={() => {
            setSelectedItem(null);
            setSelectedCat2(null);
            setSelectedCat3(null);
            props.filterList({ cat1Ids: null, cat2Ids: null, cat3Ids: null, courseIds: null });
            window.history.replaceState({}, null, `/${props.url}/`)
          }}/>
          <span>{selectedItem.name}</span>
        </div>
        <div className={classes.childrenCategoriesContainer}>
          <ul>
            {(selectedItem.childCount > 0 && typeof props.cat1Children !=='undefined') &&
            props.cat1Children.map((item) => (
              <li onClick={() => handleCat2Selected(item)}>
                <span>
                  {item.name}
                </span>
                {item.childCount > 0 ? 
                  <img src={ArrowLeft} alt={'go'}/>
                : null}
              </li>
            ))}
          </ul>
        </div>
      </ModalLayoutWithHeader>
    )
  }
  
  // if children category for mobile view level 2:
  else if(isMobile && selectedItem != null && selectedCat2 != null) {
    return (
      <ModalLayoutWithHeader
      customClass={classes.modalLayoutCustomPadding}
      openDialog={false}>
        <div className={classes.headerContainer}>
          <img src={ArrowBack} alt={'back'} onClick={() => {
            setSelectedCat2(null);
            setSelectedCat3(null);
            window.history.replaceState({}, null, `/${props.url}/`)
            props.filterList({ cat1Ids: selectedItem.id, cat2Ids: null, cat3Ids: null, courseIds: null });
          }}/>
          <span>{selectedCat2.name}</span>
        </div>
        <div className={classes.childrenCategoriesContainer}>
          <ul>
            {(selectedCat2.childCount && typeof props.cat2Children !=='undefined') &&
            props.cat2Children.map((item) => (
              <li onClick={() => handleCat2Selected(item)}>
                <span>
                  {item.name}
                </span>
                {item.childCount > 0 ? 
                  <img src={ArrowLeft} alt={'go'}/>
                : null}
              </li>
            ))}
          </ul>
        </div>
      </ModalLayoutWithHeader>
    )
  }

  // if child category selected render children level 1:
  // else if (selectedItem != null && selectedCat2 == null) {
  //   return (
  //     <div className={classes.childCategoriesContainer}>
  //       <div
  //       onClick={() => {
  //         setSelectedItem(null);
  //         setSelectedCat2(null);
  //         setSelectedCat3(null);
  //         props.filterList({ cat1Ids: null, cat2Ids: null, cat3Ids: null, courseIds: null });
  //         window.history.replaceState({}, null, `/${props.url}/`)
  //       }} 
  //       className={classes.goParentCategoriesContainer}>
  //         <img src={ArrowBack} alt={"back"}/>
  //         <span>همه دسته بندی ها</span>
  //       </div>
  //       <div className={classes.parentCategoryNameContainer}>
  //         <img src={transform.getImage(selectedItem.icon)} alt={'parentIcon'}/>
  //         <span>
  //           {selectedItem.name}
  //         </span>
  //       </div>
  //       <ul className={classes.childCategoryList}>
  //         {(selectedItem.childCount > 0 && typeof props.cat1Children !=='undefined') &&
  //           props.cat1Children.map((item) => (
  //             <li
  //               className={[
  //                 classes.childCategoryListItem,
  //                 props.filters.cat2Ids == item.id
  //                   ? classes.childCategoryItemSelected
  //                   : "",
  //               ].join(" ")}
  //               onClick={() => handleCat2Selected(item)}
  //             >
  //               <span className={Style.limitText}>{item.name}</span>
  //             </li>
  //           ))}
  //       </ul>
  //     </div>
  //   );
  // }

  // // if child category selected render children level 2:
  // else if(selectedCat2 != null) {
  //   return (
  //     <div className={classes.childCategoriesContainer}>
  //       <div
  //       onClick={() => {
  //         setSelectedItem(null);
  //         setSelectedCat2(null);
  //         setSelectedCat3(null);
  //         props.filterList({ cat1Ids: null, cat2Ids: null, cat3Ids: null, courseIds: null });
  //         window.history.replaceState({}, null, `/${props.url}/`)
  //       }} 
  //       className={classes.goParentCategoriesContainer}>
  //         <img src={ArrowBack} alt={"back"}/>
  //         <span>همه دسته بندی ها</span>
  //       </div>
  //       <div className={classes.parentCategoryNameContainer} onClick={() => {
  //         setSelectedCat2(null);
  //         setSelectedCat3(null);
  //         window.history.replaceState({}, null, `/${props.url}/${selectedItem.id.id}`)
  //         props.filterList({ cat1Ids: selectedItem.id, cat2Ids: null, cat3Ids: null, courseIds: null });
  //       }}>
  //         <img src={transform.getImage(selectedItem.icon)} alt={'parentIcon'}/>
  //         <span>
  //           {selectedItem.name}
  //         </span>
  //       </div>
  //       <div className={classes.childCategoryListTitleLevel2}>
  //         <span className={Style.limitText}>
  //           {selectedCat2.name}
  //         </span>
  //       </div>
        
  //       <ul className={classes.childCategoryList}>
  //         {(selectedCat2.childCount > 0 && typeof props.cat2Children !=='undefined') &&
  //           props.cat2Children.map((item) => (
  //             <li
  //               className={[
  //                 classes.childCategoryListItemLevel2,
  //                 props.filters.cat3Ids == item.id
  //                   ? classes.childCategoryItemSelected
  //                   : "",
  //               ].join(" ")}
  //               onClick={() => {
  //                 item.childCount == 0 ? window.history.replaceState({}, null, `/${props.url}/${item.id}`) : null
  //                 props.filterList({ cat3Ids: item.id, cat1Ids: null, cat2Ids: null, courseIds: null });
  //                 //if (item.sortedChildren.length == 0) Dispatch(getCourseList(item.id));
  //               }}
  //             >
  //               <span className={Style.limitText}>{item.name}</span>
  //             </li>
  //           ))}
  //       </ul>
  //     </div>
  //   )
  // }

    // if child category selected render children level 1:
    if (selectedItem != null && props.categoriesChildren !== null) {
      return (
        <div className={classes.childCategoriesContainer}>
          <div
          onClick={() => {
            setSelectedItem(null);
            //setSelectedCat2(null);
            //setSelectedCat3(null);
            props.filterList({ cat1Ids: null, cat2Ids: null, cat3Ids: null, courseIds: null });
            window.history.replaceState({}, null, `/${props.url}/`)
          }} 
          className={classes.goParentCategoriesContainer}>
            <img src={ArrowBack} alt={"back"}/>
            <span>همه دسته بندی ها</span>
          </div>
          <div className={classes.parentCategoryNameContainer}>
            <img src={transform.getImage(selectedItem.icon)} alt={'parentIcon'}/>
            <span>
              {selectedItem.name}
            </span>
          </div>
          <ul className={classes.childCategoryList}>
            {(selectedItem.childCount > 0 && typeof props.categoriesChildren !=='undefined') &&
              props.categoriesChildren.map((item) => (
                <li
                  className={[
                    classes.childCategoryListItem,
                    props.filters.cat2Ids == item.id
                      ? classes.childCategoryItemSelected
                      : "",
                  ].join(" ")}
                  onClick={() => handleCat2Selected(item)}
                >
                  <span className={Style.limitText}>{item.name}</span>
                </li>
              ))}
          </ul>
        </div>
      );
    }

  // render parent categories
  return (
    <div className={classes.parentCategoryContainer}>
      <span>دسته بندی ها</span>
      <ul className={classes.categoryList}>
        {props.categoryList && props.categoryList.length > 0 ? (
          props.categoryList.map((item) => (
            <li
            className={classes.categoryParent}
              onClick={() => {
                item.childCount == 0 ? window.history.replaceState({}, null, `/${props.url}/${item.id}`) : null
                //props.filterList({ cat1Ids: item.id, cat2Ids: null, cat3Ids: null, courseIds: null });
                if(item.childCount > 0) {
                  Dispatch(getCategoryList(item.id, item));
                }
                setSelectedItem(item);
              }}
            >
              <img src={transform.getImage(item.icon)} alt="" />
              <span>{item.name}</span>
            </li>
          ))
        ) : (
            <></>
          )}
      </ul>
    </div>
  );
}

CategoryFilters.propTypes = {};

const mapStateToProps = (state) => ({
  categoryList: state.category.categories,
  categoriesChildren: state.category.categoryChildren,
  filters: state.filters.filters,
});

export default connect(mapStateToProps, { getCategoryList, filterList })(
  CategoryFilters
);
