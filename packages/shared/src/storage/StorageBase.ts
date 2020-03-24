import {StorageLibProvider} from './StorageLib';

class StorageBase {

    readonly storageLib: any;

    public constructor() {
        this.storageLib = StorageLibProvider.getLib();
    }

    protected key: string | null = null;

    getKey() {
        if (this.key === null) {
            const error = 'No key provided to storage!';

            console.log(error);

            throw new Error(error);
        }

        return this.key;
    }

    async save(value: string) {
        const key = this.getKey();

        try {
            console.log('Saving item ' + key + ' to store', value);

            await this.storageLib.setItem(key, value);

        } catch (error) {
            console.log('Error saving item ' + key + ' to store', error);
        }
    }

    async fetch() {
        const key = this.getKey();

        try {
            console.log('Fetching item ' + key + ' from store');

            return await this.storageLib.getItem(key);

        } catch (error) {
            console.log('Error retrieving item ' + key + ' from store', error);

            return null;
        }
    }

    async remove() {
        const key = this.getKey();

        console.log('Removing item ' + key + ' from store');

        await this.storageLib.removeItem(key);
    }
}

export default StorageBase;
