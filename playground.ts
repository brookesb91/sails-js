import { Sails } from "./index";

export var Action: Sails.MachineAction = {
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
  fn: async function (inputs: Sails.MachineInputs, exits: Sails.MachineExits | any) {
    const phrase = inputs.phase;

    return exits.success();
  }
};