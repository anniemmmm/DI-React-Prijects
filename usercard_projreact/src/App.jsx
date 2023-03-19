import { useState } from "react";
import "./App.css";


function App(){

    const [user,setUser,]=useState({
        FirstName:"",
        LastName:"",
        Avatar:"",
        PhoneNumber:"",
        City:"",
    });
    const[users,setUsers]=useState([]);
    const handleValue=(target)=>setUser(prev=>{
        return{...prev,[target.name]:target.value};
    });
    const handleAdduser=(user)=>{
        setUsers((prev)=>[...prev,user]);
        setUser({
            FirstName:"",
            LastName:"",
            Avatar:"",
            PhoneNumber:"",
            City:"",
        });
    };
    return (
        <>
           <div className="containers">
                <div className="input_container">
                    <label>Ente Your Photo URL</label>
                    <input
                    name="avatar"
                    placeholder="...Photo"
                    value={user.Avatar}
                    onChange={(event)=>handleValue(event.target)}
                    />
                </div>
                <div className="input_container">
                    <label>Enter Your First Name</label>
                    <input
                    placeholder="...Ani"
                    name="firstName"
                    value={user.FirstName}
                    onChange={(e)=>handleValue(e.target)}
                    />
                </div>
                <div className="input_container">
                    <label>Enter Your Last Name</label>
                    <input
                    placeholder="...colee"
                    name="lastName"
                    value={user.LastName}
                    onChange={(e)=>handleValue(e.target)}
                    />
                </div>
                <div className="input_container">
                    <label>Enter Your Phone Number</label>
                    <input
                    placeholder="+995 595 081 520"
                    name="phoneNumber"
                    value={user.PhoneNumber}
                    onChange={(e)=>handleValue(e.target)}
                    />
                </div>
                <div className="input_container">
                    <label>Enter Your City</label>
                    <input
                    placeholder="...Tskaltubo"
                    name="City"
                    value={user.City}
                    onChange={(e)=>handleValue(e.target)}
                    />
                </div>
                <button onClick={()=>handleAdduser(user)}>Add User</button>
                <button onClick={()=>editUser(user)}>Edit User</button>
                <button onClick={()=>removeUser(user)}>Delete User</button>

           </div>
           <div className="flex-wrap"> {users.map((user)=>(
               <div className="card">
                    <div className="card_header">
                        <img src="https://w7.pngwing.com/pngs/954/328/png-transparent-computer-icons-user-profile-avatar-heroes-head-recruiter-thumbnail.png" width="100px"height="100px"></img>
                        <p>
                            <strong>{user.firstName}</strong>{" "}
                            <strong>{user.lastName}</strong>
                        </p>
                    </div>
                    <div className="card_info">
                        <p>
                            Phone Number:<strong>{user.phoneNumber}</strong>
                        </p>
                        <p>
                            City:<strong>{user.city}</strong>
                        </p>
                    </div>
                </div>
             ))}
            </div>
        </>
    );
}

export default App;