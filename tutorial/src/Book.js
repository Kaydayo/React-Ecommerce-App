import React from 'react'

const Book = ({ img, title, author }) => {

    const clickHandler = () => {
        alert('kara')
    }

    const complexExample = (author) => {
        console.log(author)
    }

    return (
        <article className="book">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button onClick={() => { clickHandler() }}>click</button>
            <button onClick={() => complexExample(author)}>click</button>
        </article>
    )
}

export default Book
