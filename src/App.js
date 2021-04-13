
import './App.css';
import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

function App() {

  const [colorData, setcolorData] = useState({
    color: 'red',
    fontSize: 12
  }) 

  function onsetColor(params) {
    setcolorData({
      ...colorData,
      color: params
    });
  }

  function onChangeSize(value) {
    if (colorData.fontSize + value >= 8 && colorData.fontSize + value <= 36) {
      setcolorData({...colorData,
        fontSize: colorData.fontSize + value
      });

    }
  }

  function onSettingDefault(value) {
    if (value) {
      setcolorData({
        color: 'red',
        fontSize: 12
      })
    }

  }

  return (
    <div className="container mt-50">
      <div className="row">
        <ColorPicker color={colorData.color} onReceiveColor={onsetColor} />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting
            fontSize={colorData.fontSize}
            onChangeSize={onChangeSize} />
          <Reset onSettingDefault={onSettingDefault} />
        </div>
        <Result
          color={colorData.color}
          fontSize={colorData.fontSize} />
      </div>
    </div>
  );
}

export default App;
