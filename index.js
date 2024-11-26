const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//possible names
const names = [
  "Aria",
  "Elijah",
  "Olivia",
  "Jackson",
  "Sophia",
  "Liam",
  "Emma",
  "Mason",
  "Isabella",
  "Lucas",
];

//possible occupations
const occupations = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Mechanical Engineer",
  "Graphic Designer",
  "Chef",
  "Marketing Analyst",
  "Electrician",
  "Physician",
  "Data Scientist",
];

let total = 0


function makeTableRow(parentContainer, freelancer, occupation, price) {
  const tr1 = document.createElement("tr");
  const cell1 = document.createElement("td")
  const cell2 = document.createElement("td")
  const cell3 = document.createElement("td")
  cell1.textContent = freelancer;
  cell2.textContent = occupation;
  cell3.textContent = price;
  tr1.appendChild(cell1)
  tr1.appendChild(cell2)
  tr1.appendChild(cell3)
  parentContainer.appendChild(tr1);
}

function makeTableHeader(parentContainer, textContent) {
  const col1 = document.createElement("th")
  col1.textContent = textContent;
  parentContainer.appendChild(col1)
}


function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root")
  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  const heading = document.createElement("h1")
  heading.textContent = "Freelancer Forum"
  rootContainer.appendChild(heading)

  const subheading = document.createElement("h2")
  subheading.id = "averageprice"
  subheading.textContent = `The average starting price is = 0`
  rootContainer.appendChild(subheading)


  const availheader = document.createElement("h2")
  availheader.textContent = "Available Freelancers"
  rootContainer.appendChild(availheader)

  /**
   * 👉 STEP 3:
   *    Create a table to hold our freelancers in
   */
  const table = document.createElement("table")
  makeTableHeader(table, "Name");
  makeTableHeader(table, "Occupation");
  makeTableHeader(table, "Starting Price");

  // makeTableRow(table, "Alice", "Writer", 30);
  // makeTableRow(table, "Bob", "Teacher", 50);
  // makeTableRow(table, "Carol", "Programmer", 70);


  renderFreelancers(freelancers, table)
  renderRandom(names, table)



  rootContainer.appendChild(table)

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */

}

/**
 * 👉 STEP 4:
 *    Create a function to render the freelancers in our Freelancer array
 */
function renderFreelancers(freelancers, table) {
  for (let index = 0; index < freelancers.length; index++) {
    const element = freelancers[index];
    console.log("element", element)
    total += element.price
    calculateAveragePrice(total, table)
    makeTableRow(table, element.name, element.occupation, element.price)

  }

}

/**
 * 👉 STEP 6:
 *    Create a function to add a new freelancer to the Freelancer array
 */
function renderRandom(names, table) {
  for (let index = 0; index < names.length; index++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 100);
    console.log("random element", name)
    setInterval(() => {
      total += price
      calculateAveragePrice(total, table)
      makeTableRow(table, name, occupation, price)
    }, 1000)


  }

}

/**
 * 👉 STEP 7:
 *    Add an interval to add a new freelancer every second
 */


/** STEP 8: CALCUALTE AVERAGE PRICE
 */

function calculateAveragePrice(total, table) {

  const averageprice = document.querySelector("#averageprice")
  console.log(averageprice)
  averageprice.innerHTML = `The average starting price is = ${(total / table.childElementCount).toFixed(2)}`

};




//call init function
init();
