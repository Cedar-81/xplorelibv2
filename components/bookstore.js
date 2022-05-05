import { useState, useEffect } from "react"
import classes from './styles/bookstore.module.css'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import booksLib from '../pages/api/booksLib'

import BBanner from "./bookstorecomp/bbanner"
import Section from "./xplorecomp/sec"
import Card from "./xplorecomp/card"


function Bookstore() {

    const [showBanner, setshowBanner] = useState(true)
    const [showSummary, setshowSummary] = useState(false)
    const [showDownload, setshowDownload] = useState(false)
    const [title, settitle] = useState('')
    const [sum, setsum] = useState('')
    const [bookli, setbookli] = useState([])
    const [calcval, setcalcval] = useState(10)

    const showSummaryComp = (val) => {
        setshowSummary(!showSummary)
        booksLib.map(book => {
        if(book.id == val) {
            return settitle(book.title), setsum(book.summary)
        }
        })
  }
    
    const showDownloadComp = () => {
        setshowDownload(!showDownload)
    }

    const toggleShowBanner = () => setshowBanner(!showBanner)

    const showViewMore = (val) => {
        let count = 0
        setbookli( booksLib.map( (book, key) => {
            count += 1
            if(count <= val) {
    
            return (
                <Card bookval={{
                key: book.id,
                title: book.title,
                rating: book.rating,
                price: book.price,
                author: book.author,
                img: book.img,
                }} showSum={showSummaryComp} showDown={showDownloadComp} />        
                )
    
            }else if (count == val + 1) {
                return
            }
                
            }
        ))
        
    }

    useEffect(() => {showViewMore(calcval)}, [calcval])


    // setbookli( licon )

  return (
    <>
        <div className={classes.bkbanner}>
            <div className={classes.filtercon}>
                <div className={classes.filterinnercon} onClick={toggleShowBanner} >
                    <h3>Filter</h3>
                    <AiIcons.AiFillFilter className={classes.filter} />
                </div>
            </div>
            {showBanner && <BBanner toggleShowBanner={toggleShowBanner} showSum={showSummaryComp} showDown={showDownloadComp} />}
        </div>

        <div className={classes.bksec}>
            <Section key={'bkst'} showSum={showSummaryComp} showDown={showDownloadComp}/>

            <section className={classes.viewmore}>
                <h2>View More Books</h2>
                
                <div className={classes.viewmoreinnercon}>
                    {bookli}                       
                </div>

                <div className={classes.viewmorebtncon}><div onClick={() => setcalcval(calcval + 6) } className={classes.vmbtn}>Show More</div> </div>

            </section>

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
                  <input type='text' className={classes.name} placeholder='Enter preferred title name' />
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
    </>
  )
}

export default Bookstore