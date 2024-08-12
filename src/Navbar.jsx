import React from 'react'

const Navbar = () => {
  const navlist = ["Home" ,"About me","Skills","Projects","Contact"]
  return (
   <nav className=' flex justify-center' >
   <ul className='flex justify-center space-x-8 mt-4 mb-2 border-gray-600 border-2 rounded-full w-2/3 py-1'>
    {navlist.map((item,index)=>(
      <li className='text-white hover:text-gray-700 ' key={index}>{item}</li>
    ))}
   </ul>
   </nav>
  )
}

export default Navbar