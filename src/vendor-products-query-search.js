import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function vendorProductsQuerySearch(token, refresh, vendor_id, fieldName, query, pageNumber, limit) {
    const [vendor_products_query_loading, setLoading] = useState(false)
    const [vendor_products_query_error, setError] = useState('')
    const [vendor_products_query_products, setProducts] = useState([])
    const [vendor_products_query_hasMore, setHasMore] = useState(false)
    const [vendor_products_query_pages, setPages] = useState(0)
    const [vendor_products_query_total, setTotal] = useState(0)

    useEffect(() => {
        setProducts([])
    }, [refresh, query])

    useEffect(() => {
        getData()
    }, [refresh, query, pageNumber])

    async function getData() {
        if (query != '') {
            setLoading(true)
            setError(false)
            let cancle
            const _url = MuhalikConfig.PATH + `/api/products/user-products-query-search/${vendor_id}`
            await axios({
                method: 'GET',
                url: _url,
                headers: {
                    'authorization': token
                },
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
            })
            return () => cancle()
        }
    }
    return {
        vendor_products_query_loading, vendor_products_query_error, vendor_products_query_products,
        vendor_products_query_pages, vendor_products_query_total, vendor_products_query_hasMore
    }
}