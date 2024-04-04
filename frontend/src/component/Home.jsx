import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Style.css';
import { FiHome, FiUpload, FiClock, FiCloud } from 'react-icons/fi';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function CarouselWithImages() {
  return (
    <div>
    <Carousel data-bs-theme="dark" interval={4000}>
      <Carousel.Item>
        <img
           className="d-block w-100 carousel-image"
          src="/assets/image1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1 className='text-warning'>Welcome to File Management System!</h1>
          <p className="text-white">It is a software tool designed to facilitate the organization, storage, retrieval, manipulation, and sharing of digital files and documents within an organization or on a computer system. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/assets/image2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className='text-warning'>Welcome to File Management System!</h1>
          <p className="text-white">It is a software tool designed to facilitate the organization, storage, retrieval, manipulation, and sharing of digital files and documents within an organization or on a computer system. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block w-100 carousel-image"
          src="/assets/image3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className='text-warning'>Welcome to File Management System!</h1>
          <p className="text-white">It is a software tool designed to facilitate the organization, storage, retrieval, manipulation, and sharing of digital files and documents within an organization or on a computer system. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <section>
    <div className="text-justify">
      <div className="container d-flex justify-content-center p-4">
          <h1 className='font-weight-bold text-warning'>About</h1>
           
      </div>
      <div className="container p-2">
      <div className="row ">
        <div className="col-md-6">
          <img src="/assets/about.png" alt="about" className="img-fluid image"/>
        </div>
        <div className="col-md-6 my-auto text-secondary">
        <p className="custom-font-size">
      Our File Management System (FMS) is a robust platform designed to efficiently organize, store, and manage your files and documents. With intuitive features and user-friendly interface, FMS streamlines file organization and enhances productivity for individuals and businesses alike.
        </p>
        <p className="custom-font-size">
      FMS offers advanced functionalities such as file categorization, version control, access permissions, and collaboration tools, allowing users to effectively collaborate on projects and securely share files within teams or with external stakeholders.
        </p>
    
        </div>
      </div>
    </div>
      </div>
    </section>

    <section>
    <div className="text-justify">
      <div className="container d-flex justify-content-center p-4">
          <h1 className='font-weight-bold text-warning'>Services</h1>
          </div>
  <div class="container p-2">
    <div class="row">
      <div class="col-md-3">
      <div className="card
      ">
          <FiHome size={75} color="white" />
          <div class="card-body">
            <h4 class="card-title">Dashboard</h4>
            <p class="card-text text-white">
             It allows users to monitor and track various aspects of their data or operations in real-time, enabling informed decision-making.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
        <FiUpload size={75} color="white" />
          <div class="card-body">
            <h4 class="card-title">File Handling</h4>
            <p class="card-text text-white">
            The file handling service facilitates the management and manipulation of files, including uploading, downloading, organizing, and editing.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
        <FiCloud size={75} color="white" />
          <div class="card-body">
            <h4 class="card-title">Cloud Storage</h4>
            <p class="card-text text-white">
            It offers scalability, accessibility from anywhere with an internet connection, and often includes features like automatic backups, file synchronization, and collaboration tools.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
        <FiClock size={75} color="white" />
          <div class="card-body">
            <h4 class="card-title">Tracking</h4>
            <p class="card-text text-white">
            The tracking service provides version history tracking, allowing users to monitor changes made to files or documents over time. It helps users keep track of edits, revisions, and updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>


    <MDBFooter bgColor='light' className='mt-5 text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
  <div className='me-lg-5 d-none d-lg-block'>
    <span>Get connected with us on social networks:</span>
  </div>

  
  <div className="d-flex align-items-center">
    <a href="#" className="text-warning me-lg-4">
      <FaFacebook className="icon" />
    </a>
    <a href="#" className="text-warning me-lg-4">
      <FaTwitter className="icon" />
    </a>
    <a href="#" className="text-warning me-lg-4">
      <FaInstagram className="icon" />
    </a>
    <a href="#" className="text-warning">
      <FaLinkedin className="icon" />
    </a>
  </div>
</section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h4 className='text-uppercase fw-bold mb-4'>
                File Management System
              </h4>
              <p>
              <img
            src="/assets/fmslogo.png" 
            alt="FMS Logo"
            className="d-inline-block"
            width="175"
            height="125"
          />
              </p>
            </MDBCol>
            
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-warning'>Company</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-warning'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Dashboard
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  File Handling
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Cloud Storage
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  History Tracking
                </a>
              </p>
            </MDBCol>

           

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-warning'>Contact</h6>
              <p>
                <FaMapMarkerAlt className='footer me-5' />
                43, Railway Station Road, Batticaloa, Sri Lanka
              </p>
              <p>
                <FaEnvelope className='footer me-5' />
                info@amirda.lk
              </p>
              <p>
                <FaPhone className='footer me-5' /> + 94 774 567 88
              </p>
              <p>
                <FaPhone className='footer me-5' /> + 94 764 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright :
        <a className='text-reset fw-bold' href='https://www.amirda.lk/'>
        amirda.lk
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}

export default CarouselWithImages;
