import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MuhalikConfig from '../../../sdk/muhalik.config'

import { faUserCircle, faImage, faThumbsUp, faClock } from '@fortawesome/free-regular-svg-icons'

import { getDecodedTokenFromStorage, removeTokenFromStorage, getTokenFromStorage } from '../../../sdk/core/authentication-service'
import AlertModal from '../../components/alert-modal'
import Address from '../../components/profile/address'
import Toolbar from '../../components/toolbar'

import translate from '../../../i18n/translate'

export default function MyAddress() {

    const [token, setToken] = useState({ role: '', full_name: '', status: '' })
    const [undecoded_token, setUndecodedToken] = useState('')

    const [user, setUser] = useState('')

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
            setToken(_token)
            setUndecodedToken(_undecoded_token)
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
            <Toolbar title={translate('my_address')} />
            <Address
                isMobile={true}
                token={undecoded_token}
                _id={user._id}
                role={user.role}
                shop_name={user.shop_name}
                address={user.address}
                shop_address={user.shop_address}
                countary={user.countary}
                city={user.city}
                showAlert={(msg) => handleShowAlert(msg)}
                reloadUser={() => getUser(token._id)}
            />
        </div>
    )
}
