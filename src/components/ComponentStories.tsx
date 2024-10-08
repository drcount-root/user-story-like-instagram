"use client";

import React from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';

function Copy() {
  return (
    <p>
      Jaguar shark! So tell me - does it really exist? Checkmate... Eventually,
      you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your
      scientists were so preoccupied with whether or not they could, they didnt
      stop to think if they should.
    </p>
  );
}

function HelpText() {
  return (
    <div
      className="box"
      style={{
        height: '90%',
        padding: '100px 24px',
        background:
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      }}
    >
      <h4>Hannad Rehman says:</h4>
      <Copy />
    </div>
  );
}

function ComponentWithInteractions() {
  return (
    <div
      className="box"
      style={{
        paddingTop: '100px',
        padding: '24px',
        backgroundColor: '#fad0c4',
        height: '100%',
      }}
    >
      <h4>Component with interactions</h4>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '24px' }}
      >
        <img src="https://images.pexels.com/photos/10955653/pexels-photo-10955653.jpeg?dpr=2&w=100" />
      </div>
      <p>
        You need to add <code>zindex &gt;= 2</code> to any interaction u want in
        the component
      </p>
      <button
        onClick={() =>
          window.open('https://www.pexels.com/@imadclicks', '_blank')
        }
        style={{
          color: '#3399FF',
          border: '1px solid',
          borderColor: '#3399FF',
          borderRadius: '3px',
          height: '30px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: '2',
          width: '100%',
        }}
      >
        Follow Imad Clicks on pexels for amazing pictures
      </button>
    </div>
  );
}

function ComponentApi(props: any) {
  return (
    <div
      className="box"
      style={{
        paddingTop: '100px',
        padding: '24px',
        backgroundColor: 'rgb(196, 220, 250)',
        height: '100%',
      }}
    >
      <h4>Component Api</h4>
      <br />
      <br />
      <h3>A story can be paused and resumed too !</h3>
      <br />
      <button
        onClick={() => props.pause()}
        style={{
          color: '#3399FF',
          border: '1px solid',
          borderColor: '#3399FF',
          borderRadius: '3px',
          height: '30px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: '2',
          width: '100%',
        }}
      >
        Pause Story
      </button>

      <br />
      <br />
      <button
        onClick={() => props.resume()}
        style={{
          color: 'rgb(255, 51, 108)',
          border: '1px solid',
          borderColor: 'rgb(255, 51, 108)',
          borderRadius: '3px',
          height: '30px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: '2',
          width: '100%',
        }}
      >
        Resume Story
      </button>
      <h5>Make Sure button zIndex is &gt;= 2</h5>

      <pre style={{ marginTop: '16px', padding: '16px' }}>
        {JSON.stringify(props, null, 2)}
      </pre>
      <h6>Story object passed in props </h6>
    </div>
  );
}

const ComponentStories = () => {
    const stories = [
        {
          type: 'component',
          duration: 9000,
          component: HelpText,
        },
        {
          type: 'component',
          duration: 30000,
          component: ComponentWithInteractions,
        },
        {
          duration: 9000,
          type: 'component',
          component: ComponentApi,
        },
      ];
    
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '16px',
          }}
        >
          <Stories width="400px" height="600px" stories={stories} />
        </div>
      );
}

export default ComponentStories;

