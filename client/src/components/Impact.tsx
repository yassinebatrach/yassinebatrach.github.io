import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: {
    heading: "Legacy and Impact",
    blocks: [
      {
        title: "Human Cost",
        text:
          "The immediate death toll was relatively low (31 directly attributed deaths), but the long-term health effects continue to be studied and debated. Thousands of thyroid-cancer cases have been linked to radiation exposure, particularly in children.",
      },
      {
        title: "Environmental Impact",
        text:
          "The immediate area remains heavily contaminated. The exclusion zone has become an involuntary wildlife sanctuary where nature thrives in the absence of human activity, though mutations and abnormalities have been observed in some species.",
      },
      {
        title: "Global Consequences",
        text:
          "Chernobyl changed nuclear-safety protocols worldwide and altered public perception of nuclear energy. It contributed to the fall of the Soviet Union by exposing systemic problems and became a symbol of the consequences of technological failure.",
      },
    ],
  },
  it: {
    heading: "Eredità e Impatto",
    blocks: [
      {
        title: "Costo Umano",
        text:
          "Le vittime immediate furono relativamente poche (31 decessi attribuiti direttamente), ma gli effetti sanitari a lungo termine sono ancora oggetto di studio e dibattito. Migliaia di casi di tumore alla tiroide sono stati collegati all'esposizione alle radiazioni, soprattutto nei bambini.",
      },
      {
        title: "Impatto Ambientale",
        text:
          "L’area circostante rimane pesantemente contaminata. La zona di esclusione è diventata un santuario faunistico involontario dove la natura prospera in assenza umana, sebbene siano state osservate mutazioni e anomalie in alcune specie.",
      },
      {
        title: "Conseguenze Globali",
        text:
          "Chernobyl ha cambiato i protocolli di sicurezza nucleare in tutto il mondo e alterato la percezione pubblica dell'energia atomica. Ha contribuito al crollo dell'URSS mettendo in luce problemi sistemici ed è diventata il simbolo delle conseguenze di un fallimento tecnologico.",
      },
    ],
  },
};

export default function Impact() {
  const { language } = useLanguage();
  const lbl = t[language];

  return (
    <section className="py-16 bg-primary-800 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {lbl.heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {lbl.blocks.map(({ title, text }) => (
            <div key={title} className="bg-primary-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-accent-400">
                {title}
              </h3>
              <p className="leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
