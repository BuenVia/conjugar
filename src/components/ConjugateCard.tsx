import React, { useState, useRef } from 'react'
import { Verb } from "../flashcard.model";

interface VerbProps {
    verb: Verb
    infinitive: string
    translation: string
    nextQuestionHandler: () => void
}


const ConjugateCard: React.FC<VerbProps> = (props) => {
    console.log(props);
    
 
    const [userAnswer, setUserAnswer] = useState<string>("")
 

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
                    <input type="text" name="userAnsInput" onChange={e => setUserAnswer(e.target.value)} value={userAnswer} />
                    <button type="submit">Go</button>
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