export interface Place {
  id: string;
  name: string;
  district: string;
  visiting_time: string;
  description: string;
  image_url: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  user_id: string;
}

export interface Admin {
  id: string;
  user_id: string;
  created_at: string;
}