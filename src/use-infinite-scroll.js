import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function useInfiniteScroll(fieldName, query, pageNumber, limit) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts([])
    }, [query])
    useEffect(() => {
        setLoading(true)
        setError(false)
        const _url = MuhalikConfig.PATH + `/api/products/all-products-query-search`
        axios({
            method: 'GET',
            url: _url,
            params: { field: fieldName, q: query, page: pageNumber, limit: limit },
        }).then(res => {
            setLoading(false)
            setProducts(res.data.data)
        }).catch(err => {
            setLoading(false)
            setError(true)
            // Router.push('/')
        })
    }, [query, pageNumber])
    return { loading, error, products }
}