import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function usePageLimitInfiniteScroll(isAppend, pageNumber, limit) {
    const [_loading, setLoading] = useState('')
    const [_error, setError] = useState('')
    const [_products, setProducts] = useState([])
    const [_hasMore, setHasMore] = useState('')

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
        const _url = MuhalikConfig.PATH + `/api/products/`
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
            setError(true)
            console.log('Error---->:', err)
        })
        return () => cancle()
    }
    return { _loading, _error, _products, _hasMore }
}