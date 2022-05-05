import classes from './styles/xplore.module.css'
import Banner from './xplorecomp/banner'
import Section from './xplorecomp/sec'
import booksLib from '../pages/api/booksLib'

import * as MdIcons from 'react-icons/md'
import { useState } from 'react'

function Xplore() {

  const [showSummary, setshowSummary] = useState(false)
  const [showDownload, setshowDownload] = useState(false)
  const [title, settitle] = useState('')
  const [sum, setsum] = useState('')


  const showSummaryComp = (val) => {
    setshowSummary(!showSummary)
    booksLib.map(book => {
      if(book.id == val) {
        return settitle(book.title), setsum(book.summary)
      }
    })
  }
  
  const showDownloadComp = (val) => {
    setshowDownload(!showDownload)
   
  }
  return (
    <div className={classes.xplore}> 
        <Banner />
        <div className={classes.secdiv}>
          <Section showSum={showSummaryComp} showDown={showDownloadComp} />

            {showSummary && 
              <div className={classes.summary} onClick={showSummaryComp} >
                <div className={classes.con}>
                  <div className={classes.actions}>
                    <h2>{title}</h2>
                    <MdIcons.MdCancel className={classes.icon} onClick={showSummaryComp} />
                  </div>
                  <p>
                    {sum}
                  </p>
                </div> 
              </div>
            }

            {showDownload &&
              <div className={classes.download}>
                <div className={classes.con}>
                <div className={classes.cancel}>
                  <MdIcons.MdCancel className={classes.icon} onClick={showDownloadComp} />
                </div>
                  <h2>Download Book</h2>
                  <input type='text' id='downloadTitle' className={classes.name} placeholder='Enter preferred title name' />
                  <div className={classes.radio}>
                    <div>
                      <input value={"epub"} id='epub' className={classes.radiobtn} type="radio" name='type' />
                      <label htmlFor='epub'>EPub </label>
                    </div>
                    <div>
                      <input value={"pdf"} id='pdf' className={classes.radiobtn} type="radio" name='type' />
                      <label htmlFor='pdf'>PDF</label>
                    </div>
                    
                    
                  </div>
                  <div className={classes.btncon}>    
                    <div className={classes.submit} onClick={showDownloadComp} > Download </div>
                  </div>
                </div> 
              </div>
            }

          </div>
    </div>
  )
}

export default Xplore