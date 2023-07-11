const About = () => {
  return ( 
    <section data-section id="about" aria-label="About me" className="text-slate-300 text-lg flex flex-col gap-3 mb-24 scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gradient-to-r from-slate-800 to-gray-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="lg:sr-only">About</h2>
      </div>
      <p>
        Experienced web developer with over 11 years of experience in cutting-edge web technologies. Specializing in creating <strong className="text-slate-200 font-bold">exceptional user experiences</strong>, I excel in developing web applications using HTML5, CSS3, and JavaScript, along with frameworks such as <strong className="text-slate-200 font-bold">React JS, Redux, and Angular</strong>. With a strong focus on technical excellence, I am passionate about staying up-to-date with the latest trends and tools in web and mobile development. I am an enthusiastic collaborator with strong <strong className="text-slate-200 font-bold">communication skills</strong> and a solid <strong className="text-slate-200 font-bold">work ethic</strong>, always ready to take on new challenges to contribute to the <strong className="text-slate-200 font-bold">success of the company</strong>.
      </p>
      <p>
        In my free times usually enjoy watch movies in the cinema with my wife and two childs, play video games on my PS4 and watch anime (One Piece fan here <span>😀</span>).
      </p>
    </section>
   );
}
 
export default About;