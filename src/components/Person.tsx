import React, { useState } from "react";
import { Name, personProps } from "./Person.types";

export const Person = (props: personProps) => {
    //Specify <null | Name> if the value of the state can be either null or the type Name
    // const [loginUser, setLoginUser] = useState<null | Name>(null);
    //If you want to assert that user types will always have a value. Type Assertion
    const [loginUser, setLoginUser] = useState<Name>({} as Name);
    function setUser() {
        setLoginUser({first: 'Suparna', last: 'Bose'})
    }
    return (
        <div>
            <button type="button" onClick={setUser}>View login creds</button>
            {/* If value of loginUser can be null. ?. is better */}
            {/* <h1>{loginUser?.first}</h1> */}
            <h1>{loginUser.first}</h1>
            {props.name.first} {props.name.last}
            {props.names.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}

