import React from 'react';
import './Reset.css';
import './Portfolio.css';
import findMyPets from '../images/Project2.png';
import travelGuide from '../images/Project1.png'
import textEditor from '../images/pic1 copy.png';
import techBlog from '../images/TechBlog.png';
import regex from '../images/regexT.jpeg';
import SNapi from '../images/SNAPI.png';

function Portfolio() {
    return (
        <div>
            <div class="body1">
                <div class="allimages">
                    <div class="imagebox">
                        <a href="https://protected-shelf-14357.herokuapp.com/"><img src={findMyPets} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Pet Finder</h2>
                            <p>Full Stack App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://skruphold.github.io/Project-1/"><img src={travelGuide} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Travel Guide - Columbus</h2>
                            <p>Front End App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://shielded-escarpment-21478.herokuapp.com/"><img src={techBlog} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Tech Blog</h2>
                            <p>Full Stack App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://grammar-genius.herokuapp.com/"><img src={SNapi} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Social Network API</h2>
                            <p>Back End App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://workboard-uofm-proj2.herokuapp.com/login"><img src={textEditor} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Text Editor</h2>
                            <p>Back End App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://gist.github.com/JunoNguyen/c5a514447dae2c279ec8c1fe81da3942"><img src={regex} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Regex Tutorial</h2>
                            <p>Git Pages</p>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <h2>
                        Created by Bradley Meyer
                    </h2>
                    <p>
                        &copy; 2022 Bradley Meyer
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;