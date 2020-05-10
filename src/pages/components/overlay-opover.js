import { OverlayTrigger, Popover } from 'react-bootstrap'

const OverlayPopover = props => {
    return (
        <OverlayTrigger trigger="hover" placement="bottom" delay={{ show: 200, hide: 100 }}
            overlay={
                <Popover id="popover-basic">
                    <Popover.Title as="h3">{props.title}</Popover.Title>
                    <Popover.Content>
                        {props.content}
                    </Popover.Content>
                </Popover>
            }>
            {props.children}
        </OverlayTrigger>
    )
}

export default OverlayPopover