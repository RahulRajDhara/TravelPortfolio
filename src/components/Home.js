import React from 'react';
import background from 'D:/React CodewithHarry/Portfolio/myapp/src/components/Assets/background.JPG'
import profile from 'D:/React CodewithHarry/Portfolio/myapp/src/components/Assets/profile.JPG'
import './Home.css';
export default function Home() {
  return (
   <>
  <div className='container'>
    <section
      className='home-section'
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={profile} alt="Profile" className='profile-img' />
      <div className="social-icons">
        <a href="#" className="text-blue-500 hover:text-blue"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-red-500 hover:text-blue"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-blue-400 hover:text-blue"><i class="fa-brands fa-youtube"></i></a>
        <a href="#" className="text-gray-500 hover:text-blue"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <h1 className="home-title">Rahul Travel Blog</h1>
      <p className="home-title">
      Hi! I’m a curious explorer who loves sharing travel stories, personal insights, and creative passions. On this blog, you’ll find reflections on my adventures, lessons from life, and the things that inspire me every day.


      </p>
    </section>
    </div>
   </>
  )
}
