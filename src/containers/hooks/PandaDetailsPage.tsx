import { History } from 'history';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import PandaDetails from '../../components/PandaDetails';
import { AppState } from '../../redux/store';
import { Panda } from '../../types/Pandas';

const PandaDetailsPage = () => {
  const history: History = useHistory();
  const { id } = useParams(); // Récupération du paramètre `id` dans le path

  // On crée un sélecteur avec reselect pour pouvoir filter les pandas ici
  // Le hook useSelector ne peut en effet prendre qu'un seul paramètre : le state en entier
  // Pas terrible ... Doit-on continuer à utiliser connect dans ce cas ?
  // Ou est-ce une mauvaise pratique de passer un paramètre à un sélecteur ?
  const findPanda = createSelector(
    (state: AppState) => state.pandas.data,
    pandas => pandas.find(panda => panda.key === id),
  );
  const panda: Panda | undefined = useSelector(findPanda);

  const handleClose = () => {
    history.replace('/hooks/pandas');
  };

  return (
    <>
      <div style={{ padding: 20 }}>{panda ? <PandaDetails panda={panda} onClose={handleClose} /> : null}</div>
    </>
  );
};

export default PandaDetailsPage;
