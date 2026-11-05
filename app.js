
/*const customerNames = [];
const itemNames =[];


function btnClickMe1(){
    let txtName = document.getElementById("textname").value;

    customerNames.push(txtName);
    
    console.log(customerNames);
  //document.getElementById("lblCustomer").innerText=txtName;

    loadNames();
}

function btnClickMe2(){
    let itemName = document.getElementById("itemName").value;

    itemNames.push(itemName);
    console.log(itemNames);

    loadItems();
}

function loadNames(){

    document.getElementById("olCustomer").innerHTML ="";

    for(let cNames of customerNames){
        document.getElementById("olCustomer").innerHTML += `<li>${cNames}</li>`
    }
}
function loadItems(){

    document.getElementById("olitem").innerHTML ="";

    for(let iNames of itemNames){
        document.getElementById("olitem").innerHTML += `<li>${iNames}</li>`
    }

}*/

const customerList = [];
const itemList = [];

function addCustomer() {

    let customerId = document.getElementById("txtId").value;
    let customerName = document.getElementById("txtName").value;
    let customerAge = document.getElementById("txtAge").value;
    let customerAdress = document.getElementById("txtAddres").value;
    let customerSalary = document.getElementById("txtSalary").value;


    let customer = {
        id: customerId,
        name: customerName,
        age:customerAge,
        address:customerAdress,
        salary:customerSalary
    }

    customerList.push(customer);

    loadTable();

    console.log(customerList);

}

function addItem() {

    let itemCode = document.getElementById("txtcode").value;
    let itemName = document.getElementById("txtiName").value;
    let itemPrice = document.getElementById("txtprice").value;
    let itemdate = document.getElementById("txtdate").value;
    let itemContact = document.getElementById("txtContact").value;


    let item = {
        code:itemCode,
        name: itemName,
        price:itemPrice,
        expdate:itemdate,
        contact:itemContact
    }

    itemList.push(item);

    loaditemTable();

    console.log(itemList);

}


function loaditemTable(){

    let itembody =`
            <tr>
                <th>Item code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Exp.Date</th>
                <th>Contact</th>
            </tr>
 `;

    for(let item of itemList){
        itembody+=`
        <tr>
            <td>${item.code}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.expdate}</td>
            <td>${item.contact}</td>
        </tr> 
        `

    }
    document.getElementById("tblItem").innerHTML = itembody;

}




function loadTable(){

    let body =`
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Salary</th>
        </tr> `;

    for(let customer of customerList){
        body+=`
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
            <td>${customer.salary}</td>
        </tr> 
        `

    }
    document.getElementById("tblcustomer").innerHTML = body;

}
