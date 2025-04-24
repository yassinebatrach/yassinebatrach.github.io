import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: {
    heading: "The Chernobyl Disaster",
    p1:
      "Reactor number 4 at Chernobyl exploded during the night of 25-26 April 1986 while a safety test was underway. An unstable RBMK design combined with flawed procedures triggered the blast, sparking the worst nuclear disaster in history.",
    p2:
      "The explosion spewed a cocktail of radionuclides across Europe. Evacuation of the nearby city of Pripyat was delayed, and the Soviet Union's first reflex was secrecy, downplaying what had happened.",
    p3:
      "On 28 April, Sweden's radiation monitors picked up abnormal levels, forcing Moscow to admit the incident and launch frantic containment efforts—including construction of the concrete “sarcophagus.”",
    p4:
      "This site traces Chernobyl's post-disaster transformation through visual comparisons, underscoring the need for safety, transparency, and tight regulation whenever high-risk technologies are in play.",
    caption:
      "Chernobyl Nuclear Power Plant as it appears today, with the “New Safe Confinement” structure now enclosing Reactor number 4.",
  },
  it: {
    heading: "Il Disastro di Chernobyl",
    p1:
      "La notte tra il 25 e il 26aprile 1986 il reattore numero 4 di Chernobyl esplose durante un test di sicurezza. Il design instabile dell'RBMK e procedure difettose innescarono la detonazione, causando il peggior disastro nucleare della storia.",
    p2:
      "L'esplosione diffuse un cocktail di radionuclidi in tutta Europa. L'evacuazione della vicina Pripjat' fu ritardata e il primo riflesso dell'URSS fu il segreto, minimizzando l’accaduto.",
    p3:
      "Il 28aprile i monitor svedesi rilevarono livelli anomali di radiazioni, costringendo Mosca ad ammettere l'incidente e a lanciare frenetiche operazioni di contenimento, inclusa la costruzione del “sarcofago” di cemento.",
    p4:
      "Questo sito segue la trasformazione post-disastro di Chernobyl tramite confronti visivi, evidenziando la necessità di sicurezza, trasparenza e rigorosa regolamentazione nelle tecnologie ad alto rischio.",
    caption:
      "La centrale nucleare di Černobyl' oggi, con il nuovo sarcofago (“New Safe Confinement”) che racchiude il reattore numero 4.",
  },
};

export default function Introduction() {
  const { language } = useLanguage();
  const lbl = t[language];

  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {lbl.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="space-y-4 text-lg leading-relaxed">
            <p>{lbl.p1}</p>
            <p>{lbl.p2}</p>
            <p>{lbl.p3}</p>
            <p>{lbl.p4}</p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/Plant_dopo2.jpg"
              alt="Chernobyl Nuclear Power Plant"
              className="w-full h-auto"
            />
            <div className="bg-primary-100 p-4">
              <p className="text-sm text-primary-600">{lbl.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
