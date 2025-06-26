import "./Home.css";
import StockImage from "../../assets/accounting-stock-image.jpg";
import Phone from "../../assets/phone.png";
import Email from "../../assets/email.png";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Professional Accounting Services You Can Trust
            </h1>
            <p className="hero-subtitle">
              Expert financial guidance for businesses and individuals. We help
              you navigate complex financial landscapes with confidence and
              precision.
            </p>
          </div>
          <div className="hero-image">
            <img
              src={StockImage || "/placeholder.svg"}
              alt="Professional accounting services"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Why Choose Our Accounting Firm?</h2>
            <p className="about-text">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Nulla facilisi.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Professional Services</h2>
          <p className="section-subtitle">
            Comprehensive accounting solutions designed to meet all your
            financial needs
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3 className="service-title">Tax Preparation & Planning</h3>
              <p className="service-description">
                Expert tax preparation and strategic planning to minimize your
                tax liability while ensuring full compliance with current
                regulations.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3 className="service-title">Business Accounting</h3>
              <p className="service-description">
                Complete bookkeeping, financial reporting, and business advisory
                services to keep your company's finances organized and
                optimized.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3 className="service-title">Financial Consulting</h3>
              <p className="service-description">
                Strategic financial advice and planning to help you make
                informed decisions and achieve your long-term financial goals.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3 className="service-title">Audit & Assurance</h3>
              <p className="service-description">
                Thorough financial audits and assurance services to ensure
                accuracy, compliance, and transparency in your financial
                reporting.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3 className="service-title">Payroll Management</h3>
              <p className="service-description">
                Comprehensive payroll processing, tax withholding, and
                compliance management to streamline your employee compensation
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="location-container">
          <h2 className="section-title">Where We're Located</h2>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53177.455518120216!2d-73.67898106715815!3d45.53431597810484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918f3d034296f%3A0x340465ebec9fd321!2sCostco%20Wholesale!5e0!3m2!1sen!2sca!4v1750714871208!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Office Location"
            />
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Contact Us</h2>
          <p>Have some questions? We'd love to hear from you!</p>
          <div className="contact-icons">
            <div className="icon">
              <img src={Phone} alt="An icon of a phone" />
              <p>(123) 456-7890</p>
            </div>
            <div className="icon">
              <img src={Email} alt="An icon of an email" />
              <p>HvCmD@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
