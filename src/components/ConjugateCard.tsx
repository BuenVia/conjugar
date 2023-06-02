import React, { useState } from 'react'
import { Verb } from "../flashcard.model";

interface VerbProps {
    verb: Verb
}

const ConjugateCard: React.FC<VerbProps> = (props) => {

    const [conjugationIndex, setConjugationIndex] = useState(0)
    const [formIndex, setFormIndex] = useState(0)

    
    return (
        <div className="card-container">
            <div className="verb-container">
                <p>{props.verb.translation}</p>
                <h3>{props.verb.infinitve}</h3>
            </div>
            <div className="conjugation-container">
                <div className="details-container">
                    <p>{props.verb.conjugations[conjugationIndex].tense}</p>
                    <h3>{props.verb.conjugations[conjugationIndex].forms[formIndex].pronoun}</h3>
                </div>
                <form className="user-form">
                    <input type="text" />
                    <button type="submit">Go</button>
                </form>
            </div>
        </div>
    )
}

export default ConjugateCard