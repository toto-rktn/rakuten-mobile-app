import React from 'react'

const VoiceMail = (props) => {
    const svgStyle = {
        enableBackground: "new 0 0 512.001 512.001",
        fill: props.color,
        width: props.size
    }

    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	        viewBox="0 0 242.789 242.789" style={svgStyle} xmlSpace="preserve">
            <path d="M185.789,64.395c-31.43,0-57,25.57-57,57c0,9.763,2.471,18.959,6.815,27h-28.418c4.344-8.041,6.814-17.237,6.814-27
                c0-31.43-25.57-57-57-57s-57,25.57-57,57c0,30.77,24.511,55.906,55.03,56.95v0.05h132.729v-0.05
                c30.52-1.044,55.03-26.181,55.03-56.95C242.789,89.965,217.219,64.395,185.789,64.395z M57,148.395c-14.888,0-27-12.112-27-27
                s12.112-27,27-27s27,12.112,27,27S71.888,148.395,57,148.395z M185.789,148.395c-14.888,0-27-12.112-27-27s12.112-27,27-27
                c14.888,0,27,12.112,27,27S200.677,148.395,185.789,148.395z"/>
        </svg>
    )
}

export default VoiceMail