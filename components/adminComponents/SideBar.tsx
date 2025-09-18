import Link from 'next/link'
import { FaPlus, FaBook, FaFirstOrder } from 'react-icons/fa'

const SideBar = () => {
  return (
    <aside className='w-[30%] px-5 bg-slate-100 h-screen border-r border-black'>
        <nav className='pt-15 w-[90%] flex flex-col gap-5'>
            <Link href={'/admin/addProduct'} className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
                <FaPlus />
                <p>Add Product</p>
            </Link>
            <Link href={'/admin/productList'} className=" mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
                <FaBook />
                <p>Product List</p>
            </Link>
            <Link href={'/admin/orders'} className=" mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]">
                <FaFirstOrder />
                <p>Orders List</p>
            </Link>
        </nav>
    </aside>
  )
}

export default SideBar
