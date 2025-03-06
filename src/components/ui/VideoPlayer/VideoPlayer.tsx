import { useEffect, useState } from "react"

import styles from './VideoPlayer.module.css'
// import { useGetTrailerQuery } from "../../../services/kinopoiskApi"
// import { useLocation } from "react-router"
//https://hdsrch.com/storage/pcaller-7a1859a6.js?uh=a8ad98cb89116864&kpid=__ИД_КИНОПОИСКА__
const VideoPlayer = () => {
    const [scriptHtml, setScriptHtml] = useState('');
  
    useEffect(() => {
      const dataUrl = window.location.href;
      fetch(
        '//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=&players=videocdn,hdvb,bazon,alloha,ustore,kodik,trailer,torrent&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&hni=HDVB&hti=&hdi=&bni=BAZON&bti=&bdi=&alni=ALLOHATV&alti=&aldi=&usni=USTOREBZ&usti=&usdi=&koni=KODIK&koti=&kodi=&tti=&ru=' +
          dataUrl,
      )
        .then(res => res.text())
        .then(data => {
            const m = data.match(/<iframe.*<\/iframe>/gm)

            if (m) {
                setScriptHtml(m[1])
            }
        }

        );
    }, []);
  
    return (
      <div
        className={`${styles.video} uitools`}
        id="videoplayers"
        dangerouslySetInnerHTML={{ __html: scriptHtml }}
      ></div>
    );
}

export default VideoPlayer
