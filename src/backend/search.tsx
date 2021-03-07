import { useState } from 'react'
import IEntry from '../classes/IEntry'

const useSearch = (InitEntries : IEntry[]) => {
    const [entries, setEntries] = useState(InitEntries)
    const [possibleEntires, setPossibleEntries] = useState(InitEntries)

    const setSearchInput = (Input: string) => {
        const FilterFunc = (entry: IEntry) => {
            return (
            entry.tags.filter((value: string) => value.includes(Input)).length >
                0 || entry.text.includes(Input)
            )
        }
        setEntries(possibleEntires.filter(FilterFunc))
    }

    return {entries, setSearchInput, setPossibleEntries}
}

export default useSearch