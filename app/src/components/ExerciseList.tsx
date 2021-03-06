import { useState } from 'react';
import { Exercise } from '../App';
import { ExerciseCard } from './ExerciseCard';

interface ExerciseProps {
  exercises: Exercise[] | undefined;
  hasEquipment: string[];
}

export const ExerciseList = (props: ExerciseProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const renderExerciseList = () => {
    return props.exercises ? (
      props.exercises.map((exercise: Exercise) => {
        if (props.hasEquipment.length) {
          if (props.hasEquipment.includes(exercise.equipment)) {
            return <ExerciseCard exercise={exercise} key={exercise.id} />;
          }
        } else {
          return <ExerciseCard exercise={exercise} key={exercise.id} />;
        }
      })
    ) : (
      <p className='exercise-placeholder'>Please Select A Muscle Group</p>
    );
  };

  return <section className='exercise-list'>{renderExerciseList()}</section>;
};
