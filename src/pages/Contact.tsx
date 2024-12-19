import { Button } from "../components";

const Contact = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-dark-100">Get in Touch</h1>
        <p className="text-dark-300 text-lg max-w-2xl">
          Have questions or suggestions? We'd love to hear from you. Send us a
          message and we'll respond as soon as possible.
        </p>
      </section>

      {/* Contact Form */}
      <section>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-dark-200 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
                text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
                focus:border-transparent placeholder-dark-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-dark-200 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
                text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
                focus:border-transparent placeholder-dark-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-dark-200 font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
              text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
              focus:border-transparent placeholder-dark-400"
              placeholder="What is this about?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-dark-200 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
              text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
              focus:border-transparent placeholder-dark-400"
              placeholder="Your message here..."
            />
          </div>

          <Button
            type="submit"
            className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg 
            hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 
            focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-800"
          >
            Send Message
          </Button>
        </form>
      </section>

      {/* Additional Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-700/50 p-6 rounded-lg border border-dark-600">
          <h3 className="text-lg font-medium text-dark-100 mb-2">Email</h3>
          <p className="text-primary-400">contact@devblog.com</p>
        </div>
        <div className="bg-dark-700/50 p-6 rounded-lg border border-dark-600">
          <h3 className="text-lg font-medium text-dark-100 mb-2">Follow Us</h3>
          <p className="text-primary-400">@devblog</p>
        </div>
        <div className="bg-dark-700/50 p-6 rounded-lg border border-dark-600">
          <h3 className="text-lg font-medium text-dark-100 mb-2">Location</h3>
          <p className="text-dark-300">San Francisco, CA</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
