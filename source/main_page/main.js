// Run the init() function when the page has loaded
var historyFile = './JSON_files/History_chore.json';
var choreListFile = './JSON_files/Chore_list.json';
window.addEventListener('DOMContentLoaded', init);
// Refer to plus button in the main page
const button = document.getElementById('add-chore');
button.addEventListener('click', addChores);
/** To be completed. An eventListener for removing the chore card will be here. 
 * When the user drag chore card away or when the due date is passed, remove_chores 
 * will be called to remove that chore card from History_chore.json. 
 */
// Starts the program, all function calls trace back here
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
 * Reads 'chores' from JSON files and returns an native JavaScript objects of
 * all of the chores found (parsed, not in string form).
 * @returns {<Object>} An native JavaScript objects of chorecards found in specified json file. 
 */
async function getChores(file){
    const precious_chores = [];
    const response = await fetch(file);
    //parses JSON response into native JavaScript objects
    const chores = await response.json();
    return chores;
}
//event listener outside
async function addChores() {
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
}


/**
 * Take the data and file path, save data changes into json file.
 * @param {<String>} data A string of chorecard
 * @param {<String} file The path of JSON file to modify. 
 */
function saveDataToJson(data, file) {
  fileSystem.writeFile(file, data, err=>{
    if(err){
      console.log("Error writing file" ,err)
      } else {
      console.log('JSON data is written to the file successfully')
      }
  });
}


/**
 * Takes in an array of chores and for each chore creates a
 * new <chore-card> element, adds the chore data to that card
 * using element.data = {...}, and then appends that new chore
 * to <main>
 * @param {Array<Object>} chores An array of chores
 */
function addChoresToDocument(chores) {
  if (!chores) return;
  let main = document.querySelector('main');
  // Sorted the chores based on their date
  let sorted_chores_by_date = chores.sort((p1, p2) => (p1.date > p2.date) ? 1 : (p1.date < p2.date) ? -1 : 0);
  chores.forEach((chore) => {
    let choreCard = document.createElement('chore-card');
    choreCard.data = sorted_chores_by_date;
    main.append(choreCard);
  });
}

/**
 * Takes in an array of chores and the chore object we want to delete
 * first check if the chore exists then iterate and removes the chore from the list
 * then the function returns the updated chore list
 * This function is called whenever a chore is expired OR is deleted by the user
 * @param {Array<Object>} chore_list An array of chores
 * @param {Object} chore_to_delete the chore that is to be deleted
 */
 function remove_chore(chore_to_delete, chore_list) {
  //checks if the chore we want to delete exists in the chore list
  if(!chore_list.includes(chore_to_delete)){
    console.log("The chore does not exist");
    return;
  }
  //if the chore exists then iterate through the chore list
  for(let i = 0; i < chore_list.length; i++){
    let chore = chore_list[i];
    if(chore.name == chore_to_delete.name){
      //we found the chore element in the list that matches the chore we want to delete
      chore_list.splice(i, 1);
      //splice removes '1' element starting from 'i' index
      console.log("Chore successfully removed from the list");
      return chore_list;
      //returns the updated chore list
    }
  }
}
