// Retrieve data from localStorage
const data = localStorage.getItem("poemData");
const title = localStorage.getItem("poemName");

const bgs = {
    "The Provider who Provides" : "url('../images/poetry-specific-bgs/The Provider who Provides.jpg')",
    "A Bankrupt Billionaire" : "url('../images/poetry-specific-bgs/A Bankrupt Billionaire.jpg')",
    "An Uncommon Textbook" : "url('../images/poetry-specific-bgs/An Uncommon Textbook.jpg')",
    "A Shining Star": "url('../images/poetry-specific-bgs/A Shining Star.jpg')",
    "A Calm Carnivore": "url('../images/poetry-specific-bgs/A Calm Carnivore.jpg')",
    "Re-routed": "url('../images/poetry-specific-bgs/Re-routed.jpg')",
    "Papa, where is he?": "url('../images/poetry-specific-bgs/Papa, where is he?.jpg')",
}
Object.values(bgs).forEach((bgUrl) => {
    const url = bgUrl.slice(4, -1).replace(/['"]/g, "");
    const img = new Image();
    img.src = url;

});

// Check if data exists
if (data) {
    // Do something with the data
    document.getElementById("title").innerHTML = title;
    document.getElementById("main").innerHTML = data;
    document.getElementsByClassName("container")[0].style.backgroundImage = bgs[title];
} else {
    console.log("No data found in localStorage");
}