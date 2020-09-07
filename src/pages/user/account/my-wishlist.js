import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MuhalikConfig from '../../../sdk/muhalik.config'

import { faUserCircle, faImage, faThumbsUp, faClock } from '@fortawesome/free-regular-svg-icons'

import { getDecodedTokenFromStorage, removeTokenFromStorage, getTokenFromStorage } from '../../../sdk/core/authentication-service'
import AlertModal from '../../components/alert-modal'
import Wishlist from '../../components/profile/my-wishlist'
import Toolbar from '../../components/toolbar'

import translate from '../../../i18n/translate'

export default function MyWishlist() {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState({
        _id: null, role: '', mobile: '', full_name: '', gender: '', countary: '', city: '', address: '',
        email: '', shop_name: '', shop_category: '', shop_address: '', avatar: '', status: '', wish_list: ''
    })

    const [showAlertModal, setShowAlertModal] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')

    useEffect(() => {
        getData()
        return () => {
        }
    }, [])

    async function getData() {
        const _token = await getDecodedTokenFromStorage()
        const _undecoded_token = await getTokenFromStorage()
        if (_token !== null) {
            setUser(_token)
            setToken(_undecoded_token)
            await getUser(_token._id)
        }
    }

    async function getUser(id) {
        const user_url = MuhalikConfig.PATH + `/api/users/user-by-id/${id}`;
        await axios.get(user_url).then((res) => {
            setUser(res.data.data[0])
        }).catch((error) => {
        })
    }

    function handleShowAlert(msg) {
        setAlertMsg(msg)
        setShowAlertModal(true)
    }

    return (
        <div>
            <AlertModal
                onHide={(e) => setShowAlertModal(false)}
                show={showAlertModal}
                header={translate('success')}
                message={alertMsg}
                iconname={faThumbsUp}
                color={'green'}
            />
            <Toolbar title={translate('my_wishlist')} />
            <Wishlist
                isMobile={true}
                token={token}
                _id={user._id}
                role={user.role}
                reloadUser={() => getUser(user._id)}
                wish_list={user.wish_list}
                showAlert={(msg) => handleShowAlert(msg)}
            />
        </div>
    )
}
