 import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: "Adwaita"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Adwaita"
            })
        }, 2000)
    }

    render() {
        console.log('PArent Component');
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
