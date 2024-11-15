import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
    <section id="services" className=" services-section py-16 bg-gradient-to-br from-orange-200 via-sky-800 to-pink-400 bg-opacity-60">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service-card p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <FaCode size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Web Development</h3>
            <p className="mt-4 text-gray-600">
              Building responsive, high-performance websites with modern frameworks.
            </p>
          </div>
          {/* Service 2 */}
          <div className="service-card p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <FaPaintBrush size={40} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">UI/UX Design</h3>
            <p className="mt-4 text-gray-600">
              Crafting visually appealing, user-centered designs for digital experiences.
            </p>
          </div>
          {/* Service 3 */}
          <div className="service-card p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <FaMobileAlt size={40} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">Mobile Development</h3>
            <p className="mt-4 text-gray-600">
              Creating mobile-friendly applications that work seamlessly across devices.
            </p>
          </div>
          
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;
