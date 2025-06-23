import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';           // ✅ App is now inside components
import { Provider } from 'react-redux';
import store from './redux/store.js';              // ✅ store is now inside redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

