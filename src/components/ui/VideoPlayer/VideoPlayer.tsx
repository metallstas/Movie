import { useEffect, useState } from "react"

import styles from './VideoPlayer.module.css'

const VideoPlayer = () => {
    const [scriptHtml, setScriptHtml] = useState<string>('')

    useEffect(() => {
        const dataUrl = window.location.href
        const expression = /<iframe.*<\/iframe>/gm
        fetch(`//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=&players=videocdn,hdvb,bazon,alloha,ustore,kodik,trailer,torrent&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=${dataUrl}`)
            .then(res => res.text())
            .then((data) => {
                const m = data.match(expression)
                if (m) {
                    setScriptHtml(m[1])
                }
            })
    }, [])

  return (
    <div 
        className={`uitools ${styles.video}`} 
        id='videoplayers'
        dangerouslySetInnerHTML={{__html: scriptHtml}}></div>
  )
}

export default VideoPlayer
