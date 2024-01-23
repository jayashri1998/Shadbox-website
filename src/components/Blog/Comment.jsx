import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { debounce } from "./utils";
import axios from "axios";

export default function Comment({ comment, addReply }) {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const inputEl = useRef(null);
  const {id, blog_id, user_id } = useParams(); // Assuming you want to comment to the commenter
  const [error, setError] = useState();
  const [commentId, setCommentableId] = useState(comment.id);
  const [oldcomments, setOldComments] = useState({});

 
  const onSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch(`/api/v1/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: replyText,
          blog_id: id,
          user_id: user_id,
          comment_id: commentId
        }),
      });
 
      if (!response.ok) {
        throw new Error('Server error');
      }
 
      const result = await response.json();
      console.log(result)
      if (result.success === true) {
        setError('');
        alert('Submit successfully!');
        setReplyText('');
        setShowReplyBox(false);
        addReply(result.comment);
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

  return (
    <li className="border-2 my-8 rounded-lg shadow-lg">
      <div className="flex gap-4 mt-4 mx-4 items-center">
        <img
          src="https://avatars.githubusercontent.com/u/22263436?v=4"
          className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400"
          alt="User Avatar"
        />
        <div>
          <span>Username: {comment.user.username}</span>
          <p>{comment.body}</p>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        {!showReplyBox && (
          <button
            type="button"
            className="my-4 mx-4 border border-gray-400 hover:bg-blue-400 text-center w-32 rounded-lg"
            onClick={() =>{
              setShowReplyBox(true);

              setTimeout(() => {
                if (inputEl.current) {
                  inputEl.current.focus();
                }
              }, 0);
            }}
          >
            Reply
          </button>
        )}

        {showReplyBox && (
          <>
            <br />
            <textarea
              className="mx-16 rounded-lg border-gray-400"
              ref={inputEl}
              value={replyText}
              onChange={(e) => {
                debounce(setReplyText(e.target.value));
              }}
              type="text"
            />
            <br />
            <button
              className="my-4 mx-4 border border-gray-400 hover:bg-blue-400 text-center w-32 rounded-lg"
              type="submit"
            >
              Save
            </button>

            <button
              className="my-4 mx-4 border border-gray-400 hover:bg-blue-400 text-center w-32 rounded-lg"
              type="button"
              onClick={() => {
                setShowReplyBox(false);
                setReplyText("");
              }}
            >
              Cancel
            </button>
          </>
        )}
      </form>
           {comment.children && comment.children.length > 0 && (
        <ul>
          {comment.children.map((childComment) => (
            <Comment
              key={childComment.id}
              comment={childComment}
              addReply={addReply}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
