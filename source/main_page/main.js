// TODO remove the preloaded chores file
var historyFile = './JSON_files/History_chore.json';
var choreListFile = './JSON_files/Chore_list.json';

/* ################################### */
/* ######### EVENT LISTENERS ######### */
/* ################################### */

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// TODO Update event listener for adding chores if needed

// Refer to plus button in the main page
const button = document.getElementById('add-chore');
button.addEventListener('click', addChores);

// TODO as specified below, add event listener for removing chores

/** To be completed. An eventListener for removing the chore card will be here. 
 * When the user drag chore card away or when the due date is passed, remove_chores 
 * will be called to remove that chore card from History_chore.json. 
 */



/* ################################### */
/* ############ FUNCTIONS ############ */
/* ################################### */

// Starts the program, all function calls trace back here
// TODO Update init if needed
async function init() {
  // Get the recipes from history_chore.json
  let chores;
  try {
    chores = await getChores(historyFile);
  } catch (err) {
    console.error(err);
  }
  // Add each recipe to the <main> element
  addChoresToDocument(chores);
}


/**
 * Retrieves chores from persistent storage and places them in local storage
 * Precondition: All chores to be displayed in the chore list are existent in persistent storage
 * Postcondition: All chores to be displayed in the chore list are existent in local storage, with the "chores" key
 */
async function getChores(){
  // TODO fix contents
  // For now, just make an empty "chores" array in local storage, if it doesn't exist
  // and log something in the console once this function runs

  // TODO Use following for reference, but delete once complete
  /*
  const precious_chores = [];
  const response = await fetch(file);
  //parses JSON response into native JavaScript objects
  const chores = await response.json();
  return chores;
  */
}


/**
 * Given a chore, add it to local storage
 * Precondition: There exists an array in local storage with the key "chores"
 * Postcondition: The new chore is added to this array in local storage
 * @param {Object} chore - A JSON object describing the chore to be added
 */
function addChore(chore) {
  // There should be NO EVENT LISTENERS in this function
  let chores = localStorage.getItem("chores");
  chores = JSON.parse(chores);
  //Add chore into correct order position in chores array.
  for(let i = 0; i < chores.length; i++){
    if(chore.time<chores[i].time){
      chores.splice(i, 0, chore);
      break;
    }
  }
  //If the chores is empty.
  if(chores.length == 0){
    chores.push(chore);
  }
  //Set into local storage
  localStorage.setItem("chores",chores);
  // TODO Use following for reference, but delete once complete
  //Below is the code for form. Will implement form outside of addChores.
  /*
  // Begin the add-chore page
  const chores = [];
  // Refer to plus button in the main page

  // Begin the add-chore page
  let modalBtns = document.getElementById("add-chore");
  modalBtns.onclick = function () {
      let modal = modalBtns.getAttribute("data-modal");
      document.getElementById(modal).style.display = "block";
  };
  let closeBtns = document.querySelector(".close");
  closeBtns.onclick = function () {
      let modal = closeBtns.closest(".modal");
      modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };
  // When the user clicks submit, store the data and put into chore-card element
  let submitBtn = document.getElementById('submit');
  submitBtn.onclick = function (event) {
    event.preventDefault();
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const chore = Object.fromEntries(formData);
    console.log(chore);

    

  // Create a new element chore-card in the main
  let chore_card = document.createElement("chore-card");
  chore_card.data = chore;
  document.querySelector("main").appendChild(chore_card);
  const data = JSON.stringify(chore);
  saveDataToJson(data, historyFile);
  */
}


/* ---- TODO Change parameter type if needed ---- */
/* e.g. maybe pass in the array index of the chore 
   instead of the chore object itself */
/**
 * Given a chore, remove it from local storage
 * Precondition: The chore already exists in the "chores" array in local storage
 * Postcondition: The given chore no longer exists in the array in local storage
 * @param {Object} chore - A JSON object describing the chore to be removed
 */
function removeChore(chore) {
  // TODO implement contents

  //Get chores from localStorage.
  let chores = localStorage.getItem("chores");
  chores = JSON.parse(chores);
  //checks if the chore we want to delete exists in the chore list
  if(!chores.includes(chore)){
    console.log("The chore does not exist");
    return;
  }
  //if the chore exists then iterate through the chore list
  for(let i = 0; i < chore_list.length; i++){
    let chore = chore_list[i];
    if(chore == chore_to_delete){
      //we found the chore element in the list that matches the chore we want to delete
      chore_list.splice(i, 1);
      //splice removes '1' element starting from 'i' index
      console.log("Chore successfully removed from the list");
      return chore_list;
      //returns the updated chore list
    }
  }
  
}


/**
 * Save all chores from local storage in persistent storage
 * Precondition: There exists an array in local storage with the key "chores"
 * Postcondition: Persistent storage is updated to match the "chores" array in local storage
 */
async function saveChores() {
  // TODO Implement following

  // TODO Use following for reference, but delete once complete
  /*
  fileSystem.writeFile(file, data, err=>{
    if(err){
      console.log("Error writing file" ,err)
      } else {
      console.log('JSON data is written to the file successfully')
      }
  });
  */
}

/**
 * Update the chore list in the DOM to correctly include all elements in the "chores" array in local storage
 * Precondition: There exists an array in local storage with the key "chores"
 * Postcondition: The chore list in the DOM contains all chores from local storage sorted by priority
 */
function updateDocument() {
  // TODO Implement following

  // TODO Use following for reference, but delete once complete
  /*
  if (!chores) return;
  let main = document.querySelector('main');
  // Sorted the chores based on their date
  let sorted_chores_by_date = chores.sort((p1, p2) => (p1.date > p2.date) ? 1 : (p1.date < p2.date) ? -1 : 0);
  chores.forEach((chore) => {
    let choreCard = document.createElement('chore-card');
    choreCard.data = sorted_chores_by_date;
    main.append(choreCard);
  });
  */
}
