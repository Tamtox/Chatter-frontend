import './Styles/App.scss';
import {Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import React,{ Suspense } from 'react';
import Menu from './Components/Menu/Menu';
import Loading from './Components/Misc/Loading';

const Auth = React.lazy(()=> import('./Components/Auth/Auth'));

function App() {
  
  return (
    <div className="App">
      <Menu />
      <main>
      <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path="/auth">
              <Auth/>
            </Route>
            <Route path="/auth">
              <Auth/>
            </Route>
          </Switch>
      </Suspense>
      </main>
    </div>
  );
}

export default App;
