// Called once when document.createElement('chore_card') is called, or
// the element is written into the DOM directly as <chore_card>
class chore_card extends HTMLElement{
    constructor() {
        super(); 
        let shadowDOM = this.attachShadow({mode: 'open'});
        let articleEl = document.createElement('article');
        let styleEl = document.createElement('style');
        styleEl.textContent = ``;//this is where the css will be.
        shadowDOM.append(articleEl);
        shadowDOM.append(styleEl); 
    }
    /**
     * Called when the .data property is set on this element.
     *  @param {Object} data - The data to pass into the <chore_card>, must be of the
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
        const shadow = this.shadowRoot.querySelector('article');
        //we might change section text to image.
        article.innerHTML = `
        <img id='assignee' src="${data.assigneeSrc}"
        alt="assignee">
        <p class="Name">
            <h3>${data.choreName}</h3>
        </p>
        <p class="date">
            <h4>${data.date}</h4>
        </p>
        <div class="sections">
            <h4>${data.section}</h4>
        </div>
            <img id='checkbox' src="${data.boxSrc}"
        alt="checkbox">`;//this should be the html template of article.
    }
}

customElements.define('chore_card', chore_card);