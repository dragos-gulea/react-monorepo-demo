import {FuncArgsUnknownVoid, Navigation} from './common';

export type LogoutProps = {
    navigation  : Navigation,
    logoutClient: (callback: FuncArgsUnknownVoid) => void,
}
