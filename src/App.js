import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Entry } from './pages/entry/Entry';
import { DefaultLayout } from './layout/DefaultLayout'
import { Dashboard } from './pages/dashboard/dashboard'

function App() {
  return (
    <div >
      {/* <Entry /> */}
      <DefaultLayout><Dashboard/></DefaultLayout>
    </div>
  );
}

export default App;
