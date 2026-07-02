export type ProductType = {
    id: number;
    title: string;
    band: string;
    cover: string;
    price: number;
};

export type ProductsResponse = {
    products: ProductType[];
    totalProducts: number;
    totalPages: number;
    currentPage: number;
};