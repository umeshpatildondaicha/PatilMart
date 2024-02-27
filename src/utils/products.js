import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
      id: 1,
      title: "Discover Exclusive Deals",
      desc: "Find amazing discounts on a wide range of products. Shop now!",
      cover: sofaSlide,
  },
  {
      id: 2,
      title: "New Arrivals Every Week",
      desc: "Stay ahead of the trend with our latest collection. Explore now!",
      cover: phone08,
  },
  {
      id: 3,
      title: "Upgrade Your Tech Game",
      desc: "Get your hands on the latest gadgets and accessories. Shop now!",
      cover: wireless01,
  },
  {
      id: 4,
      title: "Elevate Your Style",
      desc: "Discover stylish furniture and home decor to transform your space.",
      cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Enjoy hassle-free shopping with complimentary shipping.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Secure Payment",
    subtitle: "Shop with confidence knowing your transactions are secure.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Safe Delivery",
    subtitle: "Your orders delivered safely and securely to your doorstep.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "Customer Support",
    subtitle: "Need assistance? Our dedicated support team is here to help.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview Sofa",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount: 30,
    shortDesc:
      "Transform your living space with the stylish Stone and Beam Westview Sofa. Crafted for comfort and durability, this sofa is the perfect addition to any home.",
    description:
      "Upgrade your home decor with the Stone and Beam Westview Sofa. Made with high-quality materials and featuring a modern design, this sofa offers both style and comfort for you and your guests.",
    reviews: [
      {
        rating: 4.7,
        text: "Excellent sofa! Very comfortable and looks great in my living room.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern Sofa",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount: 20,
    shortDesc:
      "Add a touch of elegance to your home with the Rivet Bigelow Modern Sofa. Its sleek design and premium materials make it the perfect centerpiece for any living room.",
    description:
      "Upgrade your living space with the Rivet Bigelow Modern Sofa. Featuring a contemporary design and plush cushions, this sofa offers both style and comfort for you and your family.",
    reviews: [
      {
        rating: 4.8,
        text: "Beautiful sofa! The quality is exceptional and it's very comfortable.",
      },
      {
        rating: 4.8,
        text: "Great addition to my living room. Love the modern look!",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount: 15,
    shortDesc:
      "Upgrade your home office with the Baltsar Chair. Its ergonomic design and adjustable features ensure maximum comfort and support during long hours of work.",
    description:
      "Enhance your workspace with the Baltsar Chair. Designed for comfort and functionality, this chair features a breathable mesh backrest and lumbar support to help you stay productive throughout the day.",
    reviews: [
      {
        rating: 4.6,
        text: "Very comfortable chair! It's sturdy and provides great support for my back.",
      },
      {
        rating: 4.9,
        text: "Excellent chair for the price. Easy to assemble and very comfortable to sit in.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount: 35,
    shortDesc:
      "Upgrade your home office with the Helmar Chair. Its ergonomic design and adjustable features ensure maximum comfort and support during long hours of work.",
    description:
      "Enhance your workspace with the Helmar Chair. Designed for comfort and functionality, this chair features a padded seat and backrest for maximum comfort and support.",
    reviews: [
      {
        rating: 4.6,
        text: "Very comfortable chair! It's sturdy and provides great support for my back.",
      },
      {
        rating: 4.9,
        text: "Excellent chair for the price. Easy to assemble and very comfortable to sit in.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount: 10,
    shortDesc:
      "Stay connected with the Realme 8 smartphone. Featuring a stunning display and powerful performance, this phone is perfect for work and play.",
    description:
      "Experience the next level of mobile technology with the Realme 8 smartphone. Packed with innovative features and cutting-edge design, this phone offers a seamless user experience.",
    reviews: [
      {
        rating: 4.8,
        text: "Great phone! The camera quality is amazing and the battery life is impressive.",
      },
      {
        rating: 4.9,
        text: "Love my new Realme 8! It's fast, sleek, and has all the features I need.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc:
      "Experience flagship-level performance with the One Plus Nord smartphone. With its premium design and powerful features, this phone delivers an exceptional user experience.",
    description:
      "Upgrade to the One Plus Nord smartphone and enjoy premium features at an affordable price. From its stunning display to its powerful performance, this phone is designed to impress.",
    reviews: [
      {
        rating: 4.8,
        text: "Amazing phone! It's fast, sleek, and the camera quality is outstanding.",
      },
      {
        rating: 4.9,
        text: "Best phone I've ever owned! The battery life is great and the software is very smooth.",
      },
    ],
    avgRating: 4.8,
  },
];
export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: productImg01,
    category: "Sofa",
    price: 193,
    shortDesc:
      "Comfortable and stylish, the Stone and Beam Westview sofa is perfect for any modern living space.",
    description:
      "The Stone and Beam Westview sofa offers both comfort and style. With its high-quality construction and modern design, it's sure to be a focal point in any room. The sofa features plush cushions and durable fabric upholstery, providing a cozy place to relax after a long day. Whether you're entertaining guests or enjoying a quiet night in, the Stone and Beam Westview sofa is the perfect choice for your home.",
    reviews: [
      {
        rating: 4.7,
        text: "I love my new Stone and Beam Westview sofa! It's so comfortable and looks great in my living room.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    category: "Sofa",
    price: 253,
    shortDesc:
      "Add a touch of modern elegance to your living room with the Rivet Bigelow sofa.",
    description:
      "The Rivet Bigelow sofa combines sleek design with ultimate comfort. Featuring luxurious velvet upholstery and sturdy wooden legs, this sofa is both stylish and durable. The tufted backrest adds a touch of sophistication, while the plush cushions provide optimal support for hours of relaxation. Whether you're entertaining guests or lounging with family, the Rivet Bigelow sofa is the perfect addition to any home.",
    reviews: [
      {
        rating: 4.8,
        text: "The Rivet Bigelow sofa exceeded my expectations! It's incredibly comfortable and looks stunning in my living room.",
      },
      {
        rating: 4.8,
        text: "I'm so happy with my purchase of the Rivet Bigelow sofa. It's stylish, comfortable, and well-made.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "03",
    productName: "Amazon Brand Modern Sofa",
    imgUrl: productImg03,
    category: "Sofa",
    price: 173,
    shortDesc:
      "Experience the perfect blend of comfort and style with the Amazon Brand Modern sofa.",
    description:
      "The Amazon Brand Modern sofa offers a contemporary design that's perfect for any living space. With its plush cushions and soft fabric upholstery, this sofa provides unmatched comfort for lounging or entertaining guests. The sturdy construction ensures durability, while the sleek silhouette adds a touch of elegance to your home decor. Upgrade your living room with the Amazon Brand Modern sofa today.",
    reviews: [
      {
        rating: 4.6,
        text: "I absolutely love my new Amazon Brand Modern sofa! It's so comfortable and looks amazing in my living room.",
      },
      {
        rating: 4.9,
        text: "The Amazon Brand Modern sofa exceeded my expectations. It's incredibly comfortable and well-made.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fluffy Sheep Sofa",
    imgUrl: productImg04,
    category: "Sofa",
    price: 163,
    shortDesc:
      "Sink into luxury with the Fluffy Sheep sofa, featuring soft fabric and plush cushions.",
    description:
      "Indulge in unparalleled comfort with the Fluffy Sheep sofa. Made with premium materials and featuring a modern design, this sofa is both stylish and cozy. The soft fabric upholstery and plush cushions provide a welcoming place to relax after a long day. Whether you're curling up with a book or entertaining guests, the Fluffy Sheep sofa is sure to impress.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm in love with my new Fluffy Sheep sofa! It's incredibly comfortable and adds a touch of luxury to my living room.",
      },
      {
        rating: 4.9,
        text: "The Fluffy Sheep sofa exceeded my expectations. It's so soft and comfortable, and it looks beautiful in my home.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "Faux Velvet Sofa",
    imgUrl: productImg05,
    category: "Sofa",
    price: 163,
    shortDesc:
      "Upgrade your living space with the Faux Velvet sofa, featuring a chic design and luxurious velvet upholstery.",
    description:
      "Elevate your home decor with the Faux Velvet sofa. With its sleek silhouette and luxurious velvet upholstery, this sofa adds a touch of sophistication to any room. The plush cushions provide optimal comfort, while the sturdy construction ensures durability for years to come. Whether you're relaxing with family or hosting guests, the Faux Velvet sofa is sure to impress.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm so happy with my purchase of the Faux Velvet sofa! It's incredibly stylish and comfortable, and it looks amazing in my living room.",
      },
      {
        rating: 4.9,
        text: "The Faux Velvet sofa exceeded my expectations. It's so soft and luxurious, and it really elevates the look of my home.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "06",
    productName: "Fluffy Sheep Sofa",
    imgUrl: productImg06,
    category: "Sofa",
    price: 163,
    shortDesc:
      "Sink into luxury with the Fluffy Sheep sofa, featuring soft fabric and plush cushions.",
    description:
      "Indulge in unparalleled comfort with the Fluffy Sheep sofa. Made with premium materials and featuring a modern design, this sofa is both stylish and cozy. The soft fabric upholstery and plush cushions provide a welcoming place to relax after a long day. Whether you're curling up with a book or entertaining guests, the Fluffy Sheep sofa is sure to impress.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm in love with my new Fluffy Sheep sofa! It's incredibly comfortable and adds a touch of luxury to my living room.",
      },
      {
        rating: 4.9,
        text: "The Fluffy Sheep sofa exceeded my expectations. It's so soft and comfortable, and it looks beautiful in my home.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Sakarias Armchair",
    imgUrl: productImg07,
    category: "Chair",
    price: 99,
    shortDesc:
      "Add a stylish accent to any room with the Sakarias armchair.",
    description:
      "The Sakarias armchair combines modern design with ultimate comfort. Featuring a sleek silhouette and plush cushions, this armchair adds a touch of sophistication to any space. The sturdy construction ensures durability, while the soft fabric upholstery provides a cozy place to relax. Whether you're reading a book or enjoying a cup of coffee, the Sakarias armchair is the perfect choice for your home.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm so happy with my purchase of the Sakarias armchair! It's stylish, comfortable, and well-made.",
      },
      {
        rating: 4.9,
        text: "The Sakarias armchair exceeded my expectations. It's incredibly comfortable and looks great in my living room.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "Chair",
    price: 89,
    shortDesc:
      "Upgrade your seating with the Baltsar chair, featuring a modern design and sturdy construction.",
    description:
      "The Baltsar chair offers both style and comfort in one sleek package. With its modern design and durable construction, this chair is perfect for any living space. The padded seat and backrest provide optimal comfort, while the sturdy legs ensure stability for years to come. Whether you're relaxing with a book or entertaining guests, the Baltsar chair is sure to impress.",
    reviews: [
      {
        rating: 4.6,
        text: "I love my new Baltsar chair! It's stylish, comfortable, and well-made.",
      },
      {
        rating: 4.9,
        text: "The Baltsar chair exceeded my expectations. It's so comfortable and looks great in my living room.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Chair",
    imgUrl: productImg09,
    category: "Chair",
    price: 112,
    shortDesc:
      "Experience superior comfort with the Helmar chair, featuring plush cushions and a contemporary design.",
    description:
      "The Helmar chair offers unmatched comfort and style. With its plush cushions and sleek design, this chair is perfect for any modern living space. The sturdy construction ensures durability, while the soft fabric upholstery provides a cozy place to relax. Whether you're lounging with family or entertaining guests, the Helmar chair is the perfect addition to your home.",
    reviews: [
      {
        rating: 4.6,
        text: "I'm so happy with my purchase of the Helmar chair! It's incredibly comfortable and looks great in my living room.",
      },
      {
        rating: 4.9,
        text: "The Helmar chair exceeded my expectations. It's stylish, comfortable, and well-made.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "10",
    productName: "Apple iPhone 12 Pro",
    imgUrl: phone01,
    category: "Mobile",
    price: 799,
    shortDesc:
      "Experience the power of innovation with the Apple iPhone 12 Pro.",
    description:
      "The Apple iPhone 12 Pro is packed with advanced features to take your mobile experience to the next level. With its stunning Super Retina XDR display, powerful A14 Bionic chip, and professional-quality camera system, this iPhone delivers exceptional performance in every aspect. Whether you're capturing memories, streaming content, or staying productive on the go, the iPhone 12 Pro is the ultimate tool for modern living.",
    reviews: [
      {
        rating: 4.8,
        text: "The iPhone 12 Pro is hands down the best smartphone I've ever owned. It's incredibly fast, the camera quality is unmatched, and the design is beautiful.",
      },
      {
        rating: 4.9,
        text: "I'm blown away by the performance of the iPhone 12 Pro. It's so smooth and responsive, and the camera takes stunning photos.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: phone02,
    category: "Mobile",
    price: 799,
    shortDesc:
      "Get ready for the future with the Apple iPhone 12 Max.",
    description:
      "The Apple iPhone 12 Max is designed to provide an exceptional mobile experience. With its advanced features and sleek design, this iPhone is perfect for staying connected and productive on the go. The powerful A14 Bionic chip ensures smooth performance, while the stunning Super Retina XDR display delivers immersive visuals. Whether you're streaming content, capturing memories, or staying organized, the iPhone 12 Max is the perfect companion for modern living.",
    reviews: [
      {
        rating: 4.8,
        text: "I'm so impressed with the iPhone 12 Max. It's incredibly fast, the camera quality is amazing, and the battery life is excellent.",
      },
      {
        rating: 4.9,
        text: "The iPhone 12 Max exceeded my expectations. It's so smooth and responsive, and the display is stunning.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "12",
    productName: "Samsung Galaxy S21 Ultra",
    imgUrl: phone03,
    category: "Mobile",
    price: 999,
    shortDesc:
      "Experience the ultimate in mobile technology with the Samsung Galaxy S21 Ultra.",
    description:
      "The Samsung Galaxy S21 Ultra sets a new standard for mobile excellence. With its stunning 6.8-inch Dynamic AMOLED display, powerful Exynos 2100 processor, and pro-grade camera system, this smartphone delivers unrivaled performance and versatility. Whether you're capturing high-resolution photos, streaming content in 8K, or multitasking with ease, the Galaxy S21 Ultra is designed to elevate your mobile experience to new heights.",
    reviews: [
      {
        rating: 4.8,
        text: "The Samsung Galaxy S21 Ultra is hands down the best smartphone I've ever owned. The camera quality is unmatched, the display is stunning, and it's so fast and responsive.",
      },
      {
        rating: 4.9,
        text: "I'm blown away by the performance of the Samsung Galaxy S21 Ultra. It's incredibly powerful and versatile, and the camera takes stunning photos.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Samsung Galaxy Note 20",
    imgUrl: phone04,
    category: "Mobile",
    price: 899,
    shortDesc:
      "Unleash your creativity with the Samsung Galaxy Note 20.",
    description:
      "The Samsung Galaxy Note 20 is designed to empower your creativity and productivity. With its innovative S Pen and pro-grade camera system, this smartphone is perfect for capturing ideas, jotting down notes, and expressing yourself in new ways. The stunning Infinity-O display provides immersive visuals, while the powerful Exynos 990 processor ensures smooth performance. Whether you're working on-the-go or unwinding with your favorite content, the Galaxy Note 20 is the ultimate tool for modern living.",
    reviews: [
      {
        rating: 4.7,
        text: "I'm so impressed with the Samsung Galaxy Note 20. The S Pen is a game-changer, the camera takes stunning photos, and the performance is excellent.",
      },
      {
        rating: 4.8,
        text: "The Samsung Galaxy Note 20 exceeded my expectations. It's incredibly versatile and powerful, and the display is beautiful.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "14",
    productName: "Google Pixel 5",
    imgUrl: phone05,
    category: "Mobile",
    price: 699,
    shortDesc:
      "Get ready for the future with the Google Pixel 5.",
    description:
      "The Google Pixel 5 is designed to provide a seamless and intuitive mobile experience. With its powerful Snapdragon 765G processor and pure Android experience, this smartphone delivers smooth performance and timely software updates. The stunning OLED display and pro-grade camera system ensure an immersive photography and viewing experience. Whether you're capturing memories, staying connected, or exploring new possibilities, the Pixel 5 is the perfect companion for modern living.",
    reviews: [
      {
        rating: 4.7,
        text: "I'm so impressed with the Google Pixel 5. The camera takes stunning photos, the software experience is smooth and intuitive, and the battery life is excellent.",
      },
      {
        rating: 4.8,
        text: "The Google Pixel 5 exceeded my expectations. It's incredibly fast and responsive, and the design is beautiful.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "15",
    productName: "OnePlus 9 Pro",
    imgUrl: phone06,
    category: "Mobile",
    price: 899,
    shortDesc:
      "Experience the speed of innovation with the OnePlus 9 Pro.",
    description:
      "The OnePlus 9 Pro is designed to provide an exceptional mobile experience. With its lightning-fast Snapdragon 888 processor and stunning Fluid AMOLED display, this smartphone delivers unrivaled performance and visuals. The Hasselblad camera system ensures professional-quality photos and videos, while Warp Charge technology keeps you powered up all day. Whether you're capturing memories, gaming with friends, or staying productive on-the-go, the OnePlus 9 Pro is the ultimate companion for modern living.",
    reviews: [
      {
        rating: 4.8,
        text: "I'm so impressed with the OnePlus 9 Pro. The camera takes stunning photos, the display is beautiful, and the performance is lightning-fast.",
      },
      {
        rating: 4.9,
        text: "The OnePlus 9 Pro exceeded my expectations. It's incredibly powerful and versatile, and the design is sleek and modern.",
      },
    ],
    avgRating: 4.8,
  },


  {
    id: "20",
    productName: "Beats Studio Wireless Headphones",
    imgUrl: wireless01,
    category: "wireless",
    price: 199,
    shortDesc:
      "Experience exceptional sound quality and wireless convenience with the Beats Studio Wireless Headphones.",
    description:
      "Immerse yourself in your favorite music with the Beats Studio Wireless Headphones. These premium over-ear headphones deliver powerful, balanced sound with precision highs and deep, rich lows. With Bluetooth connectivity, you can enjoy your music wirelessly from any compatible device, while the built-in microphone allows for hands-free calling. The sleek, ergonomic design ensures long-lasting comfort, making these headphones perfect for extended listening sessions. Whether you're at home, in the office, or on the go, the Beats Studio Wireless Headphones provide an unparalleled listening experience.",
    reviews: [
      {
        rating: 4.8,
        text: "The sound quality is amazing, and the wireless feature works flawlessly. Highly recommend!",
      },
      {
        rating: 4.9,
        text: "These headphones are worth every penny. Comfortable to wear for hours and the sound is fantastic.",
      },
    ],
    avgRating: 4.85,
  },

  {
    id: "21",
    productName: "Beats EP On-Ear Headphones",
    imgUrl: wireless03,
    category: "wireless",
    price: 199,
    shortDesc:
      "Enjoy immersive sound and sleek design with the Beats EP On-Ear Headphones.",
    description:
      "Elevate your listening experience with the Beats EP On-Ear Headphones. These stylish headphones deliver clear, dynamic sound with deep bass and crisp highs. The durable, lightweight design is perfect for everyday use, whether you're commuting, working out, or just relaxing at home. With a battery life of up to 40 hours, you can enjoy your music all day long without interruption. Plus, the foldable design and carrying pouch make these headphones easy to take with you wherever you go. Discover the perfect blend of style and performance with the Beats EP On-Ear Headphones.",
    reviews: [
      {
        rating: 4.7,
        text: "Great value for money. The sound quality is impressive, and they're comfortable to wear.",
      },
      {
        rating: 4.8,
        text: "Love the sleek design and the sound is top-notch. Definitely recommend these headphones!",
      },
    ],
    avgRating: 4.75,
  },
  {
    id: "22",
    productName: "Beats Solo3 Wireless Headphones",
    imgUrl: wireless02,
    category: "wireless",
    price: 169,
    shortDesc:
      "Experience wireless freedom and premium sound with the Beats Solo3 Wireless Headphones.",
    description:
      "Go wireless with the Beats Solo3 Wireless Headphones. These on-ear headphones deliver immersive sound with fine-tuned acoustics for clarity, breadth, and balance. With up to 40 hours of battery life, you can enjoy your music all day long without worrying about recharging. Fast Fuel technology provides 3 hours of playback with just 5 minutes of charging, ensuring you're never without your favorite tunes. The adjustable ear cups and cushioned headband offer a comfortable fit for all-day wear, while the sleek, streamlined design adds a touch of style to any outfit. Whether you're working out, commuting, or just relaxing at home, the Beats Solo3 Wireless Headphones provide an exceptional listening experience.",
    reviews: [
      {
        rating: 4.8,
        text: "These headphones are fantastic! The sound quality is superb, and the wireless connectivity is seamless.",
      },
      {
        rating: 4.9,
        text: "I love everything about these headphones - the design, the sound, the comfort. Highly recommend!",
      },
    ],
    avgRating: 4.85,
  },
  {
    id: "23",
    productName: "Beats Powerbeats Pro Wireless Earphones",
    imgUrl: wireless04,
    category: "wireless",
    price: 139,
    shortDesc:
      "Get the ultimate workout companion with the Beats Powerbeats Pro Wireless Earphones.",
    description:
      "Take your workouts to the next level with the Beats Powerbeats Pro Wireless Earphones. These earphones are designed for athletes, with adjustable, secure-fit ear hooks that stay in place during even the most intense workouts. With up to 9 hours of listening time and powerful, balanced sound, you can stay motivated and focused from warm-up to cool-down. The sweat and water-resistant design means you can push yourself to the limit without worrying about damage. Plus, with on-ear controls and voice capability, you can easily control your music and take calls without slowing down. Whether you're hitting the gym or hitting the pavement, the Beats Powerbeats Pro Wireless Earphones are the perfect workout companion.",
    reviews: [
      {
        rating: 4.7,
        text: "These earphones are perfect for workouts. They stay in place and the sound quality is great.",
      },
      {
        rating: 4.8,
        text: "I've tried many wireless earphones, and these are by far the best. Comfortable, secure, and great sound.",
      },
    ],
    avgRating: 4.75,
  }
];
