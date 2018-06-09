/**
 * Sails JS 1.0 Type definitions
 */
declare module Express {
  export interface Request {
    allParams();
  }
  export interface Response {
    view(route: string);
  }
}

declare module Sails {


  export class Model<T extends ModelAttributes> {
    attributes: T
    description?: string;
    extendedDescription?: string;

    /**
     *
     * @param parentId The primary key value for the parent record
     * @param association The name of the plural association
     * @param childIds The primary key value(s) for the child records
     */
    addToCollection(parentId: number | string, association: string, childIds: Array<number | string> | number | string): void;

    /**
     *
     * @param criteria
     */
    archive(criteria: T | any): void;

    /**
     *
     * @param numericAttrName
     */
    avg(numericAttrName: string): number;

    /**
     *
     * @param criteria
     */
    count(criteria: T ): number;

    /**
     *
     * @param initialValues
     */
    create(initialValues: T): void;

    /**
     *
     * @param initialValues
     */
    createEach(initialValues: Array<T>): QueryBuilder<T>;

    /**
     *
     * @param criteria
     */
    destroy(criteria: Object): void;

    /**
     *
     */
    find(): QueryBuilder<T>;

    /**
     *
     */
    find(criteria: Object): QueryBuilder<T>;

    /**
     *
     */
    find(id: string): QueryBuilder<T> | WaterlinePromise<Record<T>>;

    /**
     *
     * @param criteria
     */
    findOne(criteria: Object): QueryBuilder<T> | WaterlinePromise<Record<T>>;

    /**
     *
     * @param criteria
     * @param initialValues
     */
    findOrCreate(criteria: Object, initialValues: Object): QueryBuilder<T> | WaterlinePromise<Record<T>>;

    /**
     *
     */
    getDataStore();

    /**
     *
     * @param parentId
     * @param association
     * @param childIds
     */
    removeFromCollection(parentId: number | string, association: string, childIds: Array<number | string> | number | string): void;

    /**
     *
     */
    replaceCollection(parentId: number | string, association: string, childIds: Array<number | string> | number | string): void;

    /**
     *
     */
    stream(criteria: T);

    /**
     *
     */
    sum();

    /**
     *
     */
    update(criteria: T, values: any): QueryBuilder<T>;

    /**
     *
     */
    validate();
  }

  export interface ModelAttributes {
    [key: string]: {
      type: string;
      description?: string;
      required?: boolean;
      isIn?: Array<string>;
    }
  }

  export class Record<T> {
    id: string;
    createdAt: number;
    updatedAt: number;
    [key: string]: any;
  }


  export interface MachineAction {
    friendlyName?: string;
    description?: string;
    extendedDescription?: string;

    inputs: {
      [key: string]: {
        type: string;
        description?: string;
        extendedDescription?: string;
        required?: boolean;
      }
    };

    exits: {
      [key: string]: {
        type: string;
        description?: string;
        extendedDescription?: string;
        required?: boolean;
        responseType?: string;
      }
    };

    fn: ActionFunction;
  }

  export class Exits {
    success(): void;
  }

  export class QueryBuilder<T> extends WaterlinePromise<T> {
    /**
     *
     */
    catch();

    /**
     *
     */
    decrypt();

    /**
     *
     */
    exec();

    /**
     *
     */
    fetch(): Array<Record<T>> | Record<T>

    /**
     *
     */
    intercept();

    /**
     *
     */
    limit();

    /**
     *
     */
    meta();

    /**
     *
     * @param collection
     */
    populate(collection: string): QueryBuilder<T> | Array<Record<T>> | Record<T>;

    /**
     *
     */
    skip();

    /**
     *
     */
    sort();

    /**
     *
     */
    tolerate();

    /**
     *
     */
    toPromise();

    /**
     *
     */
    usingConnection();

    /**
     *
     */
    where();
  }

  export class QueryStream<T> {
    eachRecord(iterator: (record: Record<T>, next: Function) => void);
    eachBatch(iterator: (record: Record<T>, next: Function) => void);
  }

  export class WaterlinePromise<T> extends Promise<T>{
    exec(callback: (error: Error, results: Array<Record<T>>) => void);
    exec(callback: (error: Error, result: Record<T>) => void);
  }

  type ActionFunction = (inputs: any, exits: any) => void;
  type Policy = (req: any, res: any, next: any) => void;
}