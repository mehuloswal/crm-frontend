import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Entry } from './pages/entry/Entry';
import { DefaultLayout } from './layout/DefaultLayout'

function App() {
  return (
    <div >
      {/* <Entry /> */}
      <DefaultLayout/>
    </div>
  );
}

export default App;
