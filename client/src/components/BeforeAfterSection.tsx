import { beforeAfterImages } from "@/data/beforeAfterImages";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: { heading: "Before & After", before: "Before the disaster", today: "Today" },
  it: { heading: "Prima & Dopo", before: "Prima del disastro", today: "Oggi" },
};

export default function BeforeAfterSection() {
  const { language } = useLanguage();
  const ui = t[language];

  return (
    <section id="before-after" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {ui.heading}
        </h2>

        <div className="space-y-16">
          {beforeAfterImages.map((item) => {
            const lbl = item.translations[language];

            return (
              <div key={item.id}>
                <h3 className="text-2xl font-bold mb-4">{lbl.title}</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <div className="aspect-video overflow-hidden rounded-md">
                      <img
                        src={item.beforeImage}
                        alt={`${lbl.title} before`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-center">
                      {ui.before}
                    </p>
                  </div>

                  <div className="bg-gray-100 p-2 rounded-lg">
                    <div className="aspect-video overflow-hidden rounded-md">
                      <img
                        src={item.afterImage}
                        alt={`${lbl.title} today`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-center">
                      {ui.today}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-primary-600">{lbl.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
