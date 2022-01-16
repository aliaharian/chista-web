import Link from 'next/link';
import React from 'react';
import ArrowLeft from '../assets/images/arrow-left.svg';
import Style from '../assets/stylesheet/help.module.scss';

function HelpSearchResults({item}) {
    return(
        <Link href={`/help/description/${item.id}`}>
            <div className={Style.HelpSearchResultsContainer}>
                <p>{item.title}</p>
                <div className={Style.locationView}>
                    <span>راهنما</span>
                    {item.parents && item.parents.map(item => (
                        <React.Fragment>
                            <img src={ArrowLeft} alt={""} />
                            <span>{item.value}</span>
                        </React.Fragment>
                    ))}    
                </div>
                <span dangerouslySetInnerHTML={{__html: item.snippet}}/>
            </div>
        </Link>
    )
}

export default HelpSearchResults;