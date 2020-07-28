import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MuhalikConfig from '../../../sdk/muhalik.config'

import { faUserCircle, faImage, faThumbsUp, faClock } from '@fortawesome/free-regular-svg-icons'

import { getDecodedTokenFromStorage, removeTokenFromStorage, getTokenFromStorage } from '../../../sdk/core/authentication-service'
import AlertModal from '../../components/alert-modal'
import MyProfile from '../../components/profile/my-profile'
import Toolbar from '../../components/toolbar'

import translate from '../../../i18n/translate'

export default function PersonelInfo() {

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
            <Toolbar title={translate('personel_info')} />
            <MyProfile
                isMobile={true}
                token={undecoded_token}
                _id={user._id}
                role={user.role}
                full_name={user.full_name}
                gender={user.gender}
                mobile={user.mobile}
                email={user.email}
                showAlert={(msg) => handleShowAlert(msg)}
                reloadUser={() => getUser(token._id)}
            />
        </div>
    )
}
