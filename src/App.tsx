import { InstagramLogo, WhatsappLogo } from 'phosphor-react'

import './App.css'

function App() {
  return (
    <div className="App">
      <img src="/images/oh-coco.png" className="logo" alt="Oh!Coco logo" />
      <div className="social">
        <a href="https://www.instagram.com/aguaohcoco/" target="_blank">
          <InstagramLogo weight="fill" className="instagram" />
          aguaohcoco
        </a>
        <a href="https://wa.me/5527992022933" target="_blank">
          <WhatsappLogo weight="fill" className="whatsapp" />
          (27) 99202-2933
        </a>
      </div>
    </div>
  )
}

export default App
