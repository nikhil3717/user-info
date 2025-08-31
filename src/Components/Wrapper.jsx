import React, { createContext, useState } from 'react'
import { nanoid } from "nanoid";


export const formContext =  createContext(null)

const Wrapper = (props) => {

    const [Users, setUsers] = useState([
      { id:nanoid() , name: "John Doe", age: 25, email: "john.doe@example.com" },
    
    ]);
  return (
  <formContext.Provider value={[Users, setUsers]}>{props.children}</formContext.Provider>
  )
}

export default Wrapper
