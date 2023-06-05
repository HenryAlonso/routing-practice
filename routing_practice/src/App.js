import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from 'react-router-dom';

const Home = (props) => {
  return (
    <h1>Welcome to the Home page</h1>
  );
}

const YourNumber = (props) => {
  const { number } = useParams();
  const isValidNumber = !isNaN(Number(number));

  return (
    <div>
      {isValidNumber ? (
        <h1>Your Number Is: { number }</h1>
      ) : (
        <h1>Invalid Number Entered</h1>
      )}
    </div>
  );
}

const YourWord = (props) => {
  const { word } = useParams();

  return (
    <h1>The Word is: { word }</h1>
  );
}

const CustomText = (props) => {
  const { word, color, bgColor } = useParams();

  if(typeof word !== 'string') {
    return <h1>Words only for this route!</h1>;
  }

  return (
    <div style={{ backgroundColor: bgColor}}>
      <h1 style={{color: color}}>The Word is: { word }</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/number/:number' element={<YourNumber />} />
          <Route path='/word/:word' element={<YourWord />} />
          <Route path='/:word/:color/:bgColor' element={ <CustomText/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
