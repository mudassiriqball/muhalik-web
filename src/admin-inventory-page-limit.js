import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function adminInventoryPageLimit(refresh_count, pageNumber, limit) {
    const [admin_inventory_loading, setLoading] = useState('')
    const [admin_inventory_error, setError] = useState('')
    const [admin_inventory_products, setProducts] = useState([])
    const [admin_inventory_hasMore, setHasMore] = useState(false)
    const [admin_inventory_pages, setPages] = useState(0)
    const [admin_inventory_total, setTotal] = useState(0)

    useEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getData = () => {
            setLoading(true)
            setError(false)
            let cancle
            const _url = MuhalikConfig.PATH + `/api/products/all-products`
            axios({
                method: 'GET',
                url: _url,
                params: { page: pageNumber, limit: limit },
                cancelToken: new axios.CancelToken(c => cancle = c)
            }).then(res => {
                if (unmounted) {
                    setLoading(false)
                    setProducts(prevProducts => {
                        return [...new Set([...prevProducts, ...res.data.data])]
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
        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, [pageNumber, limit])

    return {
        admin_inventory_loading,
        admin_inventory_products,
        admin_inventory_pages,
        admin_inventory_total,
    }
}