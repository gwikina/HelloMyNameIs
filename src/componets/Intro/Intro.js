import React from 'react'
import './Intro.css'
import axios from 'axios'
import Button from '../Button/Button.js';
import {Fragment, useState} from 'react';
 
const Intro = ({body, titles}) => {
   const [userData, setUserData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [activeUser, setActiveUser] = useState(false); 
   const [activeLink, setActiveLink] = useState(false);
   const [TITLES, setTITLES] = useState([]); ;
   const getNewRandomInt = (array) => {
       for (var i = array.length - 1; i > 0; i--) {
           var j = Math.floor(Math.random() * (i + 1));
           var temp = array[i];
           array[i] = array[j];
           array[j] = temp;
       }
       return array
   }
   const onClickHandler = () => {
       setTITLES(getNewRandomInt(titles))
       setLoading(true)
       axios.get('https://randomuser.me/api/')
       .then((response) => {
       console.log(response.data.results)
       setUserData(response.data.results)
       })
       .catch((error) =>{
       console.log(error)
       setLoading(true)
       })
       .finally(()=>{
       setLoading(false)
       setActiveUser(true)
       })    
   }
   return(
    <div className="app__user">
    {!activeUser? <Button isActive={activeUser} clicked={onClickHandler} first={true}/> : null}
    {userData.map((user, index) =>{
    return (
        <div className="intro">
            <div className="left">
                    {loading?
                    <h1> Loading </h1>
                    :
                    <div className="left-wrapper">
                    <h2 className="intro-intro"> Hello, My Name is</h2>
                    <h1 className="name"> {user.name.first} {user.name.last}</h1>
                    <div className="title">
                        <div className="title-wrapper"> 
                            <div className="title-item"> {TITLES[0]}</div>
                            <div className="title-item"> {TITLES[1]}</div>
                            <div className="title-item"> {TITLES[2]}</div>
                            <div className="title-item"> {TITLES[3]}</div>
                            <div className="title-item"> {TITLES[4]}</div>
                        </div>
                    </div>
                    <div>
                        {body}
                    </div>
                </div>
            }
            <Button isActive={activeUser} clicked={onClickHandler}/>
            </div>
            <div className="right">
                <div className="i-bg">
                    <img src={user.picture.large} alt="me" className="img"/>
                </div>
            </div>
        </div>
    )}
    )}
</div>
)
}
export default Intro;
