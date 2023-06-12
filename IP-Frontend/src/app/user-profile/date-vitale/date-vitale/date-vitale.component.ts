import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import mqtt from 'mqtt/dist/mqtt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-date-vitale',
  templateUrl: './date-vitale.component.html',
  styleUrls: ['./date-vitale.component.css'],
})
export class DateVitaleComponent implements OnInit {
  @Input() userId: string = '';

  public mqttTopic: string = 'careband_iot_topic';
  public mqttMessage: string = '';
  ekgIndex: Array<number> = Array.from(Array(124).keys());
  ekgStringArray: string[] = [];
  ekgValues: Array<number> = Array(124).fill(1);

  bpmValue = document.getElementById("bpmText");
  tempValue = document.getElementById("tempText");
  bpm = '2';
  temp= '2';
  umiditate='2';

  chart = new Chart('MyChart', {
    type: 'line', //this denotes tha type of chart
    data: {
      // values on X-Axis
      labels: this.ekgIndex,
      datasets: [
        {
          data: this.ekgIndex,
          backgroundColor: 'primary',
        },
      ],
    },
    options: {
      aspectRatio: 2.5,
    },
  });

  constructor() {
    this.ekgIndex.forEach((element) => {
      this.ekgStringArray[element] = element.toString();
    });
  }

  updateChart = (params: any) => {
    this.ekgValues = params;
    this.chart.data = {
      labels: this.ekgIndex,
      datasets: [
        {
          label: 'ECG',
          data: this.ekgValues,
          backgroundColor: 'primary',
        },
      ],

    };
    this.chart.update();
  };

  updateValues(bpm: string, temp: string, umiditate: string){
    this.bpm = bpm;
    this.temp = temp;
    this.umiditate = umiditate
    this.bpmValue?.setAttribute('value', bpm);

    this.tempValue?.setAttribute('value', temp);
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart
      data: {
        // values on X-Axis
        labels: this.ekgIndex,
        datasets: [
          {
            label: 'ECG',
            data: this.ekgValues,
            backgroundColor: 'primary',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        animation:{
          duration: 0
        }
      },
    });
  }

  ngOnInit() {
    this.createChart();
    var client = mqtt.connect('ws://test.mosquitto.org:8080/mqtt');

    client.on('connect', function () {
      client.subscribe('careband_iot_topic', function (err) {
        if (!err) {
          console.log('connected to iot server');
        }
      });
    });

    client.on('message', (mqttTopic, message) => {
      // message is Buffer
      //console.log(message.toString())
      console.log(JSON.parse(message.toString()));
      let deserialized = JSON.parse(message.toString());
      this.updateChart(deserialized['Ekg']);
      this.updateValues(deserialized["Bpm"], deserialized["Temp"], deserialized["Umiditate"])
    });
  }
}
