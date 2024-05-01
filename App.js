import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NewBlogForm from './components/NewBlogForm'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home',
      showNewBlogForm: false,
    }
  }

  changePage = (page) => {
    this.setState({ page })
  }

  toggleNewBlogForm = () => {
    this.setState((prevState) => ({
      showNewBlogForm: !prevState.showNewBlogForm,
    }))
  }

  render() {
    const { page, showNewBlogForm } = this.state

    let currentPage
    switch (page) {
      case 'home':
        currentPage = <Home />
        break
      case 'about':
        currentPage = <About />
        break
      case 'contact':
        currentPage = <Contact />
        break
      default:
        currentPage = <Home />
    }

    return (
      <div className="App">
        <header>
          <h1>My Blog</h1>
          <nav>
            <ul>
              <li>
                <button
                  className={page === 'home' ? 'active' : ''}
                  onClick={() => this.changePage('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={page === 'about' ? 'active' : ''}
                  onClick={() => this.changePage('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className={page === 'contact' ? 'active' : ''}
                  onClick={() => this.changePage('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </header>
        {showNewBlogForm && <NewBlogForm />}
        {currentPage}
      </div>
    )
  }
}

export default App
