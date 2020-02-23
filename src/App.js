import React, { useState } from 'react';
import Search from './Components/Search';
import Axios from 'axios';
import Results from './Components/Results/Results';
import Popup from './Components/Popup';

function App() {
  let api = 'http://www.omdbapi.com/?apikey=e3fa814';

  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {}
  });

  const searchHandler = event => {
    if (event.key === 'Enter') {
      Axios(api + `&s=${state.searchQuery}`).then(response => {
        const search = response.data.Search;
        console.log(search);
        setState(prevState => {
          return {
            ...prevState,
            results: search
          };
        });
      });
    }
  };

  const inputHandler = event => {
    event.preventDefault();
    let input = event.target.value;
    setState(prevState => {
      return {
        ...prevState,
        searchQuery: input
      };
    });
  };

  const openPopupHandler = id => {
    Axios(api + `&i=${id}`).then(response => {
      let data = response.data;
      setState(prevState => {
        return {
          ...prevState,
          selected: data
        };
      });
    });
  };

  const closePopupHandler = () => {
    setState(prevState => {
      return {
        ...prevState,
        selected: {}
      };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
        <br />
        <h4>An Online Open Movie Database Client</h4>
        <br />
      </header>
      <main>
        <Search
          inputTerm={state.searchQuery}
          handleTheInput={inputHandler}
          handleTheSearch={searchHandler}
        />
        <Results results={state.results} openPopup={openPopupHandler} />
        {typeof state.selected.Title !== 'undefined' ? (
          <Popup selected={state.selected} closePopup={closePopupHandler} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
