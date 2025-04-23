export default function Introduction() {
  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Il Disastro di Chernobyl</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4 leading-relaxed">
            Reactor No.4 at Chernobyl exploded during the night of 25-26 April 1986 while a safety test was underway. An unstable RBMK design combined with flawed procedures triggered the blast, sparking the worst nuclear disaster in history.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
            The explosion spewed a cocktail of radionuclides across Europe. Evacuation of the nearby city of Pripyat was delayed, and the Soviet Union's first reflex was secrecy, downplaying what had happened.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
            On 28 April, Sweden's radiation monitors picked up abnormal levels, forcing Moscow to admit the incident and launch frantic containment efforts—including construction of the concrete “sarcophagus.”
            </p>
            <p className="text-lg leading-relaxed">
            This site traces Chernobyl's post-disaster transformation through visual comparisons, underscoring the need for safety, transparency, and tight regulation whenever high-risk technologies are in play.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/Plant_dopo2.jpg"
              alt="Centrale Nucleare di Černobyl'"
              className="w-full h-auto"
            />
            <div className="bg-primary-100 p-4">
              <p className="text-sm text-primary-600">Chernobyl Nuclear Power Plant as it appears today, with the “New Safe Confinement” structure now enclosing Reactor No.4.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}