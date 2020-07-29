import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function useInfiniteScroll(fieldName, query, pageNumber, limit) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts([])
    }, [query])
    useEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getData = () => {
            setLoading(true)
            setError(false)
            const _url = MuhalikConfig.PATH + `/api/products/all-products-query-search`
            axios({
                method: 'GET',
                url: _url,
                params: { field: fieldName, q: query, page: pageNumber, limit: limit },
                cancelToken: source.token
            }).then(res => {
                if (unmounted) {
                    setLoading(false)
                    setProducts(res.data.data)
                }
            }).catch(err => {
                if (unmounted) {
                    setLoading(false)
                    if (axios.isCancel(err)) return
                    setError(true)
                }
            })
        }
        return () => {
            unmounted = false
            source.cancel();
        };
    }, [query, pageNumber])

    return { loading, error, products }
}