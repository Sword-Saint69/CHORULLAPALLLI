import React from 'react';
import { PlaceForm } from '../components/PlaceForm';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#045307] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Chorulla Palli</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover and share beautiful places across our region. Submit your favorite locations
            and help others explore the hidden gems of our land.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Submit a New Place</h2>
          <PlaceForm />
        </div>
      </div>
    </div>
  );
}