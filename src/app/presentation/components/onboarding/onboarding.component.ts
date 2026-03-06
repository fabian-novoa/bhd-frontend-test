import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton, ModalController } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

register();

interface OnboardingSlide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonButton
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnboardingComponent {
  currentSlide = signal(0);
  
  slides: OnboardingSlide[] = [
    {
      title: 'Puedes ver tus\nproductos',
      description: '',
      image: '/assets/images/money.svg'
    },
    {
      title: 'Ahorra tiempo realizando transacciones de forma rápida y segura',
      description: '',
      image: '/assets/images/stopwatch.svg'
    },
    {
      title: 'Aprovecha las ofertas\nque tenemos para ti',
      description: '',
      image: '/assets/images/tag.svg'
    }
  ];

  constructor(private modalController: ModalController) {}

  onSlideChange(event: any) {
    const swiper = event.target.swiper;
    this.currentSlide.set(swiper.activeIndex);
  }

  nextSlide() {
    const swiper = document.querySelector('swiper-container') as any;
    
    if (!swiper || !swiper.swiper) {
      return;
    }
    
    const currentIndex = swiper.swiper.activeIndex;
    
    if (currentIndex >= this.slides.length - 1) {
      this.close();
      return;
    }
    
    swiper.swiper.slideNext();
  }

  close() {
    this.modalController.dismiss();
  }

  get isLastSlide(): boolean {
    return this.currentSlide() === this.slides.length - 1;
  }
}
