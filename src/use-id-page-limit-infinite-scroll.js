import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function useIdPageLimitInfiniteScroll(vendor_id, isAppend, pageNumber, limit) {
    const [_id_loading, setLoading] = useState('')
    const [_id_error, setError] = useState('')
    const [_id_products, setProducts] = useState([])
    const [_id_hasMore, setHasMore] = useState('')

    useEffect(() => {
        if (isAppend == false)
            setProducts([])
    }, [pageNumber])
    useEffect(() => {
        getData()
    }, [pageNumber, limit])

    async function getData() {
        setLoading(true)
        setError(false)
        let cancle
        const _url = MuhalikConfig.PATH + `/api/products/vendor/${vendor_id}`
        await axios({
            method: 'GET',
            url: _url,
            params: { page: pageNumber, limit: limit },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setProducts(prevProducts => {
                return [...new Set([...prevProducts, ...res.data.data])]
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
    return { _id_loading, _id_error, _id_products, _id_hasMore }
}