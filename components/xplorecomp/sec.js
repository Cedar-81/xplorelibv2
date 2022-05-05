import classes from '../styles/xplorestyles/sec.module.css'
import Card from './card'
import booksLib from '../../pages/api/booksLib'

import {useEffect, useState } from 'react'

function Section({showSum, showDown}) {

  const [bookli, setbookli] = useState([])

  useEffect(() => {
    // async function getBooks() {
    //   const books = await fetch('/api/book', {method:'GET'})
    //   console.log(books)
    // }
    // getBooks()
    const books = booksLib
    // const [count, setcount] = useState(0)
    let count = 0
    
    
    setbookli( books.map( book => {
            count += 1
            if(count <= 5) {
  
              return (
                <Card bookval={{
                  key: book.id,
                  title: book.title,
                  rating: book.rating,
                  price: book.price,
                  author: book.author,
                  img: book.img
                }} showSum={showSum} showDown={showDown} />        
                )
  
              }else if (count == 6) {
                return
              }
                
            }
    )
    )
    
    
  }, [] )
  


    

  return (
    <>

      <div className={classes.con}>

        <div className={classes.head}>
          <h2 className={classes.sectitle}>Newest</h2>
        </div>
        
        <div className={classes.outercon}>
          <div className={classes.cardcon}>
            <div className={classes.innercon}>
              {bookli}

            </div>
          </div>

        </div>
        
      </div>

      <div className={classes.con}>

        <div className={classes.head}>
          <h2 className={classes.sectitle}>Bestsellers</h2>
        </div>
        
        <div className={classes.outercon}>
          <div className={classes.cardcon}>
            <div className={classes.innercon}>
              {bookli}

            </div>
          </div>

        </div>
        
      </div>

      <div className={classes.con}>

        <div className={classes.head}>
          <h2 className={classes.sectitle}>Award Winning </h2>
        </div>
        
        <div className={classes.outercon}>
          <div className={classes.cardcon}>
            <div className={classes.innercon}>
              {bookli}

            </div>
          </div>

        </div>
        
      </div>

      <div className={classes.con}>

        <div className={classes.head}>
          <h2 className={classes.sectitle}>In Demand </h2>
        </div>
        
        <div className={classes.outercon}>
          <div className={classes.cardcon}>
            <div className={classes.innercon}>
              {bookli}

            </div>
          </div>

        </div>
        
      </div>

    </>
  )
}

export default Section