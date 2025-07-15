# t25-mobile-css
/* 📱 Style global de la section mobile T25 */

.t25-mobile-wrapper {
  background-color: #fff;
  color: #222;
  padding: 2rem;
  font-family: 'Helvetica Neue', sans-serif;
}

/* 🎬 Header du métro */
.t25-mobile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.t25-mobile-header h2 {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.t25-mobile-header p {
  font-size: 1rem;
  color: #555;
  font-style: italic;
}

/* 🚇 Container des wagons */
.t25-mobile-wagons {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 1rem;
}

/* 🛤️ Styles de chaque wagon */
.wagon {
  min-width: 200px;
  background-color: #f8f4f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  flex-shrink: 0;
  scroll-snap-align: start;
  transition: transform 0.3s ease;
}

.wagon:hover {
  transform: scale(1.05);
}

.wagon img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.wagon h3 {
  font-size: 1.1rem;
  margin: 0;
  color: #333;
}

/* 🌙 Adaptation style monochrome si désirée plus tard */
.t25-mobile-wrapper.black-white {
  background-color: #000;
  color: #fff;
}

.t25-mobile-wrapper.black-white .wagon {
  background-color: #111;
  border-color: #444;
}

.t25-mobile-wrapper.black-white .wagon h3 {
  color: #f0f0f0;
}
