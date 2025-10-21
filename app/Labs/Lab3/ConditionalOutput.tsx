export default function ConditionalOutput() {
  const loggedIn = true;
  return (
    <div id="wd-conditional-output">
      <h4>Generating Conditional Output</h4>
      {loggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
      <hr />
    </div>
  );
}
