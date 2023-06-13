import Layout from './components/Layout';
import Home from './components/Home';
import CharacterPage from './components/CharacterPage';
import Error404 from './components/Error404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PeopleContext } from './services';
import { getPeople, getPeopleWithFilter } from './utils/api';
import { AllCharacters } from './services';
import { saveAll } from './utils/localstorage'

function App() {
  const [people, setPeople] = useState<AllCharacters>({
    count: 0,
    next: null,
    previous: null,
    results: []
  })
  const [isNext, setIsNext] = useState<boolean>(false)
  const [isPrev, setIsPrev] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!localStorage.visited) {
      saveAll('visited', [])
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    if (search) {
      getPeopleWithFilter(page, search)
        .then((res) => {
          res.next ? setIsNext(true) : setIsNext(false);
          res.previous ? setIsPrev(true) : setIsPrev(false);
          setPeople(res)
        })
        .catch(err => console.log(err))
        .finally(() => {
          setLoading(false)
        });
    } else
      getPeople(page)
        .then(res => {
          res.next ? setIsNext(true) : setIsNext(false);
          res.previous ? setIsPrev(true) : setIsPrev(false);
          setPeople(res)
        })
        .catch(err => console.log(err))
        .finally(() => {
          setLoading(false)
        });
  }, [page, search])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={
            <PeopleContext.Provider value={{ people, isNext, isPrev, setPage, page, isLoading, setSearch }}>
              <Home />
            </PeopleContext.Provider>
          } />
          <Route path="/character/:id" element={<CharacterPage />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;