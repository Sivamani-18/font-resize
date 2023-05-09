import React from 'react';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <nav className='navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient'>
        <div className='container'>
          <a className='navbar-brand logo' href='/'>
            Brand
          </a>
          <button
            data-bs-toggle='collapse'
            className='navbar-toggler'
            data-bs-target='#navbarNav'
          >
            <span className='visually-hidden'>Toggle navigation</span>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link active' href='/contact'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className='page contact-page'>
        <section className='portfolio-block contact'>
          <div className='container'>
            <div className='heading'>
              <h2>Contact me</h2>
            </div>
            <form>
              <div className='mb-3'>
                <label className='form-label' htmlFor='name'>
                  Your Name
                </label>
                <input className='form-control item' type='text' id='name' />
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='subject'>
                  Subject
                </label>
                <input className='form-control item' type='text' id='subject' />
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='email'>
                  Email
                </label>
                <input className='form-control item' type='email' id='email' />
              </div>
              <div className='mb-3'>
                <label className='form-label' htmlFor='message'>
                  Message
                </label>
                <textarea className='form-control item' id='message'></textarea>
              </div>
              <div className='mb-3'>
                <button
                  className='btn btn-primary btn-lg d-block w-100'
                  type='submit'
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className='page-footer'>
        <div className='container'>
          <div className='links'>
            <a href='#'>About me</a>
            <a href='#'>Contact me</a>
            <a href='#'>Projects</a>
          </div>
          <div className='social-icons'>
            <a href='#'>
              <i className='icon ion-social-facebook'></i>
            </a>
            <a href='#'>
              <i className='icon ion-social-instagram-outline'></i>
            </a>
            <a href='#'>
              <i className='icon ion-social-twitter'></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
