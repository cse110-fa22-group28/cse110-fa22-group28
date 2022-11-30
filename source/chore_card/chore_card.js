//Template files

import { removeChore, updateDocument } from "../main_page/main.js";

// Called once when document.createElement('chore_card') is called, or
// the element is written into the DOM directly as <chore_card>
class Chore_card extends HTMLElement{
    constructor() {
        super(); 
        let shadowDOM = this.attachShadow({mode: 'open'});
        let articleEl = document.createElement('article');
        let styleEl = document.createElement('style');

        styleEl.textContent = `
        /* #### General Card Layout #### */

        /**
         * Create grid display to organize items in chore card
         * References entirety of the article element
         */
        .grid-container {
            /* Define border shape */
            border-style: solid;
            border-radius: 20px;
            /* Define container sizing */
            width: 620px;
            gap: 10px;
            padding: 10px;

            background-color: rgb(181, 177, 177);

            /* Define grid display */
            display: grid;
            grid-template-areas:
                'item1 item2 item5'
                'item1 item3 item5'
                'item1 item4 item5';
            grid-template-columns: 120px 400px 75px;
            grid-template-rows: 60px 60px 60px;
        }

        .grid-container > div {
            background-color: rgb(181, 177, 177);
            text-align: left;
            padding: 20px 0;
            font-size: 20px;
        }

        /* #### Styling for Grid Items #### */

        /**
         * Establish style for individual items in the grid container
         * References all divs contained within the grid-container div
         */
        .item1 {
            /* Defines item1 as the leftmost grid item from the template */
            grid-area: item1;
            /* Sets image in the center of the grid item */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .item2 {
            /* Defines item1 as the top middle grid item from the template */
            grid-area: item2;
        }

        .item3 {
            /* Defines item1 as the middle middle grid item from the template */
            grid-area: item3;
        }

        .item4 {
            /* Defines item1 as the bottom middle grid item from the template */
            grid-area: item4;
        }

        .item5 {
            /* Defines item1 as the rightmost grid item from the template */
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
            width: 100px;
            height: 100px;
            /* Make image rounded */
            border-radius: 50%;
        }

        #checkbox {
            /* Configure size of icon */
            width: 50px;
            height: 50px;
        }

        #label {
            background-color: orange;
            /* Slightly increase padding around label */
            padding: 2px;
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
        
        articleEl.innerHTML = `\
          <div class=\"grid-container\">\
            <div class=\"item1\">\
              <img id='assignee' src=\"../chore_card/assignee_img.jpg\"\
                alt=\"assignee\">\
              <!--<i class=\"fa-solid fa-user-ninja\" id=\"assignee\"></i>-->\
            </div>\
            <div class=\"item2\">\
              <h3 class=\"name\">${data.choreName}</h3>\
            </div>\
            <div class=\"item3\">\
              <h4 class=\"date\">${data.date}</h4>\
            </div>\
            <div class=\"item4\">\
              <span id=\"label\">${data.section}</span>\
            </div>\
            <div class=\"item5\">\
              <button id=\"checkbox\"></button>
              <!--<i class=\"fa-regular fa-square\" id=\"checkbox\"></i>-->\
              <!--<i class=\"fa-regular fa-square-check\" id=\"checkbox\"></i>-->\
            </div>\
          </div>`;
        let checkbox = articleEl.querySelector("#checkbox");
        checkbox.addEventListener("click", () => {
          removeChore(data);
          updateDocument();
        });
    }
}

customElements.define('chore-card', Chore_card);
