// pages/agenda.tsx
import EventList from '@/components/EventList';

const events = [
  {
    date: '2024-10-28',
    title: 'Une parentalité démocratique réussie',
    location: 'Lotushuis, Zoerleberg 30 Westerlo, Anvers 2260 Belgique',
    image: '/images/event1.jpg',
    link: '#',
  },
  {
    date: '2024-11-05',
    title: 'Soins personnels et soins aux clients en équilibre (3 jours)',
    location: 'Lotushuis, Zoerleberg 30 Westerlo, Anvers 2260 Belgique',
    image: '/images/event2.jpg',
    link: '#',
  },
  {
    date: '2025-01-06',
    title: 'Guider les parents vers une parentalité coordonnée - Westerlo',
    location: 'Lotushuis, Zoerleberg 30 Westerlo, Anvers 2260 Belgique',
    image: '/images/event3.jpg',
    link: '#',
  },

];

const AgendaPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Agenda des Événements</h1>
      <EventList events={events} />
    </div>
  );
};

export default AgendaPage;
