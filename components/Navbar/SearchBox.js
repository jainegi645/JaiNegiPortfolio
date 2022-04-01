import React from 'react';



const SearchBox = () => {
  return (
    <div className='flex justify-between border rounded-2xl py-1 bg-white'>
        <img src="https://img.icons8.com/ios-glyphs/50/000000/search.png" width='30' height='30' className='pl-2'/>
             
        <input className=' text-blue-600 outline-none rounded-2xl text-right pr-3' type="text"  placeholder = 'search for keyword'/> 
    </div>
  )
}

export default SearchBox