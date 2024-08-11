// Retrieve data from localStorage
const data = localStorage.getItem('poemData');
const title = localStorage.getItem('poemName');

// Check if data exists
if (data) {
    // Do something with the data
    console.log(data)
    document.getElementById('title').innerHTML = title;
    document.getElementById('main').innerHTML = data;
} else {
    console.log('No data found in localStorage');
}