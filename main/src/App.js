import './App.css';
import {useState, useEffect} from 'react'
import {v4 as uuidv4} from "uuid"

function App() {
  // const [users, setUsers] = useState([]);
// 
  // const getUsers = async () => {
    // const request = await fetch("https://reqres.in/api/users?page=2");
    // const response = await request.json();
    // const data = response.data;
    // setUsers(data)
  // }
// 
  // useEffect(() => {
    // getUsers();
  // }, [])
// 
  // console.log("users", users);
// 

    const [fullName, setfullName] = useState("")
    const [diemToan, setDiemToan] = useState(0);
    const [diemHoa, setDiemHoa] = useState(0);
    const [sutdentsInfo, setStudentsInfo] = useState([]);

    let copyArray = [...sutdentsInfo]

    const mockStudentData = [
      {
        id: uuidv4(),
        fullName: "Nguyen Van A",
        diemToan: 2,
        diemHoa: 3,
        diemLy: 1,
      },
      {
        id:uuidv4(),
        fullName: "Nguyen Thi B",
        diemToan: 10,
        diemHoa: 8,
        diemLy: 9,
      }
    ]

    //luoi wa'
    copyArray.push( mockStudentData[0] )
    copyArray.push( mockStudentData[1] )
    console.log("pushed")

    console.log(copyArray)

    console.log(
      fullName,
      diemHoa,
      diemToan
    )

    const handleSubmit = (event) => {
      event.preventDefault();
      const newStudent = {
        id:uuidv4(),
        fullName,
        diemToan,
        diemHoa
      }
      copyArray.push(newStudent)
      setStudentsInfo(copyArray)
    }

    const scoreboard = sutdentsInfo.map((value) => {
      return(
        <div key={value.id}>
          <h3>Full Name: {value.fullName}</h3>
          <h3>Diem Toan: {value.diemToan}</h3>
          <h3>Diem Hoa: {value.diemHoa}</h3>
        </div>
      )
    })

  return (
    <div>
      <form className='form-main' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label'>Ho va Ten</label>
          <input 
              className='form-input'
              type="text"
              onChange={(event) => setfullName(event.target.value)}
            />
        </div>
        <div className='form-group'>
            <label className='form-label'>Diem Toan</label>
            <input 
                className='form-input'
                type="number"
                onChange= {(event) => setDiemToan(event.target.value)}
              />
        </div>
        <div className='form-group'>
            <label className='form-label'>Diem Hoa</label>
            <input 
                className='form-input'
                type="number"
                onChange={(event) => setDiemHoa(event.target.value)}
              />
        </div>
        <button type='submit'>submit</button> 
      </form> 
     {scoreboard} 
    </div>
  );
}

export default App;
