// pages/home.tsx
import React from 'react';
import Card from '../components/common/Card';

const Home = () => {
  return (
    <div className="space-y-4 p-4">
      <Card title="Card One" content="This is the content of the first card." />
      <Card title="Card Two" content="Here is some different content for card two." />
      <Card title="Card Three" content="Another bit of information in a third card." />
    </div>
  );
};

export default Home;
// This is the home page of the Next.js application.
// It imports the Card component and displays multiple cards with different content.
// The page is styled with Tailwind CSS classes for spacing and padding.
// The Home component is exported as the default export of this module.
// The Home component uses the Card component to display three cards with different titles and content.
// The cards are arranged vertically with some spacing between them using Tailwind CSS classes.
// The Home component is exported as the default export of this module, making it accessible for routing in the Next.js application.
// The Home component is styled using Tailwind CSS for a clean and modern look.
// The Home component serves as a simple demonstration of how to use the Card component in a Next.js page. 