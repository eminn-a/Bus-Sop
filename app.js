async function getInfo() {
  //lets get started!
  //get elements
  let stopID = document.getElementById("stopId").value;
  let stopName = document.getElementById("stopName");
  let buses = document.getElementById("buses");
  buses.innerHTML = "";

  try {
    //info for loading data
    stopName.textContent = `Loading...`;

    // await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 1000);
    // });
    //set fetch
    let res = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${stopID}`
    );
    let data = await res.json();
    //clear text

    //parse elements
    stopName.textContent = data.name;
    let myObj = Object.entries(data.buses);
    //create elements
    //Bus {busId} arrives in {time} minutes
    for (let el of myObj) {
      let liBusses = document.createElement("li");
      liBusses.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`;
      buses.appendChild(liBusses);
    }
  } catch (error) {
    stopName.textContent = "Error";
  }
}
