export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "Community Health Initiative",
      logo: "🏥",
      description: "Healthcare partner for rural medical camps"
    },
    {
      id: 2,
      name: "Education First Foundation",
      logo: "📚",
      description: "Partner in educational programs for children"
    },
    {
      id: 3,
      name: "Water Conservation Trust",
      logo: "💧",
      description: "Collaborator in Jal Jeevan water projects"
    },
    {
      id: 4,
      name: "Rural Development Society",
      logo: "🏘️",
      description: "Partner in village development initiatives"
    },
    {
      id: 5,
      name: "Women Empowerment Network",
      logo: "👩‍💼",
      description: "Collaborator in gender equality programs"
    },
    {
      id: 6,
      name: "Disaster Response Team",
      logo: "🚨",
      description: "Partner in emergency relief operations"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with dedicated organizations and individuals who share our vision 
            for a better, more equitable future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {partner.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {partner.description}
              </p>
              
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Become Our Partner
            </h3>
            <p className="text-gray-600 mb-6">
              Are you an organization or individual who wants to make a difference? 
              Let's collaborate to create lasting positive change in communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg">
                Partner With Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
