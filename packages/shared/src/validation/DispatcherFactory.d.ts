import { ArrStrAny } from '../types/common';
export default class DispatcherFactory {
    readonly name: string;
    readonly mapper: ArrStrAny;
    constructor(name: string);
    resolve(): any;
}
