import React from 'react';

const Form = ({textInput, setTextInput, schedule, setSchedule}) => {

  const changeHandler = (e) => {
    setTextInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (textInput == "") {
      return;
    }

    // Add the item to todo state
    setSchedule([...schedule, 
              {text: textInput, completed: false, id: Math.random() * 100}
            ]);

    // set todo to empty
    setTextInput("");
  }

  return (
    <form>
      <input onChange={changeHandler} value={textInput} name="current-schedule" placeholder="What are you trying to study?" />
      <button onClick={submitHandler}>Schedule</button>
    </form>
  )
}

export default Form;

