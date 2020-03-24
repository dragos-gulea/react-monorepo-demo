import StorageBase from './StorageBase';

class StorageClientTitles extends StorageBase {

    protected key = 'client_titles';

    async fetch() {
        return super.fetch()
            .then(result => {
                if (result) {
                    return JSON.parse(result);
                }

                return null;
            });
    }
}

export default StorageClientTitles;
