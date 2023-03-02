import React from 'react'
import Card  from './Card/Card'
import './Card/Card.css'

function ListCards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
    {/*   {
        data.map(item=>(
          <li key={item.id}>
              <Link to={``}>
                <Card {...item}>

                </Card>
              </Link>
          </li>
        ))
      } */}

      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
              <button><i className="fa-sharp fa-solid fa-play"></i></button>
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>
      <div className='card'>
        <div className='content'>
            <div className='imagen'>
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/electronic-music-album-cover-animated-design-template-d1cc77c6d34c507a1e643ef978db62b0_screen.jpg?ts=1622223862" alt="" />
            </div>
            <div className='info'>
              <div className='title'>
                  <h3>Title</h3>
              </div>
              <div className='names'>
                <p>Names..</p>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default ListCards