import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function useProductsInfiniteScroll(fieldName, query, pageNumber, limit) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])
    const [hasMore, setHasMore] = useState('')

    useEffect(() => {
        setProducts([])
    }, [query])
    useEffect(() => {
        getData()
    }, [query, pageNumber])

    async function getData() {
        setLoading(true)
        setError(false)
        let cancle
        const _url = MuhalikConfig.PATH + `/api/products/get`
        await axios({
            method: 'GET',
            url: _url,
            params: { field: fieldName, q: query, page: pageNumber, limit: limit },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setProducts(prevProducts => {
                return [...new Set([...prevProducts, ...res.data.data])]
            })
            setHasMore(res.data.data.length > 0)
            setLoading(false)
        }).catch(err => {
            if (axios.isCancel(err)) return
            setError(true)
            console.log('Error---->:', err)
        })
        return () => cancle()
    }
    return { loading, error, products, hasMore }
}