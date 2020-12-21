import React from 'react';
import {UncontrolledReactSVGPanZoom} from 'react-svg-pan-zoom';

export default class SVG extends React.PureComponent {

  Viewer = null

  componentDidMount() {
    this.Viewer.fitToViewer();
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={() => this.Viewer.zoomOnViewerCenter(1.1)}>Zoom in</button>
        <button className="btn" onClick={() => this.Viewer.fitSelection(40, 40, 200, 200)}>Zoom area 200x200</button>
        <button className="btn" onClick={() => this.Viewer.fitToViewer()}>Fit</button>

        <hr/>

        <UncontrolledReactSVGPanZoom
          width={500} height={500}
          ref={Viewer => this.Viewer = Viewer}

          onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
        >
          <svg width={617} height={316}>
            <g fillOpacity=".5" strokeWidth="4">
              <rect x="400" y="40" width="100" height="200" fill="#4286f4" stroke="#f4f142"/>
              <circle cx="108" cy="108.5" r="100" fill="#0ff" stroke="#0ff"/>
              <circle cx="180" cy="209.5" r="100" fill="#ff0" stroke="#ff0"/>
              <circle cx="220" cy="109.5" r="100" fill="#f0f" stroke="#f0f"/>
            </g>
          </svg>
        </UncontrolledReactSVGPanZoom>
      </div>
    );
  }
}
