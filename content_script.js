function clicksearch() {
    var planets = document.getElementsByClassName("page-search")[0];
    console.log(planets[0]);
    planets[0].value='suyog';
    console.log("val injected!");
    var button = document.getElementsByClassName("[ btn  btn-1dx-blue ]  page-search__btn");
    console.log(button[0]);
    button[0].click();
    console.log("button clicked!");


}

clicksearch();