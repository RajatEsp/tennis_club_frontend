import logo from './logo.svg';
import './App.css';
//==================================  Import all dependencies  ============================

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import config from './config/config'
import home from './componets/home';
import Login from './componets/login';
import VerifyAccount from './componets/login'
import signup from './componets/singup';
import background from './componets/background';
import packagesplan from './componets/packagesplan'
import support  from './componets/support';
import forgot from './componets/forgot';
import resetpassword from './componets/resetpassword';
import myprofile from './componets/myprofile';
import demo from './componets/demo';
import coartlist from './componets/coartlist';
import trainerlist from './componets/trainerlist';
import trainerdetails from './componets/trainerdetails';
import coartbooking from './componets/coartbooking';
import detail from './componets/detail';
import juniordetail from './componets/juniordetail';
import servicedetail from './componets/servicedetail';
import faq from './componets/faq';
import termsandcondn from './componets/termsandcondn';
import privacyandpolicy from './componets/privacyandpolicy';
import homeslider from './componets/homeslider';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path={`${config.baseUrl}`} exact component={home} />
          <Route path={`${config.baseUrl}demo`} exact component={demo} />
          <Route path={`${config.baseUrl}Login`} exact component={Login} />
          <Route path={`${config.baseUrl}verifyAccount/:token`}  component={VerifyAccount} />
          <Route path={`${config.baseUrl}signup`} exact component={signup} />
          <Route path={`${config.baseUrl}background`} exact component={background} />
          <Route path={`${config.baseUrl}packagesplan`} exact component={packagesplan} />
          <Route path={`${config.baseUrl}support`} exact component={support} />
          <Route path={`${config.baseUrl}forgot`} exact component={forgot} />
          <Route path={`${config.baseUrl}resetpassword/:token`} exact component={resetpassword} />
          <Route path={`${config.baseUrl}myprofile`} exact component={myprofile} />
          <Route path={`${config.baseUrl}coartlist`} exact component={coartlist} />
          <Route path={`${config.baseUrl}trainerlist`} exact component={trainerlist} />
          <Route path={`${config.baseUrl}trainerdetails/:coachid`} exact component={trainerdetails} />
          <Route path={`${config.baseUrl}coartbooking/:coartid`} exact component={coartbooking} />
          <Route path={`${config.baseUrl}detail/:id`} exact component={detail} />
          <Route path={`${config.baseUrl}juniordetail`} exact component={juniordetail} />
          <Route path={`${config.baseUrl}servicedetail`} exact component={servicedetail} />
          <Route path={`${config.baseUrl}faq`} exact component={faq} />
          <Route path={`${config.baseUrl}termsandcondn`} exact component={termsandcondn} />
          <Route path={`${config.baseUrl}privacyandpolicy`} exact component={privacyandpolicy} />
          <Route path={`${config.baseUrl}homeslider`} exact component={homeslider} />
       </Switch>
      </div>
    </BrowserRouter>

  );
}


export default App;
