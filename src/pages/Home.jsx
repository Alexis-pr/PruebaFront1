import EventCard from "../components/EventCard";

export default function Home({ openLogin }) {

  const events = [
    {
      id: 1,
      title: "Festival Medellín",
      description: "Música en vivo",
      price: 120000,
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063"
    },
    {
      id: 2,
      title: "Tech Summit",
      description: "Innovación y software",
      price: 90000,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    }
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 20,
      padding: 20
    }}>
      {events.map(e => (
        <EventCard
          key={e.id}
          event={e}
          onBuy={openLogin}
        />
      ))}
    </div>
  );
}