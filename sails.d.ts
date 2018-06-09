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


  export interface Model {
    attributes: ModelAttributes;
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
    archive(criteria: Object): void;

    /**
     *
     * @param numericAttrName
     */
    avg(numericAttrName: string): number;

    /**
     *
     * @param criteria
     */
    count(criteria: Object): number;

    /**
     *
     * @param initialValues
     */
    create(initialValues: Object): void;

    /**
     *
     * @param initialValues
     */
    createEach(initialValues: Array<Object>): void;

    /**
     *
     * @param criteria
     */
    destroy(criteria: Object): void;

    /**
     *
     */
    find(): QueryBuilder | QueryResult;

    /**
     *
     */
    find(criteria: Object): QueryBuilder | QueryResult;

    /**
     *
     */
    find(id: string): QueryBuilder | QueryResult;

    /**
     *
     * @param criteria
     */
    findOne(criteria: Object): QueryBuilder | QueryResult;

    /**
     *
     * @param criteria
     * @param initialValues
     */
    findOrCreate(criteria: Object, initialValues: Object): QueryBuilder | QueryResult

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
    stream(criteria: Object);

    /**
     *
     */
    sum();

    /**
     *
     */
    update();

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

  export class QueryBuilder {
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
    fetch(): Array<QueryResult> | QueryResult

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
    populate(collection: string): QueryBuilder | Array<QueryResult> | QueryResult;

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
    then();

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

  export class QueryResult extends Record<any> {}

  export class QueryStream<T> {
    eachRecord(iterator: (record: QueryResult, next: Function) => void);
    eachBatch(iterator: (record: QueryResult, next: Function) => void);
  }

  type ActionFunction = (inputs: any, exits: any) => void;
  type Policy = (req: any, res: any, next: any) => void;
}