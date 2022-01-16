import React, { useState } from 'react';
import Style from '../../assets/stylesheet/help.module.scss';
import SearchIcon from '../../assets/images/searchIcon.svg';
import Close from '../../assets/images/close_search.svg';
import axios from 'axios';

function SearchHelp({placeHolder}) {
    const [searchRes, setSearchRes] = useState([]);
    const [keyword, setKeyword] = useState(placeHolder);

    const onChangeSearchKeyword = async (e) => {
        setKeyword(e.target.value)
        if(e.target?.value != '')  {
            await axios.get(`${process.env.REACT_APP_BASE_URL}/help/suggest/${e.target.value}?max=4`).then((value) => {
                setSearchRes(value.data)
            })
        }
        else if(e.target?.value == '') setSearchRes([])
    }

    const goSearchPage = () => {
        if(keyword != '' && keyword != null) window.location.assign(`/help/search/${keyword}?page=1`)
    }

    const deleteSearchText = () => {
        setKeyword('')
        setSearchRes([])
    }

    const goSearchPageWithEnter = (e) => {
        if(keyword != '' && keyword != null && e.key === 'Enter') window.location.assign(`/help/search/${keyword}?page=1`)
    }

    return (
        <div className={Style.nextLevelSearchView}>
            <div className={Style.nextLevelSearchInput}>
                <input
                value={keyword}
                placeholder={"جستجو"}
                onChange={(e) => onChangeSearchKeyword(e)}
                onKeyDown={e => goSearchPageWithEnter(e)}
                />
                {keyword && keyword != "" ? <img src={Close} alt={'cancel'} className={Style.clearSearchText} onClick={deleteSearchText}/> : null}
                {keyword && keyword != "" ? <div className={Style.divider}/> : null}
                <img src={SearchIcon} alt={'search'} onClick={goSearchPage}/>
            </div>
            {searchRes.length > 0 ? 
                <div className={Style.firstLevelSuggestView}>
                    {searchRes.map((item) => (
                        <a href={`/help/description/${item.id}`}>
                            <div>
                                <p>{`${item.title} -`}</p>
                                <span>{`${item.parents && item.parents[0]?.value}  (${item.parents && item.parents[1]?.value})`}</span>
                            </div>
                        </a>
                    ))}
                </div>
            :
            null}    
        </div>
    );
}

export default SearchHelp;