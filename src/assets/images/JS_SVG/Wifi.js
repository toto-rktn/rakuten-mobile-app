import React from 'react'

const wifi = (props) => {
    const svgStyle = {
        enableBackground: "new 0 0 512.001 512.001",
        fill: props.color,
        width: props.size
    }

    return (
        // <?xml version="1.0" encoding="iso-8859-1"?>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512.001 512.001" style={svgStyle} xmlSpace="preserve">
            <g>
                <g>
                    <path d="M303.414,349.413c-26.144-26.145-68.683-26.145-94.827,0c-26.144,26.144-26.144,68.683,0,94.827
                        c13.072,13.072,30.242,19.608,47.413,19.608s34.342-6.536,47.413-19.608C329.558,418.096,329.558,375.557,303.414,349.413z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M410.95,248.834c-85.439-85.438-224.459-85.438-309.897,0c-2.902,2.902-4.533,6.838-4.533,10.942
                        c0,4.104,1.631,8.04,4.533,10.942l47.22,47.22c2.902,2.902,6.838,4.533,10.942,4.533c4.105,0,8.04-1.631,10.943-4.533
                        c22.888-22.888,53.374-35.493,85.842-35.493s62.955,12.605,85.843,35.493c2.902,2.902,6.838,4.533,10.943,4.533
                        c4.104,0,8.04-1.631,10.942-4.533l47.22-47.22c2.902-2.902,4.533-6.838,4.533-10.942
                        C415.483,255.671,413.852,251.736,410.95,248.834z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M507.468,152.315C440.3,85.145,350.993,48.153,256,48.153c-94.992,0-184.298,36.992-251.467,104.162
                        c-6.044,6.044-6.044,15.842,0,21.886l47.22,47.22c6.043,6.044,15.842,6.044,21.886,0c100.555-100.554,264.169-100.554,364.723,0
                        c3.022,3.022,6.983,4.533,10.942,4.533c3.96,0,7.921-1.51,10.942-4.533l47.22-47.22
                        C513.512,168.157,513.512,158.359,507.468,152.315z"/>
                </g>
            </g>
        </svg>
    )
}

export default wifi