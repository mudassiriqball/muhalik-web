import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function useInfiniteScroll(fieldName, query, pageNumber, limit) {
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts([])
    }, [query])
    useEffect(() => {
        setLoading(true)
        setError(false)

        const _url = MuhalikConfig.PATH + `/api/products/get`
        axios({
            method: 'GET',
            url: _url,
            params: { field: fieldName, q: query, page: pageNumber, limit: limit },
        }).then(res => {
            setProducts(res.data.data)
            setLoading(false)
        }).catch(err => {
            console.log('Error in infinitescroll:', err)
            setError(true)
        })
    }, [query, pageNumber])
    return { loading, error, products }
}