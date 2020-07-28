import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { getDecodedTokenFromStorage, getTokenFromStorage } from '../../../sdk/core/authentication-service'
import AlertModal from '../../components/alert-modal'
import Orders from '../../components/profile/orders'
import Toolbar from '../../components/toolbar'

import translate from '../../../i18n/translate'

export default function MyOrders() {
    const router = useRouter()
    const { orders } = router.query

    const [token, setToken] = useState({ _id: '', role: '', full_name: '', status: '' })
    const [undecoded_token, setUndecodedToken] = useState('')

    useEffect(() => {
        getData()
        return () => {
        }
    }, [])

    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        const _undecoded_token = await getTokenFromStorage()
        if (_token !== null) {
            setToken(_token)
            setUndecodedToken(_undecoded_token)
        }
    }


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
                token={undecoded_token}
                _id={token._id}
                status={orders}
            />
        </div>
    )
}
