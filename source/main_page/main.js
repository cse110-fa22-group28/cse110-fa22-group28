// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
async function init() {
  // initialize ServiceWorker
  ///initializeServiceWorker();
  // Get the recipes from localStorage
  let chores;
  try {
    chores = await getChores();
  } catch (err) {
    console.error(err);
  }
  // Add each recipe to the <main> element
  addChoresToDocument(chores);
}

/**
 * Reads 'chores' from JSON files and returns an native JavaScript objects of
 * all of the chores found (parsed, not in string form).
 * @returns {<Object>} An native JavaScript objects of chorecards found in history_chores.json
 */
async function getChores(){
    const precious_chores = [];
    const response = await fetch('./history_chores.json');
    //parses JSON response into native JavaScript objects
    const chores = await response.json();
    return chores;
}
//event listener outside
async function addChores() {
  const chores = [];
  // Refer to plus button in the main page
  const button = document.getElementById('add-chore');
  button.addEventListener('click', ()=>{
    // Begin the add-chore page
    fetch('./chores.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
  })

}
/**
 * Takes in an array of chores, converts it to a string, and then
 * saves that string to 'chores' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveChoresToJson(chores) {
  localStorage.setItem('chores', JSON.stringify(chores));
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
    let choreCard = document.createElement('chore_card');
    choreCard.data = sorted_chores_by_date;
    main.append(choreCard);
  });
}
