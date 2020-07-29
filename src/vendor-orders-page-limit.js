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
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getData = () => {
            setLoading(true)
            setError(false)
            const _url = MuhalikConfig.PATH + `/api/orders/vendor-orders/${vendor_id}`
            axios({
                method: 'GET',
                url: _url,
                headers: {
                    'authorization': token
                },
                params: { status: status, page: pageNumber, limit: limit },
                cancelToken: source.token
            }).then(res => {
                if (unmounted) {
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
                }
            }).catch(err => {
                if (unmounted) {
                    setLoading(false)
                    if (axios.isCancel(err)) return
                    setError(true)
                }
            })
        }
        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, [status, pageNumber, refresh])

    return { vendor_orders_loading, vendor_orders_error, vendor_orders, vendor_orders_pages, vendor_orders_total }
}