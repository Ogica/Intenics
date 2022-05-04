import { BrowserRouter as Router, Route, Link, Routes}
        from "react-router-dom";
import Page1 from "./Components/page1"
import Page2 from "./Components/page2"
import Page3 from "./Components/page3"
import "./App.css"
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure({
  Auth: {
    region: 'eu-central-1',
    identityPoolRegion: 'eu-central-1',
    userPoolId: 'eu-central-1_5NuWTysW8',
    userPoolWebClientId: '50obq0f76crauk0q5r06ku5pkn',
  }
});

export default function App() {
  return (
    <div className="App">
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
            <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
}
