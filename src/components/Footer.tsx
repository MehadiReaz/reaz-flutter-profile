import React from 'react';
const Footer = () => {
  return <footer className="py-8 px-4 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Mehadi Hasan Reaz. All rights reserved.</p>
        
        <div className="mt-4">
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">Experience</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">Skills</a>
            </li>
            <li>
              <a href="#education" className="hover:underline">Education</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>;
};
export default Footer;