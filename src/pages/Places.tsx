import React from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Place } from '../types';

export function Places() {
  const [places, setPlaces] = React.useState<Place[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const placesQuery = query(
      collection(db, 'places'),
      where('status', '==', 'approved')
    );

    const unsubscribe = onSnapshot(placesQuery, (snapshot) => {
      const placesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Place[];
      
      setPlaces(placesData);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching places:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-pulse">Loading places...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Explore Beautiful Places</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => (
          <div key={place.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={place.image_url}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{place.name}</h3>
              <p className="text-gray-600 mb-2">District: {place.district}</p>
              <p className="text-gray-600 mb-4">Best Time: {place.visiting_time}</p>
              <p className="text-gray-700">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}