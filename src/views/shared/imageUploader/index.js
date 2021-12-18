import React, { useState } from 'react';
import styled from 'styled-components';

import { uploadImage } from '../../../firebase/storage';

const ImageUploader = ({ onChange, thumbnailUrl }) => {
  const [imageLocalUrl, setImageLocalUrl] = useState(thumbnailUrl || '');

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageLocalUrl(reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      const url = await uploadImage(file);
      onChange(url);
    } else {
      setImageLocalUrl('');
      onChange('');
    }
  };
  return (
    <Container>
      <PreviewImage>
        <label>
          {
            imageLocalUrl
              ? <img src={imageLocalUrl} alt="" /> : 'add image'
          }

          <input
              type="file"
              onChange={handleChange}
          />
        </label>
      </PreviewImage>

    </Container>
  );
};

const Container = styled.div`
  
`;
const PreviewImage = styled.div`
  background-color: #eee;
  width: 120px;
  height: 120px;
  cursor: pointer;
  label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  input {
    display: none;
  }
`;
export default ImageUploader;
