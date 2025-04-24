import { useState } from "react";
import { Dialog, DialogContent, Box } from "@mui/material";
import { galleryImages } from "@/data/galleryImages";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: {
    heading: "Gallery",
  },
  it: {
    heading: "Galleria",
  },
};

export default function Gallery() {
  const { language } = useLanguage();
  const lbl = t[language] || t.en;  // Imposta la lingua corretta o il default "en"

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {lbl.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            // Traduci titolo e descrizione in base alla lingua selezionata
            const translatedTitle = image.translations[language]?.title;
            const translatedDescription = image.translations[language]?.description;

            return (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.imageUrl}
                  alt={translatedTitle}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{translatedTitle}</h3>
                  <p className="text-primary-600 text-sm">{translatedDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ p: 0, bgcolor: "transparent", border: "none" }}>
          {selectedImage !== null && (
            <Box className="bg-white rounded-lg overflow-hidden">
              {/* Applica la traduzione anche qui */}
              <img
                src={galleryImages[selectedImage].imageUrl}
                alt={galleryImages[selectedImage].translations[language]?.title || ""}
                className="w-full h-auto"
              />
              <Box p={2}>
                {/* Traduci titolo e descrizione nella finestra di dialogo */}
                <h3 className="font-bold text-xl mb-2">
                  {galleryImages[selectedImage].translations[language]?.title ||
                    galleryImages[selectedImage].translations[language]?.title || ""}
                </h3>
                <p className="text-primary-600">
                  {galleryImages[selectedImage].translations[language]?.description ||
                    galleryImages[selectedImage].translations[language]?.description || ""}
                </p>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
