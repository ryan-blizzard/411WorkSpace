import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';




const Dot = () => {
  
  return(

<div style={{display:'flex', alignItems:'center', justifyContent:'center', width: '20px', height:'20px', borderRadius:'100%', background:'green'}}>
<div style={{width: '5px',height:'5px', borderRadius:'100%', background: 'black' }}></div>
</div>
)
    }

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 30.407650,
      lng: -97.698321
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '300px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDzPR633SJCeNFzpXUwvVZvOqnITekaGyc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
      <Dot
        lat= {30.407650}
        lng= {-97.698321}
      />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;