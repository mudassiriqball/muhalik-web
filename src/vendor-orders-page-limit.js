import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function vendorOrdersPageLimit(token, vendor_id, refresh, status, pageNumber, limit) {
    const [vendor_orders_loading, setLoading] = useState(false)
    const [vendor_orders_error, setError] = useState('')
    const [vendor_orders, setOrders] = useState([])
    const [vendor_orders_pages, setPages] = useState(0)
    const [vendor_orders_total, setTotal] = useState(0)
    useEffect(() => {
        setOrders([])
    }, [refresh])

    useEffect(() => {
        getData()
    }, [status, pageNumber, refresh])

    useEffect(() => {

    }, [vendor_orders_total])

    async function getData() {
        setLoading(true)
        setError(false)
        let cancle
        const _url = MuhalikConfig.PATH + `/api/orders/users-orders/${vendor_id}`
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
                return [...new Set([...prevOrders, ...res.data.data])]
            })
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
            console.log(`Error ${status}:`, err)
        })
        return () => cancle()
    }
    return { vendor_orders_loading, vendor_orders_error, vendor_orders, vendor_orders_pages, vendor_orders_total }
}