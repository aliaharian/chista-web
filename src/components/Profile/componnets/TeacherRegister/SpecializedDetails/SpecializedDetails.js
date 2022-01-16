import React, { useEffect, useState } from 'react';
import Style from '../../../../../assets/stylesheet/profile/teacherRegister.module.scss';
import KitStyle from '../../../../Kit/Style/kits.module.scss';
import Search from '../../../../../assets/images/profile/registerOstad/search.svg';
import Hamburger from '../../../../../assets/images/profile/registerOstad/hamburger.svg';
import RectangleCheckbox from '../../../../Kit/Checkbox/RectangleCheckbox';
import ModalLayoutWithHeader from '../../../../Kit/Layouts/ModalLayoutWithHeader';
import SelectCategory from '../../../../Common/SelectCategory';
import Alert from '../../../../../assets/images/profile/registerOstad/alert.svg';
import ChistaSearchInput from '../../../../Kit/Inputs/ChistaSearchInput';
import Back from '../../../../../assets/images/profile/registerOstad/ArrowRight.svg';
import Close from '../../../../../assets/images/profile/registerOstad/closeModal.svg';
import NoData from '../../../../../assets/images/profile/registerOstad/noDataSearched.svg';
import { connect, useDispatch } from 'react-redux';
import { getAllCategory, getCategoriesWithParentIdConcat, getCategoryNoFilter } from '../../../../../../redux/category';
import InfiniteScroll from 'react-infinite-scroll-component';

function CategoriesItems(props) {

    const [isChecked, setIsChecked] = useState(false)
    const selectItem = () => {
        if(isChecked) {
            let locArr = props.selectedCourses
            let filteredData = locArr.filter(item => {
                return item.id != props.data.id
            })
            props.setSelectedCourses(filteredData)
            setIsChecked(false)
        }
        else {
            let locArr = props.selectedCourses
            props.setSelectedCourses([...locArr, props.data])
            setIsChecked(true)
        }
    }
    return (
        <div className={Style.categoriesItem} onClick={selectItem}>
            <RectangleCheckbox
            isChecked={isChecked}
            />
            <div>
                <p>
                    {props.data.name}
                </p>
                <p>
                    {props.data.parents.map((item, index) => 
                        index + 1 == props.data.parents.length ? `${item.name}` : ` ${item.name} ، `
                    )}
                </p>
            </div>
        </div>
    )
}

function SpecializedDetails(props) {
    
    const [inCategories, setInCategories] = useState(false)
    const [fields, setFields] = useState(null)
    const [inSearchMode, setInSearchMode] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [pageNumber, setPageNumber] = useState(2)
    const [pageSize, setPageSize] = useState(10)
    const [fromCategory, setFromCategory] = useState(false)
    const [courses, setCourses] = useState([...props.courses])
    const [typeOfLazy, setTypeOfLazy] = useState(0)
    const Dispatch = useDispatch();

    useEffect(() => {
        props.getCategoryNoFilter(10, 1);
    }, {})

    useEffect(() => {
        setCourses([...props.courses])
    }, props.courses)

    const loadMore = () => {
        console.log(typeOfLazy)
        if(typeOfLazy == 0) {
            Dispatch(
                getAllCategory(
                "type=COURSE",
                pageSize ,
                pageNumber + 1,
                (data) => setCourses(data)
                )
            )
            setPageNumber(pageNumber + 1)
        }
        else if(typeOfLazy == 1) {
            Dispatch(
                getCategoriesWithParentIdConcat(
                fields.id,
                pageSize,
                pageNumber + 1,
                'COURSE',
                (data) => setCourses(data)
                )
            )
            setPageNumber(pageNumber + 1)
        }
        
    }

    const searchCourses = (e) => {
        setSearchText(e.target.value)
        let arr = []
        if(e.target.value != '') {
            for(let i = 0; i < props.courses.length; i++) {
                if(props.courses[i].name.includes(e.target.value)) {
                    arr = [...arr, props.courses[i]]
                }
            }
            setCourses([...arr])
        }
        else {
            setCourses([...props.courses])
        }
    }
    return (
        <div
        className={Style.specializedDesktopContainer}
        >
            <ModalLayoutWithHeader
            hideBackdrop={true}
            openDialog={inCategories}
            >
                <SelectCategory
                onClose={() => setInCategories(false)}
                handleField={(value) => setFields(value)}
                courser={props.courses}
                setFromCategory={() => setFromCategory(true)}
                setTypeOfLazy={(value) => setTypeOfLazy(value)}
                />
            </ModalLayoutWithHeader>
            {props.selectedCourses.length > 5 && props.selectedCoursesError ?
                <div className={Style.alertForMaxFields}>
                    <img src={Alert} alt={'alert'}/>
                    <p>
                        حداکثر ماده درسی انتخاب شده نباید بیشتر از 5 ماده درسی باشد.
                    </p>
                </div>
            : 
            props.selectedCourses.length == 0 && props.selectedCoursesError ?
                <div className={Style.alertForMaxFields}>
                    <img src={Alert} alt={'alert'}/>
                    <p>
                        حداقل یک ماده درسی باید انتخاب شود.
                    </p>
                </div>
            : null
            }
            <p className={props.selectedCoursesError ? Style.hintForMaxFields : null}>
                شما میتوانید حداکثر 5 ماده درسی از تمام دسته بندی ها انتخاب نمایید
            </p>
            {!inSearchMode ? 
                <div className={Style.actionsContainer}>
                    <div>
                        <img onClick={() => setInSearchMode(true)} src={Search} alt={'img'}/>
                    </div>
                    <div onClick={() => setInCategories(true)}>
                        <img src={Hamburger} alt={'allCategories'}/>
                        <span>
                            {fields !== null ? fields.name : 'دسته بندی ها'}
                        </span>
                    </div>
                </div>
            :
                <div className={Style.searchContainer}>
                    <ChistaSearchInput
                    customClassContainer={KitStyle.searchInput_height40_gray_twoIcon}
                    onClickFirstIcon={() => {setInSearchMode(false); setSearchText(''); setCourses([...props.courses])}}
                    icon={Back}
                    lastIcon={Close}
                    showLastIcon={searchText != ''}
                    inputValue={searchText}
                    placeholder={'جستجو در ماده درسی'}
                    onChange={(e) => searchCourses(e)}
                    onClickLastIcon={() => {setSearchText(''); setCourses([...props.courses])}}
                    inputClassName={Style.searchInputClassName}
                    />
                </div>
            }
            {/* {searchText !== '' ? 
                <div className={Style.NoData}>
                    <img src={NoData} alt={'noData'}/>
                    <p>
                        موردی یافت نشد
                    </p>
                </div>
                : */}
                <div
                className={Style.itemsContainer}
                id={'infiniteScroll'}
                >
                    <InfiniteScroll
                        dataLength={courses.length}
                        next={loadMore}
                        hasMore={true && !fromCategory}
                        loader={null}
                        scrollableTarget={'infiniteScroll'}
                    >
                    {/* <p style={{ textAlign: "center" }}>در حال بارگزاری...</p> */}
                    {courses.length > 0 ? courses.map(item =>
                        <CategoriesItems 
                        selectedCourses={props.selectedCourses} 
                        setSelectedCourses={(value) => props.setSelectedCourses(value)}
                        data={item}/>
                    ) : 
                    
                        <div className={Style.NoData}>
                            <img src={NoData} alt={'noData'}/>
                            <p>
                                موردی یافت نشد
                            </p>
                        </div>
                    }
                    </InfiniteScroll>
                </div>

            {/* } */}
        </div>
    )
}

export default connect(null, {getAllCategory, getCategoryNoFilter, getCategoriesWithParentIdConcat})(SpecializedDetails);