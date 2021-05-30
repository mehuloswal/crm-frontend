import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Entry } from './pages/entry/Entry';
import { DefaultLayout } from './layout/DefaultLayout'
import { Dashboard } from './pages/dashboard/dashboard'
import { AddTicket } from './pages/new-ticket/AddTicket'


function App() {
  return (
    <div >
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard/> */}
        <AddTicket/>
        </DefaultLayout>
    </div>
  );
}

export default App;
