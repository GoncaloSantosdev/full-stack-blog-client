const About = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-dark-100 mb-8">About Us</h1>
      <div className="prose text-dark-300">
        <p className="text-lg mb-4">
          We are a community of developers sharing knowledge and experiences
          through well-crafted articles and tutorials.
        </p>
        <p className="text-lg">
          Our mission is to make programming knowledge{" "}
          <span className="text-primary-400">accessible to everyone</span>.
        </p>
      </div>
    </>
  );
};

export default About;
