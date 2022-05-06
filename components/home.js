import classes from './styles/home.module.css'
import {useState, useEffect} from 'react'
import Link from 'next/link'


function Home() {

    const [video, setvideo] = useState()

    useEffect(() => {
        setvideo(<source src="/assets/bckvid.mp4" type='video/mp4'  />)
    }, [])

  return (
    <div className={classes.home}>
        <div className={classes.img}></div>
        
        <div className={classes.txt} >
            <h1>Xplore Books</h1>
            <h3>the next generation library</h3>
            <Link href={'/xplore'}><div className={classes.btn}>Xplore</div></Link>
        </div>
        <div className={classes.videocon}> 
            <div className={classes.txt} >
                <h1><b>Xplore Books</b></h1>
                <h3>the next generation library</h3>
                <Link href={'/xplore'}><div className={classes.btn}>Xplore</div></Link> 
            </div>
            <video autoPlay loop muted disablePictureInPicture>
                {video}
                Your browser does not support video tag
            </video>
        </div>
    </div>
  )
}

export default Home