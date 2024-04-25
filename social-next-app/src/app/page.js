'use client';
import '../../styles/global.css';
import React from 'react';
import Image from 'next/image';

// import platformList from './platforms';

// import styles from './style.module.css';
import './style.css';
import linkedinPic from '../../../assets/images/linkedinPic.jpeg';
// assets / images / linkedinPic.jpeg;
const page = () => {
  const platformList = ['linkedin', 'github', 'portfolio', 'gmail'];
  return (
    <div className='flexParent'>
      <div className='flexContainer'>
        <div>
          <Image src={linkedinPic} alt='profile picture' className='image' />
        </div>
        <div className='intro'>
          <div className='name'>Vishak</div>
          <div className='greenText'>Santa Clara, USA</div>
        </div>
        <div className='name'>Software Engineer</div>

        <a href='https://github.com/Vishakhavel' target='_blank'>
          <div className='flexItem'>github</div>
        </a>
        <a
          href='https://www.linkedin.com/in/vishakhavel-shanmuganathan-376b44197/'
          target='_blank'
        >
          <div className='flexItem'>linkedin</div>
        </a>
        <a href='https://leetcode.com/vichu2grand/' target='_blank'>
          <div className='flexItem'>leetcode</div>
        </a>
        <a href='https://codeforces.com/profile/vishakhavel' target='_blank'>
          <div className='flexItem'>codeforces</div>
        </a>
        <a
          href='https://www.youtube.com/channel/UCNSfx1qzCsNYbvowYxBURtQ'
          target='_blank'
        >
          <div className='flexItem'>youtube</div>
        </a>
      </div>
    </div>

    // </div>
  );
};

export default page;
