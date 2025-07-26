let close = document.getElementById("offer-close");
close.addEventListener("click", () => {
  document.querySelector(".offer-bar").style.display = "none";
});
//responsive navbar
const openBtn = document.getElementById("side-navbar-activate");
const closeBtn = document.getElementById("side-navbar-close");
const sideNav = document.querySelector(".side-navbar");

openBtn.addEventListener("click", () => {
  sideNav.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  sideNav.classList.add("translate-x-full");
});





const slider = document.getElementById("slider-images");

const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");
if (slider && slideLeft && slideRight) {
  let index = 0;
  const updateSlider = () => {
    slider.style.transform = `translateX(-${index *25}%)`;
    
  };
  slideRight.addEventListener("click", () => {
    index = (index + 1) % slider.children.length;
    console.log(index)
   
    updateSlider();
  });
  slideLeft.addEventListener("click", () => {
    index = (index - 1 + slider.children.length) % slider.children.length;
    console.log(index)
    updateSlider();
  });
}
//like button
 document.querySelectorAll(".like-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i"); 
    if (icon.classList.contains("far")) {
      icon.classList.replace("far", "fas");
      icon.classList.add("text-red-500");
    } else {
      icon.classList.replace("fas", "far");
      icon.classList.remove("text-red-500");
    }
  });
});
//Collections
// 1. Our data
var products = [
  {
    id: 1,
    name: "Floral Resort Shirt",
    src: "img/clothes/dress-1.png",
    price: 79,
    category: "Resort Shirts",
    gender: "Male",
  },
  {
    id: 2,
    name: "Urban Zip Hoodie",
    src: "img/clothes/dress-2.png",
    price: 59,
    category: "Hoodies",
    gender: "Male",
  },
  {
    id: 3,
    name: "Silk Chiffon Top",
    src: "img/clothes/dress-3.png",
    price: 49,
    category: "Top",
    gender: "Female",
  },
  {
    id: 4,
    name: "Tropical Resort Shirt",
    src: "img/clothes/dress-4.png",
    price: 89,
    category: "Resort Shirts",
    gender: "Male",
  },
  {
    id: 5,
    name: "Cotton Resort Shirt",
    src: "img/clothes/dress-5.png",
    price: 99,
    category: "Resort Shirts",
    gender: "Male",
  },
  {
    id: 6,
    name: "Linen Button-Up Shirt",
    src: "img/clothes/dress-6.png",
    price: 109,
    category: "Resort Shirts",
    gender: "Male",
  },
  {
    id: 7,
    name: "Chiffon Ruffle Top",
    src: "img/clothes/dress-7.png",
    price: 69,
    category: "Top",
    gender: "Female",
  },
  {
    id: 8,
    name: "Fleece Pullover Hoodie",
    src: "img/clothes/dress-8.png",
    price: 75,
    category: "Hoodies",
    gender: "Male",
  },
  {
    id: 9,
    name: "Zip-Up Sports Hoodie",
    src: "img/clothes/dress-9.png",
    price: 85,
    category: "Hoodies",
    gender: "Male",
  },
  {
    id: 10,
    name: "Women's Cozy Hoodie",
    src: "img/clothes/dress-10.png",
    price: 95,
    category: "Hoodies",
    gender: "Female",
  },
];

// 2. Helpers
var grid = document.getElementById("product-grid");
var searchInput = document.getElementById("search-input");
var catChecks = document.getElementsByClassName("filter-cat");
var genChecks = document.getElementsByClassName("filter-gen");

// 3. Show function
function showList(list) {
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
    return;
  }
  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    grid.innerHTML +=
      "<div class='border rounded p-2 text-center bg-gray-50'>" +
      "<img src='" +
      p.src +
      "' class='w-full h-70% object-cover'/>" +
      "<h4 class='mt-2 font-semibold'>" +
      p.name +
      "</h4>" +
      "<p class='text-primary font-bold text-3xl'>$" +
      p.price +
      "</p>" +
      "</div>";
  }
}

// 4. Filter function
function filterAll() {
  var q = searchInput.value.toLowerCase();

  // collect checked categories
  var selCats = [];
  for (var i = 0; i < catChecks.length; i++) {
    if (catChecks[i].checked) selCats.push(catChecks[i].value);
  }
  // collect checked genders
  var selGens = [];
  for (var i = 0; i < genChecks.length; i++) {
    if (genChecks[i].checked) selGens.push(genChecks[i].value);
  }

  var result = [];
  for (var i = 0; i < products.length; i++) {
    var p = products[i];
    if (selCats.length > 0 && selCats.indexOf(p.category) === -1) continue;
    if (selGens.length > 0 && selGens.indexOf(p.gender) === -1) continue;
    if (q && p.name.toLowerCase().indexOf(q) === -1) continue;
    result.push(p);
  }
  showList(result);
}

// 5. Init
showList(products);

// 6. Events
searchInput.onkeyup = filterAll;
for (var i = 0; i < catChecks.length; i++) {
  catChecks[i].onchange = filterAll;
}
for (var i = 0; i < genChecks.length; i++) {
  genChecks[i].onchange = filterAll;
}
