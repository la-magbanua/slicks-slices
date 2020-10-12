import { useState, useEffect } from 'react';

const deets = `
  _id
  name
  image {
    asset {
      url
      metadata {
        lqip
      }
    }
  }
`;

export default function useLatestData() {
  const [slicemasters, setSlicemasters] = useState();
  const [hotslices, setHotslices] = useState();

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            StoreSettings(id: "downtown") {
              _id
              name
              slicemasters {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setSlicemasters(res.data.StoreSettings.slicemasters);
        setHotslices(res.data.StoreSettings.hotSlices);
      })
      .catch(e => console.log(e));
  }, []);

  return { slicemasters, hotslices };
}
