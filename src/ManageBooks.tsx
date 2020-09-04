import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link, useParams
  } from "react-router-dom";

  interface Item { 
    title: string;
    author: string;
    cover_image_url: string;
    published_date: string;
    publisher: string;
    isbn: string;
    
    
  }

  interface CopiesItem {

    all:[];
    onLoan: [];
    inactive: [];
  }

export function ManageBooks() {
    const [item, setItem] = useState<Item>({title: 'a', author:'a', cover_image_url: 'b', published_date: 'c', publisher: 'd', isbn: "2"} )
    const [copyItem, setCopyItem] =useState<CopiesItem>({all:[], onLoan:[], inactive: []})
    useEffect(() => {
        
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(json => setItem(json.book))
            
            
    }, [])

    useEffect(() => {
        
      fetch(`http://localhost:3001/books/${id}`)
          .then(response => response.json())
          .then(json => setCopyItem(json.copies))
          console.log(copyItem)
          
          
  }, [])

 
 
   
    let { id } = useParams();
  return <section>
      <h2>Manage Books {id}</h2>
    <div>Title: {item.title}</div>
    <div> Author: {item.author}</div>
  <img src= {item.cover_image_url}></img>
  <div> Published date: {item.published_date}</div>
  <div>Publisher: {item.publisher}</div>
  <div>ISBN: {item.isbn}</div>
  <div> All: {copyItem.all}</div>
  <div> onLoan: {copyItem.onLoan}</div>
  <div> inactive: {copyItem.inactive}</div>
      </section>
  };

