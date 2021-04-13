
import React, { useState } from 'react';

function ColorPicker(props) {
    const [colors] = useState(['red', 'green', 'blue', '#ccc', '#e6b324b3','#ed90f36e'])

    var elmColors = colors.map((color, index) => {
        return <span key={index}
            style={showColor(color)}
            className={props.color === color ? 'active' : ''}
            onClick={() => setActiveColor(color)}
        ></span>
    })

    function showColor(color) {
        return {
            backgroundColor: color
        };
    }

    function setActiveColor(color) {
        props.onReceiveColor(color);
    }
    return (

        <div className="col-md-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Color Picker</h3>
                </div>
                <div className="panel-body">
                    {elmColors}
                    <hr />
                </div>
            </div>
        </div>



    );
}
export default ColorPicker;