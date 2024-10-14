function EventCard({title, date, location, boo}) {

  return (
    <div className={boo ? 'EventCard' : 'EventCard2'}>
      <h3>Событие - {title}</h3>
      <p>Дата: {date}</p>
      <p>Место: {location}</p>
    </div>
  );
}

export default EventCard;