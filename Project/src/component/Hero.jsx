// components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="hero__title text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
        Scroll animations with CSS
      </h1>
      <div className="hero__payoff text-center font-semibold text-lg">
        You don't need JS for everything
      </div>
    </section>
  );
}
