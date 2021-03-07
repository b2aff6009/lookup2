import DummyData from '../data/dummy.json'
import IEntry from '../classes/IEntry'
import ISheet from '../classes/ISheet'

const getEntries = () => {
    const EntryFactory = (obj: IEntry) : IEntry => {
        return obj
    } 

    const SheetFactory = () => {

    }

    const entries : IEntry[] = DummyData.testSheet1.map(EntryFactory)

    return entries
}

export default getEntries 