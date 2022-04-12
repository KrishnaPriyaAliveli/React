import {useParams, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { editUser } from '../actions';
import './editUser.css';
const EditUser=()=>{
    const userId = useParams();
    const userList = useSelector(state=>state.userList);
    const dispatch = useDispatch();
    const [user] = userList.filter(User => User.id == userId.id);
    const [userData , setUserData] = useState(user);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
     console.log(userData);
     dispatch(editUser(userData));
    }
    const inputHandler = (e,type) => {
       let value = e.target.value;
       setUserData({...userData,[type]:value});
    }

return(
    <>
    <div className="editClass">EDIT USER</div>
    <form onSubmit= {(e) => { submitHandler(e); navigate('/');}}>
    <label>Name :</label>
    <input type='text' value={userData.name} onChange={(e) => inputHandler(e, "name")}></input> 
    <label>Email Address :</label>
    <input type='text' value={userData.email} onChange={(e) => inputHandler(e, "email")}></input>
    <label>Phone Number :</label>
    <input type='text' value={userData.phone} onChange={(e) => inputHandler(e, "phone")}></input>
    <button className="submitButton">Submit</button>
    </form>
    </>
)
};
export default EditUser;