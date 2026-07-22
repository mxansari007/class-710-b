// import './style.css'

// useState lets this component remember values between renders.
// React gives us two things for every state value:
//   1. the current value (for example, theme)
//   2. a setter function (for example, setTheme)
//
// Important: changing a normal variable does NOT update what the user sees.
// The UI is updated only when we use the matching setter function. React then
// knows that state changed and renders the component again with the new value.
import {useState} from 'react';


const StudentProfile = (students) =>{

  // theme is state, so calling setTheme will update both the value and the UI.
  let [theme, setTheme] = useState('Dark');

  // fruits is an array in state. We must not directly change the existing
  // fruits array because React needs a new value/reference to detect the update.
  let [fruits, setFruits] = useState(['Apple', 'Banana', 'Mango']);

  // student is an object in state. Its properties are shown in the JSX below.
  let [student,setStudent] = useState({
    name:'Alice',
    class:'710',
    course:'Fullstack'
  })

  const changeTheme = () =>{

    // The callback receives the previous state value. This is useful whenever
    // the next value depends on the current value.
    // Calling setTheme tells React to render the UI again with Dark or Light.
    setTheme((previous)=>previous === 'Dark' ? 'Light' : 'Dark');

  }

  const addFruit = () =>{
    // This is a shallow copy of the fruits array. The spread operator (...)
    // creates a new array containing the same fruit values.
    // We do NOT use fruits.push('kiwi') directly, because that would mutate
    // the existing state array without giving React a new array reference.
    let randomFruit = [...fruits]

    // It is safe to change the copied array.
    randomFruit.push('kiwi')

    // Passing the new array to setFruits updates the state and re-renders the UI.
    setFruits(randomFruit);
  }

  const changeCourse = ()=>{
    // This is a shallow copy of the student object. All top-level properties
    // are copied, then course is replaced with CC.
    // The original student object is not changed directly.
    let shallowObj = {...student, course:'CC'}

    // setStudent receives a new object reference, so React updates the UI.
    setStudent(shallowObj);
  }

  // JSX reads from state. After any setter function runs, React runs this
  // component again and these values appear with their latest state.
  return <div>
      <p>Theme : {theme}</p>
      <p>Name: {student.name}</p>
      <p>class : {student.class}</p>
      <p>course: {student.course}</p>
      <button onClick={changeTheme}>Change Theme</button>
      <button onClick={addFruit}>Add Fruit</button>
      <button onClick={changeCourse}>Change course</button>
      <p>Fruits : {fruits.join(', ')}</p>
  </div>
}

export default StudentProfile;
