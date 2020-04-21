import { withRouter } from 'next/router'

const ViewProduct = props => {

    return (
        <>
            <h1>data: {props.router.query.data.product_name}</h1>
        </>
    )
}

export default withRouter(ViewProduct);