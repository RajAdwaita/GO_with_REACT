import React, { Component } from "react";

import "./App.css";
// import Inline from "./Component/Inline";
// import ClassClick from './Component/ClassClick';
// import EventBind from "./Component/EventBind";
// import NameList from "./Component/NameList";
// import ParentComponent from "./Component/ParentComponent";
// import Person from "./Component/Person";
// import UserGreeting from "./Component/UserGreeting";

// import Greet from "./Component/Greet";
// import Welcome from "./Component/Welcome";
// import Message from "./Component/Message";
// import Counter from './Component/Counter';
// import FunctionClick from "./Component/FunctionClick";
// import Stylesheets from "./Component/Stylesheets";
import './Component/appStyles.css'
import ClickCounter from "./Component/ClickCounter";
// import ParentComp from "./Component/ParentComp";
import Input from "./Input";
// import RefsDemo from "./RefsDemo";
// import PureComp from "./Component/PureComp";
// import FragmentDemo from "./Component/FragmentDemo";
// import Table from "./Component/Table";
// import LifecycleA from "./LifecycleA";
// import styles from './Component/appStyles.module.css'
// import Form from " ./Form";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        {/* <Input /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <Table /> */}
        {/* <PureComp /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FragmentDemo /> */}
        {/* <h1 className="error">ERROR</h1> */}
        {/* <h1 className={styles.success}>SUCCESS</h1> */}
        {/* <Stylesheets primary={true} /> */}
        {/* <Inline /> */}
        {/* <ParentComponent /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <EventBind />
        <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Person /> */}
        {/* <Person /> */}
        {/* <Counter />
        <Greet name="Raju" heroname="Batman" />
        <p>Children props</p>  <Greet />
        <Greet name="Poju" heroname="Superman" />
        <button>Submit</button><Greet />
        <Greet name="Liston" heroname="Ironman" />
        <Greet name="Raju" heroname="Batman" />
        <Greet name="Poju" heroname="Superman" />
        <Greet name="Liston" heroname="Ironman" />

        <Welcome name="Adwaita" heroname="Knight"/>
        <Message /> */}


      </div>
    );
  }
}
export default App;
