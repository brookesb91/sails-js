/**
 * Sails JS 1.0 Type definitions
 */
declare module Express {
  export interface Request {
    params: {
      all(): Object
    }
  }
  export interface Response {
    view(route: string);
  }
}

 declare module Sails {


  export interface Model extends Describable {
    attributes: Object;

    addToCollection(id: number, collection: string, associations: Array<number> | number):void;

    archive();

    avg();

    count();

    create();

    createEach();

    destroy();

    find();

    removeFromCollection(id: number, collection: string, associations: Array<number> | number): void;

  }

  export class Record {
    id?: string;
    createdAt?: number;
    updatedAt?: number;
  }

  export interface Actions2 extends Describable {
    inputs?: Map<any, Input>;
    exits?: Map<any, Exit>;
  }

  export interface Input {
    type: string | any;
    required?: boolean;
  }

  export interface Exit {
    responseType?: string;
    statusCode?: number;
  }


  export interface Describable {
    friendlyName?: string;
    description?: string;
    extendedDescription?: string;
  }

  export class QueryBuilder extends Promise<any> {
    fetch(): Promise<Array<Sails.QueryResult>>;

    populate(collection: string):QueryBuilder;
  }

  export class QueryResult extends Record {

  }

  type Policy = (req: any, res: any, next: any) => void;
}