import { PortfolioItem, PortfolioList } from '../../types/portfolio';
export default class ItemResolver {
    readonly id: string;
    readonly list: PortfolioList;
    constructor(id: string, list: PortfolioList);
    run(): Promise<PortfolioItem | null>;
    private resolveFromStateList;
    private resolveItemFromApi;
}
