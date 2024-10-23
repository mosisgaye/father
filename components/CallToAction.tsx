export default function CallToAction() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#e0dbd4] py-10 px-6 md:px-16">
      <div className="flex flex-col items-center justify-center space-y-6 md:mr-10 text-center md:text-left">
        <h2 className="text-[#0065de] text-4xl font-bold">
          READY TO GET STARTED?
        </h2>
        <button className="bg-[#0065de] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-[#e43f5a] hover:shadow-xl transition duration-300 transform hover:scale-105">
          WORK WITH MO
        </button>
      </div>
      <div className="mt-6 md:mt-0 rounded-full overflow-hidden w-48 h-48 md:w-60 md:h-60 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <img
          src="/images/baby.jpg"
          alt="Smiling person holding a baby"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
