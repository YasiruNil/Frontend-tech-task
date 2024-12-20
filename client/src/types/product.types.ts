export type Category = {
  name: string;
  urlPath: string;
  articles: Article[];
  articleCount: number;
  childCategories: ChildCategory[];
};

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};

export type ChildCategory = {
  name: string;
  urlPath: string;
};

export type Prices = {
  currency: string;
  value: number;
};

export type Image = {
  path: string;
};

export interface ProductState {
  products: {
    errorMessage: string;
    status: string;
    list: Category[];
  };
  searchValue: string;
}

export interface CategoryState {
  categories: {
    errorMessage: string;
    status: string;
    list: Category[];
  };
}

export interface ProductsPayload {
  data: {
    categories: Category[];
  }
}

export interface CategoryPayload {
  data: {
    categories: Category[];
  }
}
