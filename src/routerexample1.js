import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/topics" element={<Topics />}>
            <Route path=":topicId" element={<Topic />} />
            <Route index element={<h3>Please select a topic.</h3>} />{" "}
            {/* Index route to display the message */}
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is home</p>
    </div>
  );
}
function About() {
  return <h2>About</h2>;
}
function Users() {
  return <h2>Users</h2>;
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to="Cat">Cat</Link>
        </li>
        <li>
          <Link to="Dog">Dog</Link>
        </li>
        <li>
          <Link to="Bird">Bird</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h2>Topics id is {topicId}</h2>
    </div>
  );
}

