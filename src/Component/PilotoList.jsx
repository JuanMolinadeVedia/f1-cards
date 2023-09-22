// PilotoList.jsx
import React from 'react';
import PilotoCard from './PilotoCard'; // Importamos el componente PilotoCard

const PilotoList = ({ drivers }) => {
  const sortedDrivers = [...drivers].sort((a, b) => a.ranking - b.ranking);

  return (
    <>
      {sortedDrivers.map(driver => (
        <PilotoCard key={`${driver.name} ${driver.surname}`} driver={driver} />
      ))}
    </>
  );
};

export default PilotoList;
