function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <section className="photos-section">
        <div className="photo-area">
          <img
            src="/your-image.jpg"
            alt="Hero"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="description-section">
        <div className="description-paragraphe">
          <p>lorem ipsum</p>
        </div>
        <div className="service-section">
          <h1>Our services</h1>
          <div className="service-card">
            <h1>Service 1</h1>
            <p>lorem ipsum</p>
          </div>
          <div className="service-card">
            <h1>Service 2</h1>
            <p>lorem ipsum</p>
          </div>
          <div className="service-card">
            <h1>Service 3</h1>
            <p>lorem ipsum</p>
          </div>
          <div className="service-card">
            <h1>Service 4</h1>
            <p>lorem ipsum</p>
          </div>
          <div className="service-card">
            <h1>Service 5</h1>
            <p>lorem ipsum</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
