import { useState } from 'react';
import { Search } from '@heroicons/react/solid'
import axios from 'axios'
import { Scrollbar } from 'react-scrollbars-custom';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastResult, setLastResult] = useState('')

  const handleSearchInputChange = (event) => {
    setIsLoading(false)
    setSearchQuery(event.target.value);
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setResult('X')
      handleSearch()
    }
  };

 
 

  const handleSearch = async () => {

    
    const url = 'https://ask-me-anything-kkcm.onrender.com/api/prompt';
    const data = { "prompt": searchQuery };
    const config = { headers: { 'Content-Type': 'application/json' } };
    setIsLoading(true);
    try {
      const res = await axios.post(url, data, config)
      setResult(res.data.response)
      setLastResult(res.data.response)
      setIsLoading(false)
      
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className='h-96 w-96 flex flex-col justify-center items-center '>
      <h2 className='text-xl font-light text-center py-2'>Search {isLoading && `...`}</h2>
      <div className='flex justify-between !bg-white rounded-full w-4/5 '>
        <input className='text-[15px] py-3 pl-3 bg-inherit rounded-full outline-none w-4/5' 
        type="text" placeholder='Ask me anythig...' 
        value={searchQuery} 
        onChange={handleSearchInputChange}
        onKeyDown={handleKeyDown}
        
        autoFocus={result === '' ? true : false} />
        <span className='py-3 pr-3 hover cursor-pointer' onClick={handleSearch}>🔍</span>
      
      </div>
      
      <div className='w-4/5 flex justify-center items-center mt-10'>
      {lastResult && <Scrollbar style={{  height: 260 }}>
      <p className='text-lg font-normal text-center w-full'>
        {lastResult}
        </p>        
        </Scrollbar>
       }
      </div>
      
       
       {/* <Scrollbar className='flex justify-center items-center' > 
       <p className='text-lg font-normal text-center py-2 pl-20 w-4/5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta, 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta, 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta, 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta, 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta, 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta, 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta, 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta, 
        
       </p>
       </Scrollbar> */}

    </div>
  );
};


export default SearchInput