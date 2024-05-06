window.onload = async () => {
  await getCategories();
  await getProducts();
};

handleResult = (products) => {
  document.querySelectorAll(".menu-items").forEach((item) => {
    products.forEach((prd) => {
      if (parseInt(item.getAttribute("idnum")) == parseInt(prd.categoryId)) {
        prdEl = `
            <li class="item">
                <p class="item-name">${prd.name}</p>
                <p class="item-price">${prd.price}₺</p>
            </li>
        `;

        item.querySelector(".item-list").innerHTML += prdEl;
      }
    });
  });
};

loadCategories = (categories) => {
  categories.forEach((category) => {
    let contentEl = `
        <a class="content" href="#${category.id}">
            <i class="fa-solid fa-${category.icon}"></i>
            <p class="content-description">${category.categoryName}</p>
        </a>
    `;

    let sectionEl = `
        <section id="${category.id}" class="menu-items" idnum=${category.categoryid}> 
            <h5 class="menu-items-title">${category.categoryName}</h5>
            <ul class="item-list">
              
            </ul>
        </section>
    
    `;

    document.querySelector(".contents").innerHTML += contentEl;
    document.querySelector(".body").innerHTML += sectionEl;
  });
};

getProducts = () => {
  fetch("menu.json")
    .then((data) => data.json())
    .then((result) => {
      handleResult(result);
    });
};

getCategories = () => {
  fetch("categories.json")
    .then((data) => data.json())
    .then((result) => {
      loadCategories(result);
    });
};
