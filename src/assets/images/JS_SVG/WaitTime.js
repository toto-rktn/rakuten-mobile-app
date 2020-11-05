import React from 'react'

const WaitTime = (props) => {
    const svgStyle = {
        enableBackground: "new 0 0 512.001 512.001",
        fill: props.color,
        width: props.size
    }

    return (
        <svg id="Layer_4" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" 
            width="512" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
            <path d="m20.094 6.819 1.613-1.612c.391-.39.391-1.023 0-1.414s-1.023-.391-1.414 0l-1.613 1.612c-1.574-1.301-3.535-2.151-5.68-2.354v-1.051h2c.553 0 1-.448 1-1s-.447-1-1-1h-6c-.553 0-1 .448-1 1s.447 1 1 1h2v1.051c-5.322.505-9.5 4.997-9.5 10.449 0 5.79 4.71 10.5 10.5 10.5s10.5-4.71 10.5-10.5c0-2.536-.904-4.864-2.406-6.681zm-4.494 11.481c-.18.135-.391.2-.599.2-.304 0-.604-.138-.801-.4l-3-4c-.13-.173-.2-.383-.2-.6v-5.5c0-.553.448-1 1-1s1 .447 1 1v5.167l2.8 3.733c.331.442.242 1.069-.2 1.4z"/>
            </svg>
    )
}

export default WaitTime