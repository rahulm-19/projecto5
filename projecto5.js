addItem = () => {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([title, description]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArraystr)
        itemJsonArray.push([title, description]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    tableBody = document.getElementById('tableBody');
    let str = " ";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deletedItem(${index})">Remove</button></td>
    </tr>`
    });
    tableBody.innerHTML = str;
}
deletedItem = (index) => {
    itemJsonArraystr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArraystr)
    itemJsonArray.splice(index, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    tableBody = document.getElementById('tableBody');
    let str = " ";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deletedItem(${index})">Remove</button></td>
    </tr>`
    });
    tableBody.innerHTML = str;
}
clearAll = () => {
    localStorage.clear();
    itemJsonArray = [];
    tableBody = document.getElementById('tableBody');
    let str = " ";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deletedItem(${index})">Remove</button></td>
    </tr>`
    });
    tableBody.innerHTML = str;

}