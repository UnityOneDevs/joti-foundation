export default function WhatsNew() {
  const newsItems = [
    {
      id: 1,
      title: "New Eye Care Initiative Launched",
      description: "We've started a new program to provide eye care to children in rural areas...",
      date: "July 15, 2025",
      category: "Health",
      icon: "👁️"
    },
    {
      id: 2,
      title: "Community Water Project Success",
      description: "Our Jal Jeevan project has successfully provided clean water to 5 villages...",
      date: "July 10, 2025",
      category: "Water",
      icon: "💧"
    },
    {
      id: 3,
      title: "Volunteer Recognition Program",
      description: "We're launching a new program to recognize and reward our dedicated volunteers...",
      date: "July 5, 2025",
      category: "Volunteer",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What's New
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest initiatives, achievements, and community impact stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Follow Our Journey
            </h3>
            <p className="text-gray-600 mb-6">
              Get real-time updates on our social media platforms and stay connected with our mission
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                View on Instagram
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                View on Time
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
