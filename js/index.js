var productName  = document.getElementById("productName");
var productPrice  = document.getElementById("productPrice");
var productModel  = document.getElementById("productModel");
var productDesc  = document.getElementById("productDesc");
var productList ;

if (localStorage.getItem("productList") == null) {
    productList = []; 
}else{
    productList = JSON.parse(localStorage.getItem("productList"));
    displayProduct(productList);
}

function addProduct() {
    var product = {
        name : productName.value,
        price : productPrice.value,
        desc : productDesc.value,
        model : productModel.value 
    }
    productList.push(product);
    displayProduct(productList); 
    // clearForm(); 
    localStorage.setItem("productList",JSON.stringify(productList));
}
function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productModel.value = "";
    productDesc.value = "";  
}

function displayProduct(products) {
    var cartona = ``;
    for (var i = 0; i<products.length ;i++) {
        cartona += `<tr>
        <td>${i + 1}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].model}</td>  
        <td>${products[i].desc}</td>
        <td>
            <button class="btn btn-warning btn-sm">Update</button>
        </td>
        <td>
            <button onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>`; 
    }
    document.getElementById("tBody").innerHTML = cartona;
}

function deleteProduct(index){
    productList.splice(index,1);
    localStorage.setItem("productList",JSON.stringify(productList));
    displayProduct(productList);

}