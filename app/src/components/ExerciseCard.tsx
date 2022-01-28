import { useState } from 'react';
import { Exercise } from '../App';
import { CommentCard } from './CommentCard';

interface CardProps {
  exercise: Exercise;
}

export const ExerciseCard = (props: CardProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <article
        onClick={e => {
          e.stopPropagation();
          setOpen(!isOpen);
        }}
        className='exercise-item'
        key={props.exercise.id}
      >
        <div className='item-image'>
          <img className='exercise-gif' src={props.exercise.gifUrl} />
        </div>
        <div className='item-detail'>
          <p className='exercise-info'>Name: {props.exercise.name}</p>
          <p className='exercise-info'>
            Primary Target: {props.exercise.target}
          </p>
          <p className='exercise-info'>
            Necessary Equipment: {props.exercise.equipment}
          </p>
        </div>
      </article>
      {isOpen ? <CommentCard exercise={props.exercise} /> : null}
    </>
  );
};
