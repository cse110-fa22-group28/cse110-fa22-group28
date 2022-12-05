import {removeChore, updateDocument} from "../main_page/main.js";

// Called once when document.createElement('chore_card') is called, or
// the element is written into the DOM directly as <chore_card>
class Chore_card extends HTMLElement{
    constructor() {
        super(); 
        let shadowDOM = this.attachShadow({mode: 'open'});
        let articleEl = document.createElement('article');
        let styleEl = document.createElement('style');

        styleEl.textContent = `
        @import "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap";

        /* #### General Card Layout #### */

        /**
         * Add padding around chore card
         * Reference entire article element
         */
        article {
          padding: 1%;
        }

        /**
         * Create grid display to organize items in chore card
         * References entirety of the article element
         */
        .grid-container {
          /* Define border shape */
          border-radius: 1.25rem;

          /* Define container sizing */
          width: 96%;
          padding: 1.8%;

          /* Define grid background color */
          background-color: #d9d9d9;

          /* Define grid display */
          display: grid;
          grid-template-areas:
            "item1 item2 item5"
            "item1 item3 item5"
            "item1 item4 item5";
          grid-template-columns: 20% 60% 20%;
          grid-auto-rows: auto;
        }

        .grid-container > div {
          /* Match background color with background of the actual container */
          background-color: #d9d9d9;

          /* Align text to the left, adjust its font characteristics */
          text-align: left;
          font-size: 100%;
          font-family: Nunito, sans-serif;
        }

        /* #### Styling for Grid Items #### */

        /**
         * Establish style for individual items in the grid container
         * References all divs contained within the grid-container div
         */
        .item1 {
          /* Defines item1, the avatar image, as the leftmost grid item from the template */
          grid-area: item1;

          /* Sets image in the center of the grid item */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .item2 {
          /* Defines item2, the chore title, as the top middle grid item from the template */
          grid-area: item2;
        }

        .item3 {
          /* Defines item3, the chore assignee name and date, as the middle middle grid item from the template */
          grid-area: item3;
        }

        .item4 {
          /* Defines item4, the chore label, as the bottom middle grid item from the template */
          display: flex;
          align-items: center;
          grid-area: item4;
        }

        .item5 {
          /* Defines item5, the checkbox, as the rightmost grid item from the template */
          grid-area: item5;

          /* Sets icon in the top right of the grid item */
          display: flex;
          justify-content: right;
          align-items: top;
        }

        /* #### Layout of specific elements #### */

        /**
          * Adjust sizing and additional element properties of specific items in grid
          * References the assignee img, checkbox icon, and label span respectively
          */
        #assignee {
          /* Configure size of image */
          width: 80%;
          height: auto;

          /* Make image rounded */
          border-radius: 50%;
        }

        #checkbox {
          /* Configure size of icon */
          width: 2rem;
          height: 2rem;

          /* Shape the border and margin */
          border-style: none;
          border-radius: 0.5rem;
          margin: 0.2rem;
        }

        /**
         * Define styling for section label
         * References label id
         */
        #label {
          /* Styling the label */
          background-color: orange;
          border-radius: 0.5rem;

          /* Slightly increase padding and margin around label */
          padding: 1.5%;
          margin-block-start: 0.5rem;
          margin-block-end: 0.5rem;
        }

        /**
         * Define styling for chore name, assignee, and due date
         * Reference heading elements 3 and 4
         */
        h3{
          /* Overwrite default top and bottom margin */
          margin-block-start: 0.5rem;
          margin-block-end: 0.5rem;
        }
        h4{
          /* Overwrite default top and bottom margin */
          margin-block-start: 0rem;
          margin-block-end: 0.5rem;
        }`;
        
        console.log(styleEl);
        shadowDOM.appendChild(articleEl);
        shadowDOM.appendChild(styleEl); 
    }
    
    /**
     * Called when the .data property is set on this element.
     *  @param {Object} data - The data to pass into the <chore-card>, must be of the
     *                        following format:
     *                        {
     *                          "assigneeSrc": "string",             
     *                          "choreName": "string",
     *                          "date": "string",
     *                          "section": "string"
     *                          "boxSrc": "string",
     *                        }
     */
    set data(data) {
        // If nothing was passed in, return
        if (!data) return;

        let articleEl = this.shadowRoot.querySelector('article');
        
        articleEl.innerHTML = `
        <div class="grid-container">
          <div class="item1">
            <img id='assignee' src="./chore_card/assignee_img.jpg"
              alt="assignee">
          </div>
          <div class="item2">
            <h3 class="name">${data.choreName}</h3>
          </div>
          <div class="item3">
            <h4 class="date">${data.assigneeSrc} ${data.date}</h4>
          </div>
          <div class="item4">
            <span id="label">${data.section}</span>
          </div>
          <div class="item5">
            <button id="checkbox"></button>
          </div>
        </div>`;
        let checkbox = articleEl.querySelector("#checkbox");
        checkbox.addEventListener("click", () => {
          removeChore(data);
          updateDocument();
        });
    }
}

customElements.define('chore-card', Chore_card);