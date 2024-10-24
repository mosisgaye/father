import Image from 'next/image';

function MilitaryStory() {
  return (
    <section className="bg-[#F5F5DC] py-16 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="md:w-1/3 flex justify-center md:justify-end md:ml-2"> {/* Reduced left margin */}
            <div className="rounded-md overflow-hidden shadow-md">
              <Image
                src="/images/about.jpeg" // Replace this with the correct image path
                alt="Profile Picture"
                width={400}
                height={600}
                className="rounded-md object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 mb-8 md:mb-0"> {/* Reduced width */}
            <h2 className="text-3xl font-bold mb-4 text-left text-[#5f3b2f] uppercase">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            {/* Horizontal line with exact thickness and color */}
            <hr className="border-t-4 border-[#b5885c] w-24 mb-6" />
            <p className="text-xl mb-6 text-left text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </p>
            <p className="text-xl mb-6 text-left text-gray-700 leading-relaxed">
              Fusce ac nisi eu magna tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <p className="text-xl text-left text-gray-700 leading-relaxed">
              Donec quis purus nec nisi tincidunt consectetur ut nec lectus. Proin venenatis mi at libero interdum, a consequat tortor scelerisque.
            </p>
            <p className="text-xl text-left text-gray-700 leading-relaxed">
              Aliquam erat volutpat. Vivamus nec neque sit amet magna sagittis euismod. Integer sit amet turpis et augue vehicula dignissim.
            </p>

            <p className="text-xl mb-6 text-left text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            </p>
            <p className="text-xl mb-6 text-left text-gray-700 leading-relaxed">
              Fusce ac nisi eu magna tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <p className="text-xl text-left text-gray-700 leading-relaxed">
              Donec quis purus nec nisi tincidunt consectetur ut nec lectus. Proin venenatis mi at libero interdum, a consequat tortor scelerisque.
            </p>
            <p className="text-xl text-left text-gray-700 leading-relaxed">
              Aliquam erat volutpat. Vivamus nec neque sit amet magna sagittis euismod. Integer sit amet turpis et augue vehicula dignissim.
            </p>
          </div>
          
     
        </div>
      </div>
    </section>
  );
}

export default MilitaryStory;
