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
    
    
    /**
     * Functionality Test to check whether removing a chore that is already on the screen
     * and see if it is indeed removed from the web and from localstorage.
     */


    /**
     * Functionality Test to check whether removing all chores that are already on the screen
     * and see if they are indeed removed from the web and from localstorage.
     */

    
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
    /*
    it('Functionality Test: Testing sorting by date for 2 chores', async () => {
        console.log("Adding first chore");
        //Grab all elements necessary to add a chore
        let add_chore = await page.$("add-chore");
        let submit_btn = await page.$("submit");
        //let chore_name_input = await page.$("chore-name");
        //let chore_date_input = await page.$("chore-date");
        //let chore_locaction_input = await page.$("chore-location");
        //let chore_assignee_input = await page.$("chore-assignee");
        
        //Add first chore
        await add_chore.click();
        await page.waitForSelector('.modal', { visible: true });
        await page.type('#chore-name', "Finish E2E Testing");
        await page.type('#chore-date', "12/01/2022");
        await page.type('#chore-location', "WLH 2001");
        await page.type('#chore-assignee', "Stonks");
        await page.type('#instruction', "Finish E2E Testing");
        await submit_btn.click();
        await page.waitForSelector('.modal', { visible: true });
    });
    */
     
    /**
     * Heavy Processing Test to check whether adding a chore with due date 
     * before a a large number of chores already in the chore list sorts 
     * the chores correctly on the page.
     */
      /*
     it('Heavy Processing Test: Testing sorting by date for 20 chores in descending order', async () => {
        console.log("Adding Chores in decesnding order of due date:");
        const addButton = page.$('add-chore');
        for(let i = 0; i < 20; i++){
          await addButton.click();
          await page.waitForSelector('.modal', { visible: true });
          await page.$eval('#chore-name', el => el.value = 'test@example.com');



          
          let submitBtn = await page.$("submit");
          await submitBtn.click();
          await page.waitForFunction('.modal', { hidden: true });
        }
        
    });
      */

});