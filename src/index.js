import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import HelloWorld from './HelloWorld';
// import IncDec2 from './IncDec2';
// import UserInput3 from './UserInput3';
// import ListOfItem4 from './ListOfItem4';
// import Toggle5 from './Toggle5';
// import FetchData6 from './FetchData6';
// import Timer7 from './Timer7';
// import BGChange8 from './BGChange8';
// import Routing9 from './Routing9';

// import RandomQuote10 from './RandomQuote10';

// import UploadImage11 from './UploadImage11';  // Import UploadImage11 component

// import LoginRegistration from './LoginRegistration';  // Import LoginRegistration component

// import WeatherApp from './WeatherApp'; 

import SearchBar from './SearchBar';
const items = ["item1", "item2", "item3", "item4", "item5","Another Item", "Yet Another Item", "One More Item"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> Render App component  */}
    {/* <HelloWorld /> */}
    {/* <IncDec2/> */}
    {/* <UserInput3/> */}
    {/* <ListOfItem4/> */}
    {/* <Toggle5/> */}
    {/* <FetchData6 /> */}
    {/* <Timer7 /> */}
    {/* <BGChange8 /> */}
    {/* <Routing9 /> */}
    {/* <RandomQuote10 />    */}
    {/* <UploadImage11 /> }
    {/* <LoginRegistration />  */}
    {/* <WeatherApp />  */}
    <SearchBar items={items} />
  </React.StrictMode>
);


