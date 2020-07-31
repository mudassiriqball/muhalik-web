import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import MuhalikConfig from './sdk/muhalik.config'

export default function ordersQuerySearch(token, refresh, status, fieldName, query, pageNumber, limit, start_date, end_date) {
    const [orders_query_loading, setLoading] = useState(false)
    const [orders_query_error, setError] = useState('')
    const [query_orders, setQueryOrders] = useState([])
    const [orders_query_pages, setPages] = useState('')
    const [orders_query_total, setTotal] = useState(0)

    useEffect(() => {
        setQueryOrders([])
    }, [fieldName, query, refresh, start_date, end_date])

    useEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getData = () => {
            if (query != null) {
                setLoading(true)
                setError(false)
                const _url = MuhalikConfig.PATH + `/api/orders/all-orders-query-search/${status}`
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
                }).then(res => {
                    if (unmounted) {
                        setLoading(false)
                        setQueryOrders(prevPro => {
                            return [...new Set([...prevPro, ...res.data.data.docs])]
                        })
                        setPages(res.data.data.pages)
                        setTotal(res.data.data.total)
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
    }, [fieldName, query, pageNumber, refresh, , start_date, end_date])

    return { orders_query_loading, orders_query_error, query_orders, orders_query_pages, orders_query_total }
}