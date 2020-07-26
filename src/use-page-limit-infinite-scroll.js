import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function usePageLimitInfiniteScroll(isAppend, pageNumber, limit) {
    const [_loading, setLoading] = useState('')
    const [_error, setError] = useState('')
    const [_products, setProducts] = useState([])
    const [_hasMore, setHasMore] = useState(false)
    const [_pages, setPages] = useState(0)
    const [_total, setTotal] = useState(0)
    useEffect(() => {
        if (isAppend == false)
            setProducts([]
            )
    }, [pageNumber])
    useEffect(() => {
        getData()
    }, [pageNumber, limit])

    async function getData() {
        setLoading(true)
        setError(false)
        let cancle
        const _url = MuhalikConfig.PATH + `/api/products/all-products`
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
            setTotal(res.data.total)
            let count = res.data.total / 20
            let rounded = Math.floor(count);
            let decimal = count - rounded;
            if (decimal > 0) {
                setPages(rounded + 1)
            } else {
                setPages(rounded)
            }
            setLoading(false)
        }).catch(err => {
            if (axios.isCancel(err)) return
            setError(true)
        })
        return () => cancle()
    }
    return { _loading, _error, _products, _pages, _total, _hasMore }
}