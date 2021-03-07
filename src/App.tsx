import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import EntryList from './components/EntryList'
import SearchBar from './components/SearchBar'
import useSearch from './backend/search'
import getEntries from './backend/dataSource'

function App() {

  const possibleEntires = getEntries()

  const {entries, setSearchInput, setPossibleEntries} = useSearch(possibleEntires)

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
          <SearchBar callback={setSearchInput}/>
          <EntryList displayedEntries={entries}/>
        </body>
      </div>
    </div>
  )
}

export default App