import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navbar from './components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

/*
 PSUJE TEN KOD HAHA!
  Zadania do wykonania:
  Figma: https://www.figma.com/file/k6ay6K1LuBRSbSJglIz7ZU/Developer-Portfolio-Website-Design-(Community)?type=design&node-id=0-1&mode=design&t=LwHpGDXcGL0TZJyB-0

  Osoba z numerem 1: 
  1. Stworzy sekcję EXPERIENCE WITH
    - ikonek technologii poszukać w React Icons

  Osoba z numerem 2: 
  1. Stworzyć sekcję PROJECTS
    - projekt powinien mieć tytuł, opis i zdjęcie
    - przygotuj zmienną, która będzie miała wszystkie dane [{image, title, url}] - url zostaw pusty
    - project tile powinien być osobnym komponentem
    - obrazki można zaimportować z figmy
    - te tile nie musza przekierowywać do podstron
  
  Osoba z numerem 3:
  1. Stworzyć sekcję EXPERIENCE, usupełnić 2/3 wpisy
    - przygotować zmienną, która będzie miała wszystkie dane [{logo, title, spanOfTime, description}]

  Osoba  z numerem 4:
  1. Przygotować podstronę Projects, która będzie wypisywała nam projekty tak jak na figmie w sekcji Projects

  Osoba z numerem 5: 
  1. Przygotować podstronę Experience, która będzie wypisywała nam projekty tak jak na figmie w sekcji EXPERIENCE
    - porzygotuj zmienną, która będzie miała wszystkie dane [{logo, title, spanOfTime, description}]
    - pamiętaj o container!

  Przed rozpoczeciem zadania pamiętaj o przepięciu się na swojego brancha!
  (jeśli jesteś na branchu main)
  git checkout develop
  git pull
  git checkout -b person_0X (pod X podstaw swój numer)

  (jesli jesteś na branchu develop)
  git pull
  git checkout -b person_0X (pod X podstaw swój numer)

  po skończonym zadaniu:
  git add .
  git commit -m "opis tego co zrobiłeś/aś"
  git push -u origin


  Po skończeniu swojego zadania proszę o stworzenie PR'ki na githubie i zakomunikowanie na chacie, że skończyliście.
  
  ---
  Podczas zadania można korzystać z internetu, notatek, wszystkiego.
  Na zadanie macie 30 - 45 minut.
*/
