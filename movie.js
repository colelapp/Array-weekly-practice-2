const prompt = require('prompt-sync')();
let movies = [];

function addMovie() {
    let movie = prompt(" Enter a movie to add: ");


    movies.push(movie);
    console.log("Movie added successfully");
    console.log("Current movies:", movies);
}
function removeMovie() {
    let movie = prompt("Enter a movie to remove: ");
    let index = movies.indexOf(movie);  

    if (index === -1) {
        console.log("Movie does not exist");
    } else {
        movies.splice(index, 1);
        console.log("Movie removed");
        console.log("Current movies:", movies);
    }
}
function searchMovie(){
    let movie = prompt("Enter a movie to search: ")
    let index = movies.indexOf(movie);

    if (index === -1){
        console.log("movie not found")
    }else{
        console.log("movie found!")
    }
}

function printMovies(){
    if(movies.length === 0){
        console.log("No movies available")
        return;
    }
    console.log("All Movies")
    for(let i = 0; i<movies.length; i++){
        console.log(movies[i]);
    }
}

function countMovies(){
    console.log("Total movies:",movies.length)
}

function displayUppercase(){
    let movie = prompt("Enter a movie title: ");
    console.log("Uppercase:", movie.toUpperCase());
}

function menu() {
    let choice = "";

    while (choice !== "7") {
        console.log("\nMovie Collection Manager");
        console.log("1. Add Movie");
        console.log("2. Remove Movie");
        console.log("3. Search Movie")
        console.log("4. Print All Movies")
        console.log("5. Count Movies")
        console.log("6. Display Movie in Uppercase");
        console.log("7. Exit");

        choice = prompt("Enter your choice: ");

        if (choice === "1") {
            addMovie();
        } else if (choice === "2") {
            removeMovie();
        }else if (choice === "3"){
            searchMovie()
        }else if (choice === "4"){
            printMovies()
        }else if(choice === "5"){
            countMovies()
        }else if (choice === "6"){
            displayUppercase();
        }else if (choice === "7"){
            console.log("Exiting...");
        }else {
            console.log("Invalid choice. Try again.");
        }
    }
}
menu();