import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: {
    title: "Chernobyl: Before & After",
    desc:
      "A historical documentation project dedicated to preserving the memory and lessons of the Chernobyl disaster.",
    rights:
      "Images sourced from various historical archives and photographers. All rights belong to their respective owners.",
    learn: "Learn More",
    copyright:
      "© 2025 Chernobyl Historical Documentation Project. This site is for educational purposes only.",
  },
  it: {
    title: "Chernobyl: Prima & Dopo",
    desc:
      "Progetto di documentazione storica dedicato a preservare la memoria e le lezioni del disastro di Chernobyl.",
    rights:
      "Immagini provenienti da vari archivi storici e fotografi: tutti i diritti appartengono ai rispettivi proprietari.",
    learn: "Approfondisci",
    copyright:
      "© 2025 Progetto di Documentazione Storica su Chernobyl. Sito a solo scopo educativo.",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const lbl = t[language];

  return (
    <footer className="bg-primary-900 text-primary-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-black text-lg font-bold mb-4">{lbl.title}</h3>
            <p className="mb-4">{lbl.desc}</p>
            <p className="text-sm">{lbl.rights}</p>
          </div>

          <div>
            <h3 className="text-black text-lg font-bold mb-4">{lbl.learn}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.iaea.org/newscenter/focus/chernobyl"
                  className="hover:text-accent-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IAEA Chernobyl Report
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20170808212545/http://chornobyl.in.ua/en/"
                  className="hover:text-accent-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chernobyl Exclusion Zone Information
                </a>
              </li>
              <li>
                <a
                  href="https://www.un.org/en/events/chernobylday/"
                  className="hover:text-accent-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UN Chernobyl Recovery and Development Programme
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-700 text-center text-sm">
          <p>{lbl.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
