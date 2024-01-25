import Facebook from "@/public/icons/facebook.svg"
import Twitter from "@/public/icons/twitter.svg"
import Instagram from "@/public/icons/instagram.svg"
import Linkedin from "@/public/icons/linkedin.svg"
import Location from "@/public/icons/location.svg"
import Email from "@/public/icons/email.svg"
import Phone from "@/public/icons/phone.svg"


//----------------------------NAVBAR----------------------------------//
export const navbarData = {
  image: "/images/logo.jpg",
  // heading2: ".",
  navLinks: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About us",
      url: "/about-us",
    },
    {
      id: 3,
      title: " Shop",
      url: "/products",
    },
    {
      id: 4,
      title: "Contact us",
      url: "/contact-us",
    },
  ],
}

//----------------------------productadvertice-------------------//

export const productavderticedata = {
  image1: "/images/advertice1.webp",
  image2: "/images/advertice2.webp",
  image3: "/images/advertice3.webp",
}

//-------------------------------Products Brands--------------------------------//

export const Productbranded ={

  productsbrand : [
     {
       id: 1,
       name: "Hare Care",
       image: "/images/harecare.webp",
       color: "#DCFFD2",
     },
     {
       id: 2,
       name: "Skin Care",
       image: "/images/skincare.webp",
       color: "#FFEDB4",
     },
     {
       id: 3,
       name: "Lip Stick",
       image: "/images/lipstick.webp",
       color: "#DFE4FF",
     },
     {
       id: 4,
       name: "Face Skin",
       image: "/images/faceskin.webp",
       color: "#FFEACC",
     },
     {
       id: 5,
       name: "Blusher",
       image: "/images/blusher.webp",
       color: "#FFDAE0",
     },
     {
       id: 6,
       name: "Natural",
       image: "/images/natural.webp",
       color: "#FFF3DA",
     },
   ]

}

//-------------------------------Item Card --------------------------//

export const item = [
  {
    id: 1,
    name: "Product 1",
    image: "/images/1.jpeg",
    stars: 2,
    numReviews: 120,
    originalPrice: 150.0,
    discountPrice: 99.99,
    color: "#FFE3DD",
  },
  {
    id: 2,
    name: "Product 2",
    image: "/images/2.jpeg",
    stars: 3,
    numReviews: 120,
    originalPrice: 250.0,
    discountPrice: 199.99,
    color: "#DDC3FF",
  },
  {
    id: 3,
    name: "Product 3",
    image: "/images/3.jpeg",
    stars: 4,
    numReviews: 120,
    originalPrice: 350.0,
    discountPrice: 299.0,
    color: "#FAE7DA",
  },
  {
    id: 4,
    name: "Product 4",
    image: "/images/4.jpeg",
    stars: 4,
    numReviews: 120,
    originalPrice: 350.0,
    discountPrice: 299.0,
    color: "#D5F1FD",
  },
  {
    id: 5,
    name: "Product 5",
    image: "/images/5.jpeg",
    stars: 4,
    numReviews: 120,
    originalPrice: 350.0,
    discountPrice: 299.0,
    color: "#FAE7DA",
  },
  {
    id: 6,
    name: "Product 6",
    image: "/images/7.jpeg",
    stars: 4,
    numReviews: 120,
    originalPrice: 350.0,
    discountPrice: 299.0,
    color: "#E7DAFE",
  },
  {
    id: 7,
    name: "Product 7",
    image: "/images/1.jpeg",
    stars: 4,
    numReviews: 120,
    originalPrice: 350.0,
    discountPrice: 299.0,
  },
  {
    id: 8,
    name: "Product 8",
    image: "/images/2.jpeg",
    stars: 4,
    numReviews: 120,
    originalPrice: 350.0,
    discountPrice: 299.0,
  },
  {
    id: 9,
    name: "Product 9",
    image: "/images/3.jpeg",
    stars: 4,
    numReviews: 120,
    originalPrice: 350.0,
    discountPrice: 299.0,
  },
]
//-------------------------------HOME PAGE ------------------------------//
export const homePageBanner = {
  backgroundBannerImage: "/images/landimg.webp",
  // heading: "Nourish the glow",
  backgroundBannerImage1: "/images/iandimg01.jpg",
  heading1: "CLEAN FRESH",
  description :" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus possimus error tenetur sunt, repudiandae asperiores, ullam ex non maxime libero."
  // description:
  //   "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  // actionBtn1: "Shop Now",
  // actionBtn2: "Explore",
}

//--------------AboutBox--------------//

export const Aboutboxdata = {
  Aboutbox1: "/images/client.webp",
  Aboutbox2: "/images/projects.webp",
  Aboutbox3: "/images/revenue.webp",
  Count1: 5000,
  Count2: 250,
  Count3: 1.5,
  Title1: "Clients",
  Title2: "Projects",
  Title3: "Revenue",
  Imgabout: "/images/imgaboute.webp",
}

export const whyChooseUs = {


//   image: "/images/whyChooseUsImg.jpg",
//   heading: "We take skincare seriously",
//   description: `As said "Glowing skin is always in".So we believe in empowering individuals to embrace their authentic selves through skincare that goes beyond the surface.
//     We strive to create products that cater to individual needs, embracing the beauty of differences. Join us in the journey to discover, enhance, and truly 'Bea You'.`,
//   services: [
//     {
//       id: 1,
//       icon: "/icons/shippingtruck.svg",
//       heading: "Premium Quality Ingredients",
//       serviceDescription:
//         "At Bea You, we prioritize the use of premium and carefully curated ingredients in our beauty products. Our formulations are crafted with the finest botanical extracts, antioxidants, and cutting-edge skincare technologies to ensure optimal effectiveness and results you can see and feel.",
//     },
//     {
//       id: 2,
//       icon: "/icons/bag.svg",
//       heading: "For Every Skin Type",
//       serviceDescription:
//         "We understand that each person's skin is unique. That's why our product range is designed to cater to various skin types, tones, and concerns. Whether you have sensitive skin, oily complexion, or specific skincare needs, our solutions is to address your individual beauty requirements.",
//     },
//     {
//       id: 3,
//       icon: "/icons/support.svg",
//       heading: "Cruelty-Free and Environmentally Conscious",
//       serviceDescription:
//         "We are committed to ethical beauty practices. All our products are cruelty-free, meaning they are not tested on animals. Additionally, we prioritize environmentally conscious packaging and sustainable practices to minimize our impact on the planet. Choosing Bea You means making a responsible and compassionate choice for your beauty routine.",
//     },
//     {
//       id: 4,
//       icon: "/icons/return.svg",
//       heading: "Visible and Lasting Results",
//       serviceDescription:
//         "Our products are formulated with a focus on delivering visible and long-lasting results. Whether you're seeking radiant skin, reduced signs of aging, or a flawless complexion, our beauty products are designed to meet your expectations. Experience the transformative power of our formulations and witness the positive changes in your skin.",
//     },
//     {
//       id: 5,
//       icon: "/icons/return.svg",
//       heading: "Expertly Crafted by Skincare Specialists",
//       serviceDescription:
//         "Behind every Bea You product is a team of dedicated skincare specialists and beauty experts. Our professionals work tirelessly to stay at the forefront of beauty trends, ensuring that our products reflect the latest innovations in the industry. Trust in the expertise of our team to bring you skincare and beauty solutions that are both effective and on-trend.",
//     },
//     {
//       id: 6,
//       icon: "/icons/return.svg",
//       heading: "Community and Empowerment",
//       serviceDescription:
//         "Behind every Bea You product is a team of dedicated skincare specialists and beauty experts. Our professionals work tirelessly to stay at the forefront of beauty trends, ensuring that our products reflect the latest innovations in the industry. Trust in the expertise of our team to bring you skincare and beauty solutions that are both effective and on-trend.",
//     },
//   ],
}

// export const testimonialData = {
//   heading: "Testimonials",
//   testimonialCards: [
//     {
//       id: 1,
//       description: `"I've always believed that age is just a number, and with the Ageless Radiance Serum from [Your Beauty Brand], I've found the secret to aging gracefully. This serum is nothing short of a magic potion for my skin!

//         I appreciate the meticulous selection of ingredients by [Your Beauty Brand]. Knowing that the serum is packed with antioxidants and nourishing elements gives me the confidence that I'm investing in the long-term health of my skin. Plus, the fact that the brand is committed to cruelty-free practices aligns perfectly with my values."`,
//       image: "/images/person-1.png",
//       name: "Nishita",
//       designation: "CEO, Bea-You",
//     },
//     {
//       id: 2,
//       description: `"I am absolutely in love with the Radiant Glow Daily Cleanser from Bea You As someone who has tried countless facewashes over the years, I can confidently say that this one stands out in a league of its own.
//       After just a few weeks of incorporating it into my daily routine,  I noticed a difference. The gentle exfoliation and deep cleansing action of this facewash have worked wonders on my skin. What's even more impressive is its ability to tackle stubborn blemishes without drying out my skin. 
//         "`,
//       image: "/images/person-1.png",
//       name: "Ritesh Newal",
//       designation: "CEO, Co-Founder, XYZ Inc.",
//     },
//   ],
// }

//-------------------------------FOOTER-------------------------------//

  // export const footerData = {
  //   footerImage: "/icons/Logo.svg",
  //   newsLetter: {
  //     heading: "Subscribe to Newsletter",
  //   },
  //   heading: "Bea You.",
  //   description:
  //     "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  //   socialMedia: [
  //     {
  //       id: 1,
  //       name: "facebook",
  //       icon: Facebook,
  //     },
  //     {
  //       id: 2,
  //       name: "Twitter",
  //       icon: Twitter,
  //     },
  //     {
  //       id: 3,
  //       name: "Instagram",
  //       icon: Instagram,
  //     },
  //     {
  //       id: 4,
  //       name: "Linkedin",
  //       icon: Linkedin,
  //     },
  //   ],
  //   footerLinks: [
  //     [
  //       {
  //         id: 1,
  //         title: "Shop",
  //         url: "/products",
  //       },
  //       {
  //         id: 2,
  //         title: "About us",
  //         url: "/about-us",
  //       },

  //       {
  //         id: 3,
  //         title: "Contact us",
  //         url: "/contact-us",
  //       },
  //     ],
  //     [
  //       {
  //         id: 1,
  //         title: "Support",
  //         url: "/",
  //       },
  //       {
  //         id: 2,
  //         title: "Privacy Policy",
  //         url: "/privacy-policy",
  //       },
  //     ],
  //     [
  //       {
  //         id: 1,
  //         title: "Cleanser",
  //         url: `/products/cleanser`,
  //       },
  //       {
  //         id: 2,
  //         title: "Gluta Radiance",
  //         url: "/products/gluta-radiance",
  //       },
  //     ],
  //   ],
  //   copyright: {
  //     description: "Copyright ©2023. All Rights Reserved.",
  //     links: [
  //       {
  //         id: 1,
  //         title: "Terms & Conditions",
  //         url: "/terms-and-conditions",
  //       },
  //       {
  //         id: 2,
  //         title: "Privacy Policy",
  //         url: "/privacy-policy",
  //       },
  //     ],
  //   },
  // }

//-----------------------------SHOP SECTION---------------------------------------------//

export const shopPageBanner = {
  Homeheading1: "Home",
  Homeheading2: "Products",
  Homeheading3 : "All Produts",
  shopbaner : "/images/banershop.webp",
}

// export const topProduct = {
//   heading: "It's a SKIN-VESTMENT",
//   description: `At 'Bea You,' our mission transcends conventional beauty standards.Our goal is to foster a community where every skin journey is celebrated, recognizing that beauty is diverse and personal.
//     'Bea You' is not just a skincare brand; it's a commitment to authenticity, self-love, and the belief that everyone deserves to feel confident in their unique skin.`,
//   actionBtn: "Explore",
// }

export const products = [
  {
    id: 1,
    handle: "product-1",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Cleanser",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹499/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.`,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `**Feel Refresh | BE Nourished| Be Beautiful | Bea You**

Get cleansed, soft & hydrated skin in just 40 seconds* with Bea You Face Cleanser. It gently yet effectively cleanses skin to remove dirt, oil and other impurities without making skin dry. Adding it in your routine will minimize the effects of environmental stressors on the skin, leaving you with cleanand soft skin. 
		
Defend against 5 sign of Skin sensitivity: Weakened free, Dryness, Roughness, Irritaton, roughness, Tightness 
		
Paraben Sulphate free 
Cruelty free 
Make in india 
		
**Key point:** Hydrating Glycerin, Vitamin B3 & B5, Non foaming formula vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin. Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin`,
    additionalInfo: `**Image and actual product may very**
		
		**STORAGE:** Store in a cool place. Keep away from direct sun light. WARNING: Do not refrigerate. Replace the cap tightly after use.`,
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 2,
    handle: "product-2",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Gluta Radiance",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹499/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
    howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
    productDescription: `Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You

Unleash your inner radiance with Bea You Gluta Radiance moisturiser.The powerhouse of hydration with vitamin A,C, E. IThis gives your skin a replenished and dewy appearance, It also leaves your skin feeling soft and supple throughout the day.
      
Defend against 5 sign of Skin sensitivity: Weakened free,Dryness,Roughness,Irritaton,roughness,Tightness
      
Paraben Sulphate free
Cruelty free
Make in india

Key point: 
Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A,C,E   
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin

* Image and actual product may very

STORAGE: Store in a cool place. Keep away from direct sun light.
WARNING: Do not refrigerate. Replace the cap tightly after use.
`,
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 3,
    handle: "product-3",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹599/-",
      productOriginalPrice: "₹799/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 4,
    handle: "product-4",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product1.png",
      },
      {
        id: 2,
        url: "/images/product1.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹899/-",
      productOriginalPrice: "₹1099/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 5,
    handle: "product-5",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹399/-",
      productOriginalPrice: "₹699/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 6,
    handle: "product-6",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹199/-",
      productOriginalPrice: "₹399/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 7,
    handle: "product-7",
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product1.png",
      },
      {
        id: 2,
        url: "/images/product1.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹99/-",
      productOriginalPrice: "₹199/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 8,
    handle: "product-8",
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹699/-",
      productOriginalPrice: "₹999/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 9,
    handle: "product-9",
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    price: {
      productDiscountPrice: "₹699/-",
      productOriginalPrice: "₹899/-",
    },
    weight: "125 Ml",
    category: "Skin-Face",
    ingredients: "",
    howToUse: "",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
]

export const productReviews = [
  {
    id: 1,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 4,
  },
  {
    id: 2,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 4,
  },
  {
    id: 4,
    name: "Tomas Doe",
    image: "/images/person-1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
    rating: 3,
  },
]
//-------------------contact----------------------//

export const Contactdata = {
  contactimg: "/images/contact.jpeg",
  Title: "Get In Touch",
  Description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quiaillo sunt itaque!",
  heading1: "First Name",
  heading2: "Last Name",
  heading3: "E-mail",
  heading4: "Message",
  Button: "SUBMIT",
  contactnum1: 7600096432,
  contactnum2: 8690090417,
  Address: "B-605, The Special Character, 382470",
}

//-------------------------Logindata------------------------------------------------------//
export const logindata = {
  heading1: "Home",
  heading2: "Account",
  heading3: "Account",
  Title1: "Glossy",
  Title2: "Labs",
  heading4: "Sign in to Account",
  heading5: "Or Use Your Email Account",
  button1: "Sign In",
  heading6: "Hello Beauty",
  Description:"Fill up personal information and start the journey with us.",
  button2:"Sign Up"
}
//-------------------------------------ABOUT US -------------------------------------------//

export const aboutUsPageBanner = {
  AboutBannerImage1: "/images/abouttitle.webp",
  AboutBannerImage: "/images/about1.webp",
  // backgroundBannerImage2: "/images/bannerImage.png",
  heading1: "We, are Brancy",
  heading2: " Best cosmetics provider",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Natus possimus error tenetur sunt, repudiandae asperiores, ullam ex non maxime libero.",
  //   "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  // actionBtn1: "Shop Now",
  // actionBtn2: "Explore",
  Carosal1: "/images/caferestaurant.jpg",
  Carosal2: "/images/cherly.jpg",
  Carosal3: "/images/designstudion.jpg",
  Carosal4: "/images/caroline.jpg",
  description1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel arcu aliquet sem risus nisl."
}

export const servicePageBanner = {
  backgroundBannerImage: "",
  heading: "Service",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

//-----------------------------CONTACT-US--------------------------//

export const contactUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "Contact Us",
  description:
    "Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const contactDetails = [
  {
    id: 1,
    name: "Address",
    icon: Location,
    description: "43 Raymouth Rd. Baltemoer, London 3910",
  },
  {
    id: 2,
    name: "Email",
    icon: Email,
    description: "info@yourdomain.com",
  },
  {
    id: 3,
    name: "Phone-number",
    icon: Phone,
    description: "+1 294 3925 3939",
  },
]

//-----------------------------CART-------------------------------------//

export const cartPageBanner = {
  heading: "Cart",
}

export const cartPage = {
  cartHeaderList: [
    {
      id: 1,
      name: "Image",
    },
    {
      id: 2,
      name: "Product",
    },
    {
      id: 3,
      name: "Price",
    },
    {
      id: 4,
      name: "Quantity",
    },
    {
      id: 5,
      name: "Total",
    },
    {
      id: 6,
      name: "Remove",
    },
  ],
  cartProductList: [
    {
      id: 1,
      productImage: "/images/product1.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 2,
      productImage: "/images/product2.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 3,
      productImage: "/images/product3.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 4,
      productImage: "/images/product1.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 5,
      productImage: "/images/product2.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
    {
      id: 6,
      productImage: "/images/product3.png",
      productName: "Chair",
      productPrice: "₹50.00",
    },
  ],
  cartActionBtn1: "Update Cart",
  cartActionBtn2: "Continue shopping",
}

export const coupon = {
  heading: "Coupon",
  description: "Lorem a src jkuyyhur",
  CouponActionBtn: "Apply Code",
}

export const cartTotal = {
  heading: "Cart Totals ",
  subtotal: "Subtotal",
  total: "Total",
  checkoutActionBtn: "Proceed To Checkout",
}
//-----------------------------CHECKOUT FORM--------------------------//
