import React from 'react'
import parse from 'html-react-parser'
import './Entry.css'

interface DataStructure {
    value : string;
    key : number;
}

const Entry = (props : DataStructure) => {
    return (
      <div className="entry-border">
        <div className="entry">{parse(props.value)}</div>
      </div>
    )
}

export default Entry 