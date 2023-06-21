// Topics -  adding more functionality to text utils app.

// Create app - npx create-react-app appname
// Run app -  npm start
// create componet code emmit - rfc  
// component is writting in js only.
// props are the properties that pass to the app component.

import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';

function App() {
  return (
  <>
   <Navbar title="CodeWithHeeren" about="About Us"/>
   <div className="container my-3">
      <Textform heading="Enter Text To Analyze" />
   </div>
  </> 
  );
}

export default App;

