import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: {
    title: "Chernobyl Disaster",
    subtitle:
      "Documenting the history and impact of one of the world's worst nuclear catastrophes",
  },
  it: {
    title: "Il Disastro di Chernobyl",
    subtitle:
      "Documentazione della storia e dell'impatto di una delle peggiori catastrofi nucleari al mondo",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const lbl = t[language];

  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <img
        src="https://images.unsplash.com/photo-1613576559440-0cca4cf0c113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        alt="Aerial view of Pripyat ghost town near Chernobyl"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {lbl.title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl">{lbl.subtitle}</p>
      </div>
    </section>
  );
}
