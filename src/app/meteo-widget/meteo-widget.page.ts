import { Component, OnInit , Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meteo-widget',
  templateUrl: './meteo-widget.page.html',
  styleUrls: ['./meteo-widget.page.scss'],
})
export class MeteoWidgetPage implements OnInit {

  constructor(private httpClient: HttpClient, private renderer: Renderer2, private elementRef: ElementRef) { }

  payName1!:string;
  payData:any;
  country: any;
  temps: any;
  pays: any;
  hum: any;
  WeatherData: any;
  payName:any;

  getWeatherData(): void {
    this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q="+this.payName1+"&appid=f4139d42484a375c7747d500b4b37f71")
      .subscribe(
        (response) => {
          this.WeatherData = response;
          console.log(response);
          if (this.WeatherData) {
            this.pays = this.WeatherData['sys']['country'];
            this.hum = this.WeatherData['main']['humidity'];
            this.country = this.WeatherData['sys']['country'];
          }
        },
        (error) => {
          console.log('Error', error);
        }
      )
  }

  showInfos():void{
    
    this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q="+this.payName1+"&appid=f4139d42484a375c7747d500b4b37f71")
    .subscribe(
      (response) => {
        this.payData = response;
        console.log(response);
        if (this.payData) {
          this.pays = this.payData['sys']['country'];
          this.hum = this.payData['main']['humidity'];
          this.country = this.payData['sys']['country'];
        }
      },
      (error) => {
        console.log('Error', error);
      }
    )
  }

  getFunction(){
    this.renderer.listen(this.elementRef.nativeElement.querySelector('button'), 'click', () => {
      this.renderer.addClass(this.elementRef.nativeElement.querySelector('.pop-up'), 'open');
    });

    this.renderer.listen(this.elementRef.nativeElement.querySelector('.pop-up .close'), 'click', () => {
      this.renderer.removeClass(this.elementRef.nativeElement.querySelector('.pop-up'), 'open');
    });
  }

  ngOnInit() {
    this.getWeatherData(); 
    this.getFunction();
  }

}
