import React from 'react';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tikt">Slicemasters On</span>
      </h2>
      <p>Standing by, ready to serve you</p>
      {!slicemasters ? <LoadingGrid count={4} /> : ''}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now!</p>
      )}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function HotSlices({ hotslices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tikt">Hot Slices On</span>
      </h2>
      <p>Come on by, buy some slices!</p>
      {!hotslices ? <LoadingGrid count={4} /> : ''}
      {hotslices && !hotslices?.length && <p>Nothing in the case</p>}
      {hotslices?.length && <ItemGrid items={hotslices} />}
    </div>
  );
}

export default function HomePage() {
  const { slicemasters, hotslices } = useLatestData();
  return (
    <div className="center">
      <h1>The Best Pizza In Downtown!</h1>
      <p>Open from 11am to 11pm Every Single Day!</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotslices={hotslices} />
      </HomePageGrid>
    </div>
  );
}
