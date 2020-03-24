import StorageBase from './StorageBase';
import { AccountData } from '../types/account';
declare class StorageAccount extends StorageBase {
    protected key: string;
    fetch(): Promise<any>;
    remove(): Promise<void>;
    static buildData(result: AccountData, fromApi?: boolean): string;
}
export default StorageAccount;
