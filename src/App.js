import { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';


function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayOccurred = today.getMonth() > birthDate.getMonth()
      || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayOccurred) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };
  return (
    <div className='main'>
         <h1>Age Calculator</h1>
         <h3> Enter your Date of Birth</h3>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)} />
     <br></br>
      <br></br>
     <Button variant="contained"onClick={calculateAge}>
  Calculate 
</Button>
      {age > 0 && <h2>Your age is {age}</h2>}
    </div>
  );
}

export default App;
