declare class StorageBase {
    readonly storageLib: any;
    constructor();
    protected key: string | null;
    getKey(): string;
    save(value: string): Promise<void>;
    fetch(): Promise<any>;
    remove(): Promise<void>;
}
export default StorageBase;
