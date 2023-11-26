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
      title: 'Mobile Development',
      shortDescription: 'iOS & Android Development',
      icon: 'react',
      link: 'frontend',
      color: '#61dbfb',
      description: '',
      dependent: 'Fontisto',
  
    },
    {
      id: 'database',
      title: 'Database',
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
      paragraph: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I help project owners meet their marketing and advertising needs through web and mobile app development.`,
      images: [
        {
        source:Ecommerce1,
        avif: Ecommerce1Avif,
      },
      {
      source:Ecommerce2, 
      avif:  Ecommerce2Avif,
    },
    {
    source:Ecommerce3,
    avif:  Ecommerce3Avif,
  },
    ],
    websiteName:'Classy Curvs',
    designExperience:'WordPress Website Design',
    exampleWebsite:"https://classycurvs.com",
      summary: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I help project owners meet their marketing and advertising needs through web and mobile app development.`,
    },
  
    {
      id: 'mobile-app-design',
      heading: 'Mobile App Design',
      designExperience:'Mobile App Design',
      paragraph: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I help project owners meet their marketing and advertising needs through web and mobile app development.`,
      images: [
        {
          source:Android1, 
          avif: Android1Avif,

        },
        {
          source: Android2, 
          avif:  Android2Avif, 

        },
        {
          source: Android3,
          avif: Android3Avif,

        },
      ],
      websiteName:'From Sneaker and Jeans',
      exampleWebsite:"https://pinkposgirls.com",
      summary: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I help project owners meet their marketing and advertising needs through web and mobile app development.`,
    }
  ];