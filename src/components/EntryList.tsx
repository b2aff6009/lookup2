import Entry from './Entry'
import IEntry from '../classes/IEntry'
import './EntryList.css'

interface IEntryList {
    displayedEntries : IEntry[]
}

const EntryList = (props: IEntryList) => {
  const EntryFactory = (entry: IEntry, index : number) => {
    return <Entry value={entry.text} key={index} />
  }
  return <div className="EntryList-body body">{props.displayedEntries.map(EntryFactory)}</div>
}

export default EntryList 
