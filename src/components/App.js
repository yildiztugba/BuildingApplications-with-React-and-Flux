import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';

function App (){
  

    return (
    <div className="container-fluid">
        <Header />
        {getPAge()}
    </div>
    );

}

export default App;