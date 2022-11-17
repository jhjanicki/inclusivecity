import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { URLStateProvider } from './URLStateContext';
import { App } from './App';

ReactDOM.render(
  <BrowserRouter>
    <URLStateProvider>
      <App />
    </URLStateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
