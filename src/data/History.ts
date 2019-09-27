export interface HistoryEntry {
    name: string;
    title: string;
    subtitle: string;
    from: number;
    to: number;
    short: string;
    imageUrl: string;
    wikiUrl: string;
};

export interface HistoryData {
    entries: HistoryEntry[]
};

export interface ICardData {
    name: string;
}

export interface IPlotData {
    rows: ICardData[][];
}