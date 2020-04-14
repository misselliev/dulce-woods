import React from 'react';
import Card from './Card';

const Gallery = () => (
  <section>
    <div className="w-48 mx-auto pt-2 mb-6 border-b-2 border-purple-200 text-center text-gray-600 cursive">Showcase</div>
    <div className="flex items-center justify-center  mb-8">
      <Card title="hey" description="one" imagesrc="hi" imagealt="one" tag1="test" tag2="test" tag3="test" />
    </div>
  </section>
);

export default Gallery;
