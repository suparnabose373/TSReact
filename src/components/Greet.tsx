import React, { useRef, useEffect } from "react";

type GreetProps = {
    name: string
    messageCount?: number //Optional props. Can also declare a value for the optional props
    isLoggedIn: boolean
    status: 'loading' | 'success'
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
    // value: string
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  // const inputRef = useRef<HTMLInputElement>(null!);
  // putting ! before null let's us not put optional chaining in inputRef.current?.focus()
  const onChangeHandler = ((e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value)
  })

  // useEffect(() => {
  //   inputRef.current.focus()
  // },[])

  return (
    <div className="App">
    {props.isLoggedIn && (props.status === "loading" || props.status === "success")
    ? <div>
        Hi {props.name}! You have {messageCount} unread messages
        <div>
          <input type="text" onChange={onChangeHandler}/>
          <button onClick={(e) => props.handleClick(e, 1)}>Click Me!</button>
        </div>
      </div>
    : `Welcome guest`}
    </div>
  );
}

export default Greet;
