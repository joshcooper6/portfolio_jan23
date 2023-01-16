import ip1 from '../assets/screenshots/ip1.png';
import ip2 from '../assets/screenshots/ip2.png';
import vp1 from '../assets/screenshots/vp1.png';


const portfolio = [
    {
        id: '',
        title: 'Inventory Portal',
        url: 'https://ucl-portal.web.app',
        years: '2022',
        inDevelopment: false,
        brief: 'A small business inventory management web application developed with React.js, Node.js, MongoDB, and Google Cloud with features such as automatic data storage, user authentication, and integration with third-party APIs and services.',
        long: `Developed and designed an inventory management web application for small businesses using React.js, Node.js, MongoDB, and Google Cloud
        Automatically stores and displays data based on the day of the week and user input
        Implemented user authentication with JWT for enhanced security
        Offered seamless integration with third-party APIs and services
        Utilized TailwindCSS for front-end design and development, delivering a clean
        and user-friendly interface.
        Utilized Git and GitHub for version control and collaboration throughout the development process.`,
        images: [ip1, ip2],
        tags: [`React.js`, `Node.js`, `MongoDB`, `Google Cloud`, `JWT`, `Tailwind CSS`, `Git`, `GitHub`]
    },
    {
        id: '',
        title: 'Vinylphile',
        url: '',
        inDevelopment: true,
        years: '2023',
        brief: 'A D2C e-commerce platform for selling vinyl records developed using various technologies such as React.js, Node.js, DynamoDB and AWS EC2, featuring inventory management, customer management, order tracking and Stripe for secure payment processing and hosted on Amazon S3 with Git and GitHub for version control.',
        long: `Developing a direct-to-consumer e-commerce platform for selling vinyl records
        Implemented a modern front-end using Vite.js, React.js and Tailwind CSS for an
        engaging and user-friendly experience
        Built a robust and scalable back-end using Node.js, DynamoDB and AWS EC2
        Integrated Stripe.js for secure and seamless payment processing, ensuring the
        safety and security of customer transactions.
        Developed features for inventory management, customer management, and
        order tracking for smooth and efficient operations
        Utilized Amazon S3 for static hosting to improve website performance and
        scalability.
        Utilized Git and GitHub for version control and collaboration throughout the development process.`,
        images: [vp1],
        tags: [`Vite.js`, `React.js`, `Tailwind CSS`, `Node.js`, `DynamoDB`, `AWS EC2`, `Stripe.js`, `AWS S3`, `Git`, `GitHub`]
    }
];

export default portfolio;