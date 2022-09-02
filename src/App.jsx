import { useState } from "react";
import QRCODE from "react-qr-code";
import QRcodeLink from 'qrcode';
import "./App.css";

function App() {

  const [link, setLink] = useState('')
  const [qrCodeLink, setQrCodeLink] = useState('')

  function handleGenerateQrCode(link_url) {
    QRcodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrCodeLink(url)
    })
  }

  function handleQrCode(e) {
    setLink(e.target.value);
    handleGenerateQrCode(e.target.value);
  }

  return (
    <div className="container">
      <h1 className="h1">Gerador de QR code</h1>

      <QRCODE value={link} className="qrcode" />

      <label className="label">Digite seu link aqui !</label>
      <input type="text"
       className="input"
       placeholder="ex: www.google.com" 
      value={link}
      onChange={(e) => handleQrCode(e)}
/>

   <button className="button-29"><a href={qrCodeLink} download={'qrCode.png'}>Baixar QR Code</a></button> 
  
    </div>
  );
}

export default App;
