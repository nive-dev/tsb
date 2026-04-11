// Categories data with enhanced structure for dynamic content
import img1 from "../assets/categories/img1.png";
import img2 from "../assets/categories/img2.png";
import img3 from "../assets/categories/img3.png";
import img4 from "../assets/categories/img4.png";
import img5 from "../assets/categories/img5.png";
import img6 from "../assets/categories/img6.png";
import img7 from "../assets/categories/img7.png";
import img8 from "../assets/categories/img8.png";
import img9 from "../assets/categories/img9.png";
import img10 from "../assets/categories/img10.png";
import img11 from "../assets/categories/img11.png";
import img12 from "../assets/categories/img12.png";
import img13 from "../assets/categories/img13.png";
import img14 from "../assets/categories/img14.png";
import img15 from "../assets/categories/img15.png";
import img16 from "../assets/categories/img16.png";
import img17 from "../assets/categories/img17.png";
import img18 from "../assets/categories/img18.png";
import img19 from "../assets/categories/img19.png";
import img20 from "../assets/categories/img20.png";
import img21 from "../assets/categories/img21.png";


import banner1 from "../assets/categories/b1.png";
import banner2 from "../assets/categories/b2.png";
import banner3 from "../assets/categories/b3.png";
import banner4 from "../assets/categories/b4.png";
import banner5 from "../assets/categories/b5.png";
import banner6 from "../assets/categories/b6.png";
import banner7 from "../assets/categories/b7.png";
import banner8 from "../assets/categories/b8.png";
import banner9 from "../assets/categories/b9.png";
import banner10 from "../assets/categories/b10.png";
import banner11 from "../assets/categories/b11.png";
import banner12 from "../assets/categories/b12.png";
import banner13 from "../assets/categories/b13.png";
import banner14 from "../assets/categories/b14.png";
import banner15 from "../assets/categories/b15.png";
import banner16 from "../assets/categories/b16.png";
import banner17 from "../assets/categories/b17.png";
import banner18 from "../assets/categories/b18.png";
import banner19 from "../assets/categories/b19.png";
import banner20 from "../assets/categories/b20.png";
import banner21 from "../assets/categories/b21.png";

export const categories = [
{
  id: "snacks",
  title: "Lays & Snacks", // ✅ changed title
  description: "Chips, snacks & crunchy treats daily", // ✅ changed description
  previewImages: [img1],
  bannerImage: banner1,
  points: [
    "Wide variety of chips and snacks", // ✅ updated
    "Daily fresh stock delivery",
    "Organic and pesticide-free options",
    "Seasonal produce selection",
    "Premium quality snacks"
  ]
},
  {
    id: "dry-fruits",
    title: "Dry Fruits",
    description: "Premium almonds, cashews, dates & more",
    previewImages: [img2
    ],
    bannerImage: banner2,
    points: [
      "Premium quality almonds and cashews",
      "Fresh dates and dried fruits",
      "Rich in essential nutrients",
      "Vacuum packed for freshness",
      "Imported and domestic varieties",
        "Premium imported dates and nuts"

    ]
  },
  {
    id: "dairy-frozen",
    title: "Dairy & Frozen",
    description: "Milk, cheese, ice cream & frozen foods",
    previewImages: [
      img3
    ],
    bannerImage: banner3,
 points: [
  "Amul, Mother Dairy – Milk & dairy products",
  "Britannia – Cheese & dairy items",
  "Kwality Walls – Ice creams",
  "Aavin – Fresh dairy products",
  "Nestlé – Frozen foods"
]
  },
  {
    id: "personal-care",
    title: "Personal Care",
    description: "Skincare, haircare & hygiene essentials",
    previewImages: [
   img4
    ],
    bannerImage: banner4,
  points: [
  "Dove, Himalaya, Nivea – Personal care essentials",
  "Ponds, Lakmé – Skin & beauty products",
  "Head & Shoulders, Sunsilk – Haircare solutions",
  "Colgate, Sensodyne – Oral care",
  "Vaseline, Parachute – Daily care products"
]
  },
  {
    id: "household",
    title: "Household Needs",
    description: "Cleaning supplies, detergents & tools",
    previewImages: [img5
    ],
    bannerImage: banner5,
    points: [
      "Quality cleaning supplies",
      "Effective detergents and soaps",
      "Household tools and accessories",
      "Eco-friendly cleaning options",
      "Daily household essentials"
    ]
  },
  {
    id: "health-drinks",
    title: "Health Drinks",
    description: "Juices, health mixes & energy drinks",
    previewImages: [
    img6
    ],
    bannerImage:banner6,
    points: [
      "Fresh fruit juices available",
      "No added preservatives",
      "Daily fresh stock",
      "Organic ingredients used",
      "Energy and health drinks"
    ]
  },
  {
     id: "chocolates-snacks",
    title: "Chocolates & Snacks",
    description: "Chips, biscuits, chocolates & treats",
    previewImages: [
    img7
    ],
    bannerImage: banner7,
 points: [
  "Cadbury, Nestlé – Chocolates",
  "Lays, Bingo – Chips & snacks",
  "Britannia, Parle – Biscuits",
  "Oreo, KitKat – Treats & cookies",
  "Pringles – Premium snacks"
]
  },
  {
    id: "baby-care",
    title: "Baby Care",
    description: "Diapers, baby food, toys & accessories",
    previewImages: [img8
    ],
    bannerImage: banner8,
  points: [
  "Pampers, Huggies diapers",
  "Johnson’s baby care products",
  "Himalaya baby essentials",
  "Nestlé baby food",
  "Mee Mee baby accessories"
]
  },
  {
    id: "kitchen-glassware",
    title: "Kitchen & Glassware",
    description: "Cookware, containers, glasses & more",
    previewImages: [img9
    ],
    bannerImage: banner9,
    points: [
      "Quality cookware sets",
      "Glassware and dinnerware",
      "Food storage containers",
      "Kitchen tools and accessories",
      "Durable and safe materials"
    ]
  },
 {
  id: "stationery",
  title: "Stationery",
  description: "Books, pens, colors & school supplies",
  previewImages: [img14],
  bannerImage: banner14,
  points: [
    "Classmate notebooks",
    "Camlin stationery items",
    "Faber-Castell colors",
    "Pens, pencils & markers",
    "All school & office supplies"
  ]
},
{
  id: "toys",
  title: "Toys",
  description: "Fun toys, games & puzzles for kids",
  previewImages: [img10], // 👉 use different image if available
  bannerImage: banner10,   // 👉 or any other banner
  points: [
    "Lego toys & puzzles",
    "Funskool educational toys",
    "Indoor & outdoor games",
    "Creative learning toys",
    "Safe and quality materials"
  ]
},
  {
    id: "perfume-fragrances",
    title: "Perfume & Fragrances",
    description: "Luxury scents, body mists & deodorants",
    previewImages: [
     img11
    ],
    bannerImage: banner11,
    points: [
      "Luxury perfume collections",
      "Body mists and sprays",
      "Quality deodorants",
      "Long-lasting fragrances",
      "Premium and affordable options"
    ]
  },
  {
  id: "instant-foods",
  title: "Instant Foods",
  description: "Ready-to-cook Maggie, pasta & quick meals",
  previewImages: [img12],
  bannerImage:banner12 ,
  points: [
    "Nestlé Maggi noodles & pasta",
    "Yippee instant noodles",
    "Knorr soups & instant mixes",
    "Cup noodles & ready meals",
    "Quick breakfast options"
  ]
},
{
  id: "grains-staples",
  title: "Grains & Staples",
  description: "Rice, wheat, pulses & daily staples",
  previewImages: [img13],
  bannerImage: banner13,
  points: [
    "India Gate & Daawat rice",
    "Fortune wheat & atta",
    "Toor dal, moong dal & pulses",
    "Organic grains",
    "Premium quality staples"
  ]
},
{
  id: "stayfree",
  title: "Stayfree",
  description: "Sanitary pads & feminine hygiene products",
  previewImages: [img15],
  bannerImage: banner15,
  points: [
    "Stayfree sanitary pads",
    "Comfortable and long-lasting protection",
    "Ultra-thin and soft materials",
    "Daily hygiene essentials",
    "Trusted feminine care products"
  ]
},
{
  id: "bags",
  title: "Bags",
  description: "Carry bags, shopping bags & storage bags",
  previewImages: [img16],
  bannerImage: banner16,
  points: [
    "Reusable shopping bags",
    "Eco-friendly carry bags",
    "Durable storage bags",
    "Different sizes available",
    "Strong and long-lasting materials"
  ]
},
{
  id: "spices",
  title: "Spices",
  description: "Aachi, Sakthi masalas & cooking essentials",
  previewImages: [img17],
  bannerImage: banner17,
  points: [
    "Aachi masala products",
    "Sakthi spice powders",
    "Authentic Indian flavors",
    "Fresh and aromatic spices",
    "Wide variety of cooking essentials"
  ]
},
{
  id: "pooja-essentials",
  title: "Pooja Essentials",
  description: "Agarbathi, camphor & pooja items",
  previewImages: [img18],
  bannerImage: banner18,
  points: [
    "Agarbathi and incense sticks",
    "Camphor and diya items",
    "Pooja oils and wicks",
    "Daily prayer essentials",
    "Traditional pooja materials"
  ]
},
{
  id: "oil",
  title: "Oil",
  description: "Cooking oils & healthy oil options",
  previewImages: [img19],
  bannerImage: banner19,
  points: [
    "Sunflower and groundnut oil",
    "Coconut and gingelly oil",
    "Healthy cooking oils",
    "Refined and cold-pressed options",
    "Trusted oil brands"
  ]
},
{
  id: "ready-mix",
  title: "Ready Mix",
  description: "Instant mixes for quick cooking",
  previewImages: [img20],
  bannerImage: banner20,
  points: [
    "Idli and dosa mix",
    "Cake and dessert mixes",
    "Quick meal preparation",
    "Easy and time-saving",
    "Popular ready mix brands"
  ]
},
{
  id: "biscuits",
  title: "Biscuits",
  description: "Sweet, cream & healthy biscuits",
  previewImages: [img21],
  bannerImage: banner21,
  points: [
    "Cream and chocolate biscuits",
    "Healthy digestive biscuits",
    "Kids favorite snacks",
    "Tea-time biscuits",
    "Top biscuit brands"
  ]
}
];


