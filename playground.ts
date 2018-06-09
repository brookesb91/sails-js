import { Sails } from "./index";

export const MyAction = <Sails.Actions2>{
  friendlyName: 'Simple Sails Machine Action',
  description: 'I am a Sails Action2 Machine',
  inputs: {
  },
  exits: {
  },
  fn: async function (inputs: any, exits: any) {
    const record = await MyModel.findOne();

    return exits.success();
  }
};


export const MyModel = <Sails.Model>{
  friendlyName: 'My Sails Model',
  description: 'This is my Sails Model',
  extendedDescription: `
  Sails model typed in Typescript`,
  attributes: <Sails.ModelAttributes>{
    name: {
      type: 'string',
      required: true,
    }
  }
}


