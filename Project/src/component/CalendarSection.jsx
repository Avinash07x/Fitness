// components/CalendarSection.jsx
export default function CalendarSection() {
  return (
    <section className="calendar-container relative perspective-[1000px]">
      <div className="calendar-wide w-full aspect-[2/1] bg-blue-500 rounded-lg border-4 border-gray-200 shadow-lg animate-[calendarLargeFadeIn_1s_ease-out]"></div>
      <div className="calendar-mobile absolute bottom-3 left-5 w-56 aspect-[2/3] opacity-0 animate-[calendarSmallAppear_1s_ease-out_forwards] bg-blue-500 rounded-lg border-4 border-gray-200 shadow-lg"></div>
    </section>
  );
}

