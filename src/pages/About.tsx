import { PageHeader } from "../components";

const About = () => {
  return (
    <div className="space-y-12">
      <PageHeader
        title="About DevBlog"
        description="A community-driven platform for developers to share knowledge,
          experiences, and insights about software development."
      />

      {/* Mission Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-dark-100">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-700/50 p-6 rounded-lg border border-dark-600">
            <h3 className="text-xl font-medium text-primary-400 mb-3">
              Share Knowledge
            </h3>
            <p className="text-dark-300">
              We believe in the power of shared knowledge. Our platform enables
              developers to learn from each other's experiences and grow
              together.
            </p>
          </div>
          <div className="bg-dark-700/50 p-6 rounded-lg border border-dark-600">
            <h3 className="text-xl font-medium text-primary-400 mb-3">
              Build Community
            </h3>
            <p className="text-dark-300">
              Creating a supportive environment where developers can connect,
              collaborate, and help each other succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-dark-100">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "John Doe",
              role: "Founder & Developer",
              image: "bg-dark-600",
            },
            {
              name: "Jane Smith",
              role: "Technical Writer",
              image: "bg-dark-600",
            },
            {
              name: "Mike Johnson",
              role: "Community Manager",
              image: "bg-dark-600",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-dark-700/50 p-6 rounded-lg border border-dark-600 text-center"
            >
              <div
                className={`w-24 h-24 ${member.image} rounded-full mx-auto mb-4`}
              />
              <h3 className="text-lg font-medium text-dark-100">
                {member.name}
              </h3>
              <p className="text-dark-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
