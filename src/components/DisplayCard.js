import {useState} from 'react';
import './DisplayCard.css';
import {useNavigate} from 'react-router-dom';
const Display = (props) => { 
  const navigate = useNavigate();
  const [favItem, setFavItem] = useState(false);
  const deleteHandler = (id) => {
   props.OndeleteHandler(id);
   }; 
  const addToFavourite = (id) => {
   setFavItem(!favItem);
   props.OnAddfavourite(id);
  };
const heartClass = favItem ? 'fa fa-heart' : 'fa fa-heart-o';    
    return(
        <div className = "card">
          <div>
            <img src="passport.PNG" align="middle" ></img>
          </div>
          <div className = "userName">
            {props.name}
          </div>
          <div className="userEmail">
          <i className="fa fa-envelope"></i> {props.email}
           </div>
           <div className="phnNumber">
           <i className="fa fa-phone"></i> {props.phnNumber}
           </div>
           <a className="webSite" href='#'>
           <i className="fa fa-globe"></i> https://{props.website}
           </a>
           <div>
           <button className="heart" onClick={() => addToFavourite(props.id)}><i className={heartClass}></i></button>
           <button className="edit" onClick={() => {navigate(`/edit_User/${props.id}`)}}><i className = "fa fa-edit"></i></button>
           <button className="delete" value= {props.id} onClick={() => deleteHandler(props.id)}><i className="fa fa-trash-o"></i></button>
           </div>
        </div>

    );

};
export default Display;