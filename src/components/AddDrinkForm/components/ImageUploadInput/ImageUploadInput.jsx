import { useState } from 'react';

const ImageUploadInput = ({ handelFileChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = event => {
    const file = event.target.files[0];
    setSelectedImage(file);
    handelFileChange(file);
  };

  return (
    <>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <img src={URL.createObjectURL(selectedImage)} alt="Selected Preview" />
      )}
    </>
  );
};

export default ImageUploadInput;
