export class CustomMap {
  private googleMap: google.maps.Map;


  constructor(divId: string) {
    const element = document.getElementById(divId);
    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

}
