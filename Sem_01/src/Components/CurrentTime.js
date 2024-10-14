function CurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="CurrentTime">
      <h2>Текущее время: {currentTime}</h2>
      <h3>Текущая дата: {currentDate}</h3>
    </div>
  );
}

export default CurrentTime;