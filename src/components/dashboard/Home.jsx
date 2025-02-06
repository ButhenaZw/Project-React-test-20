import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import React, { useState } from "react";
 import {
   MDBCard,
   MDBCardBody,
   MDBCardHeader,
   MDBBadge,
   MDBBtn,
   MDBTable,
   MDBTableHead,
   MDBTableBody,
   MDBInput,
 } from "mdb-react-ui-kit";
 import "./homedash.css";
function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const [users, setUsers] = useState([
        {
          name: "John Doe",
          email: "john.doe@gmail.com",
          title: "Software Engineer",
          department: "IT",
          status: "Active",
          position: "Senior",
        },
        {
          name: "Alex Ray",
          email: "alex.ray@gmail.com",
          title: "Consultant",
          department: "Finance",
          status: "Onboarding",
          position: "Junior",
        },
        {
          name: "Kate Hunington",
          email: "kate.hunington@gmail.com",
          title: "Designer",
          department: "UI/UX",
          status: "Awaiting",
          position: "Senior",
        },
      ]);
    
      const [editIndex, setEditIndex] = useState(null);
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        department: "",
        status: "Active",
        position: "Junior",
      });
    
      const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        title: "",
        department: "",
        status: "Active",
        position: "Junior",
      });
    
      const [showAddUserForm, setShowAddUserForm] = useState(false);
    
      const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(users[index]);
      };
    
      const handleSave = () => {
        const updatedUsers = [...users];
        updatedUsers[editIndex] = formData;
        setUsers(updatedUsers);
        setEditIndex(null);
      };
    
      const handleCancel = () => {
        setEditIndex(null);
        setShowAddUserForm(false); 
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleNewUserChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
      };
    
      const handleAddUser = () => {
        setUsers([...users, newUser]);
        setNewUser({
          name: "",
          email: "",
          title: "",
          department: "",
          status: "Active",
          position: "Junior",
        });
        setShowAddUserForm(false);
      };
    
      const handleDeleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
      };
    

  return (
    <main className='mainscontainer'>


        <div className='mains-cards'>
            <div className='cardss-dashboard'>
                <div className='cardss-inner'>
                    <h3 style={{fontSize:"22px"}}>Total Teachers</h3>
                </div>
                <h1 style={{fontSize:"22px"}}>300</h1>
            </div>
            <div className='cardss-dashboard'>
                <div className='cardss-inner'>
                    <h3 style={{fontSize:"22px"}}>Total Students</h3>
                </div>
                <h1 style={{fontSize:"22px"}}>12</h1>
            </div>
            <div className='cardss-dashboard'>
                <div className='cardss-inner'>
                    <h3 style={{fontSize:"22px"}}>Boys</h3>
                </div>
                <h1 style={{fontSize:"22px"}}>33</h1>
            </div>
            <div className='cardss-dashboard'>
                <div className='card-inner'>
                    <h3 style={{fontSize:"22px"}}>Girls</h3>
                </div>
                <h1 style={{fontSize:"22px"}}>42</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
              
              
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#ff7900" />
                <Bar dataKey="uv" fill="#black" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#ff7900" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="black" />
                </LineChart>
            </ResponsiveContainer>
            

        </div>
        <div
      className={`main-containerss ${
        editIndex !== null || showAddUserForm ? "overlay-active" : ""
      }`}
    >
      <MDBCard className="custom-card">
        <MDBCardBody>


          <MDBTable
            className="custom-table"
            align="middle"
            style={{ marginTop: "20px" }}
          >
            <MDBTableHead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
                <th>Position</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                        alt=""
                        className="custom-avatar"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{user.name}</p>
                        <p className="text-muted mb-0">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{user.title}</p>
                    <p className="text-muted mb-0">{user.department}</p>
                  </td>
                  <td>
                    <MDBBadge color="success" pill>
                      {user.status}
                    </MDBBadge>
                  </td>
                  <td>{user.position}</td>

                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>

      {showAddUserForm && (
        <div className="edit-overlay">

        </div>
      )}

      {editIndex !== null && (
        <div className="edit-overlay">
          <MDBCard className="edit-card">
            <MDBCardHeader className="edit-header">Edit User</MDBCardHeader>
           
          </MDBCard>
        </div>
      )}
    </div>
    </main>

  )
}

export default Home