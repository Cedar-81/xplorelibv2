import classes from '../styles/bookstorestyles/bbanner.module.css'
import booksLib from '../../pages/api/booksLib'
import genre from '../../pages/api/genre'

import Card from '../xplorecomp/card'
import * as MdIcons from 'react-icons/md'
import { useState, useEffect } from 'react'


function BBanner({showSum, showDown, toggleShowBanner}) {

    const [selectorbol, setselectorbol] = useState(false)
    const [showSelector, setshowSelector] = useState({display : 'none'})
    const [selectedval, setselectedval] = useState('Fiction')
    const [bookli, setbookli] = useState([])
    const [genreval, setgenreval] = useState([])

    const toggle = () => {
        setselectorbol(!selectorbol)
        styleval()
    }
    
    const styleval = () => {
        
        if(selectorbol == true) setshowSelector({display:'flex'})
        else if(selectorbol == false ) setshowSelector({display: 'none'})
        
    }

    const changeSel = (val) => {
        setselectedval(val)

        if(val == 'Fiction') {
            setgenreval(genre.Fiction.map((gen, key) => <li key={key}>{gen}</li> )) 
        } else if (val == 'Non-Fiction') {
            setgenreval(genre.Non_fiction.map((gen, key) => <li key={key}>{gen}</li> )) 
        }
        

    }

    useEffect(() => {
        toggle()

        if(selectedval == 'Fiction') {
            let count = 0
            setgenreval(genre.Fiction.map((gen , key)=> {count += 1; return <li key={key}>{gen}</li>} )) 
        } else if (selectedval == 'Non-Fiction') {
            let count = 0
            setgenreval(genre.Non_fiction.map((gen, key) => {count += 1; return <li key={key}>{gen}</li>} )) 
        }
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
                if(count <= 3) {
    
                return (
                    <Card key={book.id} bookval={{
                    key: book.id,
                    title: book.title,
                    rating: book.rating,
                    price: book.price,
                    author: book.author,
                    img: book.img,
                    }} showSum={showSum} showDown={showDown} />        
                    )
    
                }else if (count == 4) {
                    return
                }
                    
                }
        )
        )
    
    
  }, [] )
  


    return (
    <div className={classes.bbannercon}>
        <div className={classes.bannericoncon}>
            <MdIcons.MdCancel className={classes.icons} onClick={toggleShowBanner} />
        </div>
        
        <div className={classes.bbanner} >
            <div className={classes.selector}>
                <div className={classes.genre} >
                    <div className={classes.selected} onClick={toggle} ><h2>{selectedval}</h2></div> 
                    <div className={classes.selectorli} style={showSelector} >
                        <div className={classes.li} onClick={() => { toggle(); changeSel('Fiction') } }>Fiction</div>
                        <div className={classes.li} onClick={() => { toggle(); changeSel('Non-Fiction') }} >Non-Fiction</div>
                    </div>
                </div>
                <div className={classes.subgenre}>
                    <ul className={classes.subli}>
                        {genreval}
                    </ul>
                </div>
            </div>
            <div className={classes.top}>
                <div className={classes.head}>
                    <h2>Top 3 picks for you</h2>
                </div>
                <div className={classes.con}>
                    {bookli}

                </div>
            </div>
        </div>
    </div>
  )
}

export default BBanner