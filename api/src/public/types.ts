export interface SeriesInterface {
    title: string;
    done: boolean;
    preview?: string;
    author: AuthorInterface;
    comics?: ComicInterface[];
}
export interface ComicInterface {
    title?: string;
    number?: number;
    preview?: string;
    haveIt: boolean;
    researched: boolean;
    author: AuthorInterface;
    serie?: SeriesInterface;
}
export interface AuthorInterface {
    name: string;
    comics?: ComicInterface[];
    serie?: SeriesInterface[];
}
