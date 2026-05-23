export default function EventCard({ event, onBuy }) {

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 15,
      borderRadius: 10
    }}>

      <img
        src={event.image}
        style={{ width: "100%", borderRadius: 10 }}
      />

      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <strong>${event.price}</strong>

      <br /><br />

      <button onClick={onBuy}>
        Comprar 🎟️
      </button>

    </div>
  );
}