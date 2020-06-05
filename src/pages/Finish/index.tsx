import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const Finish = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 2000);
  }, [history]);

  return (
    <div id='page-finish'>
      <FiCheckCircle id='page-icon' size={70} />
      <h1>Cadastro concluído!</h1>
    </div>
  );
};

export default Finish;
