describe('Testing basic user flow for Stonks Chore Tracker', () => {

    /**
     * Launch the stinks chore tracker website like a user would before
     * testing user flow clickthroughs in the following tests.
     */
    beforeAll(async () => {
      //await page.goto('https://stonks-chore-tracker.netlify.app/');
      //http://127.0.0.1:5500/source/index.html
      await page.goto('https://stonks-chore-tracker.netlify.app/', {waitUntil: [
        'load',
        'domcontentloaded',
      ]});
  
    });
        
    /*Functionality test to for adding one chore to the empty list, checking if the 
    * localStorage stores the new chores, and comparing if the parsing JSON array
    * has expected content. 
    */
    it("Test for adding one chore cards to empty list", async()=>{
      await page.reload();
      //Clear localStorage before the test
      //await page.evaluate(()=>{
      //  localStorage.clear();
      //});
      await page.evaluate(()=>{
        localStorage.setItem('chores', '[]');
      });
      //Enter all chore information into the chore card.
      let button= await page.$("#add-chore");
      let submitBtn = await page.$("#submit");
      await button.click();
      
      //const form = document.getElementById('form');
      await page.waitForSelector('#modal-form', { visible: true});
      
      //onsole.log('yes');
      await page.type('#chore-name', "chorename");
      await page.type('#chore-date', "12/01/2022");
      await page.type('#chore-location', "section");
      await page.type('#chore-assignee', "assignee");
      await page.type('#instruction', "instruction");
      await submitBtn.click();
      //await page.waitForSelector('#modal-form', { visible:false });
      
      //click on submit button to submit and close the form.
      
      //check local storage
      let chores = await page.evaluate(()=>{
        return localStorage.getItem('chores');
      });
      //check the content of localStorage
      chores = JSON.parse(chores);
      expect(chores).toStrictEqual([{
        "assigneeSrc": "assignee", 
        "choreName": "chorename", 
        "date": "12/01/2022", 
        "instruction": "instruction", 
        "section": "section"
      }]);
      //check the length of localStorage
      expect(chores.length).toBe(1);
    },30000);

    /**
     * Functionality Test to check whether removing a chore that is already on the screen
     * and see if it is indeed removed from the web and from localstorage.
     */
    it('Deleting the only chore card on the list', async () => {
      console.log('Deleting the only chore card...');
      //grabs the chore-card element from web, using $ since we're only grabbing one chore card
      const choreCards = await page.$$('chore-card');
      let root = await choreCards[0].getProperty('shadowRoot');
      //grabbing the 'remove-chore' button
      let checkBox = await root.$('#checkbox');
      await checkBox.click();
      //evaluating the chores array in localstorage, which we expect to be empty
      let chores = await page.evaluate(() => {
        return localStorage.getItem('chores');
      });
      //lastly checking if the element is actually removed from html document
      let lastCheck = await page.$('chore-card');
      expect(chores).toBe('[]');
      expect(lastCheck).toBe(null);
    }, 10000);

    /*Functionality test for adding 20 chores to the empty list, checking if the localStorage stores the 
    * 20 new chores, and comparing if the parsed JSON array has expected content.
    */
    it("Test for adding 20 chores into the empty list",async()=>{
      //Clear the localStorage before the test starts.
      //await page.evaluate(()=>{
      //  localStorage.clear();
      //});
      await page.reload();
      await page.evaluate(()=>{
        localStorage.setItem('chores', '[]');
      });
      let addBtn = await page.$('#add-chore');
      let submitBtn = await page.$("#submit");
      for(let i = 0; i < 20; i++){
        addBtn.click();
        await page.waitForSelector("#modal-form", {visible: true});
        let choreName = await page.$("#chore-name");
        let choreDate = await page.$("#chore-date");
        let choreSection = await page.$("#chore-location");
        let choreAssignee = await page.$("#chore-assignee");
        let choreInstruction = await page.$("#instruction");
        await choreName.click({ clickCount: 3 });
        await choreName.type("");
        await choreDate.click({ clickCount: 3 });
        await choreDate.type("");
        await choreSection.click({ clickCount: 3 });
        await choreSection.type("");
        await choreAssignee.click({ clickCount: 3 });
        await choreAssignee.type("");
        //await choreInstruction.click({ clickCount: 3 });
        //await choreInstruction.type("");

        await page.type("#chore-name", "chorename");
        await page.type("#chore-date", "12/01/2022");
        await page.type("#chore-location","section");
        await page.type("#chore-assignee", "assignee");
        //await page.type("#instruction", "instruction");
        await submitBtn.click();
        
      }
      //Get chores from localStorage
      let chores = await page.evaluate(()=>{
        return localStorage.getItem('chores');
      });
      //Compare every single chore with the expected content. 
      
      chores = JSON.parse(chores);
      expect(chores[0]).toStrictEqual({
        "assigneeSrc": "assignee", 
        "choreName": "chorename", 
        "date": "12/01/2022", 
        "instruction": "", 
        "section": "section"});
      
      //Check the number of chores stored in localStorage
      expect(chores.length).toBe(20);
    },500000);

    /**
     * Functionality Test to check whether removing all chores that are already on the screen
     * and see if they are indeed removed from the web and from localstorage.
     */
    it('Deleting all chore cards on the list', async () => {
      console.log('Deleting the all chore cards...');
      //grabbing all the chore-card as we will delete all of them
      const choreCards = await page.$$('chore-card');
      //inside the for loop, every chore-card will be deleted by button click
      for(let i = 0; i < choreCards.length; i++){
        let root = await choreCards[i].getProperty('shadowRoot');
        let checkBox = await root.$eval('#checkbox', (checkBox) => {
          checkBox.click(), checkBox
        });
      }
      //evaluating the chores array in localstorage, which we expect to be empty
      let chores = await page.evaluate(() => {
        return localStorage.getItem('chores');
      });
      //lastly checking if the element is actually removed from html document
      let lastCheck = await page.$('chore-card');
      expect(chores).toBe('[]');
      expect(lastCheck).toBe(null);
    }, 10000);

    /**
     * Functionality Test to check whether adding a chore with due date before
     * a single chore already in the chore list sorts the chores
     * correctly on the page.
     */
    it('Functionality Test: Testing sorting by date for 2 chores', async () => {
      await page.reload();

      //Clear chores array in local storage
      await page.evaluate(()=>{
        localStorage.setItem('chores', '[]');
      });

      //Capture required buttons and click on add button
      let button= await page.$("#add-chore");
      let submitBtn = await page.$("#submit");

      //Define arrays for data to add to the chore cards
      let chName = ["chorename", "earlychorename"];
      let chDate = ["12/01/2022", "11/20/2022"];
      let chLocation = ["section", "section"];
      let chAssignee = ["assignee", "assignee"];
      let chInstruction = ["instruction", "instruction"];

      for(let index = 0; index < 2; index++)
      {
        await button.click();
      
        let choreName = await page.$("#chore-name");
        let choreDate = await page.$("#chore-date");
        let choreLocation = await page.$("#chore-location");
        let choreAssignee = await page.$("#chore-assignee");
        let choreInstruction = await page.$("#instruction");

        await page.waitForSelector('#modal-form', { visible: true});

        //Clear text already entered
        await choreName.click({ clickCount: 3 });
        await page.type('#chore-name', "");
        await choreDate.click({ clickCount: 3 });
        await page.type('#chore-date', "");
        await choreLocation.click({ clickCount: 3 });
        await page.type('#chore-location', "");
        await choreAssignee.click({ clickCount: 3 });
        await page.type('#chore-assignee', "");
        await choreInstruction.click({ clickCount: 3 });
        await page.type('#instruction', "");

        //Add chore information
        await page.type('#chore-name', chName[index]);
        await page.type('#chore-date', chDate[index]);
        await page.type('#chore-location', chLocation[index]);
        await page.type('#chore-assignee', chAssignee[index]);
        await page.type('#instruction', chInstruction[index]);

        //click on submit button to submit and close the form.
        await submitBtn.click();
      }

      //check local storage
      let chores = await page.evaluate(()=>{
        return localStorage.getItem('chores');
      });

      chores = JSON.parse(chores);
      //check the content of localStorage
      for(let index = 0; index < 2; index++)
      {
        expect(chores[index]).toStrictEqual({
          "assigneeSrc": chAssignee[1-index], 
          "choreName": chName[1-index], 
          "date": chDate[1-index], 
          "instruction": chInstruction[1-index], 
          "section": chLocation[1-index]
        });
      }
    },30000);
     
    /**
     * Heavy Processing Test to check whether adding a chore with due date 
     * before a a large number of chores already in the chore list sorts 
     * the chores correctly on the page.
     */
     it('Heavy Processing Test: Testing sorting by date for 20 chores in descending order', async () => {
        await page.reload();

      //Clear chores array in local storage
      await page.evaluate(()=>{
        localStorage.setItem('chores', '[]');
      });

      //Capture required buttons and click on add button
      let button= await page.$("#add-chore");
      let submitBtn = await page.$("#submit");

      //Define array for data to add to the chore cards
      //For date, test year, day and month ordering
      let chDate = 
      ["12/10/2022", "12/09/2022", "11/09/2022", "11/01/2022",
      "10/10/2022", "09/22/2022", "09/09/2022", "08/09/2022",
      "07/10/2022", "07/04/2022", "07/02/2022", "06/09/2022",
      "05/10/2022", "05/09/2022", "04/09/2022", "03/09/2022",
      "04/10/2021", "03/09/2021", "02/09/2021", "01/09/2021",
      ];

      for(let index = 0; index < 20; index++)
      {
        await button.click();
      
        let choreName = await page.$("#chore-name");
        let choreDate = await page.$("#chore-date");
        let choreLocation = await page.$("#chore-location");
        let choreAssignee = await page.$("#chore-assignee");
        let choreInstruction = await page.$("#instruction");

        await page.waitForSelector('#modal-form', { visible: true});

        //Clear text already entered
        await choreName.click({ clickCount: 3 });
        await page.type('#chore-name', "");
        await choreDate.click({ clickCount: 3 });
        await page.type('#chore-date', "");
        await choreLocation.click({ clickCount: 3 });
        await page.type('#chore-location', "");
        await choreAssignee.click({ clickCount: 3 });
        await page.type('#chore-assignee', "");
        await choreInstruction.click({ clickCount: 3 });
        await page.type('#instruction', "");

        //Add chore information
        await page.type('#chore-name', "chore");
        await page.type('#chore-date', chDate[index]);
        await page.type('#chore-location', "UCSD");
        await page.type('#chore-assignee', "assignee");
        await page.type('#instruction', "instructions");

        //click on submit button to submit and close the form.
        await submitBtn.click();
      }

      //check local storage
      let chores = await page.evaluate(()=>{
        return localStorage.getItem('chores');
      });

      chores = JSON.parse(chores);
      //check the content of localStorage
      for(let index = 0; index < 2; index++)
      {
        expect(chores[index]).toStrictEqual({
          "assigneeSrc": "assignee", 
          "choreName": "chore", 
          "date": chDate[19-index], 
          "instruction": "instructions", 
          "section": "UCSD"
        });
      }
    }, 500000);
});