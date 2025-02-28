import React from 'react'
import { icon } from '../utility/icon'

const RotateScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={icon.rotate}
        alt="Rotate your phone"
        style={{ width: "50%", marginBottom: "1rem" }}
      />
    </div>
  )
}

export default RotateScreen