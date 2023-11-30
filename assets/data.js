import Ecommerce1 from './images/Ecommerce1.jpeg';
import Ecommerce2 from './images/Ecommerce2.jpeg';
import Ecommerce3 from './images/Ecommerce3.jpeg';
import Android1 from './images/Android1.jpg';
import Android2 from './images/Android2.jpg';
import Android3 from './images/Android3.jpg';
import Ecommerce1Avif from './images/Ecommerce1.avif';
import Ecommerce2Avif from './images/Ecommerce2.avif';
import Ecommerce3Avif from './images/Ecommerce3.avif';
import Android1Avif from './images/Android1.avif';
import Android2Avif from './images/Android2.avif';
import Android3Avif from './images/Android3.avif';

export const skills = [
  {
    id: 'wordpress',
    title: 'WordPress',
    shortDescription: 'E-Commerce Website Designs',
    icon: 'wordpress',
    color: '#096484',
    link: 'wordpress',
    description: `Design online stores and educational websites that are user friendly. Enhance Search Engine Optimization`,
    dependent: 'Fontisto',

  },
  {
    id: 'mobile-development',
    title: 'React Native',
    skillName: 'Mobile Marketing & Advertising',
    shortDescription: 'iOS & Android Development',
    icon: 'react',
    link: 'frontend',
    color: '#61dbfb',
    description: '',
    dependent: 'Fontisto',

  },
  {
    id: 'database',
    title: 'MongoDB',
    shortDescription: 'MongoDB',
    icon: 'mongodb',
    color: '#4db33d',
    link: 'backend',
    description: '',
    dependent: 'Fontisto',
  },
  {
    id: 'ios',
    title: 'iOS',
    shortDescription: 'iOS',
    dependent: 'Ionicons',
    description: 'iOS',
    icon: 'ios-logo-apple-appstore',
    color: '#555555',
  },
  {
    id: 'android',
    title: 'Android',
    shortDescription: 'Android',
    dependent: 'Ionicons',
    description: 'Android',
    icon: 'logo-android',
    color: '#78C257',
  },
  {
    id: 'html',
    title: 'HTML',
    shortDescription: 'HTML',
    dependent: 'Fontisto',
    description: 'HTML',
    icon: 'html5',
    color: 'gray',
  },
  {
    id: 'css',
    title: 'CSS',
    shortDescription: 'CSS',
    dependent: 'Fontisto',
    description: 'CSS',
    icon: 'css3',
    color: 'gray',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    shortDescription: 'JavaScript',
    dependent: 'Ionicons',
    description: 'JavaScript',
    icon: 'logo-javascript',
    color: 'gray',
  },
];


export const about = [

  {
    id: 'e-commerce-website-design',
    heading: 'E-Commerce Website Design',
    paragraph: `I've been designing websites using WordPress for 4+ years. Using their WordPress theme builder or Elementor to create websites that are modern, easy to use and easy to navigate. I use their WordPress plugins to add the functionality that makes each website unique. I've designed registration websites, e-commerce, booking, rental, restaraunts, healthcare and more.`,
    images: [
      {
        source: Ecommerce1,
        avif: Ecommerce1Avif,
      },
      {
        source: Ecommerce2,
        avif: Ecommerce2Avif,
      },
      {
        source: Ecommerce3,
        avif: Ecommerce3Avif,
      },
    ],
    websiteName: 'Classy Curvs',
    designExperience: 'WordPress Website Design',
    exampleWebsite: "https://classycurvs.com",
    summary: [
      `Classy Curvs is an e-commerce webite that I have designed managed since 2020. It has secure payments, SSL, SMTP, customer relationship management, and SEO. Customers can easily find the items they are searching for through the search bar, or by category and checkout with many payment options.`,

      `This WordPress website theme was customized with Elementor Pro. In the WordPress Dashboard, Store Admin, has access to customer relationship management, product uploads and product management. Admin can also receive online payments, purchase shipping labels and update customers on their order status.`
    ],
  },

  {
    id: 'mobile-app-design',
    heading: 'Mobile App Design',
    designExperience: 'Mobile Marketing & Advertising',
    paragraph: `I've been designing app for iOS and Android mobile devices for 3+ years. Using React Native with Expo, the native app I develop can be used on iOS, Android, and Web. I use React Native Components to create an interactive user interface and Javascript and CSS to display information and enhance the user experience.`,
    images: [
      {
        source: Android1,
        avif: Android1Avif,

      },
      {
        source: Android2,
        avif: Android2Avif,

      },
      {
        source: Android3,
        avif: Android3Avif,

      },
    ],
    websiteName: 'From Sneaker and Jeans',
    exampleWebsite: "https://pinkposgirls.com",
    summary: [
      `From Sneakers and Jeans, is a project that arrived from the need for the project owner to progress into the mobile marketing space. Previously you could purchase "from Sneakers and Jeans: The Teen Girls Guide to Getting Around", physically off the owners website. This app was developed for iOS and Android devices.`,

      `Designing 'from Sneakers and Jeans', allowed me to expand my creativity in iOS and Android design. Creating easy navigation for the users to access the valuable information in the app and making the app interactive was very important for this project. I recented updated the app to meet Android 13 standards and I am continuing to maintain the app weekly.`
    ],
  }
];