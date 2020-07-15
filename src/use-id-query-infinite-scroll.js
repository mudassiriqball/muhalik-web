import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function useIdQueryInfiniteScroll(vendor_id, fieldName, query, pageNumber, limit) {
    const [id_loading, setLoading] = useState(true)
    const [id_error, setError] = useState('')
    const [id_products, setProducts] = useState([])
    const [id_hasMore, setHasMore] = useState('')

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
        const _url = MuhalikConfig.PATH + `/api/products/search-vendor-products/${vendor_id}`
        await axios({
            method: 'GET',
            url: _url,
            params: { field: fieldName, q: query, page: pageNumber, limit: limit },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setProducts(prevPro => {
                return [...new Set([...prevPro, ...res.data.data])]
            })
            setHasMore(res.data.data.length > 0)
            setLoading(false)
        }).catch(err => {
            if (axios.isCancel(err)) return
            setLoading(false)
            setError(true)
            console.log('Error---->:', err)
        })
        return () => cancle()
    }
    return { id_loading, id_error, id_products, id_hasMore }
}