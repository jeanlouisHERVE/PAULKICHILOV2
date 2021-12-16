import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from 'src/components/App';

const rootComponent = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
const target = document.getElementById('root');
render(rootComponent, target);
