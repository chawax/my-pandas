import { rest } from 'msw';
import data from './data.json';

export const handlers = [
  // Handles a GET /pandas request
  rest.get('http://localhost:3004/pandas/', (req, res, ctx) => {
    return res(
      ctx.delay(1000), // Simulation d'un temps de réponse de 1 seconde
      ctx.status(200), // Retour d'une réponse avec le code HTTP 200
      ctx.json(data.pandas), // Retour d'un flux JSON
    );
  }),
];
