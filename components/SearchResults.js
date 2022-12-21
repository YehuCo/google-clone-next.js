import React from 'react'
import PaginationButtons from './PaginationButtons'

function SearchResults({ results }) {
  return (
    <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-40'>
        <p className='text-gray-600 text-md mb-5 mt-3'>About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>

        {/* display information for each result */}
        {results.items?.map((result) => (
            <div key={result.link} className='max-w-xl mb-8'>
                <div className='group'>
                  
                  {/* display small url above blue title */}
                  <a href={result.link} className='text-sm'>{result.formattedUrl}</a>
                  
                  {/* display large title of website in blue */}
                  <a href={result.link}>
                    <h2 className='truncate text-xl text-blue-800 font-medium group-hover:underline'>{result.title}</h2>
                  </a>
                </div>

                {/* display 2-line snippet of the website */}
                <p className='line-clamp-2'>{result.snippet}</p>
            </div>
        ))}

        {/* display previous and next buttons on the bottom of the page */}
        <PaginationButtons />
    </div>
  )
}

export default SearchResults