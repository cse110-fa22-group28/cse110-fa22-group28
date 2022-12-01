describe('Testing basic user flow for Stonks Chore Tracker', () => {
    
    /**
     * Launch the stinks chore tracker website like a user would before
     * testing user flow clickthroughs in the following tests.
     */
    beforeAll(async () => {
      await page.goto('https://stonks-chore-tracker.netlify.app/');
    });
    

    /**
     * Functionality Test to check whether removing a chore that is already on the screen
     * and see if it is indeed removed from the web and from localstorage.
     */


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
        let shadowRoot = await choreCards[i].getProperty('shadowRoot');
        let checkBox = await shadowRoot.$('#checkbox');
        await checkBox.click();
      }
      //evaluating the chores array in localstorage, which we expect to be empty
      let chores = await page.evaluate(() => {
        return localStorage.getItem('chores');
      });
      //lastly checking if the element is actually removed from html document
      let lastCheck = await page.$('chore-card');
      expect(chores).toBe('[]');
      expect(lastCheck).beBeNull();
    }, 10000);
    
    
    //test for adding chore cards to empty list. 
    it("Test for adding one chore cards to empty list", async()=>{
      //Enter all chore information into the chore card.
      let button= await page.$("add-chore");
      await button.click();
      await page.evaluate(()=>{
        //const form = document.getElementById('form');
        document.getElementById('chore-name').value = 'choreName';
        document.getElementById('chore-date').value = '12012002';
        document.getElementById('chore-location').value = 'section';
        document.getElementById('chore-assignee').value = 'assignee';
        document.getElementById('instruction').value = 'instruction';
      });
      //click on submit button to submit and close the form. 
      let submitBtn = await page.$("submit");
      await submitBtn.click();
      //check local storage
      let chores = await page.evaluate(()=>{
        return localStorage.getItem('chores');
      });
      expect(chores).toBe([{
        "choreName": "choreName",
        "date": "12012002",
        "section": "section",
        "assigneeSrc": "assignee",
        "instruction": "instruction",
        "check_box": true
    }]);
      
    });
    
    it('Deleting the only chore card on the list', async () => {
      console.log('Deleting the only chore card...');
      //grabs the chore-card element from web, using $ since we're only grabbing one chore card
      const choreCard = await page.$('chore-card');
      let shadowRoot = await choreCard.getProperty('shadowRoot');
      //grabbing the 'remove-chore' button
      let checkBox = await shadowRoot.$('#checkbox');
      await checkBox.click();
      //evaluating the chores array in localstorage, which we expect to be empty
      let chores = await page.evaluate(() => {
        return localStorage.getItem('chores');
      });
      //lastly checking if the element is actually removed from html document
      let lastCheck = await page.$('chore-card');
      expect(chores).toBe('[]');
      expect(lastCheck).beBeNull();
    }, 10000);


    /**
     * Functionality Test to check whether adding a chore with due date before
     * a single chore already in the chore list sorts the chores
     * correctly on the page.
     */
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
     
    /**
     * Heavy Processing Test to check whether adding a chore with due date 
     * before a a large number of chores already in the chore list sorts 
     * the chores correctly on the page.
     */
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

});