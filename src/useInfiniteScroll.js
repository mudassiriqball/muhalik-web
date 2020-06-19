import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function useInfiniteScroll(query, pageNumber) {
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])
    const [hasMore, setHasMore] = useState('')

    useEffect(() => {
        setProducts([])
    }, [query])
    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancle
        axios({
            method: 'GET',
            url: MuhalikConfig + '/api/products/get-products',
            params: { q: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setProducts(prevProducts => {
                return [...new Set([...prevProducts, ...res.data.data])]
            })
            setHasMore(res.data.docs.length > 0)
            setLoading(false)
        }).catch(err => {
            if (axios.isCancel(err)) return
            setError(true)
        })
        return () => cancle()
    }, [query, pageNumber])
    return { loading, error, products, hasMore }
}

