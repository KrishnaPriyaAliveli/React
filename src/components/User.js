import {useState} from 'react';
import  Display from'./DisplayCard.js';
const User = (props) => {
    const Users = props.Data;
    const [userData, setuserData] = useState(Users);
    const [favData, setFavData] = useState([]);
     const deleteDataHandler = (id) => {
        const newUser = userData.filter(Users => Users.id !== id);
        setuserData(newUser);
     };
     const addFavourite = (id) => {
        Users.forEach((user)=>{
            if(user.id === id) {
                favData.push(user);
            }
        });
        const addFav = [...new Set(favData)];
         setFavData(addFav);
         console.log("Favourite Data Added: ",addFav);
     };
    return(
        <div>
            { userData.map((el,index) => (
        <Display name = {el.username}
        email = {el.email}
        phnNumber={el.phone}
        website={el.website}
        id={el.id}
        OndeleteHandler={deleteDataHandler}
        OnAddfavourite={addFavourite}>
           </Display> 
      ))}
        </div>
    );
}
export default User;