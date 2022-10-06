import React from 'react';
import resume1 from '../images/res1.jpeg'
import resume2 from '../images/res2.jpeg'

export default function Resume() {
  return (
    <div class="text-white">
      <h1 class="name text-black">Resume</h1>
      <div>
        <div class="bodyMain">
          <img src= { resume1 } href='https://drive.google.com/file/d/1g2NeUDHItFeqlP8z-wgvQsIxKQcQwsoV/view?usp=sharing'></img>
          <img src= { resume2 } href='https://drive.google.com/file/d/1g2NeUDHItFeqlP8z-wgvQsIxKQcQwsoV/view?usp=sharing'></img>
          <div class="footer">
            <h2>
              Created by <a class='text-white'href='https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTY4MTcwMTMzMDEyMDk2Mzg0/screen_shot_2016-05-28_at_72024_pmpng.png'>B</a>radley Meyer
            </h2>
            <p>
              &copy; 2022 Bradley Meyer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
