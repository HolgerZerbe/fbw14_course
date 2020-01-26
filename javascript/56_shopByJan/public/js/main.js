const thumbnailObj = document.getElementsByClassName(`thumbnail`);
const thumbnailContainerObj = document.getElementsByClassName(`thumbnail-container`)[0];
const productDetailObj = document.getElementsByClassName(`product-details`)[0];
const cartObj = document.getElementsByClassName(`cart`)[0];
const thankyouObj = document.getElementsByClassName(`thankyou`)[0];

const putItemCartObj = document.getElementById(`put-item-cart`);
const logoObj = document.getElementsByClassName(`logo`)[0];
const linkObj = document.getElementsByTagName(`a`);

let cart = [];
let newCart = [];
let currentItem;
let currentPieces = 0;

const showProductDetails = (singleProductShown) => {
    thumbnailContainerObj.style.display = `none`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `block`;

    productDetailObj.innerHTML = "";
    const singleProduct = document.createElement(`div`);
    singleProduct.classList.add(`product-container`);
    singleProduct.innerHTML = `<div class="product-image">
                        <img src="public/${singleProductShown.imgurl}" alt="">
                    </div>
                    <div class="product-description">
                        <h2>${singleProductShown.name}</h2>
                        <p>${singleProductShown.description}</p>

                        <div class="product-buy">
                            <div>Quantity: <input id="input"type="number" min="1" max="9" class="quantity" value="1" /> x
                                <span>${singleProductShown.price}</span> / each<span></span>
                                <div id="put-item-cart"><button>In den Warenkorb legen</button></div>
                            </div>
                        </div>
                    </div>`
    productDetailObj.appendChild(singleProduct);

    currentItem = {
        ...singleProductShown
    };


    const putItemCartObj = document.getElementById(`put-item-cart`);


    putItemCartObj.onclick = () => {

        const inputObj = document.getElementById(`input`);
        currentPieces = inputObj.value;

        //console.log(JSON.parse(localStorage.getItem(`cart`)))
        if (JSON.parse(localStorage.getItem(`cart`)) === null || JSON.parse(localStorage.getItem(`cart`)) === undefined) {
            cart = [];
        } else {
            cart = JSON.parse(localStorage.getItem(`cart`));

        }
        cart.push({
            pieces: currentPieces,
            item: currentItem
        })
        //console.log(cart);

        for (let i = 0; i < cart.length - 1; i++) {
            //console.log(i);

            if (cart[i].item.id === cart[cart.length - 1].item.id) {

                cart[i].pieces = parseInt(cart[i].pieces) + parseInt(cart[cart.length - 1].pieces);
                cart.pop();
                if (cart[i].pieces > 9) {
                    cart[i].pieces = 9;
                    alert(`Sorry,
the maximum allowed order quantity is 9 pieces!`)
                }
                break;
            }
        }
        localStorage.setItem(`cart`, JSON.stringify(cart));
        showCart(JSON.parse(localStorage.getItem(`cart`)));
        //showAll();
    }
}


const showCart = (choosenItems) => {
    thumbnailContainerObj.style.display = `none`;
    cartObj.style.display = `block`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    cartObj.innerHTML = "";
    let sum = 0;
    for (elem of choosenItems) {

        const newItemInCart = document.createElement(`div`);
        newItemInCart.classList.add(`cart-item`),
            newItemInCart.innerHTML = `<div class="cart-item">
                    <div class="cart-thumbnail">
                        <img src="images/${elem.item.imgurl}" alt="" class="cart-picture">
                    </div>
                    <div class="cart-description">
                        <div>
                            <span class="cart-quantity">${elem.pieces}&nbsp</span>x
                            <span class="cart-productname">${elem.item.name}</span>
                            <span class="cart-amount">${(Math.round(100*elem.pieces*elem.item.price))/100}</span>
                            <button class="remove-cart-item" id=${elem.item.id}>Remove</button>
                        </div>
                    </div>
                </div>`
        cartObj.appendChild(newItemInCart);
        sum += (elem.pieces * elem.item.price)
    }
    const totalAmountDiv = document.createElement(`div`);
    totalAmountDiv.innerHTML = `<div class="cart-buy">Total Amount: <span class="cart-totalamount">${sum.toFixed(2)}</span>
    <button class="cart-buy-button">Buy now</button>
</div>`
    cartObj.appendChild(totalAmountDiv);

    const removeBtnObj = document.getElementsByClassName(`remove-cart-item`);

    for (let i = 0; i < removeBtnObj.length; i++) {
        removeBtnObj[i].onclick = () => {

            let id = removeBtnObj[i].getAttribute(`id`);
            cart = JSON.parse(localStorage.getItem(`cart`));
            let newChoosenItems = [];

            for (let i = 0; i < choosenItems.length; i++) {
                if (id !== choosenItems[i].item.id) {
                    newChoosenItems.push(choosenItems[i]);
                }

                console.log(newChoosenItems)
            }
            localStorage.setItem(`cart`, JSON.stringify(newChoosenItems));

            showCart(JSON.parse(localStorage.getItem(`cart`)));

        }
    }
    const cartBuyButtonObj = document.getElementsByClassName(`cart-buy-button`)[0];

    cartBuyButtonObj.onclick = async () => {
        let order = JSON.parse(localStorage.getItem(`cart`));
        console.log(order);
        let body = {
            productids: order
        };
        //console.log(body.productids);

        try {
            const response = await fetch('http://localhost:3000/order', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });

            if (response.ok) {

                // nachfolgender Code nur zum Darstellen des Response auf der Console.
                // const responseJson = await response.json();
                // const responseStr = JSON.stringify(responseJson);
                // console.log(responseStr);

                // falls die http-Antwort 200 oder 304 war
                showThankYou();
            }

        } catch (e) {
            console.log('Error: ' + e);
        }
    }
}

const showThankYou = () => {
    thumbnailContainerObj.style.display = `none`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `flex`;
    productDetailObj.style.display = `none`;
    localStorage.clear();
}

const showAll = () => {
    thumbnailContainerObj.style.display = `flex`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    loadProducts('http://localhost:3000/product');
}


logoObj.onclick = () => {
    showAll();
}

linkObj[0].onclick = () => {
    showAll();
}

linkObj[1].onclick = () => {
    thumbnailContainerObj.style.display = `flex`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    loadProducts('http://localhost:3000/product?category=Books');

}
linkObj[2].onclick = () => {
    thumbnailContainerObj.style.display = `flex`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    loadProducts('http://localhost:3000/product?category=Movies');
}
linkObj[3].onclick = () => {
    thumbnailContainerObj.style.display = `flex`;
    cartObj.style.display = `none`;
    thankyouObj.style.display = `none`;
    productDetailObj.style.display = `none`;
    loadProducts('http://localhost:3000/product?category=Music');
}



// Alternativ wird der onclick-event im HTML gesetzt:
// linkObj[4].onclick = () => {
//     showCart();
// }

const loadProducts = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    const responseStr = JSON.stringify(responseJson);
    console.log(responseJson)

    createProducts(responseStr);
}


const createProducts = (allproducts) => {
    thumbnailContainerObj.innerHTML = "";

    let productsArray = [...JSON.parse(allproducts).products];

    for (elem of productsArray) {
        const newDivObj = document.createElement(`div`);
        newDivObj.classList.add(`thumbnail`);
        newDivObj.style.background = `url(public/${elem.imgurl}) center center`;
        newDivObj.innerHTML = `<div class="thumbnail-name">${elem.name}</div><div class="thumbnail-price">${elem.price} €</div>`;
        thumbnailContainerObj.appendChild(newDivObj);
    };

    for (let i = 0; i < thumbnailObj.length; i++) {
        thumbnailObj[i].onclick = () => {
            // console.log(productsArray[i]);
            showProductDetails(productsArray[i])
        }
    }
}

loadProducts('http://localhost:3000/product');