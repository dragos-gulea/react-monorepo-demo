import StorageBase from './StorageBase';
declare class StorageClientTitles extends StorageBase {
    protected key: string;
    fetch(): Promise<any>;
}
export default StorageClientTitles;
