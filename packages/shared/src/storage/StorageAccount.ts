import StorageBase   from './StorageBase';
import {AccountData} from '../types/account';

class StorageAccount extends StorageBase {

    protected key = 'account_data';

    async fetch() {
        return super.fetch()
            .then((result: string | null) => {
                return result ? JSON.parse(result) : {};
            });
    }

    async remove() {
        return super.remove();
    }

    public static buildData(result: AccountData, fromApi: boolean = true) {
        let data = {
            first_name: fromApi ? result.user.metadata.first_name : result.first_name,
            last_name : fromApi ? result.user.metadata.last_name : result.last_name,
            phone1    : fromApi ? result.user.metadata.phone1 : result.phone1,
        };

        return JSON.stringify(data);
    }
}

export default StorageAccount;
