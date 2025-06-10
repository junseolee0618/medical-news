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

export default function EventDetailPage({ params }: { params: { id: string } }) {
  // 실제 앱에서는 API나 데이터베이스에서 이벤트 정보를 가져옵니다
  const events: Record<string, Event> = {
    '1': {
      id: '1',
      title: "Global MedTech Summit 2024",
      description: "Join world-leading experts in exploring breakthrough medical technologies and their implementation in healthcare.",
      date: "April 15-17, 2024",
      location: "Virtual & Singapore",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
      type: 'conference',
      registrationStatus: 'open'
    },
    '2': {
      id: '2',
      title: "AI in Healthcare Workshop",
      description: "Hands-on workshop on implementing AI solutions in clinical practice and medical research.",
      date: "April 25, 2024",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&auto=format&fit=crop",
      type: 'workshop',
      registrationStatus: 'closing-soon'
    },
    '3': {
      id: '3',
      title: "Future of Telemedicine Symposium",
      description: "Explore the latest innovations in remote healthcare delivery and virtual medical services.",
      date: "May 5-6, 2024",
      location: "Boston, USA",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&auto=format&fit=crop",
      type: 'conference',
      registrationStatus: 'open'
    },
    '4': {
      id: '4',
      title: "Medical Robotics Innovation",
      description: "Interactive session on the latest developments in surgical robotics and automated medical procedures.",
      date: "May 12, 2024",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1581093458791-9d15482778a1?w=800&auto=format&fit=crop",
      type: 'workshop',
      registrationStatus: 'full'
    },
    '5': {
      id: '5',
      title: "Digital Health Revolution",
      description: "Virtual conference on emerging trends in digital healthcare and medical technology.",
      date: "May 20, 2024",
      location: "Virtual Event",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop",
      type: 'webinar',
      registrationStatus: 'open'
    }
  };

  const event = events[params.id];

  if (!event) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-100">Event not found</h1>
          <p className="mt-4 text-gray-400">The event you're looking for doesn't exist or has been removed.</p>
          <Link href="/events" className="mt-6 inline-block text-blue-500 hover:text-blue-400">
            ← Back to Events
          </Link>
        </div>
      </main>
    );
  }

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
      <Link href="/events" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Events
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-96 object-cover rounded-xl"
          />
          <span className={`absolute top-4 right-4 ${getTypeColor(event.type)} px-3 py-1 rounded-full text-sm font-medium`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-100">{event.title}</h1>
          <p className="text-xl text-gray-400">{event.description}</p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center text-gray-300">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>

          {event.registrationStatus !== 'full' ? (
            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-white/5 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-white/5 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-300">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="mt-1 block w-full rounded-md bg-white/5 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your organization"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              >
                Register for Event
              </button>
              {event.registrationStatus === 'closing-soon' && (
                <p className="text-amber-500 text-sm text-center">
                  Registration closing soon! Don't miss out.
                </p>
              )}
            </form>
          ) : (
            <div className="mt-8 text-center p-6 bg-white/5 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium text-gray-300 mb-2">Registration Full</h3>
              <p className="text-gray-400">
                This event has reached its maximum capacity. Please check back later for similar events.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 