//Template files

const chore_card_html = '../chore_card/chore_card.html';
const chore_card_css = '../chore_card/chore_card.css';

async function readTemplateFile(file)
{
  let template = await fetch(file);
  let templateText = await template.text();
  return templateText;
}

// Called once when document.createElement('chore_card') is called, or
// the element is written into the DOM directly as <chore_card>
class Chore_card extends HTMLElement{
    constructor() {
        super(); 
        let shadowDOM = this.attachShadow({mode: 'open'});
        let articleEl = document.createElement('article');
        let styleEl = document.createElement('style');

        const assignDesign = () => {
          readTemplateFile(chore_card_css)
            .then((cssoutput) => {
              styleEl.textContent = cssoutput;
            });
        }

        assignDesign();
    
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
        
        const assignSkeleton = () => {
          readTemplateFile(chore_card_html)
            .then((htmloutput) => {
              articleEl.innerHTML = htmloutput;
            });
        }

        assignSkeleton();
    }
}

customElements.define('chore-card', Chore_card);
