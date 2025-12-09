// components/ReviewSection.jsx
export default function ReviewSection() {
  const reviews = [
    { name: "Myself", text: "This SAAS platform revolutionized our workflow!" },
    { name: "Marcus Rodriguez", text: "Wow... productivity increased 400%!" },
    { name: "Jennifer Park", text: "It replaced my artistic mystique with competence." },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-3">
      {reviews.map((r, idx) => (
        <div
          key={idx}
          className="review bg-gray-100 rounded-xl p-6 shadow-md animate-[reviewUp_1s_ease-out]"
        >
          <h3 className="text-lg font-semibold mb-2">{r.name}</h3>
          <p>{r.text}</p>
        </div>
      ))}
    </section>
  );
}
