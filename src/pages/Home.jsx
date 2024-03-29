import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';
import { auth } from '../firebase-config';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = ({isAuth}) => {
  const [postLists, setPostList] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getPosts();
  }, [deletePost])
  


  return (
    <div className='homePage'>
      {
        postLists.map((post) => {
          return (
            <div className='post'> 
              <div className="postHeader">
                <div className="title">
                  <h1>{post.title}</h1>
                </div>
                <div className="deletePost">
                {
                isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <DeleteIcon/>
                  </button>
                )}
              </div>
              </div>
              <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home