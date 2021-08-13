import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.greetHandler("Child")}>greet parent</button>
        </div >
    )
}

export default ChildComponent
