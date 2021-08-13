import React, { Component } from "react";

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true

        }
    }



    render() {

        // let message

        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Adwaita</div>
        // }
        // else {
        //     message = <div>Welcome Amvrin</div>
        // }

        // return <div>{message}</div>



        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Adwaita</div> :
        //         <div>Welcome Amvrin</div>
        // )


        //SHORT CIRCUIT OPERATOR APPROACH


        return this.state.isLoggedIn && <div>Welcome Adwaita</div>

        // <div>Welcome </div>

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Adwaita</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Welcome Amvrin</div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Adwaita</div>
        //         <div>Welcome amvrin</div>
        //     </div>
        // )
    }
}

export default UserGreeting;
