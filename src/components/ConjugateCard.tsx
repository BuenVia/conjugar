import React, { useState, useRef, useEffect } from 'react'
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
        console.log(ansSplit);
        console.log(valSplit);
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
    }, [changeHandler])

    return (
        <div className="card-container">

            <div className="verb-container">
                <p>{props.translation}</p>
                <h3>{props.infinitive}</h3>
            </div>
            
            <div className="conjugation-container">
                <div className="details-container">
                    <p>{props.verb.mood}</p>
                    <p>{props.verb.tense}</p>
                    <h3>{props.verb.pronoun}</h3>
                </div>
                <form className="user-form" onSubmit={e => submitHandler(e)}>
                    <input type="text" name="userAnsInput" onChange={e => changeHandler(e)} style={wrongChar ? {color: 'red'} : {color: 'whitesmoke'}} value={userAnswer} />
                    {showBtn && <button type="submit">Go</button>}
                </form>
            </div>
            
            {/* <div className="list-container">
                {props.verb.moods.map(mood => {
                    return (
                        <div>
                            <h3>{mood.mood}</h3>
                            {mood.tenses.map(tense => {
                                return (
                                    <div className='list-mood-container'>
                                        <h4>{tense.tense}</h4>
                                        {tense.forms.map(form => {
                                            return (
                                                <div className='list-form-container'>
                                                    <p>{form.pronoun} {form.spanish}: {form.engligh}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div> */}

        </div>
    )
}

export default ConjugateCard