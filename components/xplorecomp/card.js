import { useState, useEffect } from 'react'

import classes from '../styles/xplorestyles/card.module.css'

import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import img1 from '../../public/assets/bckimg2.jpg'


function Card({bookval, showSum, showDown}) {



  const [val, setVal] = useState('')
  const [detailcard, setdetailCard] = useState({display: 'block'})
  const [actioncard, setactionCard] = useState({display: 'none'})
  const [cartitemTotal, settcarditemTotal ] = useState(0)

  function hover() {
    setdetailCard({display:'none'})
    setactionCard({display:'block'})
  }
  
  function unhover() {
    setactionCard({display:'none'})
    setdetailCard({display:'block'})
  }

  function handleCart() {
    settcarditemTotal(cartitemTotal + 1)
    alert('1 item added to cart')
  }

  function handleBookmark() {
    alert('Bookmarked')
    
  }


  function cliptxt(txt) {
    if(txt && txt.length > 30) {
      let newval = ''
      for(let i=0; i < txt.length; i++){
        newval += txt[i]
        if(i == 30) { 
          newval = newval + '...' 
          break
        }
      }
      setVal(newval)
    } else {
      setVal(txt)
    }
}

  useEffect(() => {
    cliptxt(bookval?.title)
  
  }, [])



  const ratingli = []

  if(bookval) {
  for(let i=0; i < bookval.rating ; i++) {
                    
    ratingli.push(<AiIcons.AiFillStar className={classes.icon} />)              
  }

  }



  return (
    <>
      <div className={classes.card} style={detailcard} onMouseEnter={hover} >
          <div className={classes.imgcon}><img src={bookval?.img.src} alt={"cardimg"} /> </div>
          <div className={classes.cardbody}>
              <h3 id='title'>{val}</h3>
              <h4> <span>Author: </span>{bookval?.author}</h4>
              <h4><span>Price: $</span>{bookval?.price}</h4>
              <div className={classes.rating}>
                {
                  ratingli
                }           
              </div>

          </div>
      </div>  

      <div className={classes.cardhovercon} style={actioncard}  onMouseLeave={unhover} >

        <div className={classes.cardhover}>
          <div className={classes.sec}>
            <AiIcons.AiOutlineDownload className={classes.icon} onClick={() => showDown(bookval?.key)} />              
            <MdIcons.MdOutlineSummarize className={classes.icon} onClick={() => showSum(bookval?.key)} />              
          </div>
          <div className={classes.sec2}>
            <AiIcons.AiOutlineShoppingCart onClick={handleCart} className={classes.icon} />              
            <MdIcons.MdOutlineBookmark onClick={handleBookmark} className={classes.icon} />                
          </div>

        </div>   
        
        {/* <div className={classes.viewmore}><AiIcons.AiOutlineMore className={classes.more} /></div> */}
      
      </div>
    </>

  )
}

export default Card