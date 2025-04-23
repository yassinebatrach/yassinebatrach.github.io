
import { galleryImages } from "@/data/galleryImages";
import { useState } from "react";
import { Dialog, DialogContent, Box } from "@mui/material";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Galleria</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.imageUrl} 
                alt={image.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                <p className="text-primary-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog 
        open={selectedImage !== null} 
        onClose={closeModal}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ p: 0, bgcolor: 'transparent', border: 'none' }}>
          {selectedImage !== null && (
            <Box className="bg-white rounded-lg overflow-hidden">
              <img 
                src={galleryImages[selectedImage].imageUrl} 
                alt={galleryImages[selectedImage].title} 
                className="w-full h-auto"
              />
              <Box p={2}>
                <h3 className="font-bold text-xl mb-2">{galleryImages[selectedImage].title}</h3>
                <p className="text-primary-600">{galleryImages[selectedImage].description}</p>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
