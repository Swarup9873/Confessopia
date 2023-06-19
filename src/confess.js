import React, { useEffect, useState } from 'react';
import './css/confess.css';
import db from './firebase';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { useStateValue } from './stateProvider';
import {useNavigate } from 'react-router-dom';



function Confess() {
  const [confessions, setConfessions] = useState([]);
  const [{ isLoggedIn , user }] = useStateValue();
  const navigate = useNavigate();



  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        const snapshot = await db.collection('confession').get();
        const confessionData = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...data,
            id:doc.id,
            liked: false,
            date:data.date.toDate(),
          };
        });
        setConfessions(confessionData);
      } catch (error) {
        console.error('Error fetching confessions:', error);
      }
    };

    fetchConfessions();
  }, []);



  const handleLike = (index) => {


    if (isLoggedIn) {
      const updatedConfessions = [...confessions];
      const confession = updatedConfessions[index];
  
      if (!confession.liked) {
        confession.likes += 1;
        confession.liked = true;
        if (!confession.likedBy) {
          confession.likedBy = []; // Initialize `likedBy` as an empty array
        }
        const userIndex = confession.likedBy.indexOf(user.email);
      if (userIndex === -1) {
        // User's email does not exist in `likedBy` array, allow liking
        confession.likedBy.push(user.email); // Store the user's email in the `likedBy` array
      } else {
        // User has already liked this confession, prevent multiple likes
        return;
      }

      } else {
        confession.likes -= 1;
        confession.liked = false;
        const userIndex = confession.likedBy.indexOf(user.email);
      if (userIndex > -1) {
        confession.likedBy.splice(userIndex, 1); // Remove the user's email from the `likedBy` array
      }
      }
  
      db.collection('confession')
        .doc(confession.id)
        .update({
          likes: confession.likes,
          liked: confession.liked,
          likedBy: confession.likedBy,
        })
        .then(() => {
          setConfessions(updatedConfessions);
        })
        .catch((error) => {
          console.error('Error updating likes:', error);
        });
    } else {
      navigate('/login');
    }
  };
  


  return (
    <div className="confess">
      <div className="confess__body">
        {confessions.map((confession, index) => (
          <div className="confess__item" key={index}>
            <h4 className="confess__college">{confession.college}</h4>
            <p className="confess__date">
              {confession.date && new Date(confession.date).toLocaleDateString()}
            </p>
            <div className="underline"></div>
            <p className="confess__message">{confession.message}</p>
            <div className="underline"></div>
            <div className="confess-icons">
              <div
                className={`icon-wrapper ${confessions[index].liked ? 'liked' : ''}`}
                onClick={() => handleLike(index)}
              >
                <FavoriteBorderIcon style={confessions[index].liked ?{color:'red'}:{color:'black'}}/>
                <span className="like-count" style={{color:'black'}}>{confessions[index].likes}</span>
              </div>
              
              <CommentIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Confess;
