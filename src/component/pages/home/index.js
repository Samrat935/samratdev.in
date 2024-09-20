import React from "react";
import './home.css';
function HomeLayout() {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Samrat <span>Samanta</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/">Portfolio</a>
                                </li>
                                <li>
                                <a className="nav-link" href="/">Blog</a>
                            </li>

                        </ul>

                    </div>
                    </div>
                </nav>
    </div >
    <div className="container page-content">
        <div className="page-header">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="photo">
                        <img src="https://lmpixels.com/demo/procard/images/photo.png" alt="" />
                    </div>
                   
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <div className="title-block">
                        <h1>Samrat Samanta</h1>
                        <p>Web Developer</p>
                    </div>
                   {/* <div className="social-section">
                        <a href="/"><i className="fa fa-twitter"></i></a>
                        <a href="/"><i className="fa fa-facebook"></i></a>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="page-about-content">
                <div className="row">
                    <div className="col-sm-6 col-ms-6 col-lg-6">
                        <div className="about-me">
                            <div className="title"><h3>About <span>Me</span></h3></div>
                            <p>Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
                        </div>
                        <div className="download-resume">
                            <a href="" className="btn btn-secondary">Download Resume</a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-ms-6 col-lg-6">
                        <ul className="info-list">
                            <li><span className="title">Age</span><span className="value">29</span></li>
                            <li><span className="title">Residence</span><span className="value">USA</span></li>
                            <li><span className="title">Address</span><span className="value">Los Angeles, USA</span></li>
                            <li><span className="title">e-mail</span><span className="value"><a href="mailto:email@example.com">email@example.com</a></span></li>
                            <li><span className="title">Phone</span><span className="value">+0123 123 456 789</span></li>
                            <li><span className="title">Freelance</span><span className="value available">Available</span></li>
                          </ul>
                    </div>
                </div>
        </div>
    </div>
    <footer>
        <div className="copyrights">© 2020 All rights reserved. Material template by LMPixels</div>
      </footer>
        </>
    );
}
export default HomeLayout;