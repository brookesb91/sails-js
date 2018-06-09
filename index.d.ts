import Waterline = require('waterline');

declare namespace Sails {


	export type Model = Waterline.Model & {
		description?: string;
		extendedDescription?: string;
		attributes?: ModelAttributes;

		customToJSON(): any;
	}

	export type ModelAttribute = {
		type: string;
		required?: boolean;
		isIn?: Array<string>;
		unique: boolean;
	};

	export type ModelAttributes = { [key: string]: ModelAttribute; };

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

	export type MachineInputs = { [key: string]: MachineInput };

	export type MachineExit = {
		responseType?: string;
		statusCode?: number;
		description?: string;
	}

	export type MachineExits = {
		success?(): void;
	};

	export type MachineFn = (inputs: MachineInputs, exits: MachineExits) => void;
}