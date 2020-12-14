import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {Home} from '../pages/home';
import {Numbers} from '../pages/numbers'
import {CallRecording} from '../pages/callRecording'
import {Features} from '../pages/features'
import {Platform} from '../pages/platform'
import {Support} from '../pages/support'
import {Faq} from '../pages/faq'
import {Blog} from '../pages/blog'

class AppRouter extends React.Component {
    render() {
      
      return(
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />           
            <Route exact path="/numbers" component={Numbers} /> 
            <Route exact path="/call-recording" component={CallRecording} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/platform" component={Platform} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/blog" component={Blog} />
            <Route render={() => <Redirect to="/" />} /> 
            </Switch>
        </Router>
      )
    }   
  }
  export default AppRouter;