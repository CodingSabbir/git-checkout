// select element
const title=document.querySelector('#title');
const author=document.querySelector('#author');
const year=document.querySelector('#year');
const btn=document.querySelector('.btn');
const book_list=document.querySelector('#book-list');

// form add create element
btn.addEventListener('click',function(event){
    event.preventDefault()
    if(title.value=='' && author.value==''  && year.value=='' ){
        alert("input data is not")
    }
    // create row
    const addRow=document.createElement('tr');
    // create th
    const newTitle=document.createElement('th');
    newTitle.innerHTML=title.value;
    addRow.appendChild(newTitle);

    const newAthor=document.createElement('th');
    newAthor.innerHTML=author.value;
    addRow.appendChild(newAthor);

    const newYear=document.createElement('th');
    newYear.innerHTML=year.value;
    addRow.appendChild(newYear);

//    add
   const close=book_list.appendChild(addRow);

    // close 
const  button= document.createElement('th');
        button.innerHTML='X' 
        close.appendChild(button);

    button.addEventListener('click',function(){
        close.style.display='none'
       
    });
    

});
