import React, { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './homedash.css';
import SForm from './addstudent/sform'; 

function Home() {
  const [students, setStudents] = useState([]);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);

    const males = storedStudents.filter(student => student.gender === 'Male').length;
    const females = storedStudents.filter(student => student.gender === 'Female').length;
    setMaleCount(males);
    setFemaleCount(females);
  }, []);

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  console.log("setStudents in Home:", setStudents);

  return (
    <main className='mainscontainer'>


      <div className='mains-cards'>
        <div className='cardss-dashboard'>
          <div className='cardss-inner'>
            <h3 style={{fontSize:'17px'}}>Total Teachers</h3>
          </div>
          <h1 style={{fontSize:'27px'}}>26</h1>
        </div>
        <div className='cardss-dashboard'>
          <div className='cardss-inner'>
            <h3 style={{fontSize:'17px'}}>Total Students</h3>
          </div>
          <h1 style={{fontSize:'27px'}}>{students.length}</h1>
        </div>
        <div className='cardss-dashboard'>
          <div className='cardss-inner'>
            <h3 style={{fontSize:'17px'}}>Boys</h3>
          </div>
          <h1 style={{fontSize:'27px'}}>{maleCount}</h1>
        </div>
        <div className='cardss-dashboard'>
          <div className='card-inner'>
            <h3 style={{fontSize:'17px'}}>Girls</h3>
          </div>
          <h1 style={{fontSize:'27px'}}>{femaleCount}</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#ff7900" />
            <Bar dataKey="uv" fill="black" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '30px',}}>
        <table style={{ width: '80%', borderCollapse: 'collapse',position:'relative',left:"40px",borderRadius:"20px"  }}>
          <thead>
            <tr style={{ backgroundColor: '#ff7900',color:"white", }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' ,}}>Full Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Age</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Gender</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <div className="d-flex align-items-center">
                    <img 
                      src={student.profileImage} 
                      alt="Profile" 
                      style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} 
                    />
                    <p className="fw-bold mb-1">{student.firstName} {student.lastName}</p>
                  </div>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.age}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Home;
