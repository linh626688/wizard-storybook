import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {WizardContainer} from "../WizardContainer";

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
 .font-S-20 {
     font-size: 20px;
  }
  .word-break-all{
    word-break: break-word;;
  }
  .w-100{
    width: 100%;
  }
   .label-header {
    text-align: start;
    font-size: 20px;
    font-weight: 500;
    margin: 1.75rem 0;
    color: #48465b;
  }
  .head-label-item {
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: .7rem;
      color: #646c9a;
    }
  .label-item {
      font-size: 13px;
      font-weight: 300;
      line-height: 1.8rem;
      color: #646c9a;
    }
  .err-label-item {
      font-size: 12px;
      font-weight: 300;
      line-height: 1.8rem;
      color: #646c9a;
    }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WizardContainer}/>
            {/*<Route path="/wizard" component={WizardContainer} />*/}
            {/*<Route path="" component={NotFoundPage} />*/}
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    );
  }
}

export default App;
