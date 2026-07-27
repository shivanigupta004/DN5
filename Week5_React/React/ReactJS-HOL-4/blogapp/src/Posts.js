import React from 'react'
import Post from './Post'

export default class Posts extends React.Component {
  constructor(props){
    super(props)
    this.state = { posts: [], error: null }
    this.loadPosts = this.loadPosts.bind(this)
  }

  async loadPosts(){
    try{
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!resp.ok) throw new Error(`Fetch failed: ${resp.status}`)
      const data = await resp.json()
      this.setState({ posts: data })
    }catch(err){
      this.setState({ error: err })
      // rethrow so componentDidCatch can catch during rendering if needed
      throw err
    }
  }

  componentDidMount(){
    this.loadPosts()
  }

  componentDidCatch(error, info){
    // Log and show alert as requested
    console.error('Posts component error:', error, info)
    alert('An error occurred while loading posts: ' + (error && error.message))
    this.setState({ error })
  }

  render(){
    const { posts, error } = this.state
    if (error) {
      return <div style={{color:'red'}}>Error loading posts.</div>
    }

    return (
      <section style={{maxWidth:900,margin:'16px auto',padding:16}}>
        <h2>Posts</h2>
        {posts.slice(0,10).map(p => (
          <Post key={p.id} title={p.title} body={p.body} />
        ))}
      </section>
    )
  }
}
