import React, { useState } from 'react';
import { TourModel } from '../../models/tour.model';
import {
  Article,
  Image,
  Footer,
  TourInfo,
  Name,
  Price,
  Paragraph,
  Button,
  DeleteButton,
} from './styles/TourStyles';

interface TourProps {
  tour: TourModel;
  removeTour: Function;
}

const Tour: React.FC<TourProps> = ({
  tour: { id, name, info, image, price },
  removeTour,
}) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <Article>
      <Image src={image} alt={name} />
      <Footer>
        <TourInfo>
          <Name>{name}</Name>
          <Price className='tour-price'>${price}</Price>
        </TourInfo>
        <Paragraph>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <Button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'show more'}
          </Button>
        </Paragraph>
        <DeleteButton className='delete-btn' onClick={() => removeTour(id)}>
          not interested
        </DeleteButton>
      </Footer>
    </Article>
  );
};

export default Tour;
