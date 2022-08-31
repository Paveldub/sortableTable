import React from "react"

import "./App.css"
import { SortableTable } from "./components/SortableTable"
import data from "./data/data.json"

function App() {
  return (
    <div className="App">
      <SortableTable data={data} />
    </div>
  )
}

export default App
