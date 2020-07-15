import { useEffect, useState } from 'react'
import axios from 'axios'
import MuhalikConfig from './sdk/muhalik.config'

export default function usersPageLimit(refresh, url, pageNumber, limit) {
    const [users_loading, setLoading] = useState(true)
    const [users_error, setError] = useState('')
    const [users, setUsers] = useState([])
    const [users_pages, setPages] = useState(0)
    const [users_total, setTotal] = useState(0)

    useEffect(() => {
        setUsers([])
    }, [refresh])

    useEffect(() => {
        getData()
    }, [url, pageNumber, refresh])

    async function getData() {
        setLoading(true)
        setError(false)
        let cancle
        const _url = MuhalikConfig.PATH + `/api/users/${url}`
        await axios({
            method: 'GET',
            url: _url,
            params: { page: pageNumber, limit: limit },
            cancelToken: new axios.CancelToken(c => cancle = c)
        }).then(res => {
            setLoading(false)
            setUsers(prevPro => {
                return [...new Set([...prevPro, ...res.data.data.docs])]
            })
            setPages(res.data.data.pages)
            setTotal(res.data.data.total)
        }).catch(err => {
            setLoading(false)
            if (axios.isCancel(err)) return
            setError(true)
            console.log(`Error : ${url}`, err)
        })
        return () => cancle()
    }
    return { users_loading, users_error, users, users_pages, users_total }
}