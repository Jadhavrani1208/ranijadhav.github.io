// Verified contact + social info, sourced directly from Rani's resume.
export const profile = {
  name: 'Rani Jadhav',
  role: 'Java Developer',
  tagline: 'Spring Boot · REST APIs · SQL',
  location: 'Pune, Maharashtra',
  email: 'jadhavrani1208@gmail.com',
  phone: '+91 8262891794',
  github: 'https://github.com/Jadhavrani1208',
  linkedin: 'https://linkedin.com/in/rani-jadhav-8624a231',
  resumeUrl: '/Rani_Jadhav_Java_Developer_Resume.pdf',
};

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: 'Github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'Linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'Mail' },
];
