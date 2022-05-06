import classes from '../styles/xplorestyles/banner.module.css'

import {useEffect, useState} from 'react'

function Banner() {

    const [video, setvideo] = useState()

    useEffect(() => {
        setvideo(<source src="/assets/bckvid.mp4" type='video/mp4'  />)
    }, [])
  return (
    <div className={classes.banner}>
        <div className={classes.img}></div>
        <div className={classes.txt} >
            <h1>Xplore a Plathera of Knowledge</h1>
        </div>
        <div className={classes.videocon}> 
            <div className={classes.txt} >
                <h1><b>Xplore a Plathera of Knowledge</b></h1>
            </div>
            <video autoPlay loop muted disablePictureInPicture>
                {video}
                Your browser does not support video tag
            </video>
        </div>
    </div>
  )
}

export default Banner