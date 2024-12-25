import { ServiceBlock } from './ServiceBlock';

interface Service {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  image?: React.ReactNode;
}

export const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Persoonlijke Coaching – Eén-op-één begeleiding op maat",
      description:
        "Soms heb je een klankbord nodig. Wil je wat dieper in gaan op dingen die spelen in je persoonlijke situatie. In een 1-op-1 traject kan de aandacht volledig naar jouw vragen en jouw verhaal gaan.",
      features: [
        "Een intakegesprek om jouw behoeften en doelen te verkennen.",
        "Praktische tools en inzichten afgestemd op jouw leven.",
        "Flexibele sessies, online of op locatie.",
        "Concrete stappen en praktische tips die je meteen kunt toepassen.",
        "Eventuele doorverwijzing naar betrouwbare hulpbronnen."
      ],
      buttonText: "Plan een Kennismakingsgesprek",
      buttonLink: "/coaching",
      image: null
    },
    {
      title: "Groepsbijeenkomsten – Groei door Verbinding met Anderen",
      description:
        "In onze groepsbijeenkomsten komen mannen samen om ervaringen te delen, te leren en elkaar te inspireren. Allerlei thema’s zoals opvoeding, mentaal welzijn bij mannen, en persoonlijke groei staan centraal.",
      features: [
        "Kleine, veilige groepen met ruimte voor iedereen.",
        "Thema’s die leven, zoals vaderschap, communicatie en stress.",
        "Interactieve sessies met opdrachten en gesprekken.",
        "Praktische inzichten en concrete tips om mee naar huis te nemen."
      ],
      buttonText: "Schrijf je in voor een Groepssessie",
      buttonLink: "/groups",
      image: null // You can replace this with an actual image component
    },
    {
      title: "Trainingen & Webinars – Praktische Tools voor Jouw Groei",
      description:
        "Mijn trainingen en webinars bieden praktische tools en inzichten die je meteen kunt toepassen. Flexibel, toegankelijk en gericht op jouw persoonlijke groei.",
      features: [
        "Online en live trainingen – volg waar en wanneer het jou past.",
        "Interactieve webinars met ruimte voor vragen en uitwisseling."
      ],
      buttonText: "Bekijk de Agenda voor Trainingen en Webinars",
      buttonLink: "/training",
      image: null
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">Onze Diensten</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceBlock key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};