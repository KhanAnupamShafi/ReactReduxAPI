import Users from "./components/Users/User";

function App() {
  return (
    <div>
      <h2>Hello World</h2>
      <Users />
    </div>
  );
}

export default App;

// step 1: create service folder => constants, actions, reducer
// step 2: create constants and actions->with type/payload. use axios when fetching data in async function
// step 3: create reducer by stating initialState first.
// step 4: create sore by installing react-redux and redux-thunk package and apply middleware.
// step 5: use provider in root js.
