import React from "react";
import List from "./List";
import Form from "./Form";
import Posts from './Posts';

const App = () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <h2 >Articles</h2>
      <Posts />
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
  </>
);

export default App;