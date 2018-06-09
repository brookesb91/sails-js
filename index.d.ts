import Waterline = require('waterline');

declare namespace Sails {

	export type Model<T extends ModelAttributes> = {
		friendlyName?: string;
		description?: string;
		extendedDescription?: string;
		attributes: ModelAttributes;

		customToJSON?: () => any;
	}

	export interface ModelAttribute {
		type: string;
		required?: boolean;
		isIn?: Array<string>;
		unique?: boolean;
	}

	export class ModelAttributes {
		[key: string]: ModelAttribute;
	}

	export type MachineAction = {
		friendlyName?: string;
		description?: string;
		extendedDescription?: string;

		inputs: MachineInputs;
		exits: MachineExits;

		fn: MachineFn;

	}

	export type MachineInput = {
		type: string;
		description?: string;
		required?: boolean;

		isValid?: () => boolean;
	}

	export type MachineInputs = {
		[key: string]: MachineInput
	};

	export type MachineExit = {
		responseType?: string;
		statusCode?: number;
		description?: string;
	}

	export type MachineExits = {
		success?(): void;
	};

	export type MachineFn = (inputs: MachineInputs | any, exits: MachineExits | any) => void;
	export type Helper = MachineAction;
	export type Policy = (req: Express.Request, response: Express.Response, next: void) => void;
}