import { Toast, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


const ShowToast = props => {
    return (
        <div
            style={{
                position: 'absolute',
                top: '40%',
                right: '40%',
                zIndex: '100'
            }}
        >
            <Toast onClose={props.onCloseHandler} show={props.show} delay={3000} autohide style={{
                display: 'absolute',
                background: '#e6ffe6',
                width: '300px',
                border: '0.5px solid black'
            }}>
                <Toast.Header>
                    <FontAwesomeIcon icon={props.iconName} style={styles.fontawesome}  className="mr-auto"></FontAwesomeIcon>
                </Toast.Header>
                <Toast.Body style={styles.toastBody}>
                    <p style={{textAlign: 'center' }}>
                    <span style={styles.span} className="mr-auto">Success</span>
                    <span className="mr-auto">{props.message}</span>
                    </p>
                </Toast.Body>
            </Toast>
        </div>
    )
}

export default ShowToast;


const styles = {
    span: {
        marginLeft: '20px',
        fontSize: '18px',
        color: 'green',
        fontWeight: 'bold'
    },
    toastBody: {
        fontSize: '16px',
        padding: '10px',
    },
    fontawesome: {
        color: 'green',
        width: '35px',
        height: '35px',
        maxHeight: '35px',
        maxWidth: '35px',
    },
}