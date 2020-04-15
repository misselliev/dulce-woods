import React from 'react';
import Card from './Card';
// import roundset from './src/images/roundtable.jpg'

const Gallery = () => (
  <section>
    <div className="w-48 mx-auto pt-2 mb-6 border-b-2 border-purple-200 text-center text-gray-600 cursive">Showcase</div>
    <div className="flex items-center justify-center mb-8">
      <Card title="Round dining set" description="Small nogal round dining set. 4 chairs included." imagesrc="" imagealt="round dining set" tag1="dining" tag2="set" tag3="pine" />
      <Card title="Armless lounge chair" description="Relaxed lounge armless chair, pairs perfect with a Serpian Premium Rug." imagesrc="" imagealt="armless chair" tag1="lounge" tag2="chair" tag3="pine" />
      <Card title="Wooden library and bar set" description="Embedded library and bar set. 2 bar chairs included." imagesrc="" imagealt="library and bar set" tag1="library" tag2="bar" tag3="set" />
    </div>
  </section>
);

export default Gallery;
