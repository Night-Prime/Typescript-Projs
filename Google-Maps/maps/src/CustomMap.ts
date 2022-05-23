import { User } from './User';
import { Company } from './Company';

// Instruction to other class on how they can be arguments to the addMarker Method
export interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  // making sure anyone else cannot use the this instance of the map class

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable):void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}

// All of these is to provide a level of abstraction for our Google map project
