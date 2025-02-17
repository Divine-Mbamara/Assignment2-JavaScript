// constants for query selector
var html = document.querySelector("html");
var studentNum = document.querySelector("#myStudentId");
var customNum = document.querySelector("#customNumber");
var customColor = document.querySelector(".custColor");
var randomColor = document.querySelector(".randColor");
var selectImage = document.querySelector("#imageSelect");
var image = document.querySelector("#images");

//array for images
var images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];

//array for selecting images
var selectImages = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];

// function to change bg color from user input and add student id
function changeCustomColor() {
    if(customNum.value < 0 || customNum.value > 100){
        html.style.backgroundColor = "red";
    }
    else if(customNum.value <= 20){
        html.style.backgroundColor = "green";
    }
    else if(customNum.value <= 40){
        html.style.backgroundColor = "blue";
    }
    else if(customNum.value <= 60){
        html.style.backgroundColor = "orange";
    }
    else if(customNum.value <= 80){
        html.style.backgroundColor = "purple";
    }
    else{
        html.style.backgroundColor = "#f2d400";
    }
    studentNum.textContent = "Student Number: 200594413";
}

// function to change bg color from random no.
function changeRandomColor() {
    var randomNum = Math.floor(Math.random() * 100);
    console.log(randomNum);
    if(randomNum < 0 || randomNum > 100){
        html.style.backgroundColor = "red";
    }
    else if(randomNum <= 20){
        html.style.backgroundColor = "green";
    }
    else if(randomNum <= 40){
        html.style.backgroundColor = "blue";
    }
    else if(randomNum <= 60){
        html.style.backgroundColor = "orange";
    }
    else if(randomNum <= 80){
        html.style.backgroundColor = "purple";
    }
    else{
        html.style.backgroundColor = "#f2d400";
    }
    studentNum.textContent = "Student Number: 200594413";
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    if(selectImage.options.length <= 1){
        for(let i=0; i<selectImages.length; i++){
             // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
            let list = document.createElement("option");
            list.textContent = selectImages[i];
            selectImage.appendChild(list);
        }
    }
}

// function to change image
function changeImage() {
    image.style.display = "block";
    switch (selectImage.value) {
        case "Image 1":
            image.setAttribute("src", images[0]);
            break;
        case "Image 2":
            image.setAttribute("src", images[1]);
            break;
        case "Image 3":
            image.setAttribute("src", images[2]);
            break;
        case "Image 4":
            image.setAttribute("src", images[3]);
            break;
        case "Image 5":
            image.setAttribute("src", images[4]);
            break;
        default:
            image.setAttribute("src", "");
            break;
    }
}

// event listeners for on click event of buttons and select
customColor.addEventListener("click", changeCustomColor);
randomColor.addEventListener("click", changeRandomColor);
selectImage.addEventListener("click", addList);

// event listeners for on change event of select
selectImage.addEventListener("change", changeImage);