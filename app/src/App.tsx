import React, { useEffect, useState } from 'react';
import { exerciseDb } from './apis/exerciseDb';
import { BodyPartsList } from './components/BodyPartsList';
import { ExerciseList } from './components/ExerciseList';
import { EquipmentList } from './components/EquipmentList';
import { Search } from './components/Search';

export interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
export const App = () => {
  const [exercises, setExercises] = useState<Exercise[]>(null);
  const [equipment, setEquipment] = useState<string[]>(null);
  const [hasEquipment, setHasEquipment] = useState<string[]>([]);

  useEffect(() => {
    handleSetEquipment();
  }, []);

  const handleSetExercises = async (bodyPart: string) => {
    try {
      const { data } = await exerciseDb.get(`bodyPart/${bodyPart}`);
      setExercises(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSetEquipment = async () => {
    try {
      const { data } = await exerciseDb.get('equipmentList');
      setEquipment(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleHasEquipment = (pieceName: string) => {
    hasEquipment.includes(pieceName)
      ? setHasEquipment(hasEquipment.filter(piece => piece !== pieceName))
      : setHasEquipment([...hasEquipment, pieceName]);
  };

  const handleSearchSubmit = async (term: string) => {
    const { data } = await exerciseDb.get(`name/${term}`);
    setExercises(data);
  };

  return (
    <>
      <header>Swolm8</header>
      <Search
        className='search'
        onSubmit={handleSearchSubmit}
        placeholder='Search by exercise name...'
      />
      <div className='container'>
        <BodyPartsList handleSetExercises={handleSetExercises} />
        <ExerciseList exercises={exercises} hasEquipment={hasEquipment} />
        <EquipmentList
          equipment={equipment}
          handleHasEquipment={handleHasEquipment}
        />
      </div>
    </>
  );
};
