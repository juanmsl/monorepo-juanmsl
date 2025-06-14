import { SpotifyAPI } from '@juanmsl/spotify-api';
import { useEffect, useState } from 'react';

import { BentoStyle } from './bento.style';

const spotifyAPI = new SpotifyAPI({
  client_id: 'b63b29d1ebfb46408e22d1af297296b3',
  client_secret: '15bdab613d894143a38fc4c9c9dd7bf9',
});

export const Bento = () => {
  const [data, setData] = useState<object>({});

  useEffect(() => {
    spotifyAPI.getProfile().then(setData);
  }, []);

  return (
    <BentoStyle>
      <p>{JSON.stringify(data)}</p>
    </BentoStyle>
  );
};
