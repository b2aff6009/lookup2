import IEntry from '../classes/IEntry'
import ISheet from '../classes/ISheet'

import DummyData from '../data/dummy.json'
import Sheets from '../data/sheets.json'

import testSheet1 from '../data/testSheet1.json'
import testSheet2 from '../data/testSheet2.json'


export const getEntries = () => {
    const EntryFactory = (obj: IEntry) : IEntry => {
        return obj
    } 

    const SheetFactory = () => {

    }

    const entries : IEntry[] = DummyData.testSheet1.entries.map(EntryFactory)

    return entries
}

export const loadSheet = (Sheet : ISheet) => {
    
    if(Sheet.source?.includes('Sheet1'))
        Sheet.entries = testSheet1.entries
    else if(Sheet.source?.includes('Sheet2'))
        Sheet.entries = testSheet2.entries
}

export const getSheets = () : ISheet[] => {
    return Sheets
}

export default getEntries 