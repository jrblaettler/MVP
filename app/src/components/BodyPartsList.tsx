import { exerciseDb } from '../apis/exerciseDb';
import { useEffect, useState } from 'react';

interface PartsListProps {
  handleSetExercises: (bodyPart: string) => Promise<void>;
}

export const BodyPartsList = (props: PartsListProps): JSX.Element => {
  const [bodyParts, setBodyParts] = useState<string[] | undefined>(undefined);
  useEffect(() => {
    getBodyParts();
  }, []);

  const getBodyParts = async (): Promise<void> => {
    try {
      const { data } = await exerciseDb.get('bodyPartList');
      setBodyParts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderBodyPartList = (): JSX.Element | JSX.Element[] => {
    return bodyParts ? (
      bodyParts.map((part: string, i: number) => (
        <p
          className='body-part-item'
          key={i}
          onClick={() => props.handleSetExercises(part)}
        >
          {part}
        </p>
      ))
    ) : (
      <p>Loading</p>
    );
  };

  return (
    <section className='body-parts-list'>
      <h3 className='body-parts-title'>Select A Muscle Group</h3>
      {renderBodyPartList()}
    </section>
  );
};
