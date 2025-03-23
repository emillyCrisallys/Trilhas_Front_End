// src/Animal.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import animalData from './AnimalData';

const Animal: React.FC = () => {
  
    const { name } = useParams<{ name: string }>();

   
    if (!name) {
        return <p>Nome do animal não fornecido.</p>;
    }

   
    const animalDescription = animalData[name.toLowerCase()]; 

    return (
        <div>
            <h1>Animal: {name}</h1>
            {animalDescription ? (
                <p>{animalDescription}</p>
            ) : (
                <p>Desculpe, não temos informações sobre esse animal.</p>
            )}
        </div>
    );
};

export default Animal;