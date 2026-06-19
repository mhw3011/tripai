function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Side */}
      <div className="w-full lg:w-[40%] flex items-center justify-center px-8 py-10 bg-white">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/travel-bg.jpg"
          alt="Travel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-14 text-white">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight"> TripAI</h1>

            <p className="mt-2 text-gray-200">AI-Powered Travel Planner</p>
          </div>

          {/* Bottom Text */}
          <div className="max-w-2xl">
            <h2 className="text-6xl font-bold leading-tight">
              Plan Smarter.
              <br />
              Travel Better.
            </h2>

            <p className="mt-8 text-xl text-gray-200 leading-8">
              Upload flights, hotels and travel bookings and let AI generate
              personalized itineraries tailored to your journey.
            </p>

            <div className="mt-12 flex gap-10 text-gray-200">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p>Trips Planned</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p>Destinations</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">AI</h3>
                <p>Powered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
