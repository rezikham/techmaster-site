const productDb = [
  {
    id: 1,
    name: "Mario vs. Donkey Kong™",
    price: 49.99,
    release: "2/16/24",
    img: "/assets/pictures/1-1.png",
    genre: ["Puzzle", "Action"],
    demo: true,
    dlc: false,
  },
  {
    id: 2,
    name: "MARIO + RABBIDS SPARKS OF HOPE",
    price: 59.99,
    release: "10/20/22",
    img: "/assets/pictures/2-1.png",
    genre: ["Strategy"],
    demo: true,
    dlc: true,
  },
  {
    id: 3,
    name: "Hyrule Warriors: Age of Calamity",
    price: 49.99,
    release: "2/16/24",
    img: "/assets/pictures/3-1.png",
    genre: ["Puzzle", "Action"],
    demo: true,
    dlc: false,
  },
  {
    id: 4,
    name: "Princess Peach™: Showtime!",
    price: 59.99,
    release: "3/22/24",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_300/ncom/software/switch/70010000072191/2fda60f3007987817be456876e7755f5120522a75e477961fbb622fd32f9e588",
    genre: ["Puzzle", "Action"],
    demo: true,
    dlc: false,
  },
  {
    id: 5,
    name: "Splatoon™ 3",
    price: 41.99,
    release: "9/9/22",
    img: "/assets/pictures/5-1.png",
    genre: ["Puzzle", "Action"],
    demo: true,
    dlc: false,
  },
  {
    id: 6,
    name: "Kirby's Dream Buffet™",
    price: 10.49,
    release: "8/17/22",
    img: "/assets/pictures/6-1.png",
    genre: ["Puzzle", "Action"],
    demo: true,
    dlc: false,
  },
  {
    id: 7,
    name: "It Takes Two",
    price: 19.99,
    release: "11/4/22",
    img: "/assets/pictures/7-1.png",
    genre: ["Puzzle", "Action"],
    demo: true,
    dlc: false,
  },
  {
    id: 8,
    name: "Fitness Boxing 2: Rhythm & Exercise",
    price: 39.99,
    release: "12/4/20",
    img: "/assets/pictures/8-1.png",
    genre: ["Music"],
    demo: true,
    dlc: true,
  },
  {
    id: 9,
    name: "Game Builder Garage™",
    price: 29.99,
    release: "6/11/21",
    img: "/assets/pictures/9-1.png",
    genre: ["Education"],
    demo: true,
    dlc: false,
  },
  {
    id: 10,
    name: "Pikmin™ 4",
    price: 59.99,
    release: "7/21/23",
    img: "/assets/pictures/10-1.png",
    genre: ["Action", "Adventure"],
    demo: true,
    dlc: false,
  },
];
$(document).ready(function () {
  var productList = "";
  productDb.forEach(product => {
    productList += `
            <div
              dlc="${product.dlc}"
              demo="${product.demo}"
              filter="${product.genre}"
              class="product h-full flex-col justify-end relative bg-white rounded-2xl"
            >
              <a
                href="${product.id | ""}"
                class="h-full w-full flex-col text-gray-700 relative mt-0 rounded-2xl no-underline"
              >
                <div
                  id="product-image-container"
                  class="rounded-t-2xl overflow-hidden shrink-0 z-10 bg-white transition-transform duration-500 ease-in-out"
                >
                  <div
                    class="block relative w-full max-w-[none] overflow-hidden"
                  >
                    <img
                      class="w-full h-[auto] min-h-px block inset-0 object-cover overflow-hidden"
                      src="${product.img}"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  id="product-info-container"
                  class="rounded-b-2xl pt-4 relative grow bg-white"
                >
                  <div
                    id="product-info"
                    class="h-full flex-col justify-between px-4 py-0"
                  >
                    <div
                      id="product-title"
                      class="h-16 no-underline block relative mb-4"
                    >
                      <h2
                        class="text-base m-0 font-bold overflow-hidden transition duration-500 ease-in-out"
                      >
                        ${product.name}
                      </h2>
                      <div class="mb-1 text-xs text-gray-600">
                      ${product.release}
                      </div>
                    </div>
                    <div class="h-6 flex items-center mb-2">
                      <span
                        id="product-price"
                        class="text-base text-gray-700 font-bold"
                      >
                        $${product.price}
                      </span>
                    </div>
                    <div id="product-extra" class="mb-4 h-6">
                      <div class="text-sm flex items-start">
                        <div
                          class="w-0.5 h-4 block translate-y-[2px] mr-1.5 bg-red-600"
                        ></div>
                        <span>Nintendo Switch</span>
                      </div>
                      <button
                        class="flex items-center appearance-none bg-none cursor-pointer absolute bottom-0 right-0 z-0 p-4 text-red-600 transition duration-200 ease-in-out hover:text-red-800"
                      >
                        <i class="fa-regular fa-heart text-2xl"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>`;
  });

  // console.log(productList);
  $("#product-grid").html(productList);
});
