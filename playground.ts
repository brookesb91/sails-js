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
  fn: async (inputs: any, exits: Sails.Exits) => {

    const entry: Sails.Record<any> = await new Sails.Model<any>()
      .findOrCreate(
        { id: 1 },
        { name: 'I will be number 1 if it does not exist' }
      );

    const record: Sails.Record<any> = await new Sails.Model<any>()
    .find({ id: 1 });

    const updated: Sails.Record<any> = await new Sails.Model<any>()
    .update(
      {id: 1},
      { name: 'I am being updated'}
    )
    // Hmmmmmmmm...
    .fetch() as Sails.Record<any>;

    return exits.success();
  }
};
