import { useEffect, useState } from "react"
import { Verb } from "../flashcard.model"
import ListItem from "./ListItem"

interface VerbListProps {
    verb: Verb
}

const VerbList: React.FC<VerbListProps> = (props) => {

    console.log(props);
    

    // const uniqueMoods = [...new Set(props.conjugationList.map(verb => verb.mood))]
    // const uniqueTenses = [...new Set(props.conjugationList.map(verb => verb.tense))]


    const showConjugations = () => {
        // for (let i = 0; i < uniqueMoods.length; i++) {
        //     const x = props.conjugationList.filter(val => {
        //         return val.mood === uniqueMoods[i]
        //     })
        //     for (let i = 0; i < uniqueTenses.length; i++) {
        //         const y = x.filter(val => {
        //             return val.tense === uniqueTenses[i]
        //         })
        //         if (y.length > 0) {
        //             setZedArr(prevVals => {
        //                 return [...prevVals, y]
        //             })
        //         }
        //     }
        // }
    }

    useEffect(() => {
        showConjugations()
    }, [])


    

    return (
        <div>

            {props.verb.moods.map(verb => {
                return (
                    <div className="list-container">
                        <h2>{verb.mood}</h2>
                        <p>{verb.tenses.map(tense => {
                            return (<p>{tense.tense}</p>)
                        })}</p>
                    </div>
                )
            })}
            
            {/* {uniqueMoods.map((mood) => {
            return (
                <div className="list-container">
                <h2>{mood}</h2>
                {props.conjugationList.map(verb => {
                    return <p></p>
                    // for (let i = 0; i < uniqueTenses.length; i++) {
                    //     if (verb.mood === mood && verb.tense === uniqueTenses[i]) {
                    //         console.log(props.conjugationList.filter(val => val.tense === uniqueTenses[i]));
                            
                    //         return (
                    //             <ListItem verb={verb}/>
                    //         )
                    //     }
                    // }
                })}
            </div>
            )
        })} */}
        </div>
    )
}

export default VerbList