import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import db from './firebase';
import './css/comment.css';
import { useStateValue } from './stateProvider';
import Header from './Header';
import profilImg from './image/profileImage.png';



function CommentsPage() {
  const location = useLocation();
  const confession = location.state.confession;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [{ isLoggedIn , user }] = useStateValue();
  const [commentedBy,setCommentedBy]=useState("");
  


useEffect(() => {
    const fetchComments = async () => {
      try {
        const snapshot = await db
          .collection('comments')
          .where('confessionId', '==', confession.id)
          .get();
  
        const commentsData = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const commentData = doc.data();

            const userSnapshot = await db.collection('users').doc(commentData.userId).get();
            const userData = userSnapshot.data();
            const { userId, displayName, photoURL } = commentData;

            console.log('userData:', userData);

            // const { displayName, photoURL } = userData || {};

            return {
              ...commentData,
              user: {
                // userData,
              name: displayName, // Assign displayName to the name property
              photoURL: photoURL,
            },
            };
          })
        );

        console.log('commentsData:', commentsData);
  
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    fetchComments();
  }, [confession]);



  const handleAddComment = () => {
    
    if (newComment.trim() !== '') {
      const currentUser = user;
      const { email, displayName, photoURL } = user;
      if (currentUser) {
        db.collection('comments')
          .add({
            confessionId: confession.id,
            text: newComment,
            userEmail: email,
            userName:displayName,
            userPhotoURL: photoURL,
            // Add other necessary fields like userId and timestamp
          })
          .then(() => {
            setNewComment('');
            setCommentedBy(currentUser)
          })
          .catch((error) => {
            console.error('Error adding comment:', error);
          });
      } 
      else {
        console.error('Invalid current user data');
      }
    }
  };
  

  return (
    <div className='comment-page'>
        <Header/>

        <div className='comment-app-body'>

            {/*comment part*/}
            <div className="comment_confess__item">
            <h4 className="confess__college">{confession.college}</h4>
            <p className="confess__date">
              {confession.date && new Date(confession.date).toLocaleDateString()}
            </p>
            <div className="underline"></div>
            <p className="confess__message">{confession.message}</p>
            <div className="underline"></div>
            
          </div>

          {/*comment section*/}

          <div className='comments-section'>
            <div className='comments-section-header' style={{width:'100%'}}>
              <h2>Comments</h2>
            </div>
            <div className="comment-underline"></div>
            
            {comments.map((comment, index) => (
              <div className='comment-by-user' key={index}>
                <div className='comment-user'>
                  <img src={comment.userPhotoURL || profilImg } className='user-profile-image'/>
                  <h6>{comment.userName}</h6>
                </div>
                <p>{comment.text}</p>
                <div className="comment-underline"></div>
              </div>
              
            ))}
          </div>
        </div>
      
       
        <div className='comment-container'>
  {isLoggedIn ? (
    <>
      <input
        type="text"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Submit</button>
    </>
  ) : (
    <h2>Sign in to make a comment</h2>
  )}
</div>
    </div>
  );
}

export default CommentsPage;
