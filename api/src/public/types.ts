export interface SeriesInterface {
    title: string;
    done: boolean;
    preview?: string;
    author: string;
    comics?: ComicInterface[];
}
export interface ComicInterface {
    title?: string;
    number?: number;
    preview?: string;
    author: string;
    haveIt: boolean;
    researched: boolean;
    serie: SeriesInterface;
}
