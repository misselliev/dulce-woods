import React from 'react';
import Card from './Card';
import roundset from './roundtable.jpg'
import chair from './armlesschair.jpg'
import bar from './woodenbar.jpg'
const Gallery = () => (
  <section id="showcase">
    <div className="w-48 mx-auto pt-2 mb-6 border-b-2 border-purple-200 text-center text-yellow-900 cursive">Showcase</div>
    <div className="flex items-center justify-center m-8">
      <Card title="Round dining set" description="Small nogal round dining set. 4 chairs included." imagesrc={roundset} imagealt="round dining set" tag1="dining" tag2="set" tag3="pine" />
      <Card title="Armless lounge chair" description="Relaxed lounge armless chair, pairs perfect with a Serpian Premium Rug." imagesrc={chair} imagealt="armless chair" tag1="lounge" tag2="chair" tag3="pine" />
      <Card title="Wooden library and bar set" description="Embedded library and bar set. 2 bar chairs included." imagesrc={bar} imagealt="library and bar set" tag1="library" tag2="bar" tag3="set" />
    </div>
  </section>
);

export default Gallery;
