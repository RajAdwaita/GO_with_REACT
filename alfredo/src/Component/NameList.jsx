import React from 'react'
import Person from "./Person";

function NameList() {

    const persons = [
        {
            id: 1,
            name: "Adwaita",
            age: 19,
            skill: "HTYML"

        },
        {
            id: 2,
            name: "Amvrin",
            age: 11,
            skill: "YML"

        },
        {
            id: 3,
            name: "Aita",
            age: 15,
            skill: "TYML"

        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)

    return <div>{personList}</div>

}

export default NameList
