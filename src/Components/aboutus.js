import React from 'react';
import '../Styles/aboutus.css';

function AboutUs() {
  const teamMembers = [
    {
      name: 'Maiya',
      role: 'x',
      bio: 'x',
    },
    {
      name: 'Fam',
      role: 'x',
      bio: 'x',
    },
    {
      name: 'Cebo',
      role: 'x',
      bio: 'x',
    },
  ];

  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p><strong>Role:</strong> {member.role}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
