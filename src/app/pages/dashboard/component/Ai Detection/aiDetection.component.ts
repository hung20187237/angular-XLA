import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aiDetection',
  templateUrl: './aiDetection.component.html',
  styleUrls: ['./aiDetection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AiDetectionComponent implements OnInit {
  @ViewChild('source', {static: false}) sourceElement: ElementRef | any;
  @ViewChild('img_res', {static: false}) imgResElement: ElementRef | any;
  images: Array<{ src: string; alt: string }> = [];
  examples: Array<{ src: string; alt: string }> = [];
  imageForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.images = [
      {
        src: "../../../assets/img/slide/cartoonized_1.jpg",
        alt: "Ảnh 1"
      },
      {
        src: "../../../assets/img/slide/cartoonized_2.jpg",
        alt: "Ảnh 2"
      },
      {
        src: "../../../assets/img/slide/cartoonized_3.jpg",
        alt: "Ảnh 3"
      },
      {
        src: "../../../assets/img/slide/cartoonized_4.jpg",
        alt: "Ảnh 4"
      },
      {
        src: "../../../assets/img/slide/cartoonized_5.jpg",
        alt: "Ảnh 5"
      },
    ];
    this.examples = [
      {
        src: "../../../assets/img/slide/fiamma.jpg",
        alt: "Ảnh 1"
      },
      {
        src: "../../../assets/img/slide/caynui.jpg",
        alt: "Ảnh 2"
      },
      {
        src: "../../../assets/img/slide/baby.jpg",
        alt: "Ảnh 3"
      },
      {
        src: "../../../assets/img/slide/Thy.jpg",
        alt: "Ảnh 4"
      },
    ];
    this.imageForm = this.formBuilder.group({
      snap: new FormControl()
    });
  }
}
