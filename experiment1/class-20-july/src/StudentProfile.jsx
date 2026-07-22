// import './style.css'
import {useState} from 'react';


const StudentProfile = (students) =>{

  let [theme, setTheme] = useState('Dark');
  let [fruits, setFruits] = useState(['Apple', 'Banana', 'Mango']);

  let [student,setStudent] = useState({
    name:'Alice',
    class:'710',
    course:'Fullstack'
  })

  const changeTheme = () =>{

    setTheme((previous)=>previous === 'Dark' ? 'Light' : 'Dark');

  }

  const addFruit = () =>{
    let randomFruit = [...fruits]

    randomFruit.push('kiwi')

    setFruits(randomFruit);
  }

  const changeCourse = ()=>{
    let shallowObj = {...student, course:'CC'}
    setStudent(shallowObj);
  }

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
