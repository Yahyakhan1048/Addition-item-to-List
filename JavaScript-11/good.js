var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit event
form.addEventListener('submit', addItem);

//  When You add something then how You will delete that Part

 itemList.addEventListener('click', removeItem);

 // Filter Event
 filter.addEventListener('keyup', filterItems);

// Add item

function addItem(e) {
    e.preventDefault();
    // console.log(1);

    // Get input value
    var newItem = document.getElementById('item').value;

    //  create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    // console. log(li);

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //   Add Delete Button
    var deleteBtn = document.createElement('button');


    // Create Classes to Delete Button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //  Append text node

    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    //  Append Li to list
    itemList.appendChild(li);
}


// Remove item   From the list
 function removeItem(e){
     if(e.target.classList.contains('delete')) {
         if(confirm('Are You sure?')) {
             var li = e.target.parentElement;     //it add parent element because it is li and we want to delete them
             itemList.removeChild(li);     //there we Add child becauwe
         }
     }
 }

 // Filter Items

 function filterItems(e){
    //  convert text to lover case
    var text = e.target.value.toLowerCase();

    // Get List
    var items = itemList.getElementsByTagName('li');

    // Convert To an Array


    Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    //console.log(itemName);    Print All item Name For Us
    if(itemName.toLowerCase().indexOf(text) != -1) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
    })
 }