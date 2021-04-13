
import React, { } from 'react';

function Reset(props) {

  function onResetDefault(){
    props.onSettingDefault(true);
  }
  return (
    <button type="button" className="btn btn-success" onClick={onResetDefault}>Reset</button>

  );
}

export default Reset;
