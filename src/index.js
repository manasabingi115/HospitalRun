import "./styles.css";

var patients = document.getElementById("patients-tab");
var maincontent = document.getElementById("main-div");
var dashboard = document.getElementById("dashboard-tab");

dashboard.addEventListener("click", () => {
  maincontent.innerHTML = `<div>
  <h2>Dashboard</h2>
  <h4>Example</h4>
</div>`;
});

patients.addEventListener("click", () => {
  console.log("hello");
  maincontent.innerHTML = `<div>
  <h2>Patient</h2>
  <input placeholder="Search"></input>
  <p>There are no patients yet, let's add the first one!</p>
  <button>New Patient</button>
  </div>`;
});
