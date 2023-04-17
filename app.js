//This gets the submit button
const submitButton = document.querySelector('#submitButton');
//Adds a listener to the button
//I don't know why it has to be like this, but if I type it like "submitButton.addEventListener("click",addNewMeme(event));" it says "event" is not defined
submitButton.addEventListener("click",function(event){addNewMeme(event);});

//Function to add a new meme
function addNewMeme(event){
    //Prevents the default behavior
    event.preventDefault();
    //Gets the top, bottom, link, size, and color
    let topText = document.querySelector('#topText').value;
    let bottomText = document.querySelector('#bottomText').value;
    let imgLink = document.querySelector('#imageLink').value;
    let textSizeInput = document.querySelector('#textSize').value;
    let textColorInput = document.querySelector('#textColor').value;
    //This is the check if anything is blank
    if (topText==""){
        alert('Missing Top Text!');
        return;
    }
    if (bottomText==""){
        alert('Missing Bottom Text!');
        return;
    }
    if (imgLink==""){
        alert('Missing Image Link!');
        return;
    }

    //Gets the section of the gallery
    let gallery = document.querySelector('#gallery');
    //Makes the div
    let newMeme = document.createElement('div');
    //Creates a div in the new meme
    let topTextPara = document.createElement('div');
    //Sets the class of the top text
    topTextPara.classList.add('topText');
    //Sets the inner text of the div
    topTextPara.innerText = topText;
    //Sets the size and color
    topTextPara.style.fontSize = `${textSizeInput}px`;
    topTextPara.style.color = `${textColorInput}`;
    //Appends it to the meme
    newMeme.appendChild(topTextPara);
    
    //Creates the image
    let memeImg = document.createElement('img');
    //Sets the source of the image to the submitted link
    memeImg.src = imgLink;
    //Appends it to the meme
    newMeme.appendChild(memeImg);

    //Creates the bottom text div
    let bottomTextPara = document.createElement('div');
    //Sets the inner text to the bottom text
    bottomTextPara.innerText = bottomText;
    //Sets the class of the bottom text
    bottomTextPara.classList.add('bottomText');
    //Sets the size and color
    bottomTextPara.style.fontSize = `${textSizeInput}px`;
    bottomTextPara.style.color = `${textColorInput}`;
    //Appends it to the parent div
    newMeme.appendChild(bottomTextPara);
    
   

    //Creates the delete button
    let deleteButton = document.createElement('button');
    deleteButton.type='submit';
    deleteButton.innerText='Delete';
    deleteButton.classList.add('deleteButton');
    //Appends the delete button
    newMeme.appendChild(deleteButton);
    //Adds a listener to the delete button
    deleteButton.addEventListener('click',function(event){removeMeme(event);});

    //Adds mouse over and mouse leave events to the image to show/hide the delete button
    memeImg.addEventListener('mouseover',function(){
        deleteButton.style.visibility="visible";
    });
    memeImg.addEventListener('mouseleave',function(){
        deleteButton.style.visibility="hidden";
    });
    //Adds a mouseover listener to the button
    //This keeps it from flickering when the user hovers over the button itself since they are technically not over the image anymore
    deleteButton.addEventListener('mouseover',function(){
        deleteButton.style.visibility="visible";
    });

    //Appends the meme to the gallery
    gallery.appendChild(newMeme);

    //Gets the width of the image when the image has loaded
    //If it doesn't wait for the image to load, the width will be returned as 0
    memeImg.addEventListener('load',function(){
        let imageWidth = memeImg.naturalWidth;
        //Sets the width of the top and bottom text to the width of the image
        topTextPara.style.width = `${imageWidth}px`;
        bottomTextPara.style.width = `${imageWidth}px`;
    });
    

    //Resets the forms
    document.querySelector('#topText').value = "";
    document.querySelector('#bottomText').value = "";
    document.querySelector('#imageLink').value = "";
    document.querySelector('#textSize').value = "20"
    document.querySelector('#textColor').value = "black"
}


//Function to remove the meme
function removeMeme(event){
    //Prevent default behavior
    event.preventDefault();
    //Gets the parent of the button
    let clickedButton = event.target;
    let selectedMeme = clickedButton.parentElement;
    //Erases itself
    selectedMeme.remove();
}