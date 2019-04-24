import { IDating } from './range.d';

export declare const data: HistoryData;

enum HistoryEntryType {
    Event = 0
};

export interface HistoryEntry {
    type: HistoryEntryType;
    name: string;
    title: string;
    subtitle: string;
    dating: IDating;
    shortDescription: string;
    longDescription?: string;
    imageUrl: string;
    // NOTE: temporary we're setting location manually
    position?: Partial<{
        right: number | string;
        left: number | string;
    }>
};

export interface HistoryData {
    entries: HistoricEntries
}

type HistoricEntries = HistoryEntry[];