
//get input element
let filterInput = document.getElementById('filterInput');

//add eventlistner to the input
filterInput.addEventListener('keyup', filternames);

function filternames(){
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    //get names ul
    let ul = document.getElementById('names');

    //get li's from ul
    let li = ul.querySelectorAll('li.collection-item');
    
    //loop through collection-items lis
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        //if its matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

};























