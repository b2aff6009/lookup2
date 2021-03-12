import { useState } from 'react'
import IEntry from '../classes/IEntry'
import ISheet from '../classes/ISheet'
import { loadSheet } from './dataSource'

const useSearch = () => {
    const InitSheets : ISheet[] = []
    const [activeSheets, setActiveSheets] = useState(InitSheets)
    const InitEntrys : IEntry[] = []
    const [entries, setEntries] = useState(InitEntrys)

    const setSearchInput = (Input: string) => {
        const GetEntires = (Sheet : ISheet) : IEntry[] => {
            if (Sheet.entries == undefined)
                return []
            return Sheet.entries
        }
        const FilterFunc = (entry?: IEntry) => {
            if (entry == undefined)
                return false
            return (
            entry.tags.filter((value: string) => value.includes(Input)).length >
                0 || entry.text.includes(Input)
            )
        }
        setEntries(activeSheets.flatMap(GetEntires).filter(FilterFunc))
    }

    const setEnabledSheets = (sheet : ISheet, active : boolean) => {
        const activeFilter = (Sheet : ISheet) => {
            if (Sheet.active == undefined)
                return false
            return Sheet.active
        }

        sheet.active = active
        if (sheet.active && sheet.entries == undefined)
            loadSheet(sheet)
        setActiveSheets([...activeSheets, sheet].filter(activeFilter))
    }

    return {entries, setSearchInput, setEnabledSheets}
}

export default useSearch