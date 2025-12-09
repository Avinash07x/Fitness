function Testimonials() {
  const testimonials = [
    { 
      name: 'Sarah Johnson',
      role: 'Lost 30 lbs',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'This program changed my life completely. The trainers are amazing and the community support is unmatched.' 
    },
    { 
      name: 'Mike Chen',
      role: 'Gained 15 lbs Muscle',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'I have tried many programs but this one actually delivered results. The nutrition guidance was game-changing.' 
    },
    { 
      name: 'Emma Davis',
      role: 'Marathon Runner',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'The conditioning work helped me achieve my best marathon time. Highly recommend to serious athletes.' 
    }
  ];

  return (
    <>
      <style>{`
        .testimonial-card {
          animation: testimonialSlide 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 25% cover 50%;
        }
        .animated-bg {
          background: linear-gradient(270deg, #ffffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        @keyframes testimonialSlide {
          from {
            opacity: 0;
            transform: translateX(-100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .testimonial-card:nth-child(1) { animation-delay: 0ms; }
        .testimonial-card:nth-child(2) { animation-delay: 150ms; }
        .testimonial-card:nth-child(3) { animation-delay: 300ms; }

        .testimonial-card:hover {
          transform: translateY(-10px) scale(1.03);
          transition: all 0.3s ease;
        }

        .testimonial-title {
          animation: testimonialTitleBounce 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 20% cover 40%;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        @keyframes testimonialTitleBounce {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .avatar {
          animation: avatarSpin 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 30% cover 60%;
        }

        @keyframes avatarSpin {
          from {
            transform: rotate(-360deg) scale(0);
          }
          to {
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>

      <section id="experience" className="animated-bg py-24 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="testimonial-title text-5xl font-bold text-center mb-16 gradient-text">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="avatar w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-purple-400">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-300">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
