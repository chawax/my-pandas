import { History } from 'history';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createSelector } from 'reselect';
import PandaDetails from '../../components/PandaDetails';
import { AppState } from '../../redux';
import { Panda } from '../../types';

const usePanda = (id: string): Panda | undefined => {
  // On crée un sélecteur avec reselect pour pouvoir filter les pandas ici
  // Le hook useSelector ne peut en effet prendre qu'un seul paramètre : le state en entier
  // Pas terrible ... Doit-on continuer à utiliser connect dans ce cas ?
  // Ou est-ce une mauvaise pratique de passer un paramètre à un sélecteur ?
  const findPanda = createSelector(
    (state: AppState) => state.pandas.data,
    (pandas) => pandas.find((panda) => panda.key === id),
  );
  const panda: Panda | undefined = useSelector(findPanda);

  return panda;
};

const PandaDetailsPage = () => {
  const history: History = useHistory();
  const { id } = useParams<{ id: string }>(); // Récupération du paramètre `id` dans le path

  const panda = usePanda(id!); // Le ! permet de dire à Typescript qu'on sait ce qu'on fait, cette valeur ne sera jamais nulle !

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
