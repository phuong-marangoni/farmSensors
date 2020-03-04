let root = document.body
let count = 0;


let start = {
  view: function() {
    return m("main", [
      m("h1", {class: "title"}, "Farm Sensors App"),
      m("h2", {class: "section"}, "Water System Control"),
      m("div", {class: "controls"}, "", [
        m("label", {for: "button", class: "toggle"} , "Manually Turn Water On/Off", [
          m("br"),
          m("input", {type: "checkbox", class: "toggle__input", id: "button", onclick: toggleWater},""),
          m("span", {class: "toggle__button", id: "my-btn"}, ""),]),
        ]),
      m("div", {class: "chart"}, [
        m("canvas", {id: "myChart"},""),
      ]),
      m("div", {class: "chart"}, [
        m("canvas", {id: "myChart2"}, ""),
      ]),
      m("p", {class: "info"}, "These charts track the soil's humidity and temperature"),
    ])
  }
}

// Turn on and off
function toggleWater () {

  let btn = document.querySelector('.toggle__button');
  // To access pseudo element
  let style = window.getComputedStyle(btn, '::before');
  let content = style.getPropertyValue('content');

  if(content === '"off"') {
    console.log("OFF!");
    //Turn watering system off
  }else if (content === '"on"'){
      console.log("ON!");
      //Turn watering system on
  }
}

m.mount(root, start);

let ctx = document.getElementById('myChart').getContext('2d');

let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Soil Humidity',
            backgroundColor: ["rgba(255, 99, 132, 0.5)","rgba(255, 159, 64, 0.5)","rgba(255, 205, 86, 0.5)","rgba(75, 192, 192, 0.5)","rgba(54, 162, 235, 0.5)","rgba(153, 102, 255, 0.5)","rgba(201, 203, 207, 0.5)"],
            borderColor: ["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],
            data: [65,59,80,81,56,55,40]
        }]
    },

    // Configuration options go here
    options: { responsive: true, maintainAspectRatio: false}
});

let ctx2 = document.getElementById('myChart2').getContext('2d');

let chart2 = new Chart(ctx2, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'Soil Temperature',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
      }]
  },

  // Configuration options go here
  options: { responsive: true, maintainAspectRatio: false}
});
