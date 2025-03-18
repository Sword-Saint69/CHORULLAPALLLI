import React from 'react';
import { toast } from 'react-hot-toast';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';

export function PlaceForm() {
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

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
      status: 'approved',
      created_at: serverTimestamp(),
      user_id: auth.currentUser?.uid || null
    };

    try {
//      // Validate all required fields
      for (const [key, value] of formData.entries()) {
        if (!value || (typeof value === 'string' && value.trim() === '')) {
          throw new Error(`${key} is required`);
        }
      }

      // Validate image URL format
      const imageUrl = data.image_url;
      try {
        new URL(imageUrl);
      } catch {
        throw new Error('Invalid image URL format');
      }

      // Attempt to add document to Firestore
      await addDoc(collection(db, 'places'), data);
      toast.success('Place submitted successfully!');
      formRef.current?.reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit place';
      toast.error(errorMessage);
      console.error('Place submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
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
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          rows={4}
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

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#045307] text-white py-2 px-4 rounded-md hover:bg-[#034206] transition disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit Place'}
      </button>
    </form>
  );
}