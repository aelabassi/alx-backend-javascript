import { RowID } from "./interface";
import { RowElement } from "./interface";

export interface CRUD{
    insertRow: (row: RowElement) => number;
    updateRow: (rowID: RowID, row: RowElement) => RowID;
    deleteRow: (rowID: RowID) => void;
}
