import React from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  type: 'conference' | 'workshop' | 'webinar';
  registrationStatus: 'open' | 'closing-soon' | 'full';
}

export default function EventsPage() {
  const events: Event[] = [
    {
      id: '1',
      title: "Global MedTech Summit 2024",
      description: "Join world-leading experts in exploring breakthrough medical technologies and their implementation in healthcare.",
      date: "April 15-17, 2024",
      location: "Virtual & Singapore",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
      type: 'conference',
      registrationStatus: 'open'
    },
    {
      id: '2',
      title: "AI in Healthcare Workshop",
      description: "Hands-on workshop on implementing AI solutions in clinical practice and medical research.",
      date: "April 25, 2024",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop",
      type: 'workshop',
      registrationStatus: 'closing-soon'
    },
    {
      id: '3',
      title: "Future of Telemedicine Symposium",
      description: "Explore the latest innovations in remote healthcare delivery and virtual medical services.",
      date: "May 5-6, 2024",
      location: "Boston, USA",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&auto=format&fit=crop",
      type: 'conference',
      registrationStatus: 'open'
    },
    {
      id: '4',
      title: "Medical Robotics Innovation",
      description: "Interactive session on the latest developments in surgical robotics and automated medical procedures.",
      date: "May 12, 2024",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1581093458791-9d15482778a1?w=800&auto=format&fit=crop",
      type: 'workshop',
      registrationStatus: 'full'
    },
    {
      id: '5',
      title: "Digital Health Revolution",
      description: "Virtual conference on emerging trends in digital healthcare and medical technology.",
      date: "May 20, 2024",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
      type: 'webinar',
      registrationStatus: 'open'
    }
  ];

  const getStatusColor = (status: Event['registrationStatus']) => {
    switch (status) {
      case 'open':
        return 'bg-emerald-500';
      case 'closing-soon':
        return 'bg-amber-500';
      case 'full':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-100 text-blue-800';
      case 'workshop':
        return 'bg-purple-100 text-purple-800';
      case 'webinar':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative text-center mb-16">
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
          <div className="w-96 h-96 bg-violet-500 rounded-full blur-3xl"></div>
          <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl -ml-40"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500 mb-6">
          Medical Innovation Events
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Connect with healthcare innovators and explore the future of medicine
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className={`absolute top-4 right-4 ${getStatusColor(event.registrationStatus)} px-3 py-1 rounded-full text-white text-sm font-medium`}>
                  {event.registrationStatus === 'closing-soon' ? 'Closing Soon' : event.registrationStatus.charAt(0).toUpperCase() + event.registrationStatus.slice(1)}
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`${getTypeColor(event.type)} px-3 py-1 rounded-full text-sm font-medium`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-100 mb-2">{event.title}</h2>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/events/${event.id}`}
                    className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 
                      ${event.registrationStatus === 'full' 
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                  >
                    {event.registrationStatus === 'full' ? 'Registration Full' : 'Register Now'}
                    {event.registrationStatus !== 'full' && (
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 