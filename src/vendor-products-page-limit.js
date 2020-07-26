import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function vendorProductsPageLimit(token, refresh, vendor_id, isAppend, pageNumber, limit) {
    const [vendor_products_loading, setLoading] = useState(false)
    const [vendor_products_error, setError] = useState('')
    const [vendor_products_products, setProducts] = useState([])
    const [vendor_products_hasMore, setHasMore] = useState(false)
    const [vendor_products_pages, setPages] = useState(0)
    const [vendor_products_total, setTotal] = useState(0)

    useEffect(() => {
        if (isAppend == false)
            setProducts([])
    }, [refresh, pageNumber])
    useEffect(() => {
        getData()
    }, [refresh, vendor_id, pageNumber, limit])

    async function getData() {
        if (vendor_id != null) {
            setLoading(true)
            setError(false)
            let cancle
            const _url = MuhalikConfig.PATH + `/api/products/user-products/${vendor_id}`
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
            }).catch(err => {
                setLoading(false)
                if (axios.isCancel(err)) return
                setError(true)
            })
            return () => cancle()
        }
    }
    return { vendor_products_loading, vendor_products_error, vendor_products_products, vendor_products_pages, vendor_products_total, vendor_products_hasMore }
}