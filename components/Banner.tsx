import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {/* Replace '/images/bebe.jpg' with the path to your image */}
        <Image
          src="/images/bebe.jpg" // Assurez-vous que ce chemin est correct
          alt="Bebe"
          layout="fill" // Permet à l'image de remplir le conteneur
          objectFit="cover" // Maintient le ratio d'aspect
        />
      </div>

      {/* Banner Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-6xl font-bold">
          SCHEIDEN EEN GLIMLACHEND KAKSKE?
        </h1>
        <p className="mt-4 text-lg md:text-xl">Octobre 10, 2024</p>
      </div>
    </div>
  );
};

export default Banner;
