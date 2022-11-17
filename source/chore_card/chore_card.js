  // Called once when document.createElement('chore-card') is called, or
  // the element is written into the DOM directly as <chore-card>
class Chore_card extends HTMLElement{
    constructor() {
        super(); 
        const shadowDOM = this.attachShadow({mode: 'open'});
        let article = document.createElement('article');
        let style = document.createElement('style');
        //styleEl.textContent = ``;//this is where the css will be.
        style.innerHTML = `
        * {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        }

        a {
        text-decoration: none;
        }

        a:hover {
        text-decoration: underline;
        }

        article {
        align-items: center;
        border: 1px solid rgb(223, 225, 229);
        border-radius: 8px;
        display: grid;
        grid-template-rows: 118px 56px 14px 18px 15px 36px;
        height: auto;
        row-gap: 5px;
        padding: 0 16px 16px 16px;
        width: 178px;
        }

        div.rating {
        align-items: center;
        column-gap: 5px;
        display: flex;
        }

        div.rating>img {
        height: auto;
        display: inline-block;
        object-fit: scale-down;
        width: 78px;
        }

        article>img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        height: 118px;
        object-fit: cover;
        margin-left: -16px;
        width: calc(100% + 32px);
        }

        p.ingredients {
        height: 32px;
        line-height: 16px;
        padding-top: 4px;
        overflow: hidden;
        }

        p.organization {
        color: black !important;
        }

        p.title {
        display: -webkit-box;
        font-size: 16px;
        height: 36px;
        line-height: 18px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        }

        p:not(.title),
        span,
        time {
        color: #70757A;
        font-size: 12px;
        }`;
        shadowDOM.appendChild(style); 
        shadowDOM.appendChild(article);
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
        let article = this.shadowRoot.querySelector('article');
        //we might change section text to image.
        /*article.innerHTML = `
        <img id='assignee' src="${data['assigneeSrc']}"
        alt="assignee">
        <p class="Name">
            <h3>${data['choreName']}</h3>
        </p>
        <p class="date">
            <h4>${data['date']}</h4>
        </p>
        <div class="sections">
            <h4>${data['section']}</h4>
        </div>
            <img id='checkbox' src="${data['boxSrc']}"
        alt="checkbox">`;//this should be the html template of article.*/
        //let img_src = data['imgSrc'];
        //let img_alt = data['imgAlt'];
        let name = data['choreName'];
        let name_text = data['choreName'];
        let loc = data['section'];
        let t = data['date'];
        let assignee = data['assigneeSrc'];
        let box = data['boxSrc'];
        //let assignee_text = "/assets/images/icons/"+rate+"-star.svg";

        //let img = "<img src=" + img_src + " alt=" + img_alt + ">";
        let title = "<p class='title'>" + name_text + "</p>";
        let location = "<p class='location'>" + loc + "</p>";
        let assign = "<div class=\'assignee\'> <span>" + assignee + "</span></div>";
        let time = "<time>" + t + "</time>";
        let boxsrc = "<p class='box_src'>" + box + "</p>";
        article.innerHTML = title + location + assign + time + boxsrc;
    }
}

customElements.define('chore-card', Chore_card);
