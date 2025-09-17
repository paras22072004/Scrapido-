import { Link } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LandingPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myVideo from "../videor.mp4";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
/* role images you said you saved */
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
// Icons
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.jpg";
import {
  FaHome,
  FaRecycle,
  FaPaintBrush,
  FaLeaf,
  FaUsers,
  FaHandHoldingHeart,
  FaLaptopCode,
  FaTags,
  FaShippingFast,
} from "react-icons/fa";

const LandingPage = () => {
  // Features section
  const features = [
    { icon: <FaLeaf />, title: "Eco-Friendly", text: "Every product promotes a circular economy." },
    { icon: <FaUsers />, title: "Empowering Artisans", text: "Providing sustainable livelihoods to creators." },
    { icon: <FaHandHoldingHeart />, title: "Authentically Handcrafted", text: "Unique products made with care and skill." },
    { icon: <FaLaptopCode />, title: "AI-Powered Transparency", text: "Fair and instant pricing for your scrap." },
    { icon: <FaTags />, title: "Ethical & Fair Trade", text: "Committed to fair wages and a positive impact." },
    { icon: <FaShippingFast />, title: "Hassle-Free Pickups", text: "Schedule and sell scrap from your doorstep." },
  ];

  // Artisan stories
  const stories = [
    {
      name: "Sunita Devi",
      story: "Sunita now earns extra income by creating eco-friendly tote bags from scrap fabric.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHPZrRoVoEkrOgmZNeP2KPELSo3p7WtwuLg&s",
    },
    {
      name: "Ramesh Singh",
      story: "Ramesh transforms discarded wood into unique home decor pieces loved by urban buyers.",
      imageUrl: "https://thumbs.dreamstime.com/b/new-delhi-india-january-indian-poor-man-came-to-see-preparations-day-parade-portrait-103167033.jpg",
    },
    {
      name: "Anita Creations",
      story: "Anita and her group of artisans upcycle tyres into stylish stools, reducing landfill waste.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD7EGbhJJNum7YGY1Ku1IjHA48AxyM8pnU5A&s",
    },
    {
      name: "Priya Sharma",
      story: "Priya found a new passion in crafting beautiful jewelry from discarded metal and wires.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSlk15jfeVy_RYxB5HwU1PelkrFB9AEB-kQ&s",
    },
    {
      name: "Kamla Bai",
      story: "Kamla Bai collects plastic bottles and transforms them into beautiful vertical gardens, bringing a touch of green to urban balconies.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb4o1pw0GA4LWzfTwTJ3coht6tN7GzAVtRg&s",
    },
    {
      name: "Kishor Lal",
      story: "Kishor Lal uses a special technique to roll old newspapers into sturdy frames and bowls, giving waste paper a colorful and durable new life.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwAxCeVeMIrhq2pfRLdt1efOiKsVOsd_-ng&s",
    },
    {
      name: "Resham Weavers",
      story: "The Resham Weavers group gives old silk sarees a new lease of life by weaving them into vibrant, one-of-a-kind rugs and bags.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2s-ldZ-VHL9VYkOA-ZXkiIOyKdeWdT5oKkA&s",
    },
  ];

  const whyChooseSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  // Hero slider content
  const heroSlides = [
    {
      headline: "",
      subheadline: "",
      ctaText: "Sell Scrap Now",
      ctaLink: "/login/user",
      imageUrl: hero2,
    },
    {
      headline: "",
      subheadline: "",
      ctaText: "Join as Collector",
      ctaLink: "/login/kabadiwala",
      imageUrl: hero3,
    },
    {
      headline: "",
      subheadline: "",
      ctaText: "Explore Marketplace",
      ctaLink: "/marketplace",
      imageUrl: hero1,
    },
  ];

  // Categories section
  const categories = [
    {
      name: "Totes & Shopping",
      img: "https://img.indiahandmade.com/catalog/product/cache/dee0bc41489afb86ae85561eae1bc64e/w/h/white_bag_ladies_3__1.png",
    },
    {
      name: "Home Decor",
      img: "https://cdn.moolwan.com/374445b4-2197-43c6-a0b3-6bc588b62774.jpg",
    },
    {
      name: "Pouches & Purses",
      img: "/purse.png",
    },
    {
      name: "Office & School",
      img: "https://scrapshala.com/cdn/shop/files/GEET_large_68302558-c2e7-4c63-9186-c71bbc57547a.webp?v=1745327971&width=300",
    },
    {
      name: "Lifestyle Essentials",
      img: "/home.png",
    },
    {
      name: "Gift Vouchers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9RjKhnZl1y0Wkk9cAGAPvZ87KozAYxl8BUw&s",
    },
  ];

  // Hero slider settings
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Stories slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // scroll-to-roles handler
  const scrollToRoles = (targetId = "roles-section") => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#roles";
    }
  };

  return (
    <div className="landing-pagehome">
      <Navbar />

      {/* --- Quick Pickup (moved to top, with creative role image-buttons) --- */}
      <section className="quick-pickup-sectionhome top-quick-pickup">
        <div className="site-inner">
          {/* LEFT: role image buttons (using hero4/5/6) */}
          <div className="pickup-image-columnhome">
            <h1>
              "<span style={{ color: "var(--accent-color)" }}>Scrapido</span> – Where Waste Turns into Worth & Welfare."
            </h1>
            <h3>
              "From AI-powered scrap estimates to kabadiwala-approved fair deals – every transaction fuels social impact and a greener tomorrow."
            </h3>

            {/* creative image role buttons */}
            <div className="role-quick-buttons image-roles" role="list" aria-label="Quick role links">
              <button
                className="role-image-btn"
                onClick={() => scrollToRoles("roles-section")}
                title="I'm a Household"
                aria-label="Household"
              >
                <img src={hero7} alt="Household" className="role-image" />
                <div className="role-image-overlay">
                  <FaHome className="role-image-icon" aria-hidden />
                  <span className="role-image-label">Household</span>
                </div>
              </button>

              <button
                className="role-image-btn"
                onClick={() => scrollToRoles("roles-section")}
                title="I'm an Artisan"
                aria-label="Artisan"
              >
                <img src={hero9} alt="Artisan" className="role-image" />
                <div className="role-image-overlay">
                  <FaPaintBrush className="role-image-icon" aria-hidden />
                  <span className="role-image-label">Artisan</span>
                </div>
              </button>

              <button
                className="role-image-btn"
                onClick={() => scrollToRoles("roles-section")}
                title="I'm a Scrap Buddy"
                aria-label="Scrap Buddy"
              >
                <img src={hero8} alt="Scrap Buddy" className="role-image" />
                <div className="role-image-overlay">
                  <FaRecycle className="role-image-icon" aria-hidden />
                  <span className="role-image-label">Scrap Buddy</span>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT: Pickup form column */}
          <div className="pickup-form-columnhome">
            <h2>Schedule a Hassle-Free Pickup</h2>
            <p>Enter your details and our team will get in touch with you shortly.</p>
            <form
              className="pickup-formhome"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — we'll call you shortly (demo).");
              }}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Pincode" required />
              <button type="submit" className="btn btn-primary">
                Request a Call Back
              </button>
            </form>
            <div className="feature-highlightshome">
              <div className="feature-boxhome">
                <h4>Schedule a Pickup</h4>
                <p>Choose a time that works for you.</p>
              </div>
              <div className="feature-boxhome">
                <h4>Doorstep Service</h4>
                <p>We'll pick up the scrap right from your address.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero slider (below Quick Pickup) */}
      <header className="hero-sliderhome hero-below-pickup">
        <div className="site-inner">
          <Slider {...heroSliderSettings}>
            {heroSlides.map((slide, index) => (
              <div key={index} className="hero-slidehome">
                <div className="hero-slide-inner">
                  {/* image element — object-fit controls how it fills */}
                  <img
                    src={slide.imageUrl}
                    alt={slide.headline || `hero-${index + 1}`}
                    className="hero-slide-img"
                    loading="lazy"
                  />
                  <div className="hero-contenthome">
                    <h1>{slide.headline}</h1>
                    <p>{slide.subheadline}</p>
                    <Link to={slide.ctaLink} className="btn btn-herohome">
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </header>

      <div className="containerhome">
        {/* Roles Section */}
        <section className="roles-section-v2" id="roles-section">
          <div className="roles-header">
            <h2>Join Our Sustainable Revolution</h2>
            <p>
              Whether you're clearing out clutter, collecting materials, or
              creating art, you have a vital role to play.
            </p>
          </div>
          <div className="roles-container-v2">
            {/* Household */}
            <Link
              to="/login/user"
              className="role-card-v2"
              style={{
                backgroundImage: `url(${hero4})`,
              }}
            >
              <div className="card-content">
                <FaHome size={40} className="card-icon" />
                <h3>I'm a Household</h3>
                <p>Turn your scrap into value from the comfort of your home.</p>
                <span className="card-cta">Sell Scrap →</span>
              </div>
            </Link>

            {/* Scrap Buddy */}
            <Link
              to="/login/kabadiwala"
              className="role-card-v2"
              style={{
                backgroundImage: `url(${hero5})`,
              }}
            >
              <div className="card-content">
                <FaRecycle size={40} className="card-icon" />
                <h3>I'm a Scrap Buddy</h3>
                <p>Build your business by connecting with homes and artisans.</p>
                <span className="card-cta">Find Pickups →</span>
              </div>
            </Link>

            {/* Artisan */}
            <Link
              to="/login/artisan"
              className="role-card-v2"
              style={{
                backgroundImage: `url(${hero6})`,
              }}
            >
              <div className="card-content">
                <FaPaintBrush size={40} className="card-icon" />
                <h3>I'm an Artisan</h3>
                <p>Source unique materials and showcase your creations.</p>
                <span className="card-cta">Start Creating →</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="categories-sectionhome">
          <h2>Eco Bazaar</h2>
          <div className="categories-gridhome">
            {categories.map((category, index) => (
              <Link to="/marketplace" key={index} className="category-cardhome">
                <div className="circle-image">
                  <img src={category.img} alt={category.name} />
                </div>
                <h4>{category.name}</h4>
              </Link>
            ))}
          </div>
        </section>

        {/* Video */}
        <section className="video-section">
          <div className="site-inner">
            <div className="video-container">
              {/* no controls attribute -> hides pause/play UI & progress in normal usage */}
              <video className="custom-video" autoPlay loop muted playsInline>
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section className="stories-sectionhome">
          <h2>Artisan Stories</h2>
          <Slider
            {...sliderSettings}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
              },
              {
                breakpoint: 600,
                settings: { slidesToShow: 1 },
              },
            ]}
          >
            {stories.map((s, idx) => (
              <div key={idx} className="story-slide-v2">
                <div className="story-image-wrapper">
                  <img src={s.imageUrl} alt={s.name} className="story-image-v2" />
                </div>
                <div className="story-content-v2">
                  <p className="story-text-v2">"{s.story}"</p>
                  <h4 className="story-name-v2">- {s.name}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Impact Section */}
        <section className="impact-v2-sectionhome">
          <div className="impact-v2-contenthome">
            <h2 className="impact-v2-titlehome">More Than Just Scrap. It's a Revolution.</h2>
            <p className="impact-v2-descriptionhome">
              Every piece of scrap you sell contributes to a larger movement.
              We're reducing landfill waste, saving CO₂ emissions, and most
              importantly, creating sustainable livelihoods for rural artisans
              across India.
            </p>
            <div className="impact-v2-statshome">
              <div className="impact-v2-stat-itemhome">
                <h3>1,200+ kg</h3>
                <p>Scrap Diverted from Landfills</p>
              </div>
              <div className="impact-v2-stat-itemhome">
                <h3>50+</h3>
                <p>Livelihoods Generated</p>
              </div>
              <div className="impact-v2-stat-itemhome">
                <h3>350+</h3>
                <p>Unique Products Created</p>
              </div>
            </div>
            <Link to="#" className="btn btn-primaryhome">
              Learn More About Our Mission
            </Link>
          </div>
          <div className="impact-v2-imagehome">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrecely3Fu0yz_ga484Z4jg6WwDR-DzdcUA&s" alt="Artisan empowered by Scrap2Value" />
          </div>
        </section>

        {/* Why Choose Us Slider */}
        <section className="why-choose-sectionhome">
          <h2>Why Choose Us?</h2>
          <div className="why-sliderhome">
            <Slider {...whyChooseSettings}>
              {features.map((feature, index) => (
                <div key={index} className="why-card">
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
