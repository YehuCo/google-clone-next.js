import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { XIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    // set the search term and then push it onto the router stack
    const setTerm = (e) => {
      e.preventDefault();

      const term = searchInputRef.current.value;

      if (!term) return;
      router.push(`/search?term=${term}`);
    }

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-4 items-center'>

            {/* google image / link back to homepage */}
            <Image 
              src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
              height={40}
              width={130}
              alt='google'
              onClick={ () => router.push('/')}
              className='cursor-pointer'
            />

            {/* input field, delete button, search icon */}
            <form className='flex flex-grow border border-gray-200 rounded-full shadow-md max-w-2xl items-center px-3 py-2 ml-1 mr-5'>
                <input ref={searchInputRef} type='text' className='flex-grow w-full focus:outline-none'/>
                <XIcon onClick={() => (searchInputRef.current.value = "")} className='h-7 text-gray-500 cursor-pointer sm:mr-3' />
                <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex' />
                <button hidden type='submit' onClick={setTerm}></button>
            </form>
            <Avatar url='https://lh3.googleusercontent.com/3NHoBFpjpRzkqEp4Ollu1cgjcvh_3BwhfKTlV85SwJlFgLH7bvxJRseDCDiHXKcL' className='ml-auto'/>
        </div>
        
        {/* HeaderOptions */}
        <HeaderOptions />
    </header>
  )
}

export default Header