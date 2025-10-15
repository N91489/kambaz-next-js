export default function Lab3() {
  return (
    <div
      id="wd-lab3"
      style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h2>Lab 3</h2>
      <h3>Intro to TypeScript</h3>

      {/* Variables and Constants */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Variables and Constants</h4>
        <div id="wd-variables">
          <VariablesAndConstants />
        </div>
      </section>

      {/* Variable Types */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Variable Types</h4>
        <div id="wd-variable-types">
          <VariableTypes />
        </div>
      </section>

      {/* Boolean Variables */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Boolean Variables</h4>
        <div id="wd-booleans">
          <BooleanVariables />
        </div>
      </section>

      {/* If Else */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>If Else</h4>
        <div id="wd-if-else">
          <IfElse />
        </div>
      </section>

      {/* Ternary Conditional Operator */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Ternary Conditional Operator</h4>
        <div id="wd-ternary-operator">
          <TernaryOperator />
        </div>
      </section>

      {/* Conditional Output */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Generating Conditional Output</h4>
        <div id="wd-conditional-output">
          <ConditionalOutput />
        </div>
      </section>

      {/* Welcome If Else */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Welcome If Else</h4>
        <div id="wd-welcome-if-else">
          <WelcomeIfElse loggedIn={true} />
          <WelcomeIfElse loggedIn={false} />
        </div>
      </section>

      {/* Please Login Inline */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Please Login Inline</h4>
        <div id="wd-login-inline">
          <LoginInline loggedIn={true} />
          <LoginInline loggedIn={false} />
        </div>
      </section>

      {/* Legacy ES5 Function */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Legacy ES5 Function</h4>
        <div id="wd-es5-function">
          <ES5Function />
        </div>
      </section>

      {/* ES6 Arrow Functions */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>ES6 Arrow Functions</h4>
        <div id="wd-es6-arrow">
          <ES6ArrowFunctions />
        </div>
      </section>

      {/* Implied Returns */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Implied Returns</h4>
        <div id="wd-implied-return">
          <ImpliedReturns />
        </div>
      </section>

      {/* Template Literals */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Template Literals</h4>
        <div id="wd-template-literals">
          <TemplateLiterals />
        </div>
      </section>

      {/* Working with Arrays */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Working with Arrays</h4>
        <div id="wd-arrays">
          <WorkingWithArrays />
        </div>
      </section>

      {/* Array Index and Length */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Array Index and Length</h4>
        <div id="wd-array-index-length">
          <ArrayIndexAndLength />
        </div>
      </section>

      {/* Adding and Removing Data */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Adding and Removing Data to/from Arrays</h4>
        <div id="wd-array-add-remove">
          <AddRemoveArrayData />
        </div>
      </section>

      {/* For Loops */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>For Loops</h4>
        <div id="wd-for-loops">
          <ForLoops />
        </div>
      </section>

      {/* Map Function */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>The Map Function</h4>
        <div id="wd-map-function">
          <MapFunction />
        </div>
      </section>

      {/* Find Function */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>The Find Function</h4>
        <div id="wd-find-function">
          <FindFunction />
        </div>
      </section>

      {/* Find Index Function */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>The Find Index Function</h4>
        <div id="wd-find-index">
          <FindIndexFunction />
        </div>
      </section>

      {/* Filter Function */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>The Filter Function</h4>
        <div id="wd-filter-function">
          <FilterFunction />
        </div>
      </section>

      {/* JSON */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>JavaScript Object Notation (JSON)</h4>
        <div id="wd-json">
          <JsonExample />
        </div>
      </section>

      {/* Todo List */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Implementing a Simple ToDo List</h4>
        <div id="wd-todo-list">
          <TodoList />
        </div>
      </section>

      {/* Spread Operator */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>The Spread Operator</h4>
        <div id="wd-spread-operator">
          <SpreadOperator />
        </div>
      </section>

      {/* Destructuring */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Destructuring</h4>
        <div id="wd-destructuring">
          <Destructuring />
        </div>
      </section>

      {/* Function Destructuring */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Function Destructuring</h4>
        <div id="wd-function-destructuring">
          <FunctionDestructuring />
        </div>
      </section>

      {/* HTML Classes */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Working with HTML Classes</h4>
        <div id="wd-html-classes">
          <p className="wd-fg-color-red" style={{ color: "red" }}>
            Red Paragraph
          </p>
          <p className="wd-fg-color-green" style={{ color: "green" }}>
            Green Paragraph
          </p>
        </div>
      </section>

      {/* Red Dangerous Background */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Red Dangerous Background</h4>
        <div
          id="wd-dangerous-bg"
          className="wd-bg-color-red wd-fg-color-white"
          style={{ backgroundColor: "red", color: "white", padding: "15px" }}
        >
          Dangerous background
        </div>
      </section>

      {/* Blue Dynamic Background */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Blue Dynamic Background</h4>
        <div
          id="wd-blue-bg"
          className="wd-bg-color-blue wd-fg-color-white"
          style={{ backgroundColor: "blue", color: "white", padding: "15px" }}
        >
          Blue background
        </div>
      </section>

      {/* Style Attribute */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Working with HTML Style Attribute</h4>
        <div id="wd-style-attribute">
          <div
            style={{
              backgroundColor: "yellow",
              color: "black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            Yellow Background
          </div>
          <div
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            Red Background
          </div>
          <div
            style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
          >
            Blue Background
          </div>
        </div>
      </section>

      {/* Parameterizing Components */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Parameterizing Components</h4>
        <div id="wd-parameterize">
          <ParameterizedComponent color="red" />
          <ParameterizedComponent color="blue" />
        </div>
      </section>

      {/* Child Components */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Child Components</h4>
        <div id="wd-children">
          <ParentComponent>
            <h5>Child Content</h5>
            <p>This is passed as children</p>
          </ParentComponent>
        </div>
      </section>

      {/* Location */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Working with Location</h4>
        <div id="wd-location">
          <p>Current pathname: /lab3</p>
        </div>
      </section>

      {/* Path Parameters */}
      <section
        style={{
          marginBottom: "30px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "20px",
        }}
      >
        <h4>Encoding Path Parameters</h4>
        <div id="wd-path-params">
          <PathParameters />
        </div>
      </section>

      {/* Calculator */}
      <section style={{ marginBottom: "30px", paddingBottom: "20px" }}>
        <h4>Simple Calculator</h4>
        <div id="wd-calculator">
          <Calculator />
        </div>
      </section>
    </div>
  );
}

// Component Definitions
function VariablesAndConstants() {
  const a = 5;
  const b = 10;
  return (
    <div>
      <p>a = {a}</p>
      <p>b = {b}</p>
    </div>
  );
}

function VariableTypes() {
  const numberVar: number = 123;
  const stringVar: string = "Hello";
  const boolVar: boolean = true;
  return (
    <div>
      <p>Number: {numberVar}</p>
      <p>String: {stringVar}</p>
      <p>Boolean: {boolVar.toString()}</p>
    </div>
  );
}

function BooleanVariables() {
  const done: boolean = true;
  const pending: boolean = false;
  return (
    <div>
      <p>done = {done.toString()}</p>
      <p>pending = {pending.toString()}</p>
    </div>
  );
}

function IfElse() {
  const isEven = (num: number) => {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  };
  return (
    <div>
      <p>4 is {isEven(4)}</p>
      <p>5 is {isEven(5)}</p>
    </div>
  );
}

function TernaryOperator() {
  const result = 10 > 5 ? "Greater" : "Lesser";
  return <p>10 is {result} than 5</p>;
}

function ConditionalOutput() {
  const loggedIn = true;
  return <div>{loggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}</div>;
}

function WelcomeIfElse({ loggedIn }: { loggedIn: boolean }) {
  if (loggedIn) {
    return <p>Welcome!</p>;
  } else {
    return <p>Please log in</p>;
  }
}

function LoginInline({ loggedIn }: { loggedIn: boolean }) {
  return <div>{loggedIn ? <p>Welcome!</p> : <p>Please log in</p>}</div>;
}

function ES5Function() {
  function greet(name: string) {
    return "Hello, " + name;
  }
  return <p>{greet("ES5")}</p>;
}

function ES6ArrowFunctions() {
  const greet = (name: string) => {
    return `Hello, ${name}`;
  };
  return <p>{greet("ES6")}</p>;
}

function ImpliedReturns() {
  const square = (x: number) => x * x;
  return <p>Square of 5 is {square(5)}</p>;
}

function TemplateLiterals() {
  const name = "TypeScript";
  const year = 2024;
  return <p>{`Learning ${name} in ${year}`}</p>;
}

function WorkingWithArrays() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <p>Array: [{numbers.join(", ")}]</p>
    </div>
  );
}

function ArrayIndexAndLength() {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <p>First fruit: {fruits[0]}</p>
      <p>Array length: {fruits.length}</p>
    </div>
  );
}

function AddRemoveArrayData() {
  const numbers = [1, 2, 3];
  const withAdded = [...numbers, 4];
  const withRemoved = numbers.slice(0, -1);
  return (
    <div>
      <p>Original: [{numbers.join(", ")}]</p>
      <p>Added: [{withAdded.join(", ")}]</p>
      <p>Removed: [{withRemoved.join(", ")}]</p>
    </div>
  );
}

function ForLoops() {
  const items = [];
  for (let i = 1; i <= 5; i++) {
    items.push(<li key={i}>Item {i}</li>);
  }
  return <ul>{items}</ul>;
}

function MapFunction() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((n) => n * 2);
  return <p>Doubled: [{doubled.join(", ")}]</p>;
}

function FindFunction() {
  const numbers = [10, 20, 30, 40];
  const found = numbers.find((n) => n > 25);
  return <p>Found: {found}</p>;
}

function FindIndexFunction() {
  const numbers = [10, 20, 30, 40];
  const index = numbers.findIndex((n) => n > 25);
  return <p>Index: {index}</p>;
}

function FilterFunction() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const evens = numbers.filter((n) => n % 2 === 0);
  return <p>Even numbers: [{evens.join(", ")}]</p>;
}

function JsonExample() {
  const person = { name: "John", age: 30, city: "Boston" };
  const jsonString = JSON.stringify(person);
  return (
    <div>
      <p>Object: {jsonString}</p>
    </div>
  );
}

function TodoList() {
  const todos = [
    { id: 1, title: "Learn TypeScript", done: true },
    { id: 2, title: "Build React App", done: false },
    { id: 3, title: "Deploy to Production", done: false },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({
  todo,
}: {
  todo: { id: number; title: string; done: boolean };
}) {
  return (
    <li style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      {todo.title}
    </li>
  );
}

function SpreadOperator() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combined = [...arr1, ...arr2];
  return <p>Combined: [{combined.join(", ")}]</p>;
}

function Destructuring() {
  const person = { name: "Alice", age: 25 };
  const { name, age } = person;
  return (
    <p>
      {name} is {age} years old
    </p>
  );
}

function FunctionDestructuring() {
  const display = ({ name, age }: { name: string; age: number }) => {
    return `${name} (${age})`;
  };
  return <p>{display({ name: "Bob", age: 30 })}</p>;
}

function ParameterizedComponent({ color }: { color: string }) {
  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px",
        marginBottom: "5px",
      }}
    >
      {color} component
    </div>
  );
}

function ParentComponent({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h5>Parent Component</h5>
      {children}
    </div>
  );
}

function PathParameters() {
  const id = "12345";
  const encoded = encodeURIComponent(id);
  return <p>Encoded ID: {encoded}</p>;
}

function Calculator() {
  return (
    <div>
      <p>1 + 2 = {1 + 2}</p>
      <p>3 + 4 = {3 + 4}</p>
    </div>
  );
}
