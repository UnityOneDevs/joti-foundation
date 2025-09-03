export default function PopularCauses() {
  const causes = [
    {
      id: 1,
      title: "Jal Jeevan",
      description: "Malwa region of Punjab is popularly known as the cancer belt of India. One of the major causes for the different types of cancer...",
      icon: "💧",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Clear Vision for Brighter Future",
      description: "We realize the impact low vision has on the learning capacity of a child. Therefore, in an initiative to provide eye care to children...",
      icon: "👁️",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      title: "Disaster Relief",
      description: "In times of natural or man-made disasters, the importance of swift and effective disaster relief cannot be overstated...",
      icon: "🚨",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Causes
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in making a difference through our key initiatives that address critical social challenges
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <div key={cause.id} className={`${cause.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${cause.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {cause.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {cause.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {cause.description}
              </p>
              
              <button className={`bg-gradient-to-r ${cause.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 w-full`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg">
            View All Causes
          </button>
        </div>
      </div>
    </section>
  );
}
