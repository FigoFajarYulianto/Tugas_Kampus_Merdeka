import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import AdminRoute from './routes/admin routes/AdminRoute';
import PublicRoute from './routes/PublicRoute';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        
        <PublicRoute />
        <AdminRoute />

      </BrowserRouter>
    </Provider>
  );
}

export default App;
