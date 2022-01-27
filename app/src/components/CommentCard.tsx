import { useState } from 'react';
import { Exercise } from '../App';

interface CommentProps {
  exercise: Exercise;
}

export const CommentCard = (props: CommentProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <h3>Discuss "{props.exercise.name}"</h3>
      <button onClick={() => setIsOpen(true)}>Add Comment</button>
      {isOpen ? <input type='text' /> : null}
    </section>
  );
};
