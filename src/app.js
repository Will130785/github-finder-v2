import "./scss/main.scss";
import Search from "./models/Search";
import UI from "./views/searchView";

//UI variables
const textInput = document.querySelector(".search__form--search-box");

//Create new search and ui instance
let search = new Search();
let ui = new UI();


//call searchUsers and handle data
textInput.addEventListener("keyup", (e) => {

    //Capture input data
    let userInput = textInput.value;

    //If there is an input make http request and handle data
    if(userInput !== "") {
        search.searchUsers(userInput)
        .then(res => {

            //Display profile and repos in UI
            ui.displayProfile(res);
            ui.displayRepos(res.repoData);

            

        });


    }
    

});