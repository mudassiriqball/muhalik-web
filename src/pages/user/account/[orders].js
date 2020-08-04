import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getDecodedTokenFromStorage, getTokenFromStorage, checkTokenExpAuth } from '../../../sdk/core/authentication-service'
import AlertModal from '../../components/alert-modal'
import Orders from '../../components/profile/orders'
import Toolbar from '../../components/toolbar'

import translate from '../../../i18n/translate'

export default function MyOrders() {
    const router = useRouter()
    const { orders } = router.query

    const [token, setToken] = useState(null)
    const [user, setUser] = useState({
        _id: null, role: '', mobile: '', full_name: '', gender: '', countary: '', city: '', address: '',
        email: '', shop_name: '', shop_category: '', shop_address: '', avatar: '', status: ''
    })

    useEffect(() => {
        let unmounted = true
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        async function getData() {
            const _decoded_token = await checkTokenExpAuth()
            if (_decoded_token != null) {
                if (_decoded_token.role != 'customer') {
                    Router.push('/')
                } else {
                    setUser(_decoded_token)
                    const _token = await getTokenFromStorage()
                    setToken(_token)
                }
            }
        }
        getData()
        return () => {
            unmounted = false
            source.cancel();
        };
    }, []);

    return (
        <div>
            <Toolbar title={orders == 'pending' ?
                translate('pending_orders')
                :
                orders == 'cancelled' ?
                    translate('cancelled_orders')
                    :
                    orders == 'delivered' ?
                        translate('delivered_orders')
                        :
                        translate('returned_orders')
            } />
            <Orders
                isMobile={true}
                token={token}
                _id={user._id}
                status={orders}
            />
        </div>
    )
}
