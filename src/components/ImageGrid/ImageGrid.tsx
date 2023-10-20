import styles from './ImageGrid.module.css';

import { Block } from '../../blocks';
import { Hourglass } from 'react-loader-spinner';
import { formatDate, getImageDetailsArray } from '../../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type ImageGridProps = {
  data?: Block;
  isloading?: boolean;
};
export const ImageGrid = (props: ImageGridProps) => {
  let imageDetails: Block[] = [];
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const handleImageClick = (id: string) => {
    setSelectedImageId(id);
  }
  if (!props.isloading && props.data) {
    imageDetails = getImageDetailsArray(props.data);
  }
  return (
    <div className={styles.imageGrid}>
      {props.isloading ? (
        <div className={styles.spinner} data-testid="loader">
          <Hourglass
            colors={['#0ACA87 ', '#0ACA87 ']}
            height="110"
            width="110"
          />
        </div>
      ) : (
        <div data-testid="image-grid-div">
          {imageDetails.map((imageData, index) => (
            <Link
              to={{
                pathname: `/block/${imageData.id}`,
                state: {
                  id: imageData.id,
                  description: imageData?.data?.description,
                  dimensions:
                    imageData?.data?.height + ' X ' + imageData?.data?.width,
                  createdAt: formatDate(imageData?.data?.createdAt!),
                },
              }}
              key={index}
            >
              <img
                width={385}
                style={{
                  marginLeft: '12px',
                  marginRight: '12px',
                  paddingTop: '20px',
                  border: selectedImageId === imageData?.id ? '2px solid blue' : 'none',
                }}
                height={260}
                key={index}
                src={imageData.options?.url}
                alt={`Image ${index}`}
                onClick={() => handleImageClick(imageData?.id)}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
