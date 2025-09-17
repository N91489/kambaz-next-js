import Link from "next/link";
import React from "react";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Web Dev Project of Nishit</h1>

      {/* Add your full name and section here */}
      <h2>Full Name: Nishit Agarwal</h2>
      <h3>Section: 05 (Online)</h3>

      {/* Links to Lab Assignments */}
      <div id="wd-lab-links">
        <h3>Lab Assignments</h3>
        <ul>
          <li>
            <a href="/Labs/Lab1">Lab 1</a>
          </li>
          <li>
            <a href="/Labs/Lab2">Lab 2</a>
          </li>
          <li>
            <a href="/Labs/Lab3">Lab 3</a>
          </li>
        </ul>
      </div>

      <div id="wd-kambaz-link">
        <h3>Kambaz Application</h3>
        <p>
          <Link href="https://kambaz-next-js-flame.vercel.app/Labs">
            Kambaz Application
          </Link>
        </p>
      </div>
      <div id="wd-source-code-links">
        <h3>Source Code Repositories</h3>

        <Link href="https://github.com/N91489/kambaz-next-js">
          GitHub Repository
        </Link>
      </div>

      <hr />

      <p>My Practice of My First Day - Nothing Much</p>
      <hr />

      <h2>Lab 1 - HTML Practice</h2>
      <h3>HTML Examples</h3>

      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading.
      </div>

      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>

        <p id="wd-p-1"> ... </p>

        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>

        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>

        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>

        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>
          <h5>My favorite recipe</h5>
          <ol id="wd-your-favorite-recipe">
            <li>Buy a Cup Noodle</li>
            <li>Open the seal half way</li>
            <li>Add hot water</li>
            <li>Cover the lid & wait for 5 mins</li>
            <li>Remove the seal & enjoy</li>
          </ol>
          <h5>Unordered List Tag</h5>
          My favorite books (in no particular order)
          <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Enders Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
          </ul>
          Your favorite books (in no particular order)
          <ul id="wd-your-books">
            <li>Martian</li>
            <li>Dune</li>
            <li>Brave new world</li>
            <li>1984</li>
          </ul>
        </div>

        <div id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Quiz</th>
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td>
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q2</td>
                <td>CSS</td>
                <td>2/10/21</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Q3</td>
                <td>JavaScript</td>
                <td>2/17/21</td>
                <td>88</td>
              </tr>
              <tr>
                <td>Q4</td>
                <td>React</td>
                <td>2/24/21</td>
                <td>92</td>
              </tr>
              <tr>
                <td>Q5</td>
                <td>Node.js</td>
                <td>3/3/21</td>
                <td>87</td>
              </tr>
              <tr>
                <td>Q6</td>
                <td>MongoDB</td>
                <td>3/10/21</td>
                <td>91</td>
              </tr>
              <tr>
                <td>Q7</td>
                <td>Express</td>
                <td>3/17/21</td>
                <td>89</td>
              </tr>
              <tr>
                <td>Q8</td>
                <td>REST APIs</td>
                <td>3/24/21</td>
                <td>93</td>
              </tr>
              <tr>
                <td>Q9</td>
                <td>Redux</td>
                <td>3/31/21</td>
                <td>86</td>
              </tr>
              <tr>
                <td>Q10</td>
                <td>Testing</td>
                <td>4/7/21</td>
                <td>94</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Average</td>
                <td>90</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div id="wd-images">
          <h4>Image Tags</h4>
          <h5>Starship</h5>
          <img
            id="wd-starship"
            src="https://aerospaceamerica.aiaa.org/wp-content/uploads/2023/06/0723_Aero_Starship.jpg"
            width="400px"
            alt="Starship"
          />
          <br />

          <h5>Teslabot</h5>
          <img
            id="wd-teslabot"
            src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24662089/tesla_bot_23.jpg?quality=90&strip=all&crop=4.3904958677686%2C0%2C91.219008264463%2C100&w=1440"
            width="400px"
            alt="Tesla Bot"
          />
        </div>
      </div>

      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input
            type="text"
            id="wd-text-fields-username"
            placeholder="nishit"
          />
          <br />

          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            id="wd-text-fields-password"
            placeholder="password"
          />
          <br />

          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input
            type="text"
            id="wd-text-fields-first-name"
            placeholder="John"
          />
          <br />

          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" id="wd-text-fields-last-name" placeholder="Doe" />
          <br />

          <h5>Text Areas</h5>
          <label htmlFor="wd-textarea">Biography:</label>
          <br />
          <textarea
            cols={30}
            rows={10}
            id="wd-textarea"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ></textarea>
          <br />

          <h5>Buttons</h5>
          <button type="button" id="wd-all-good">
            Hello World!
          </button>
          <br />

          <h5>File upload</h5>
          <input type="file" id="wd-upload" />
          <br />

          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">Comedy</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">Drama</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-scifi" />
          <label htmlFor="wd-radio-scifi">Science Fiction</label>
          <br />
          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">Fantasy</label>
          <br />

          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre:</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
          <label htmlFor="wd-chkbox-drama">Drama</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
          <br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
          <br />

          <h5>Dropdowns</h5>
          <label htmlFor="wd-select-one-genre">Favorite movie genre: </label>
          <br />
          <select id="wd-select-one-genre">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" selected>
              Science Fiction
            </option>
            <option value="FANTASY">Fantasy</option>
          </select>
          <br />

          <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
          <br />
          <select multiple id="wd-select-many-genre">
            <option value="COMEDY" selected>
              Comedy
            </option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI" selected>
              Science Fiction
            </option>
            <option value="FANTASY">Fantasy</option>
          </select>
          <br />

          <h5>Other HTML field types</h5>
          <label htmlFor="wd-text-fields-email"> Email: </label>
          <input
            type="email"
            placeholder="jdoe@somewhere.com"
            id="wd-text-fields-email"
          />
          <br />
          <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
          <input
            type="number"
            value="100000"
            placeholder="1000"
            id="wd-text-fields-salary-start"
          />
          <br />
          <label htmlFor="wd-text-fields-rating"> Rating: </label>
          <input type="range" value="4" max="5" id="wd-text-fields-rating" />
          <br />
          <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
          <input type="date" value="2000-01-21" id="wd-text-fields-dob" />
          <br />
        </form>
      </div>

      <div id="wd-anchor-tag">
        <h4>Anchor Tag</h4>
        Please
        <a id="wd-lipsum" href="https://www.lipsum.com">
          click here
        </a>
        to get dummy text
        <br />
      </div>
    </div>
  );
}
