import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pagename: string = 'Ваше местоположение';
  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  latitude: number;
  longitude: number;
  markers: any = [
    {
        title: "National Art Gallery",
        latitude: "-17.824991",
        longitude: "31.049295"
    },
    {
        title: "West End Hospital",
        latitude: "-17.820987",
        longitude: "31.039682"
    },
    {
        title: "Dominican Convent School",
        latitude: "-17.822647",
        longitude: "31.052042"
    },
    {
        title: "Chop Chop Brazilian Steakhouse",
        latitude: "-17.819460",
        longitude: "31.053844"
    },
    {
        title: "Canadian Embassy",
        latitude: "-17.820972",
        longitude: "31.043587"
    }
  ];

  constructor(private geolocation: Geolocation, private navCtrl: NavController) {}

  ionViewDidEnter() {
    this.getGeolocation();
    
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p>Latitude: ' + marker.latitude + '</p>' +
                              '<p>Longitude: ' + marker.longitude + '</p>' +
                            '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.markers = [
        {
          title: 'Мое местоположение',
          latitude: resp.coords.latitude,
          longitude: resp.coords.longitude
        }
      ];
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const location = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
    gotoSharePage(): void{
      this.navCtrl.navigateForward('tabs/share');
    }

  

}
