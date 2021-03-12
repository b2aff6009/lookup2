import logo from './logo.svg'
import './App.css'
import EntryList from './components/EntryList'
import SearchBar from './components/SearchBar'
import Selection from './components/Selection'
import useSearch from './backend/search'
import {getEntries, getSheets} from './backend/dataSource'

function App() {

  const {entries, setSearchInput, setEnabledSheets} = useSearch()

  return (
    <div className="App-border">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="center">
            Welcome to LookUp, your C H E A T provieder.
          </p>
        </header>
        <body className="App-body">
          <Selection setSelection={setEnabledSheets} sheets={getSheets()}/>
          <SearchBar callback={setSearchInput}/>
          <EntryList displayedEntries={entries}/>
        </body>
      </div>
    </div>
  )
}

export default App