export default function Introduction() {
  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Il Disastro di Chernobyl</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 leading-relaxed">
            Il reattore n. 4 di Chernobyl esplose nella notte tra il 25 e il 26 aprile 1986 durante un test di sicurezza a causa di un reattore RBMK instabile e procedure errate, causando il peggior disastro nucleare della storia.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
            L'esplosione rilasciò molti radionuclidi in Europa, portando all'evacuazione tardiva e all'abbandono di Pripyat, mentre l'URSS inizialmente tentò di minimizzare l'accaduto con segretezza.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
            La Svezia scoprì radiazioni anomale il 28 aprile, forzando Mosca ad ammettere l'incidente e ad avviare urgenti operazioni di contenimento, tra cui la costruzione di un sarcofago.
            </p>
            <p className="text-lg leading-relaxed">
            Questo sito illustra la storica trasformazione post-disastro di Chernobyl con confronti visivi, evidenziando l'importanza di sicurezza, trasparenza e normative per tecnologie rischiose.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/Plant_dopo2.jpg"
              alt="Centrale Nucleare di Černobyl'"
              className="w-full h-auto"
            />
            <div className="bg-primary-100 p-4">
              <p className="text-sm text-primary-600">La Centrale Nucleare di Chernobyl come appare oggi, con la nuova struttura di contenimento "New Safe Confinement" visibile attorno al Reattore No. 4.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}