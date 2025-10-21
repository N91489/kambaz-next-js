export default function ConditionalOutputIfElse() {
  const loggedIn = true;
  if (loggedIn) {
    return (
      <div id="wd-conditional-output-if-else">
        <h4>Welcome If Else</h4>
        <h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>
        <hr />
      </div>
    );
  } else {
    return (
      <div id="wd-conditional-output-if-else">
        <h4>Welcome If Else</h4>
        <h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>
        <hr />
      </div>
    );
  }
}
