// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Receita, Order, Farmacia, User } = initSchema(schema);

export {
  Receita,
  Order,
  Farmacia,
  User
};