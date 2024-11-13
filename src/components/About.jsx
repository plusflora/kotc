import "../App.css";
import kotcHead from "../assets/King-of-the-Cove-2024-STYLE-KING-BLACK-BG-6-x-6-inch 3.jpg";

function AboutPage() {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
        lacus sit amet mauris interdum tempus. Vestibulum vehicula non lorem non
        varius. Proin interdum ipsum at euismod scelerisque. Vivamus ac lacus
        vestibulum metus lobortis tempor. In id ipsum odio. Suspendisse nec odio
        erat. Mauris sollicitudin nisi at malesuada tincidunt. Suspendisse
        potenti. Maecenas venenatis neque felis, eu consectetur tellus cursus
        quis. Etiam vitae nunc odio. Vivamus tincidunt purus eu feugiat
        accumsan. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec odio augue, interdum quis sollicitudin
        nec, venenatis sed sapien. Morbi dolor justo, aliquet eget sem nec,
        lacinia mollis.
      </p>
      <img src={kotcHead} alt="kotc head" />
    </div>
  );
}

export default AboutPage;
