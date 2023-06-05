import React, { useState, useEffect } from 'react'
import { Verb } from "../flashcard.model";

interface VerbProps {
    verb: Verb
    infinitive: string
    translation: string
    nextQuestionHandler: () => void
}


const ConjugateCard: React.FC<VerbProps> = (props) => {    
 
    const [userAnswer, setUserAnswer] = useState<string>("")
    const [wrongChar, setWrongChar] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
 
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const answer = props.verb.spanish
        if (userAnswer === answer) {
            props.nextQuestionHandler()
            setUserAnswer("")
        } else {
            console.log(false);
        }
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setUserAnswer(value) 
    }

    const checkAnswer = () => {
        const ansSplit = props.verb.spanish.split("")
        const valSplit = userAnswer.split("")
        // console.log(ansSplit);
        // console.log(valSplit);
        if (valSplit[valSplit.length - 1] !== ansSplit[valSplit.length - 1]) {
            console.log(`${valSplit[valSplit.length - 1]} should be ${ansSplit[valSplit.length - 1]}`);
            setWrongChar(true)
        } else {
            setWrongChar(false)
        }
    }

    const showBtnHandler = () => {
        setShowBtn(userAnswer.length === props.verb.spanish.length && wrongChar === false ? true : false)
    }

    useEffect(() => {
        checkAnswer()
        showBtnHandler()
    }, [userAnswer])

    return (
        <div className="card-container">

            <div className="verb-container">
                <p>{props.translation}</p>
                <h3>{props.infinitive}</h3>
            </div>
            
            <div className="conjugation-container">
                <div className="details-container">
                    <div>
                        <span className='mood'>{props.verb.mood}</span>
                        <span className='tense'>{props.verb.tense}</span>
                    </div>
                    <h3>{props.verb.pronoun}</h3>
                </div>
                <form className="user-form" onSubmit={e => submitHandler(e)}>
                    <input type="text" name="userAnsInput" onChange={e => changeHandler(e)} style={wrongChar ? {color: 'red'} : {color: 'whitesmoke'}} value={userAnswer} />
                    <button type="submit" className={showBtn ? 'submit-btn' : 'submit-btn-disabled'} disabled={showBtn ? false : true}>Go</button>
                </form>
            </div>

        </div>
    )
}

export default ConjugateCard