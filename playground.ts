export const TestMachine: Sails.MachineAction = {
  inputs: {
    myFirstInput: {
      type: 'string',
    },
    myOtherInput: {
      type: 'number',
    }
  },
  exits: {},
  fn: (inputs, exits) => {

  }
};
