// import './style.css'

const StudentProfile = (students) =>{
    let size = 10
    const style1 = {
        border: '1px solid #ccc',
        padding: '10px',
        margin: `${size}px`,
        backgroundColor: '#f9f9f9'
    }

  return <div style={style1}>
    <p>Name : {students[0]?.name}</p>
    <p>Course : Computer Science</p>
    <p>Year : 2026</p>
  </div>
}

export default StudentProfile;
