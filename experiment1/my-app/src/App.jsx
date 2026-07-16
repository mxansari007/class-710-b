import StudentProfile from './StudentProfile'

const App = () =>{

  const students = [
    {name: "Alice1", course: "Computer Science", year: 2026},
    {name: "Bob", course: "Mathematics", year: 2027},
    {name: "Charlie", course: "Physics", year: 2028}
  ]


  return <div>
      <h1>Hello, World!</h1>
      <StudentProfile students={students}/>
  </div>
}


export default App;
