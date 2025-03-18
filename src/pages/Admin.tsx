import React from 'react';
import { toast } from 'react-hot-toast';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

type Place = {
  id: string;
  name: string;
  district: string;
  visiting_time: string;
  description: string;
  image_url: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: any;
};

export function Admin() {
  const [places, setPlaces] = React.useState<Place[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [showAddForm, setShowAddForm] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const fetchPlaces = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'places'));
      const placesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Place[];
      setPlaces(placesData);
    } catch (error) {
      toast.error('Failed to fetch places');
    }
  };

  React.useEffect(() => {
    fetchPlaces();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this place?')) return;

    try {
      await deleteDoc(doc(db, 'places', id));
      toast.success('Place deleted successfully');
      fetchPlaces();
    } catch (error) {
      toast.error('Failed to delete place');
    }
  };

  const handleStatusChange = async (id: string, status: Place['status']) => {
    try {
      await updateDoc(doc(db, 'places', id), { status });
      toast.success(`Place ${status} successfully`);
      fetchPlaces();
    } catch (error) {
      toast.error(`Failed to ${status} place`);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      district: formData.get('district') as string,
      visiting_time: formData.get('visiting_time') as string,
      description: formData.get('description') as string,
      image_url: formData.get('image_url') as string,
      status: 'pending',
      created_at: serverTimestamp()
    };

    try {
      await addDoc(collection(db, 'places'), data);
      toast.success('Place added successfully!');
      formRef.current?.reset();
      setShowAddForm(false);
      fetchPlaces();
    } catch (error) {
      toast.error('Failed to add place');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#045307] text-white px-4 py-2 rounded-md hover:bg-[#034206] transition"
        >
          {showAddForm ? 'Cancel' : 'Add New Place'}
        </button>
      </div>

      {showAddForm && (
        <form ref={formRef} onSubmit={handleSubmit} className="mb-8 space-y-4 bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Place Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">District</label>
              <input
                type="text"
                name="district"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Best Time to Visit</label>
              <input
                type="text"
                name="visiting_time"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                name="image_url"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#045307] focus:ring-[#045307]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#045307] text-white py-2 px-4 rounded-md hover:bg-[#034206] transition disabled:opacity-50"
          >
            {loading ? 'Adding...' : 'Add Place'}
          </button>
        </form>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Place</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {places.map((place) => (
              <tr key={place.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded-full object-cover" src={place.image_url} alt={place.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{place.name}</div>
                      <div className="text-sm text-gray-500">{place.visiting_time}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{place.district}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      place.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : place.status === 'rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {place.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  {place.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleStatusChange(place.id, 'approved')}
                        className="text-green-600 hover:text-green-900"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(place.id, 'rejected')}
                        className="text-red-600 hover:text-red-900"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleDelete(place.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}