import React from "react";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
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
              <tr> ... </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Average</td>
                <td>90</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fileds">
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input
            type="text"
            id="wd-text-fileds-username"
            placeholder="nishit"
          />
          <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input
            type="password"
            id="wd-text-fileds-password"
            placeholder="password"
          />
          <br />
        </form>
      </div>
      <div id="wd-text-area-block">
        <textarea
          cols="20"
          rows="5"
          id="wd-text-area"
          placeholder="Write About Yourself"
        >
          Start
        </textarea>
      </div>
      <div id="wd-radio-block">
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
      </div>
      <div id="wd-checkbox-block">
        <h5 id="wd-check-box">Checkbox</h5>
        <input type="checkbox" name="NAME2" value="OPTION1" checked />
        <input type="checkbox" name="NAME2" value="OPTION2" />
        <input type="checkbox" name="NAME2" value="OPTION3" checked />
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
      </div>
      <div id="wd-dropdown-block">
        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label>
        <br />
        <select multiple id="wd-select-many-genre">
          <option value="COMEDY" selected>
            {" "}
            Comedy{" "}
          </option>
          <option value="DRAMA"> Drama </option>
          <option value="SCIFI" selected>
            {" "}
            Science Fiction{" "}
          </option>
          <option value="FANTASY"> Fantasy </option>
        </select>
      </div>
      <div id="wd-otherfields-block">
        <h4>Other HTML field types</h4>

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
        <input
          type="range"
          value="4"
          max="5"
          placeholder="Doe"
          id="wd-text-fields-rating"
        />
        <br />

        <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
        <input type="date" value="2000-01-21" id="wd-text-fields-dob" />
        <br />
      </div>
    </div>
  );
}
