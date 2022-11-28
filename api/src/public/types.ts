export interface SerieInterface {
    title: string;
    done: boolean;
    preview?: string;
    author: AuthorInterface;
    comics?: ComicInterface[];
    nbOfComics: number;
}
export interface ComicInterface {
    title: string;
    subtitle?: string;
    number: number;
    preview?: string;
    haveIt: boolean;
    researched: boolean;
    author: AuthorInterface;
    serie?: SerieInterface;
}
export interface AuthorInterface {
    name: string;
    comic?: ComicInterface[];
    serie?: SerieInterface[];
}
