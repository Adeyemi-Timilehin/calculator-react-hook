import React from 'react'
import "./Clear.css"
export default function ClearButton(props) {
    return (
        <div className="clear-btn" onClick={props.handleClear}>{props.children}
            
        </div>
    )
}
