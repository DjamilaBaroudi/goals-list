import React from "react";
import './GoalItem.css'

const GoalItem = props => {
    return (
        <div className="goal-item">
            <button>{props.content}</button>
        </div>

    )
}

export default GoalItem;