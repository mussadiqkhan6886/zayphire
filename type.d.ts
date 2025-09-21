type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  images: string[]; // required
  color?: string
  size?: string
};


 type Gender = "men" | "women" | "unisex";

 type Product = {
  _id?: string; // MongoDB ObjectId
  productId: string;
  name: string;
  description: string;
  price: number;
  isSale: boolean;
  discountPrice?: number;
  category: string;
  brand?: string;
  inStock: boolean;
  images: string[];
  color?: string;
  gender: Gender;
  isNewArrival: boolean;
  type: string; // e.g., "Unstitched", "Stitched", etc.
  length?: string;
  fragranceType?: string;
  material?: string;
  createdAt?: string; // added by Mongoose timestamps
  updatedAt?: string;
};


 type OrderItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  images: string[];
};

 type UserDetails = {
  fullName: string;
  phone: string;
  email: string;
};

 type ShippingAddress = {
  city?: string;
  postalCode?: string;
  address: string;
};

 type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

 type Order = {
  _id?: string; // MongoDB document ID
  orderId: string;
  items: OrderItem[];
  totalPrice: number;
  userDetails: UserDetails;
  notes?: string;
  status: OrderStatus;
  shippingAddress: ShippingAddress;
  paymentMethod: string; // e.g., COD, card, etc.
  createdAt?: string;
  updatedAt?: string;
};

