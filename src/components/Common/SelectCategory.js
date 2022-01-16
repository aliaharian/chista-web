import React, { useEffect, useState } from 'react';
import Style from '../../assets/stylesheet/common/selectCategory.module.scss';
import Back from '../../assets/images/profile/registerOstad/ArrowRight.svg';
import {
    categoryUpdateField,
    getAllCategory,
    getCategoriesWithParentId,
    getCategoryList,
    getCategoryNoFilter
  } from '../../../redux/category';
import { connect, useDispatch } from 'react-redux';
import { transform } from '../../utilities';
import ArrowLeft from '../../assets/images/profile/registerOstad/ChevronLeft.svg';
import AllCategories from '../../assets/images/profile/registerOstad/allCategories.svg';

function SelectCategory(props) {

    const Dispatch = useDispatch();
    const [childrenLevel1, setChildrenLevel1] = useState(null)
    const [childrenLevel2, setChildrenLevel2] = useState(null)

    useEffect(() => {
        if (!props.categoryList) {
            props.getCategoryList(-1, '');
        }
        if(props.courses?.length > 0 && props.courses[0].parents[0].id == childrenLevel2?.id) {
            props.setFromCategory()
            props.handleField(childrenLevel2);
            props.setTypeOfLazy(0)
            props.onClose();
        }
    })

    const handleBack = async() => {
        if(childrenLevel2 != null) {
            await props.getCategoryList(childrenLevel1.id);
            setChildrenLevel2(null)
        }
        else if(childrenLevel1  != null) {
            await props.getCategoryList(childrenLevel1.id);
            setChildrenLevel1(null)
        }
        else {
            props.setTypeOfLazy(0)
            props.onClose();
        }
    }

    const goAll = () => {
        props.getCategoryNoFilter(10, 1);
        props.setTypeOfLazy(0)
        props.handleField(null)
        setChildrenLevel1(null)
        setChildrenLevel2(null)
        props.onClose();
    }

    const goWithThisParent = () => {
        if(childrenLevel2 != null) {
            props.getCategoriesWithParentId(childrenLevel2.id,  10, 1, 'COURSE')
            props.handleField(childrenLevel2)
            props.setTypeOfLazy(1)
            setChildrenLevel1(null)
            setChildrenLevel2(null)
            props.onClose();
        }
        else if(childrenLevel1 != null) {
            props.getCategoriesWithParentId(childrenLevel1.id,  10, 1, 'COURSE')
            props.handleField(childrenLevel1)
            props.setTypeOfLazy(1)
            setChildrenLevel1(null)
            setChildrenLevel2(null)
            props.onClose();
        }
    }

    const handleGoNextLevel = async(levelNum, item) => {
        switch(levelNum) {
            case '1':
                if(item.childCount > 0) {
                    await props.getCategoryList(item.id, item)
                    setChildrenLevel1(item)
                }
                else {
                    props.setFromCategory ? props.setFromCategory() : null
                    props.setFromCategory ? props.handleField(item) : null
                    props.setTypeOfLazy(0)
                    props.onClose();
                }
                break;
            case '2':
                if(item.childCount > 0) {
                    await props.getCategoryList(item.id)
                    setChildrenLevel2(item)
                }
                else {
                    props.setFromCategory ? props.setFromCategory() : null
                    props.setFromCategory ? props.handleField(item) : null
                    props.setTypeOfLazy(0)
                    props.onClose();
                }
                break;
            case '3':
                await props.getCategoryList(item.id)
                props.setFromCategory ? props.setFromCategory() : null
                props.setFromCategory ? props.handleField(item): null
                props.setTypeOfLazy(0)
                props.onClose();
                break;
            default:
                break;

        }
    }
    return (
        <div className={Style.selectCategoryContainer}>
            <div className={Style.selectCategoryHeader}>
                <div>
                    <img src={Back} alt={'back'} onClick={handleBack}/>
                    <span>
                        {childrenLevel2 !== null ? 
                            childrenLevel2.name
                        : childrenLevel1 !== null ?
                            childrenLevel1.name
                        : 'انتخاب دسته بندی'}
                    </span>
                </div>
                {/* {childrenLevel1 !== null &&
                    <span onClick={() => {
                        setChildrenLevel1(null)
                        setChildrenLevel2(null)
                    }}>
                        پاک کردن
                    </span>
                } */}
                
            </div>
            <div className={Style.selectCategoryBody}>
                {childrenLevel1 == null ? 
                    <div onClick={goAll}>
                        <img src={AllCategories} alt={'allCategories'}/>
                        <div>
                            <span>همه دسته‌بندی‌ها</span>
                        </div>
                        
                    </div>
                :
                    <div onClick={goWithThisParent}>
                        <div>
                            <span>همه</span>
                        </div>
                        
                    </div>
                }
                {props.categoryList && childrenLevel2 !== null ? props.categoriesChildren.map(item => (
                    <div onClick={() => handleGoNextLevel('3', item)}>
                        <div>
                            <span>{item.name}</span>
                            {item.childCount > 0 && item.type != "SUBBRANCH" ? 
                                <img src={ArrowLeft} alt={'goIn'}/>
                            : null}
                        </div>
                        
                    </div>
                )) :
                props.categoryList && childrenLevel1 !== null ? props.categoriesChildren?.map(item => (
                    <div onClick={() => handleGoNextLevel('2', item)}>
                        <div>
                            <span>{item.name}</span>
                            {item.childCount > 0 && item.type != "SUBBRANCH" ? 
                                <img src={ArrowLeft} alt={'goIn'}/>
                            : null}
                        </div>
                        
                    </div>
                ))
                : 
                props.categoryList && props.categoryList.map(item => (
                    <div onClick={() => handleGoNextLevel('1', item)}>
                        <img src={transform.getImage(item.icon)} alt={'icon'}/>
                        <div>
                            <span>{item.name}</span>
                            {item.childCount > 0 && item.type != "SUBBRANCH" ? 
                                <img src={ArrowLeft} alt={'goIn'}/>
                            : null}
                        </div>
                        
                    </div>
                ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    categoryList: state.category.categories,
    categoriesChildren: state.category.categoryChildren,
    courses: state.category.courses,
});

export default connect(mapStateToProps, { getCategoryList, getAllCategory, getCategoryNoFilter, getCategoriesWithParentId })(SelectCategory);