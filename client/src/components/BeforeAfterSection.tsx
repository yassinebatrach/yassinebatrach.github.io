import { beforeAfterImages } from "@/data/beforeAfterImages";

export default function BeforeAfterSection() {
  return (
    <section id="before-after" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Prima & Dopo</h2>
        
        <div className="space-y-16">
          {beforeAfterImages.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <div className="aspect-video overflow-hidden rounded-md">
                    <img 
                      src={item.beforeImage}
                      alt={`${item.title} today`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-center">Prima del disastro</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <div className="aspect-video overflow-hidden rounded-md">
                    <img 
                      src={item.afterImage}
                      alt={`${item.title} before the disaster`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-center">Oggi</p>
                  
                </div>
              </div>
              <p className="mt-4 text-primary-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
