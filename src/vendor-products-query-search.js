import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import MuhalikConfig from './sdk/muhalik.config'

export default function vendorProductsQuerySearch(token, refresh, vendor_id, fieldName, query, pageNumber, limit, start_date, end_date) {
    const [vendor_products_query_loading, setLoading] = useState(false)
    const [vendor_products_query_error, setError] = useState('')
    const [vendor_products_query_products, setProducts] = useState([])
    const [vendor_products_query_hasMore, setHasMore] = useState(false)
    const [vendor_products_query_pages, setPages] = useState(0)
    const [vendor_products_query_total, setTotal] = useState(0)

    useEffect(() => {
        setProducts([])
    }, [refresh, query, start_date, end_date])

    useEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getData = () => {
            if (query != '') {
                setLoading(true)
                setError(false)
                const _url = MuhalikConfig.PATH + `/api/products/user-products-query-search/${vendor_id}`
                axios({
                    method: 'GET',
                    url: _url,
                    headers: {
                        'authorization': token
                    },
                    params: {
                        field: fieldName, q: query, page: pageNumber, limit: limit,
                        start_date: moment(start_date).format('YYYY-MM-DD'), end_date: moment(end_date).format('YYYY-MM-DD')
                    },
                    cancelToken: source.token
                }).then(res => {
                    if (unmounted) {
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
                    }
                }).catch(err => {
                    if (unmounted) {
                        setLoading(false)
                        if (axios.isCancel(err)) return
                        setError(true)
                    }
                })
            }
        }
        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, [refresh, query, pageNumber, start_date, end_date])

    return {
        vendor_products_query_loading, vendor_products_query_error, vendor_products_query_products,
        vendor_products_query_pages, vendor_products_query_total, vendor_products_query_hasMore
    }
}