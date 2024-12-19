const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-dark-100 mb-8">Contact Us</h1>
      <form className="space-y-6">
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
        <div>
          <label
            htmlFor="message"
            className="block text-dark-200 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 
            text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 
            focus:border-transparent placeholder-dark-400"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-primary-600 text-white rounded-lg 
          hover:bg-primary-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
