import React, { useState, useEffect } from 'react'
import { Verb } from "../flashcard.model";

interface VerbProps {
    verb: Verb
    nextQuestionHandler: () => void
}


const ConjugateCard: React.FC<VerbProps> = (props) => {
    
    /* TODO => Randomly generate indexes */

    const [moodIndex, setMoodIndex] = useState(0)
    const [tenseIndex, setTenseIndex] = useState(0)
    const [formIndex, setFormIndex] = useState(0)
    const [userAns, setUserAns] = useState("")

    const changeHandler = (e: React.FormEvent) => {
        const ans = e.target as HTMLInputElement
        setUserAns(ans.value)
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const answer = props.verb.moods[moodIndex].tenses[tenseIndex].forms[formIndex].spanish
        if (userAns === answer) {
            props.nextQuestionHandler()
        } else {
            console.log(false);
        }
    }
    
    return (
        <div className="card-container">

            <div className="verb-container">
                <p>{props.verb.translation}</p>
                <h3>{props.verb.infinitve}</h3>
            </div>
            
            <div className="conjugation-container">
                <div className="details-container">
                    <p>{props.verb.moods[moodIndex].mood}</p>
                    <p>{props.verb.moods[moodIndex].tenses[tenseIndex].tense}</p>
                    <h3>{props.verb.moods[moodIndex].tenses[tenseIndex].forms[formIndex].pronoun}</h3>
                </div>
                <form className="user-form" onSubmit={submitHandler}>
                    <input type="text" name='userAnswer' onChange={changeHandler} value={userAns} />
                    <button type="submit">Go</button>
                </form>
            </div>
            
            <div className="list-container">
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
            </div>
        </div>
    )
}

export default ConjugateCard