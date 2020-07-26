import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'
import Router from 'next/router'

export default function useQueryInfiniteScroll(fieldName, query, pageNumber, limit) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [pages, setPages] = useState(0)
    const [total, setTotal] = useState(0)


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
            params: { field: fieldName, q: query, page: pageNumber, limit: limit },
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
    return { loading, error, products, pages, total, hasMore }
}