const addItems= document.querySelector('.add-items');
const itemsList= document.querySelector('.list');
const items = JSON.parse(localStorage.getItem('items')) || [];

// untuk tambah item ke daftar
function addItem(e){
  e.preventDefault();

  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  
  items.push(item);
   populateList(items, itemsList);
   localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}


function populateList(list = [], listList){
  listList.innerHTML = list.map((list, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${list.done ? 'checked' : ''} />
        <label for="item${i}">${list.text}</label>
        <button class="delete-btn" data-index=${i}>🚮</button>
      </li>
    `;
  }).join('');
}
function toggleDone(e){
  if(!e.target.matches('input'))return; 
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done; 
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteItem(e) {
    if (!e.target.matches('.delete-btn')) return; // mengecek tombol yang diklik apkh tombol hapus
    const index = e.target.dataset.index; // ambil index item yang akan dihapus
    items.splice(index, 1); // apus item dr array items
    localStorage.setItem('items', JSON.stringify(items)); 
    populateList(items, itemsList); // update tampilan 
  }

 
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
itemsList.addEventListener('click', deleteItem);
populateList(items, itemsList); 
