import React from 'react'
import Image1 from '../images/image1.jpeg'
import Image2 from '../images/image2.jpeg'
import Image3 from '../images/image3.jpg'
import Image4 from '../images/image4.jpg'
import Image5 from '../images/image5.jpeg'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newBlog: {
        title: '',
        image: '',
        author: '',
        content: '',
        date: new Date(),
      },
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState((prevState) => ({
      newBlog: {
        ...prevState.newBlog,
        [name]: value,
      },
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // Add the new blog to the thumbnail list
    const newThumbnail = (
      <div className="thumbnail">
        <h2>{this.state.newBlog.title}</h2>
        <img src={this.state.newBlog.image} alt={this.state.newBlog.title} />
        <p>
          Author: {this.state.newBlog.author} | Date:{' '}
          {this.formatDate(this.state.newBlog.date)}
        </p>
        <p>{this.state.newBlog.content}</p>
      </div>
    )
    const thumbnailList = document.querySelector('.thumbnail-list')
    thumbnailList.prepend(newThumbnail)
    // Clear the form
    this.setState({
      newBlog: {
        title: '',
        image: '',
        author: '',
        content: '',
        date: new Date(),
      },
    })
  }

  formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en-US', options)
  }

  render() {
    return (
      <div>
        <div className="poetry-blog">
          <h2>Poetry Blog: Sky</h2>
          <div className="center-blog">
            <div>
              <img src={Image1} alt="Sky" />
            </div>
          </div>

          <p>Author: Biraj | Date: {this.formatDate(Date.now())}</p>
          <p>
            As the sun sets, painting the sky with hues of orange and pink, I
            find solace in the vastness of the heavens above. The clouds, like
            cotton candy, drift lazily by, And for a moment, all the worries of
            the world seem to fade away. I am but a speck in this vast expanse,
            Yet, somehow, I feel connected to it all. The beauty of the sky
            reminds me That there is still magic in the world, If only we take
            the time to look.
          </p>
        </div>
        <div className="image-list">
          <div className="thumbnail-list">
            <div className="thumbnail">
              <h2>New York City Pollution</h2>
              <img src={Image2} alt="New York City" />
              <p>Author: Sahil | Date: {this.formatDate(Date.now())}</p>
              <p>
                New York City is facing a pollution crisis. The air quality is
                so poor that residents are advised to stay indoors. The streets
                are choked with traffic, and factories belch smoke into the sky.
              </p>
            </div>
            <div className="thumbnail">
              <h2>London Adventures</h2>
              <img src={Image3} alt="London" />
              <p>Author: Thomas | Date: {this.formatDate(Date.now())}</p>
              <p>
                London is a city of adventure. From the bustling streets of Soho
                to the peaceful parks of Hampstead Heath, there's something for
                everyone to enjoy.
              </p>
            </div>
            <div className="thumbnail">
              <h2>Beach Bliss</h2>
              <img src={Image4} alt="Beach" />
              <p>Author: Mahima | Date: {this.formatDate(Date.now())}</p>
              <p>
                There's nothing quite like a day at the beach. The sun, the
                sand, the surf—it's the perfect way to relax and unwind.
              </p>
            </div>
            <div className="thumbnail">
              <h2>Into the Forest</h2>
              <img src={Image5} alt="Forest" />
              <p>Author: Aditi | Date: {this.formatDate(Date.now())}</p>
              <p>
                Into the forest I wonder, away the world I left behind. I find
                myself, even though I seek what not but myself.
              </p>
            </div>
          </div>
        </div>

        {/* Form to create a new blog */}
        <div className="new-blog-form">
          <h2>Create a New Blog</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.newBlog.title}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="image">Image URL:</label>
            <input
              type="url"
              id="image"
              name="image"
              value={this.state.newBlog.image}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={this.state.newBlog.author}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={this.state.newBlog.content}
              onChange={this.handleChange}
              required
            ></textarea>

            <button type="submit">Create Blog</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home
