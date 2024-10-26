import React from 'react';

type Event = {
  date: string;
  title: string;
  location: string;
  image: string;
  link: string;
};

type EventListProps = {
  events: Event[];
};

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="space-y-12">
      {/* Grouper les événements par mois */}
      {events.reduce<React.ReactNode[]>((acc, event, index) => {
        const eventMonth = new Date(event.date).toLocaleString('fr-FR', {
          month: 'long',
          year: 'numeric',
        });

        const isNewMonth =
          index === 0 ||
          eventMonth !== new Date(events[index - 1].date).toLocaleString('fr-FR', {
            month: 'long',
            year: 'numeric',
          });

        return [
          ...acc,
          isNewMonth ? (
            <div key={`month-${eventMonth}`} className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2">
              {eventMonth}
            </div>
          ) : null,
          <div key={event.title} className="flex items-start space-x-6">
            <div className="flex flex-col items-center text-center w-20">
              <span className="text-xs text-gray-500 uppercase">
                {new Date(event.date).toLocaleString('fr-FR', { month: 'short' }).toUpperCase()}
              </span>
              <span className="text-2xl font-bold text-green-700">
                {new Date(event.date).getDate()}
              </span>
            </div>
            <div className="flex-1 p-4 bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center md:justify-between">
              <div className="md:w-2/3 md:pr-6 text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.location}</p>
                <a
                  href={event.link}
                  className="text-yellow-600 hover:underline mt-2 inline-block"
                >
                  En savoir plus
                </a>
              </div>
              <div className="md:w-1/3">
                <img src={event.image} alt={event.title} className="rounded-lg object-cover w-full h-32 md:h-40" />
              </div>
            </div>
          </div>,
        ];
      }, [])}
    </div>
  );
};

export default EventList;
