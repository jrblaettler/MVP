import { useState, useEffect } from 'react';
import { Exercise } from '../App';
import axios from 'axios';

interface CommentProps {
  exercise: Exercise;
}

interface Comment {
  User: string;
  body: string;
  exercise_id: number;
}

export const CommentCard = (props: CommentProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [commentUser, setCommentUser] = useState<string>('');
  const [commentBody, setCommentBody] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async (): Promise<void> => {
    try {
      const { data } = await axios.get(`api/comments/${props.exercise.id}`);
      setComments(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCommentSubmit = async (
    e: React.SyntheticEvent
  ): Promise<void> => {
    e.preventDefault();
    try {
      const body = {
        User: commentUser,
        body: commentBody,
        exercise_id: props.exercise.id,
      };
      await axios.post('/api/comments', body);
    } catch (err) {
      console.log(err);
    } finally {
      getComments();
    }
  };

  const renderComments = () => {
    return comments.map(comment => {
      return (
        <section className='comment-item'>
          <p>{comment.User}</p>
          <p>{comment.body}</p>
        </section>
      );
    });
  };

  return (
    <section className='comment-card'>
      <h3>Discuss "{props.exercise.name}"</h3>
      <button onClick={() => setIsOpen(true)}>Add Comment</button>
      {isOpen ? (
        <form onSubmit={e => handleCommentSubmit(e)}>
          <label htmlFor='user'>User:</label>
          <input
            type='text'
            name='user'
            onChange={e => setCommentUser(e.target.value)}
          />
          <label htmlFor='comment'>Comment:</label>
          <input
            type='text'
            name='comment'
            onChange={e => setCommentBody(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      ) : null}
      {renderComments()}
    </section>
  );
};
