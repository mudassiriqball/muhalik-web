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
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getData = () => {
            setLoading(true)
            setError(false)
            const _url = MuhalikConfig.PATH + `/api/products/all-products`
            axios({
                method: 'GET',
                url: _url,
                params: { page: pageNumber, limit: limit },
                cancelToken: source.token
            }).then(res => {
                if (unmounted) {
                    setLoading(false)
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
                }
            }).catch(err => {
                if (unmounted) {
                    setLoading(false)
                    if (axios.isCancel(err)) return
                    setError(true)
                }
            })
        }
        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, [pageNumber, limit])

    return { _loading, _error, _products, _pages, _total, _hasMore }
}