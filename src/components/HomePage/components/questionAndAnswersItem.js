import React, { useState } from 'react';
import { Typography } from "@material-ui/core";
import Style from '../../../assets/stylesheet/index.module.scss';

export default function QuestionAndAnswersItem({ q }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <div
        onClick={() => { setOpen(!isOpen) }} 
        className={isOpen ? Style.questionAndAnswerTitle + " " + Style.questionAndAnswerOpened : Style.questionAndAnswerTitle}
        >
            <div>
                 <Typography>
                     {q.title}
                 </Typography>
                 <div>
                    <svg className={isOpen ? Style.quesAndAnswerIconOpened : Style.quesAndAnswerIconClosed} id="Group_15699" data-name="Group 15699" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <rect id="Rectangle_1557" data-name="Rectangle 1557" width="24px" height="24px" fill="none"/>
                        <path id="Path_13146" data-name="Path 13146" d="M15.391,11.166h-4V15.02a.8.8,0,0,1-1.6,0V11.166h-4a.771.771,0,1,1,0-1.541h4V5.771a.8.8,0,0,1,1.6,0V9.624h4a.771.771,0,1,1,0,1.541Z" transform="translate(-1 -1)" fill="rgba(12,11,49,0.5)"/>
                    </svg>
                 </div>
             </div>
             <div>
                 <Typography>
                     {q.legend}
                 </Typography>
             </div>
        </div>
    )
}
