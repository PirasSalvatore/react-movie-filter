import { useState, useEffect } from "react"

import movies from './assets/movies'


function App() {




  return (
    <>
      <div className="filter container">
        <div className="col-6 m-3">
          <label htmlFor="genreFilter" className="form-label ">Filter for genre</label>
          <input
            type="text"
            className="form-control"
            name="genreFilter"
            id="genreFilter"
            value={genreFilter}
            placeholder="Select genre"
            onChange={e => { setgenreFilter(e.target.value) }}
          />
        </div>

      </div>

      <div className="displayList container">

        <h1 className="text-center p-3">Movies on shop</h1>

        <div className="row mt-5 row-gap-2">
          {
            movies.map((movie, index) => {
              return (
                <div key={index} className="col-4 p-1">
                  <div className="card">
                    <div className="card-header">
                      <h1>{movie.title}</h1>
                    </div>
                    <div className="card-body">
                      <h3>{movie.genre}</h3>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
