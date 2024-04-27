// components/Home.js

// All.js

import React from 'react';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import CareerAs from './CareerAs';
import './home.css';

function All() {
  return (
    <div>
      <h2 className="all-courses-heading">All Courses</h2>
      <div className="course-container">
        <FullStackDevelopment />
        <DataScience />
        <CyberSecurity />
        <CareerAs />
      </div>
    </div>
  );
}

export default All;
