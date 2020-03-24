import DispatcherRegister from './dispatchers/DispatcherRegister';
import DispatcherAccount  from './dispatchers/DispatcherAccount';
import {ArrStrAny}        from '../types/common';

export default class DispatcherFactory {
    readonly name  : string;
    readonly mapper: ArrStrAny = {
        'register': DispatcherRegister,
        'account' : DispatcherAccount
    };

    constructor(name: string) {
        this.name = name;
    }

    resolve() {
        return new this.mapper[this.name];
    }
}
