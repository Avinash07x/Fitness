import React from 'react';
import { Dumbbell } from 'lucide-react';
import workout from '../assets/g2.jpg';


function WorkoutSection() {
  const skills = ['Strength Building', 'Cardio Conditioning', 'Flexibility Training'];

  return (
    <>
      <style>{`
        @property --progress {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }

        .animated-bg {
          background: linear-gradient(270deg, #ffffffff, #c8d9daff , #96b0b7ac , #4e797a);
          background-size: 800% 800%;
          animation: gradientMove 20s ease infinite;
        }

        .section-title {
          animation: titleFadeIn 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .workout-image {
          animation: imageZoom 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 20% cover 50%;
        }

        @keyframes imageZoom {
          from {
            transform: scale(1.3) rotate(-5deg);
            filter: brightness(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
            opacity: 1;
          }
        }

        .split-reveal {
          animation: splitReveal 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 20% cover 50%;
        }

        @keyframes splitReveal {
          from {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        .progress-bar {
          animation: progressFill 1ms linear forwards;
          animation-timeline: view();
          animation-range: entry 40% cover 70%;
        }

        @keyframes progressFill {
          from {
            --progress: 0;
          }
          to {
            --progress: 1;
          }
        }

        .workout-content {
          animation: contentSlide 1ms ease-out both;
          animation-timeline: view();
          animation-range: entry 25% cover 55%;
        }

        @keyframes contentSlide {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <section className="animated-bg py-24 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="split-reveal">
            <div className="workout-image bg-gradient-to-br from-purple-600 to-blue-600 h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <img src={workout} alt="Workout" />
              </div>
            </div>
          </div>
          <div className="workout-content">
            <h2 className="section-title text-4xl font-bold mb-6 gradient-text">
              Experience Elite Training
            </h2>
            <p className="text-gray-900 text-lg mb-6">
              Our comprehensive programs combine strength training, cardio, and flexibility work to deliver complete fitness transformation.
            </p>
            <div className="space-y-4">
              {skills.map((item, idx) => (
                <div key={idx} className="progress-bar">
                  <div className="text-gray-900 mb-2 font-semibold">{item}</div>
                  <div className="bg-gray-800 h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full transition-all duration-1000"
                      style={{ width: `calc(var(--progress) * ${85 + idx * 5}%)` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkoutSection;