import { button } from 'framer-motion/client';
import Image from 'next/image';

const Aboutme = () => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-16">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-yellow-400 text-sm uppercase tracking-wide flex items-center">
            <span className="mr-2 text-2xl">👋</span> Hey, I'm
          </h2>
          <h1 className="text-4xl font-bold">Founder of The Vaderhart</h1>
          <p className="text-xl text-black leading-relaxed">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, eos quod saepe eligendi voluptatibus officiis quaerat aspernatur non ipsam hic accusantium voluptatem fugiat laboriosam, modi eum harum nobis in praesentium repellendus eveniet reiciendis animi iste. Sequi est incidunt voluptate quis veritatis, eaque officia culpa commodi similique aliquid debitis magnam totam aperiam rem nobis dolores eum quam cum minima dicta doloremque quibusdam dignissimos accusamus. Incidunt laborum cum voluptatem exercitationem recusandae, aliquid perferendis, rem delectus facilis eum, eius deserunt alias ab! Necessitatibus sequi natus numquam perferendis voluptatem earum aperiam, quibusdam nam! Vitae, eligendi nulla sit nisi dolorum sint eveniet voluptate velit excepturi totam! Aut libero necessitatibus natus animi hic iste amet enim! Saepe id hic ullam delectus est aliquid molestiae perspiciatis vitae ipsum, nulla aliquam natus ratione facilis ut nisi quas iusto mollitia cum fuga recusandae. Blanditiis hic aliquid alias fuga harum perferendis sit, quasi esse, totam et suscipit! Cum, corporis vitae.

          </p>
          <button className="bg-yellow-400 text-black py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition">
            Email Me
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/father.jpg"
            alt="Tom with baby"
            layout="responsive"
            width={800}
            height={800}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
