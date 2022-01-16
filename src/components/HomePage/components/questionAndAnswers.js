import React from 'react';
import QuestionAndAnswersItem from './questionAndAnswersItem';
import Style from '../../../assets/stylesheet/index.module.scss';
import { questions } from '../../../utilities/constants';

function QuestionAndAnswers() {
    return (
        <div className={Style.questionAndAnswersSection}>
            <h2>پرسش و پاسخ</h2>
            <div container className={Style.questAndAnswersContainer}>
                {questions.map((q, index) => (
                    <QuestionAndAnswersItem
                        q={q}
                    />
                ))}
            </div>
        </div>
    )
}

export default QuestionAndAnswers;