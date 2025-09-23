import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const ThankYouPage = async ({params}: {params: Promise<{id:string}>}) => {

  const id = (await params).id

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gray-50 px-5">
      <div className="bg-white shadow-md rounded-lg p-10 text-center max-w-md w-full">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-2">
          Your order has been placed successfully.  
          We will contact you shortly to confirm your details.
        </p>
        
        <p>Your Order id: <span className="text-lg font-semibold">{id}</span> </p>
        <p className="mb-5">Use your Order id to <Link className="text-blue-600 underline" href={"/track-order"}>track order</Link> </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
          
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
