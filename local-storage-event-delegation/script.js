const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = []; // items array to be updated with each item button add clicked!

  function addItem(event){
    event.preventDefault();
    const itemToBeAdded = (this.querySelector('[name="item"]')).value;
    const item = {
        text: itemToBeAdded,
        done: false
    };
    items.push(item);
    populateList(items)
    localStorage.setItem('items', items);
    this.reset();
  }

  function populateList(plates = []) {
    itemsList.innerHTML = plates.map((plate,i) => { 
        console.log(plate,i);
        return 
        `<li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked': ''}/>
            <label for="item${i}">${plate.text}</label>
        </li>`;
    })
    console.log(itemsList);
  }

addItems.addEventListener('submit', addItem);

populateList();