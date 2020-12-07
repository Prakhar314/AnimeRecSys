import { React } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'


function Chip({ text, tooltip, color }) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {tooltip}
        </Tooltip>
    );

    const textSp = (<span style=
        {{
            display: "inline-block",
            padding: "0 14px",
            margin: "2px",
            height: "32px",
            lineHeight: "30px",
            borderRadius: "25px",
            backgroundColor: color || "#F1F35B",
            boxShadow: "0px 2px 10px -10px black",
            color: "rgba(20,20,20,0.25)",
            fontWeight: "700"
        }}>
        {text}
    </span>)

    return (
        tooltip == null ?
            <span>{textSp}</span>
            :
            <OverlayTrigger
                placement="right"
                delay={{ show: 150, hide: 150 }}
                overlay={renderTooltip}
            >
                {textSp}
            </OverlayTrigger>
    )
}

export default Chip
