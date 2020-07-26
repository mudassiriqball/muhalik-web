import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function usersQuerySearch(token, refresh, role, status, fieldName, query, pageNumber, limit) {
    const [users_query_loading, setLoading] = useState(false)
    const [users_query_error, setError] = useState('')
    const [query_users, setUsers] = useState([])
    const [users_query_pages, setPages] = useState('')
    const [users_query_total, setTotal] = useState(0)

    useEffect(() => {
        setUsers([])
    }, [fieldName, query, refresh])

    useEffect(() => {
        getData()
    }, [fieldName, query, pageNumber, refresh])

    async function getData() {
        if (query != null) {
            setLoading(true)
            setError(false)
            const _url = MuhalikConfig.PATH + `/api/users/users-query-search/${role}`
            await axios({
                method: 'GET',
                url: _url,
                headers: {
                    'authorization': token
                },
                params: { status: status, field: fieldName, q: query, page: pageNumber, limit: limit },
            }).then(res => {
                setLoading(false)
                setUsers(prevPro => {
                    return [...new Set([...prevPro, ...res.data.data.docs])]
                })
                setPages(res.data.data.pages)
                setTotal(res.data.data.total)
            }).catch(err => {
                setLoading(false)
                console.log('Error---->:', err)
                setError(true)
            })
        }
    }
    return { users_query_loading, users_query_error, query_users, users_query_pages, users_query_total }
}