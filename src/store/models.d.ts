export interface EntriesResponse {
  count: number;
  entries?: Entrie[] | null;
}
export interface Entrie {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface HomePageData {
  apilists: Entrie[],
  sortOption: string,
  page: number,
  perPage: number,
  pages: number[]
}

export interface DetailsPageData {
    name: string,
    description: string,
    category: string,
    auth: string,
    cors: string,
    https: boolean,
    link: string
}

export interface CategoriesPageData {
      apiCategorylist: string[],
      page: number,
      perPage: number,
      pages: number[]
}

export interface RelatedItemsData {
  relatedApiLists: Entrie[],
  name: string,
  description: string,
  relatedApiListsSize: number
}

export interface ICallback {
	( response:Entrie[] ) : void;
}

export interface CategoriesCallback {
  (response:string[]): void;
}

export interface DetailCallback {
  ( response:Entrie ) : void
}

export interface GetAnimalsEntries {
  (ICallback:Function)
}

export interface Pagination {
  (apilists:Entrie[]): Entrie[]
}

export interface returnApiList {
  ():Entrie[]
}
