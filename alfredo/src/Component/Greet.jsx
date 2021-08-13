import React, { Children } from 'react'

const Greet = (props) => {
    // console.log(props);
    const { name, heroname } = props;
    return (
        <div>
            <h2>Hi {name} a.k.a {heroname}</h2>
            {Children.props}

        </div>
    )
}

export default Greet


