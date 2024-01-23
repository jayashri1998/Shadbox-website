import { useState, useEffect } from "react";
import Comment from './Comment.jsx'; 
import { debounce } from "./utils";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CommentsSection ({commentData}) {
  const [commentInput, setCommentInput] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState('');
  const [comments, setComments] = useState([]);
  const { blog_id } = useParams();
  const [oldcomments, setOldComments] = useState({});
  const {id} = useParams();
  



  const onSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`/api/v1/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: commentInput,
          blog_id: id,
          user_id: id,
          commeter:user
        }),
      });
  
      if (!response.ok) {
        throw new Error('Server error');
      }
  
      const result = await response.json();
  
      if (result.success === true) {
        setError('');
        alert('Submit successfully!');
        setCommentInput('');
      } else {
        setError('Please provide complete data.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while submitting the form.');
    }
  };
  
  useEffect (() =>{
    axios.get(`/api/v1/blogs/${blog_id}`)
    .then(response => setOldComments(response.data))
    .catch(error => console.error('Error fetchig comments:', error))

  },[])
   

  function addReply(commentId, replyText) {
    let commentsWithNewReply = [...comments];
    insertComment(commentsWithNewReply, commentId, replyText);
    setComments(commentsWithNewReply);
  }

  function newComment(text) {
    return {
      id: new Date().getTime(),
      display: text,
      children: []
    };
  }

function insertComment(comments, parentId, text) {
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    if (comment.id === parentId) {
      comment.children.unshift(newComment(text));
    }
  }

  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    insertComment(comment.children, parentId, text);
  }
}

  return (
    <>
    {console.log(commentData)}
  {console.log(response)}
      <div>
        {user && (
          <div>
            <span className="ml-8">User: {user.name}</span>
          </div>
        )}
        <span className="ml-8">Discussion</span>
        <div className="rounded-lg mt-8 z-10">
          <form onSubmit={onSubmit}>
            <textarea
              className="border mx-8 rounded-lg border-gray-800 w-10/12"
              rows="4"
              cols="50"
              value={commentInput}
              onChange={(e) => {
                debounce(setCommentInput(e.target.value));
              }}
            />
            <br />
            <button
              className="border rounded-lg border-gray-800 bg-blue-400 text-center w-80 ml-8"
              type="submit"
            >
              Comment
            </button>
          </form>
        </div>
        <ul>
        {commentData && commentData.map((comment) => (
          <Comment key={comment.id} comment={comment} addReply={addReply} />
        ))}
        
         
</ul>

      </div>
    </>
  );
}
