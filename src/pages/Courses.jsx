import React from 'react';
import { usePath } from '../hooks/usePath'

export const Courses = () => {
  const isHome = usePath();

  return (
    <div>
      {isHome ? <p>Estou na página inicial!</p> : <p>Não estou na página inicial.</p>}
    </div>
  );
};
