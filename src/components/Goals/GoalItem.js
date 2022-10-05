import React from "react";
import './GoalItem.css'

const GoalItem = props => {


    const deleteContentHandler = (e) => {
        e.preventDefault();

        if (e.target.innerText === props.content) {
            let goal = {
                id: props.id,
                content: props.content,
            }
            props.onDeleteGoal(goal);
        }
    }


    return (
        <div className="goal-item">
            <button
                key={props.id}
                onClick={deleteContentHandler}>
                {props.content}
            </button>
        </div>

    )
}

export default GoalItem;