import {PortfolioApiResponse, PortfolioItem, PortfolioList} from '../../types/portfolio';
import ApiCaller                                            from '../../network/ApiCaller';

export default class ItemResolver {
    readonly id: string;
    readonly list: PortfolioList;

    constructor(id: string, list: PortfolioList) {
        this.id   = id;
        this.list = list;
    }

    public async run(): Promise<PortfolioItem | null> {
        let item = this.resolveFromStateList();

        if (item) {
            return new Promise((resolve, reject) => {
                resolve(item);
            });

        } else {
            return this.resolveItemFromApi();
        }
    }

    private resolveFromStateList() {
        let itemResolved: PortfolioItem | null = null;

        if (this.list.length) {
            this.list.forEach(item => {
                if (item.id === this.id) {
                    itemResolved = item;
                }
            });
        }

        return itemResolved;
    }


    private async resolveItemFromApi(): Promise<PortfolioItem | null> {
        return new Promise((resolve, reject) => {
            new ApiCaller().setEndpoint('portfolio?id=' + this.id).get()
                .then((result: PortfolioApiResponse) => {
                    resolve(result.list[0]);
                });
        });
    }
}
