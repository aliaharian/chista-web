import React from "react";
import useStyles from "./Styles";


function AlphabetListSearch({alphabets , searchQuery , handleSearch , hasRemains}) {
    const classes = useStyles();
// console.log(searchQuery?.toLowerCase())
    return (
        <ul className={classes.alphabetList} style={{paddingLeft:12}}>
            {alphabets.map((letter) => (
                <li className={searchQuery?.toLowerCase()===letter.toLowerCase()&& classes.alphabetListActive}
                onClick={()=> {
                    searchQuery?.toLowerCase()===letter.toLowerCase() ? handleSearch(''):
                    handleSearch(letter)
                }}>
                    {letter}
                </li>
            ))}
            {
                hasRemains
                &&
                <li className={searchQuery==='#'&& classes.alphabetListActive}
                    onClick={()=> {
                        searchQuery==='#' ? handleSearch(''):
                            handleSearch('#')
                    }}>
                    {'#'}
                </li>
            }

        </ul>
    )
}

export default AlphabetListSearch