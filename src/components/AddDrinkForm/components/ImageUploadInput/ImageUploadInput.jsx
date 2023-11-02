import PropTypes from 'prop-types';
import { useState } from 'react';

import { ReactComponent as MySvg } from 'img/svg/addIMG_File.svg';
import { FileUploader } from 'react-drag-drop-files';
import { RefreshCcw } from 'lucide-react';

import css from './ImageUploadInput.module.css';

const fileTypes = ['JPG', 'PNG', 'GIF'];

const ImageUploadInput = ({ handelFileChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = file => {
    setSelectedImage(file);
    handelFileChange(file);
  };

  return (
    <>
      <FileUploader
        id="image"
        name="image"
        types={fileTypes}
        handleChange={handleImageChange}
        hoverTitle={'Drop image here'}
        classes={`${css['file-uploader']}`}
      >
        <div className={css['drop-file-block']}>
          {selectedImage ? (
            <>
              <RefreshCcw
                width="50"
                height="50"
                className={css['svg-refresh']}
              />
              <img
                className={css['img-preview']}
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Preview"
              />
            </>
          ) : (
            <>
              <MySvg width="50" height="50" className={css['svg-add']} />
              <p>Add image</p>
            </>
          )}
        </div>
        {/* {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected Preview"
          />
        )} */}
      </FileUploader>
    </>
  );
};

export default ImageUploadInput;

ImageUploadInput.propTypes = {
  handelFileChange: PropTypes.func.isRequired,
};
