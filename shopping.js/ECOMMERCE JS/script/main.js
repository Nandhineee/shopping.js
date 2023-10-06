let initialProducts = [
  {
    id: 1,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 2,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 3,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 4,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 5,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 6,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 7,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 8,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 9,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  {
    id: 10,
    title: "Coolers",
    description: "oval shape glass",
    price: 1000,
    thumbnail:
      "https://media.istockphoto.com/id/1366405543/vector/pixel-art-glasses-black-glasses-of-thug-life-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=HLNHT6dFQz7Lm_inp0E2NqaEBCGfZ5cTmbbSpbwOKFc=",
  },
  
  
];

let initialUsers = [
  { id: 1, email: "admin@admin.com", password: "admin@admin.com" },
  { id: 2, email: "ashith@user.com", password: "ashith" },
  { id: 4, email: "arun@user.com", password: "arun" },
];



const signInHandler = () => {
  const emailRef = document.getElementById("email");
  const passwordRef = document.getElementById("password");
  const errorRef = document.getElementById("error");

  if (emailRef.value.length === 0) {
    errorRef.innerText = "Email field is empty!!";
    return;
  }
  if (!validateEmail(emailRef.value)) {
    errorRef.innerText = "Email field is invalid!!";
    return;
  }
  if (passwordRef.value.length === 0) {
    errorRef.innerText = "Password field is empty!!";
    return;
  }

  if (passwordRef.value.length < 3) {
    errorRef.innerText = "Password field is empty!!";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));
  let loggedInUser = users.find(
    (user) =>
      user.email === emailRef.value && user.password === passwordRef.value
  );

  if (!loggedInUser) {
    errorRef.innerText = "Invalid credentails!!!";
    return;
  }

  sessionStorage.setItem("userId", loggedInUser.id);
  errorRef.innerText = "";

  if (emailRef.value === "admin@admin.com")
        location.replace("../Admin/admin.html");
      else location.replace("./index.html");




  
};

const validateEmail = (email) => {
  let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const reghandler = () => {
  let nameRef = document.getElementById("name");
  let mailRef = document.getElementById("email");
  let passwordRef = document.getElementById("password");
  let confirmpasswordRef = document.getElementById("ConfirmPassword");
  let errorRef = document.getElementById("error");

  if (
    nameRef.value.length > 0 &&
    mailRef.value.length > 0 &&
    passwordRef.value.length > 0 &&
    confirmpasswordRef.value.length > 0
  ) {
    if (passwordRef.value === confirmpasswordRef.value) {
      let users = JSON.parse(localStorage.getItem("users"));

      users.push({
        id: getRandomId(),
        email: mailRef.value,
        password: passwordRef.value,
      });

      localStorage.setItem("users", JSON.stringify(users));
      location.href = "../User/signin.html";
    } else errorRef.innerText = "Passwords are incorrect";
  } else {
    errorRef.innerText = "Fields are empty";
  }
  nameRef = "";
  mailRef = "";
  passwordRef = "";
  confirmpasswordRef = "";
};

const getRandomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

const getRandomId = (type = "users") => {
  let jsonArray = JSON.parse(localStorage.getItem(type));

  for (let i = 0; i < 10000; i++) {
    const randomId = getRandomNumber();
    const checkingId = jsonArray.find((obj) => obj.id === randomId);

    if (!checkingId) {
      return randomId;
    }
  }
};

const loadCustomerproducts = () => {
  const productsRef = document.getElementById("productsRow");
  const products = JSON.parse(localStorage.getItem("products"));

  let body = " ";
  for (let product of products) {
    body += `<div class="col-4">
      <div
        class="card mt-5 m-lg-5"
        style="width: 15rem; background-color: plum; margin:20px; "
      >
        <img
          src="${product.thumbnail}"
          class="top"
          alt="chudithor"
        />
        <div class="card-body">
          <p>${product.title}</p>
          <p>
           ${product.description}
          </p>
          <p class="fs-4">₹${product.price}</p>
          <button class="btn btn-success mb-2" onClick="addToCartHandler(${product.id})">Add to Cart</button>
        </div>
      </div>
    </div>`;
  }
  console.log(body);
  productsRef.innerHTML = body;
};

const loadAdminHomePage = () => {
  const productsRef = document.getElementById("productsTableBody");
  const products = JSON.parse(localStorage.getItem("products"));

  let body = "";
  for (let product of products) {
    body += `<td>
    <div class="d-flex align-items-center">
      <img
        src="${product.thumbnail}"
        alt="Glass"
        style="width: 45px; height: 45px"
        class="rounded-circle"
      />
      <div class="ms-3">
        <p class="fw-bold mb-1">${product.title}</p>
    </div>
    </div>
  </td>
  <td>
    <p class="fw-normal mb-1">${product.description}</p>
  </td>
  <td>${product.price}</td>
  <td>pending</td>
  <td>
  <button type="button" class="btn btn-link btn-sm btn-rounded bg-light text-decoration-none" onclick="editProductHandler(${product.id})">
  Edit
</button>
    <button class="btn btn-link btn-sm btn-rounded bg-danger text-decoration-none" onclick="deleteProductHandler(${product.id})">
     delete
    </button>
  </td>
</tr>`;
  }

  productsRef.innerHTML = body;
};

const deleteProductHandler = (id) => {
  console.log("delete")
  const products = JSON.parse(localStorage.getItem("products"));
  const filteredProducts = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(filteredProducts));
  loadAdminHomePage();
};

const addToCartHandler = (productId) => {
  const userId = sessionStorage.getItem("userId");

  if (!userId) {
    location.href = "../User/signin.html";
    return;
  }
  const products = JSON.parse(localStorage.getItem("products"));
  const productToAdd = products.find((product) => product.id === productId);

  if (!productToAdd) {
    console.error("Product not found!");
    return;
  }
  let userCart = JSON.parse(localStorage.getItem(`cart_${userId}`));

  if (!userCart) {
    userCart = [];
  }
  productToAdd.quantity = 1;

  userCart.push(productToAdd);
  localStorage.setItem(`cart_${userId}`, JSON.stringify(userCart));
  console.log(`Product added to cart: ${productToAdd.title}`);
};

const updateCartCount = () => {
  const cartCountRef = document.getElementById("cartLink");
  if (sessionStorage.getItem("userId")) {
    const userId = parseInt(sessionStorage.getItem("userId"));
    const cartKey = `cart_${userId}`;
    if (localStorage.getItem(cartKey)) {
      const cart = JSON.parse(localStorage.getItem(cartKey));
      const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
      cartCountRef.textContent = `Cart (${cartCount})`;
    } else {
      cartCountRef.textContent = "Cart";
    }
  } else {
    cartCountRef.textContent = "Cart";
  }
};

const loadCartPage = () => {
  console.log("loaded");
  const cartTableBody = document.getElementById("cartTableBody");
  const totalRef = document.getElementById("total");

  if (sessionStorage.getItem("userId")) {
    const userId = parseInt(sessionStorage.getItem("userId"));
    const cartKey = `cart_${userId}`;

    if (localStorage.getItem(cartKey)) {
      const cart = JSON.parse(localStorage.getItem(cartKey));

      let body = "";
      let total = 0;
      for (let cartItem of cart) {
        const quantity = cartItem.quantity; 
        const price = cartItem.price;
        const itemTotal = quantity * price;
        total += itemTotal;

        body += `<tr>
                  <td>${cartItem.title}</td>
                  <td>${quantity}</td>
                  <td>₹ ${price}</td>
                  <td>₹ ${itemTotal}</td>
                </tr>`;
      }
      cartTableBody.innerHTML = body;
      totalRef.textContent = `₹ ${total}`;
    }
  } else {
    location.href = "./signin.html";
  }
};

const checkOutHandler = () => {
  if (sessionStorage.getItem("userId")) {
    const userId = parseInt(sessionStorage.getItem("userId"));
    const cartKey = `cart_${userId}`;

    if (localStorage.getItem(cartKey)) {
      const cart = JSON.parse(localStorage.getItem(cartKey));
      const userCart = cart;

      let orders = [];
      if (localStorage.getItem("orders")) {
        orders = JSON.parse(localStorage.getItem("orders"));
      }
      orders.push({
        timestamp: Date.now(),
        userId: userId,
        status: "Pending",
        products: userCart,
      });

      localStorage.removeItem(cartKey); 
      localStorage.setItem("orders", JSON.stringify(orders));
      updateCartCount();
      location.href = "./order.html";
    } else {
      location.href = "./index.html";
    }
  } else {
    location.href = "./signin.html";
  }
};

const loadOrderPage = () => {
  const tableRef = document.getElementById("orderTableBody");

  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("orders")) {
      const orders = JSON.parse(localStorage.getItem("orders"));
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userOrder = orders.filter((order) => order.userId === userId);

      let body = "";
      for (let order of userOrder) {
        let product = "";
        let total = 0;
        for (let prod of order.products) {
          product += `<p>${prod.quantity} * ${prod.title}</p>`; 
          total += prod.quantity * prod.price; 
        }

        const date = new Date(order.timestamp);
        const formattedDate =
          date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        body += `<tr>
            <td>${order.timestamp}</td>
            <td>${formattedDate}</td>
            <td>${product}</td>
            <td>₹ ${total}</td>
            <td>${order.status}</td>
          </tr>`;
      }
      tableRef.innerHTML = body;
    } else {
      location.href = "./index.html";
    }
  } else {
    location.href = "./signin.html";
  }
};

const loadAdminOrderPage = () => {
  const tableRef = document.getElementById("table");

  console.log("hiiiiiii");

  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("orders")) {
      const orders = JSON.parse(localStorage.getItem("orders"));

      let body = "";
      for (let order of orders) {
        let product = "";
        let total = 0;
        for (let prod of order.products) {
          product += `<p>${prod.count} * ${prod.title}</p>`;
          total += prod.count * prod.price;
        }

        const date = new Date(order.timestamp);
        const formattedDate =
          date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        const users = JSON.parse(localStorage.getItem("users"));
        const orderedUser = users.find(
          (user) => user.id === parseInt(order.userId)
        );

        body += `<tr>
            <td>${order.timestamp}</td>
            <td>${formattedDate}</td>
            <td>${orderedUser.email}</td>
            <td>${product}</td>
            <td>₹ ${total}</td>
            <td>
              <select class="form-select" id="status-${order.timestamp}">
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </td>
          </tr>`;
      }
      tableRef.innerHTML = body;

      for (let order of orders) {
        const statusRef = document.getElementById(`status-${order.timestamp}`);
        statusRef.value = order.status;
        statusRef.addEventListener("change", () => {
          const lastUpdatedOrders = JSON.parse(localStorage.getItem("orders"));
          const updatedOrders = lastUpdatedOrders.map((o) => {
            if (o.timestamp === order.timestamp) {
              return { ...o, status: statusRef.value };
            } else return o;
          });
          localStorage.setItem("orders", JSON.stringify(updatedOrders));
        });
      }
    } else {
      location.href = "./index.html";
    }
  } else {
    location.href = "./signin.html";
  }
};

const saveOrUpdateHandler = () => {
  const idRef = document.getElementById("id");
  const nameRef = document.getElementById("name");
  const priceRef = document.getElementById("price");
  const detailsRef = document.getElementById("desc");
  const imageRef = document.getElementById("image");
  const toastRef = document.getElementById("toast");
  const toastMessageRef = document.getElementById("toastMessage");

  let products = JSON.parse(localStorage.getItem("products")) || [];

  const id = parseInt(idRef.value); 
  const existingProductIndex = products.findIndex((product) => product.id === id);

  if (existingProductIndex !== -1) {

    products[existingProductIndex] = {
      id: id,
      title: nameRef.value,
      description: detailsRef.value,
      price: parseFloat(priceRef.value),
      thumbnail: imageRef.value,
    };

    toastMessageRef.innerText = "Product updated successfully!!!";
  } else {
    const newProduct = {
      id: getRandomId("products"), 
      title: nameRef.value,
      description: detailsRef.value,
      price: parseFloat(priceRef.value),
      thumbnail: imageRef.value,
    };

    products.push(newProduct);

    toastMessageRef.innerText = "Product added successfully!!!";
  }

  toastRef.classList.add("fade", "show");

  setTimeout(() => {
    toastRef.classList.remove("fade", "show");
  }, 2000);

  localStorage.setItem("products", JSON.stringify(products));
  location.href = "./admin.html"; 
};


const editProductHandler = (id) => {
  window.location.href = `./addproduct.html?id=${id}`;
};

const populateProduct = (product) => {
  const nameRef = document.getElementById("name");
  const priceRef = document.getElementById("price");
  const descriptionRef = document.getElementById("desc");
  const imageRef = document.getElementById("image");
  const idRef = document.getElementById("id");
  const titleRef = document.getElementById("title");
  const btnRef = document.getElementById("btn");

  idRef.value = product.id;
  nameRef.value = product.title;
  priceRef.value = product.price;
  descriptionRef.value = product.description;
  imageRef.value = product.thumbnail;
  titleRef.innerText = "Edit Product";
  btnRef.innerText = "Update Product";
};


window.addEventListener("load", () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(initialProducts));
  }

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(initialUsers));
  }

  if (location.pathname.endsWith("/index.html")) {
    loadCustomerproducts();
  }

  if (location.pathname.endsWith("/admin.html")) {
    loadAdminHomePage();
  }

  if (location.pathname.endsWith("/cart.html")) {
    loadCartPage();
  }

  if (location.pathname.endsWith("/order.html")) { 
    loadOrderPage();
  }

  if (location.pathname.endsWith("/adminorders.html")) { 
    loadAdminOrderPage();
  }

  if (location.pathname === "/shopping.js/ECOMMERCE%20JS/Admin/addproduct.html") {
    let params = new URL(document.location).searchParams;
    let productId = params.get("id");
    if (productId) {
      const products = JSON.parse(localStorage.getItem("products"));
      const product = products.find(
        (product) => product.id === parseInt(productId)
      );
      populateProduct(product);
    }
  }


  console.log(location.pathname);
});







  
















  