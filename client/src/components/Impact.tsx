export default function Impact() {
  return (
    <section className="py-16 bg-primary-800 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Legacy and Impact</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-accent-400">Human Cost</h3>
            <p className="leading-relaxed">
              The immediate death toll was relatively low (31 directly attributed deaths), but the long-term health effects continue to be studied and debated. Thousands of thyroid cancer cases have been attributed to radiation exposure, particularly in children.
            </p>
          </div>
          
          <div className="bg-primary-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-accent-400">Environmental Impact</h3>
            <p className="leading-relaxed">
              The immediate area remains heavily contaminated. The exclusion zone has become an involuntary wildlife sanctuary where nature thrives in the absence of human activity, though mutations and abnormalities have been observed in some species.
            </p>
          </div>
          
          <div className="bg-primary-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-accent-400">Global Consequences</h3>
            <p className="leading-relaxed">
              Chernobyl changed nuclear safety protocols worldwide and altered public perception of nuclear energy. It contributed to the fall of the Soviet Union by exposing systemic problems and became a symbol of the consequences of technological failure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
