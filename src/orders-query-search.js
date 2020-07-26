import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function ordersQuerySearch(token, refresh, status, fieldName, query, pageNumber, limit) {
    const [orders_query_loading, setLoading] = useState(false)
    const [orders_query_error, setError] = useState('')
    const [query_orders, setQueryOrders] = useState([])
    const [orders_query_pages, setPages] = useState('')
    const [orders_query_total, setTotal] = useState(0)

    useEffect(() => {
        setQueryOrders([])
    }, [fieldName, query, refresh])

    useEffect(() => {
        getData()
    }, [fieldName, query, pageNumber, refresh])

    async function getData() {
        if (query != null) {
            setLoading(true)
            setError(false)
            const _url = MuhalikConfig.PATH + `/api/orders/all-orders-query-search/${status}`
            await axios({
                method: 'GET',
                url: _url,
                headers: {
                    'authorization': token
                },
                params: { field: fieldName, q: query, page: pageNumber, limit: limit },
            }).then(res => {
                setLoading(false)
                setQueryOrders(prevPro => {
                    return [...new Set([...prevPro, ...res.data.data.docs])]
                })
                setPages(res.data.data.pages)
                setTotal(res.data.data.total)
            }).catch(err => {
                setLoading(false)
                console.log('Error->:', err)
                setError(true)
            })
        }
    }
    return { orders_query_loading, orders_query_error, query_orders, orders_query_pages, orders_query_total }
}