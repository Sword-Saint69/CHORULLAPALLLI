import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export function Header() {
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const adminsRef = collection(db, 'admins');
        const q = query(adminsRef, where('user_id', '==', user.uid));
        const querySnapshot = await getDocs(q);
        setIsAdmin(!querySnapshot.empty);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="bg-[#045307] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin size={32} />
            <span className="text-2xl font-bold">Chorulla Palli</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="hover:text-[#C8A2C8] transition">Home</Link>
            <Link to="/places" className="hover:text-[#C8A2C8] transition">Places</Link>
            {isAdmin && (
              <Link to="/admin" className="hover:text-[#C8A2C8] transition">Admin</Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}