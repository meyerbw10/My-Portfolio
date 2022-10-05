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
            <div class="bodyMain2 text-white">
                <div class="allimages">
                    <div class="imagebox">
                        <a href="https://find-my-pets.herokuapp.com/"><img src={findMyPets} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2 class= "imageB">Pet Finder</h2>
                            
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://github.com/Galdronis/Travel-Guide"><img src={travelGuide} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Travel Guide - Columbus</h2>
                            
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://github.com/meyerbw10/Tech-Blog"><img src={techBlog} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Tech Blog</h2>
                            
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://github.com/meyerbw10/Social-Network-API"><img src={SNapi} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Social Network API</h2>
                           
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://github.com/meyerbw10/Text-Editor"><img src={textEditor} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Text Editor</h2>
                            
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://github.com/meyerbw10/Regex-Tutorial"><img src={regex} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Regex Tutorial</h2>
                            
                        </div>
                    </div>
                </div>
                <div class="footer text-black">
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