import { Sails } from "./index";

export const MyAction: Sails.MachineAction = {
  friendlyName: 'Simple Sails Machine Action',
  description: 'I am a Sails Action2 Machine',
  inputs: {
    phrase: {
      type: 'string',
      required: true,
    }
  },
  exits: {
  },
  fn: async function (inputs: Sails.MachineInputs | any, exits: Sails.MachineExits | any) {
    const phrase = inputs.phase;

    return exits.success();
  }
};

export const MyModelAttributes: Sails.ModelAttributes = {
  name: {
    type: 'string',
    required: true,
  }
};

export const MyModel: Sails.Model<typeof MyModelAttributes> = {
  friendlyName: 'My Sails Model',
  description: 'This is my Sails Model',
  extendedDescription: `
  Sails model typed in Typescript`,
  attributes: MyModelAttributes,
}
