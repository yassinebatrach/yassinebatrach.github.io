import { timelineEvents } from "@/data/timelineEvents";

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-primary-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Timeline degli Eventi  </h2>
        
        <div className="space-y-8 pl-10">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item pb-8">
              <div className="flex">
                <div className="timeline-marker flex-shrink-0 w-8 h-8 rounded-full bg-accent-500 shadow-md mr-4"></div>
                <div className="bg-white rounded-lg shadow-md p-6 flex-grow">
                  <h3 className="text-xl font-bold text-primary-800">{event.title}</h3>
                  <p className="text-primary-600 mb-2">{event.date}</p>
                  <p className="leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
