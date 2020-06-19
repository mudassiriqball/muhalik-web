// import Layout from './components/customer/layout';
// const ContactUs = () => (
//     <Layout>
//         <h3 className="text-center">Mahaalk's Contact Us</h3>
//     </Layout>
// )

// export default ContactUs;
import React, { useState, useRef, useCallback } from 'react'
import useInfiniteScroll from './useInfiniteScroll'


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
        <div>
            <input type='text' value={query} onChange={handleSearch}></input>
            {products && products.map((product, index) => {
                if (products.length === index + 1) {
                    return <div ref={lastProducrRef} key={index}>{product}</div>
                } else {
                    return <div key={index}>{product}</div>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error...'}</div>
        </div>
    )
}
