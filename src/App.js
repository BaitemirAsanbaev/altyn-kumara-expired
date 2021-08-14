import './App.css';
import Layout from './components/Layout/Layout'
import AltynKumara from './components/AltynKumara/AltynKumara'
import UpBtn from './components/UI/UpBtn/UpBtn';

function App() {
  return (
    <div className="App">
      <Layout>
        <AltynKumara/>
        <UpBtn/>
      </Layout>
    </div>
  );
}

export default App;