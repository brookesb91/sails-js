import Waterline = require('waterline');

declare namespace Sails {

	export type Model = Waterline.Model & {
		friendlyName?: string;
		description?: string;
		extendedDescription?: string;
		attributes: ModelAttributes;
		customToJSON?: () => Model;
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

	export type Actions2 = {
		friendlyName?: string;
		description?: string;
		extendedDescription?: string;
		fn: Fn;
	}

	export type Input = {
		type: "string" | "number" | "boolean" | "ref" | any;
		description?: string;
		extendedDescription?: string;
		required?: boolean;
		example?: any;
	}

	export type Exit = {
		responseType?: string;
		statusCode?: string;
	}

	export type Inputs = {
		[key: string]: Input | any
	};

	export type Exits = {
		[key: string]: Exit | any;
		success(): void;
	}

	export type Fn = (inputs: any, exits: any) => void;
}