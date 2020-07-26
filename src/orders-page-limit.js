import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function ordersPageLimit(token, refresh, status, pageNumber, limit) {
    const [orders_loading, setLoading] = useState(false)
    const [orders_error, setError] = useState('')
    const [orders, setOrders] = useState([])
    const [orders_pages, setPages] = useState(0)
    const [orders_total, setTotal] = useState(0)

    useEffect(() => {
        setOrders([])
    }, [refresh])

    useEffect(() => {
        getData()
    }, [status, pageNumber, refresh])

    async function getData() {
        setLoading(true)
        setError(false)
        let cancle
        const _url = MuhalikConfig.PATH + `/api/orders/all-orders/${status}`
        await axios({
            method: 'GET',
            url: _url,
            headers: {
                'authorization': token
            },
            params: { page: pageNumber, limit: limit },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setLoading(false)
            setOrders(prevOrder => {
                return [...new Set([...prevOrder, ...res.data.data.docs])]
            })
            setPages(res.data.data.pages)
            setTotal(res.data.data.total)
        }).catch(err => {
            setLoading(false)
            if (axios.isCancel(err)) return
            setError(true)
            console.log(`Error ${status}:`, err)
        })
        return () => cancle()
    }
    return { orders_loading, orders_error, orders, orders_pages, orders_total }
}