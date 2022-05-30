import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ReceitaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FarmaciaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Receita {
  readonly id: string;
  readonly number: string;
  readonly pinAcesso: string;
  readonly pinOpcao: string;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Receita, ReceitaMetaData>);
  static copyOf(source: Receita, mutator: (draft: MutableModel<Receita, ReceitaMetaData>) => MutableModel<Receita, ReceitaMetaData> | void): Receita;
}

export declare class Order {
  readonly id: string;
  readonly userID: string;
  readonly Farmacia?: Farmacia | null;
  readonly Receita?: Receita | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderFarmaciaId?: string | null;
  readonly orderReceitaId?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class Farmacia {
  readonly id: string;
  readonly name: string;
  readonly phoneNumber: string;
  readonly address: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Farmacia, FarmaciaMetaData>);
  static copyOf(source: Farmacia, mutator: (draft: MutableModel<Farmacia, FarmaciaMetaData>) => MutableModel<Farmacia, FarmaciaMetaData> | void): Farmacia;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly address: string;
  readonly Orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}