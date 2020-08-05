import { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function vendorOutOfStockProductsQuerySearch(token, refresh, vendor_id, query, pageNumber, limit) {
    const [out_stock_products_query_loading, setLoading] = useState(false)
    const [out_stock_products_query_error, setError] = useState('')
    const [out_stock_query_products, setProducts] = useState([])
    const [out_stock_products_query_hasMore, setHasMore] = useState(false)
    const [out_stck_products_query_pages, setPages] = useState(0)
    const [out_stock_products_query_total, setTotal] = useState(0)

    useEffect(() => {
        setProducts([])
    }, [refresh, query])

    useEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getData = () => {
            if (query != '') {
                setLoading(true)
                setError(false)
                const _url = MuhalikConfig.PATH + `/api/products/vendor-search-less-stock/${vendor_id}`
                axios({
                    method: 'GET',
                    url: _url,
                    headers: {
                        'authorization': token
                    },
                    params: {
                        q: query, page: pageNumber, limit: limit,
                    },
                    cancelToken: source.token
                }).then(res => {
                    if (unmounted) {
                        setLoading(false)
                        setProducts(prevProducts => {
                            return [...new Set([...prevProducts, ...res.data.simple_product])]
                        })
                        setProducts(prevProducts => {
                            return [...new Set([...prevProducts, ...res.data.variable_product])]
                        })

                        setHasMore(res.data.simple_product > 0 && res.data.variable_product > 0)

                        setTotal(res.data.simple_total + res.data.variable_total)
                        let count = (res.data.simple_total + res.data.variable_total) / 20
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
    }, [refresh, vendor_id, pageNumber, limit])

    return { out_stock_products_query_loading, out_stock_products_query_error, out_stock_query_products, out_stck_products_query_pages, out_stock_products_query_total, out_stock_products_query_hasMore }
}