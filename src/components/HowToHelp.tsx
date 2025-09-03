export default function HowToHelp() {
  const helpOptions = [
    {
      id: 1,
      title: "Partner",
      description: "Join hands with us to create lasting impact in communities",
      icon: "🤝",
      buttonText: "Become a Partner",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Volunteer",
      description: "Share your time and skills to help those in need",
      icon: "❤️",
      buttonText: "Join as Volunteer",
      color: "from-red-500 to-red-600"
    },
    {
      id: 3,
      title: "Donate",
      description: "Your donation will help us save and improve lives with research, education and emergency care",
      icon: "💰",
      buttonText: "Donate Now",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How you can help?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your contribution, no matter how small, can make a significant difference in someone's life. 
            Choose the way that works best for you to support our mission.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {helpOptions.map((option) => (
            <div key={option.id} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {option.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {option.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>
              
              <button className={`bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 w-full`}>
                {option.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Every Contribution Matters
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you choose to donate, volunteer, or partner with us, your support helps us continue our work 
              in fighting poverty, gender inequality, and building a sustainable future for all.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
