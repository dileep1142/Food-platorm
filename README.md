# Smart Food Rescue Platform 🍲🌱

A dynamic, responsive Single Page Application (SPA) frontend designed to bridge the gap between surplus food providers (restaurants, individuals) and NGOs. This project emphasizes clean UI/UX and efficient DOM manipulation without relying on external frontend frameworks.

## 🚀 Live Demo
*(Optional: Add your live hosting link here later if you deploy via GitHub Pages or Vercel)*

## 💡 Project Overview
Food waste is a critical global issue. This dashboard provides a streamlined interface where donors can quickly list available surplus food, including precise location details and quantities. The application instantly processes this data and dynamically renders live donation cards to a community feed.

## 🛠️ Tech Stack & Concepts Demonstrated
This project was intentionally built using core web fundamentals to ensure a deep understanding of browser mechanics and responsive design.

* **HTML5:** Semantic architecture for accessibility and SEO.
* **CSS3:** * **CSS Grid & Flexbox:** Complex, responsive 2D and 1D layouts.
  * **CSS Variables (`:root`):** Scalable theming and color management.
  * **Media Queries:** Mobile-first responsive design.
* **Vanilla JavaScript (ES6+):**
  * Event-driven programming and form state management.
  * Dynamic DOM manipulation (`createElement`, `appendChild`).
  * String interpolation and data formatting (handling complex address inputs).

## 📌 Key Features
* **Interactive Dashboard:** Split-view layout allowing seamless data entry and real-time feed updates.
* **Instant Rendering:** Data inputted into the donation form is instantly parsed and rendered into responsive UI cards without page reloads.
* **Dynamic Data Formatting:** Intelligently combines multiple granular address fields into a single, readable location string.
* **Fully Responsive:** Adapts seamlessly from ultra-wide desktop monitors down to standard mobile displays.

## 🔮 Future Scope (Full-Stack Integration)
This frontend is structurally prepared to be integrated with a robust backend architecture. Planned updates include:
* Developing a **Java Spring Boot** REST API to handle business logic.
* Integrating a **MySQL** database for persistent data storage (replacing temporary browser arrays).
* Implementing user authentication (JWT) for Donor vs. NGO role-based access.

## ⚙️ How to Run Locally
Since this project uses Vanilla web technologies, no heavy node modules or build steps are required.

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/smart-food-donation.git](https://github.com/your-username/smart-food-donation.git)
