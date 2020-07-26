import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function useSearch(query, pageNumber, limit) {
    const [search_loading, setLoading] = useState(false)
    const [search_error, setError] = useState('')
    const [search_products, setProducts] = useState([])
    const [search_hasMore, setHasMore] = useState(false)
    const [search_pages, setPages] = useState(0)
    const [search_total, setTotal] = useState(0)

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
        const _url = MuhalikConfig.PATH + `/api/products/all-products-query-search`
        await axios({
            method: 'GET',
            url: _url,
            params: { q: query, page: pageNumber, limit: limit },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setLoading(false)
            setProducts(prevPro => {
                return [...new Set([...prevPro, ...res.data.data])]
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
        }).catch(err => {
            setLoading(false)
            if (axios.isCancel(err)) return
            setError(true)
            // Router.push('/')
        })
        return () => cancle()
    }
    return { search_loading, search_error, search_products, search_pages, search_total, search_hasMore }
}