import './blog-header.scss';

export default function  Hero({ title}) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>

      
      </div>
    </section>
  );
}
