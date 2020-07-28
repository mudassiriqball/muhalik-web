import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function userOrdersPageLimit(token, user_id, status, pageNumber, limit) {
    const [user_orders_loading, setLoading] = useState(false)
    const [user_orders_error, setError] = useState('')
    const [user_orders, setOrders] = useState([])
    const [user_orders_pages, setPages] = useState(0)
    const [user_orders_total, setTotal] = useState(0)
    const [user_order_hasMore, setHasMore] = useState(false)

    useEffect(() => {
        if (user_id != '')
            getData()
        return () => {
            setOrders([])
        }
    }, [user_id, status, pageNumber])

    async function getData() {
        setLoading(true)
        setError(false)
        let cancle
        const _url = MuhalikConfig.PATH + `/api/orders/customer-orders/${user_id}`
        await axios({
            method: 'GET',
            url: _url,
            headers: {
                'authorization': token
            },
            params: { status: status, page: pageNumber, limit: limit },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setLoading(false)
            setOrders(prevOrders => {
                return [...new Set([...prevOrders, ...res.data.data.docs])]
            })
            setTotal(res.data.total)
            setPages(res.data.pages)
            setHasMore(res.data.data.docs.length > 0)
        }).catch(err => {
            setLoading(false)
            if (axios.isCancel(err)) return
            setError(true)
            console.log(`Error ${status}:`, err)
        })
    }
    return { user_orders_loading, user_orders_error, user_orders, user_orders_pages, user_orders_total, user_order_hasMore }
}