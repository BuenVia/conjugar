import { Verb } from "../flashcard.model"

interface VerbListProps {
    verb: Verb
}

const ListItem: React.FC<VerbListProps> = (props) => {
    return (
        <div className="conjugation-list-item">
            <div className="box-left">
                <p>{props.verb.pronoun}</p>
            </div>
            <div className="box-right">
                <p>{props.verb.spanish}</p>
            </div>
        </div>
    )
}

export default ListItem