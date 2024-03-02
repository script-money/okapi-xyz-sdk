type ChainInfo = {
    chain_id: number;
    chain_name: string;
};
type CategoryInfo = {
    category_id: number;
    category_name: string;
};
export interface ChainsResponseType {
    error_code: 0;
    payload: {
        ChainInfoList: ChainInfo[];
    };
}
export interface CategoriesResponseType {
    error_code: 0;
    payload: {
        categories: CategoryInfo[];
    };
}
export {};
