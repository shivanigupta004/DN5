import React from 'react'

export default function Post({ title, body }){
  return (
    <article style={{borderBottom:'1px solid #ddd',padding:'8px 0'}}>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}
