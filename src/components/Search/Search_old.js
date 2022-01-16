import React from "react";
import useStyles from "./styles";
import {
  Typography,
  Grid,
  Button,
  Divider,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import allCategoryIcon from "../../assets/images/all-category-icon.png";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { connect } from "react-redux";
import { getCategoryList, filterList } from "../../../redux/filters";
import { numberFormat, transform } from "../../utilities";
import advIcon from "../../assets/images/another-advisers-icon.svg";
import classNames from "classnames";

function Search(props) {
  const classes = useStyles();
  const [openList, setOpenList] = React.useState(false);
  const [selectedParent, setSelectedParent] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    if (!props.categoryList) {
      props.getCategoryList();
    }
    if (!!props.filters.subCategoryIds) {
      props.categoryList.find((category) => {
        category.subList &&
          category.subList.some((item) => {
            if (item.id === props.filters.subCategoryIds) {
              setSelectedCategory(item.name);
            }
          });
      });
    } else if (!!props.filters.categoryIds) {
      props.categoryList &&
        props.categoryList.some((item) => {
          if (item.id === props.filters.categoryIds) {
            setSelectedCategory(item.name);
          }
        });
    } else {
      setSelectedCategory(null);
    }
    window.addEventListener("mouseup", (e) => {
      if (
        e.target["textContent"] == "همه دسته بندی" ||
        e.target.tagName === "svg" ||
        e.target.parentElement.tagName === "LI" ||
        e.target.parentElement.tagName === "UL"
      ) {
        e.stopPropagation();
        return;
      } else {
        setOpenList(false);
      }
    });
  }, [props.filters.subCategoryIds, props.filters.categoryIds]);

  function listToggle() {
    setOpenList(!openList);
  }

  function handleSearch(e) {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      props.filterList({ key: "" });
    }
  }
  function handleKeyDown(e) {
    const { altKey, ctrlKey, keyCode, metaKey, repeat, shiftKey } = event;

    switch (keyCode) {
      // enter
      case 13: {
        if (!altKey && !ctrlKey && !metaKey && !shiftKey) {
          if (!repeat) {
            handleSearch(e);
            props.filterList({ key: searchValue });
          }
          event.preventDefault();
          event.stopPropagation();
        }
        break;
      }
      // esc
      case 27: {
      }
      // arrow up
      case 38: {
        break;
      }
    }
  }

  return (
    <Grid container justify="space-between">
      <Grid
        container
        item
        justify="space-between"
        md={6}
        className={classes.root}
      >
        <div className={classes.searchWrapper}>
          <Button
            className={classNames(
              classes.categorySelectBtn,
              classes.sectionDesktop
            )}
            disableRipple={true}
            onClick={listToggle}
            endIcon={<ExpandMoreIcon className={classes.expandCategory} />}
          >
            {selectedCategory ? selectedCategory : "همه دسته بندی"}
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            className={[classes.divider, classes.sectionDesktop].join(" ")}
          />
          <input
            type="text"
            value={searchValue}
            onKeyDown={handleKeyDown}
            onChange={handleSearch}
            className={classes.input}
            placeholder="جستجو در اساتید"
          />
        </div>
        <IconButton
          className={classes.searchBtn}
          size="small"
          onClick={() => {
            props.filterList({ key: searchValue });
          }}
        >
          <SearchIcon
            fontSize="29px"
            style={{ color: "#fff", width: "29px", height: "29px" }}
          />
        </IconButton>
        {openList ? (
          <div className={classes.categoryRoot}>
            <div className={classes.parentCategoriesWrapper}>
              <ul className={classes.categoryList}>
                <li
                  className={classes.categoryListItem}
                  onClick={() => {
                    props.filterList({ subCategoryIds: "", categoryIds: "" });
                    setSelectedCategory("");
                    setOpenList(false);
                  }}
                >
                  <img src={allCategoryIcon} alt="" />
                  <span>همه دسته بندی ها</span>
                </li>
                {props.categoryList && props.categoryList.length > 0 ? (
                  props.categoryList.map((item) => (
                    <li
                      className={[
                        classes.categoryListItem,
                        selectedParent == item.id
                          ? classes.categoryListItemParentSelected
                          : "",
                      ].join(" ")}
                      onMouseEnter={() => {
                        setSelectedParent(item.id);
                      }}
                      onClick={() => {
                        props.filterList({
                          categoryIds: item.id,
                          subCategoryIds: "",
                        });
                        setSelectedCategory(item.name);
                      }}
                    >
                      <img src={transform.getImage(item.url)} alt="" />
                      <span>{item.name}</span>
                      <ChevronLeftIcon />
                    </li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <div className={classes.childCategoriesWrapper}>
              {props.categoryList && props.categoryList.length > 0 ? (
                props.categoryList.map((item) => (
                  <>
                    {selectedParent == item.id ? (
                      <div className={classes.childCategoriesRoot}>
                        {transform.chunkArray(item.subList, 36).map((item) => (
                          <ul className={classes.childCategoryList}>
                            {item.map((item) => (
                              <li
                                key={"catrgory_" + item.id}
                                className={classes.childCategoryListItem}
                                onClick={() => {
                                  props.filterList({ subCategoryIds: item.id });
                                  setSelectedCategory(item.name);
                                  setOpenList(false);
                                }}
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </Grid>
      {props.adviserCont > 0 && (
        <Grid
          item
          md={2}
          justify="flex-end"
          className={classes.advRootContainer}
        >
          <img src={advIcon} alt="تعداد اساتید" />
          <Typography>
            {numberFormat.toPersianDigits(
              numberFormat.putCommas(props.adviserCont)
            )}{" "}
            استاد
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

Search.propTypes = {};

const mapStateToProps = (state) => ({
  categoryList: state.filters.categoryList,
  filters: state.filters.filters,
  adviserCont: state.advisers.total,
});

export default connect(mapStateToProps, { getCategoryList, filterList })(
  Search
);
