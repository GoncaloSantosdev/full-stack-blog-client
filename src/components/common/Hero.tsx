// Components
import { Button } from "..";
// Icons
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-code-blue opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-code-purple opacity-10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container py-20">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="flex items-center space-x-2 bg-code-dark/50 backdrop-blur-sm border border-code-blue/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-code-blue text-sm font-medium">New</span>
            <span className="w-1 h-1 rounded-full bg-code-text-muted" />
            <span className="text-code-text-muted text-sm">
              Check out our latest features
            </span>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-code-text-light mb-6 leading-tight">
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-code-blue to-code-purple">
                Developers
              </span>{" "}
              Share Their Stories
            </h1>
            <p className="text-lg text-code-text-muted mb-8">
              Join our community of developers sharing their knowledge,
              experiences, and insights through engaging blog posts.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button href="/register" size="lg">
                Start Writing
                <FaArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/posts" variant="outline" size="lg">
                Read Posts
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="w-full max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 border-t border-code-dark pt-12">
            {[
              { value: "10K+", label: "Active Writers" },
              { value: "50K+", label: "Articles Published" },
              { value: "120+", label: "Countries" },
              { value: "200+", label: "Topics Covered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-code-blue to-code-purple text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-sm text-code-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
