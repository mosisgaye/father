// components/ServiceBlock.tsx
interface ServiceBlockProps {
    title: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    image?: React.ReactNode;
  }
  
  export const ServiceBlock: React.FC<ServiceBlockProps> = ({
    title,
    description,
    features,
    buttonText,
    buttonLink,
    image,
  }) => (
    <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-2xl rounded-2xl p-8 text-center hover:shadow-3xl transition-transform duration-500 transform hover:scale-105">
      {/* Optional Image */}
      {image && (
        <div className="mb-6">
          <div className="rounded-xl overflow-hidden">{image}</div>
        </div>
      )}
  
      {/* Title */}
      <h2 className="text-3xl font-bold mb-4 text-gray-800 tracking-wide">
        {title}
      </h2>
  
      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
  
      {/* Features */}
      <ul className="text-left text-gray-700 mb-8 space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 group transition-colors"
          >
            <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full shadow-md group-hover:bg-blue-600 transition">
              ✔
            </div>
            <span className="text-gray-700 group-hover:text-gray-900 transition">
              {feature}
            </span>
          </li>
        ))}
      </ul>
  
      {/* Call-to-Action Button */}
      <a
        href={buttonLink}
        className="inline-block bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:-translate-y-1"
      >
        {buttonText}
      </a>
    </div>
  );
  