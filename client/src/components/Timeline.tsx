import { timelineEvents } from "@/data/timelineEvents";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: { heading: "Timeline of Events" },
  it: { heading: "Cronologia degli Eventi" },
};

export default function Timeline() {
  const { language } = useLanguage();
  const lbl = t[language];

  return (
    <section id="timeline" className="py-16 bg-primary-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {lbl.heading}
        </h2>

        <div className="space-y-8 pl-10">
          {timelineEvents.map((event, index) => {
            const translatedTitle = event.translations[language]?.title;
            const translatedDescription = event.translations[language]?.description;
            
            return (
              <div key={index} className="timeline-item pb-8">
                <div className="flex">
                  <div className="timeline-marker w-8 h-8 rounded-full bg-accent-500 shadow-md mr-4" />
                  <div className="bg-white rounded-lg shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold text-primary-800">
                      {translatedTitle}
                    </h3>
                    <p className="text-primary-600 mb-2">{event.date}</p>
                    <p className="leading-relaxed">{translatedDescription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
