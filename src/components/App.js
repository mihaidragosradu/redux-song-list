import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div
      className="ui container grid"
      style={{
        marginTop: '48px',
        borderTop: '1px solid #121212',
        paddingTop: '24px',
      }}
    >
      <div className="ui row">
        <div className="column eight wide">
          {' '}
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
