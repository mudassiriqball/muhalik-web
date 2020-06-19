import React, { useState, useRef, useCallback } from 'react'
import useInfiniteScroll from '../useInfiniteScroll'


export default function ContactUs() {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const { loading, error, products, hasMore } = useInfiniteScroll(query, pageNumber)

    const observer = useRef()
    const lastProducrRef = useCallback((node) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    return (
        <div className='m-5'>
            <input type='text' value={query} onChange={handleSearch}></input>
            {products && products.map((element, index) => {
                if (products.length === index + 1) {
                    return <div ref={lastProducrRef} key={index}>{element}</div>
                    // return <div ref={lastProducrRef} className='w-100 m-5 p-5' key={index}>Product Name: {element.product_name}</div>
                } else {
                    return <div key={index}>Name: {element}</div>
                    // return <div className='w-100 m-5 p-5' key={index}>Product Name: {element.product_name}</div>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error...'}</div>
        </div>
    )
}

