import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular/standalone';
import { OnboardingComponent } from './onboarding.component';

describe('OnboardingComponent', () => {
  let component: OnboardingComponent;
  let fixture: ComponentFixture<OnboardingComponent>;
  let modalController: jasmine.SpyObj<ModalController>;

  beforeEach(async () => {
    const modalControllerSpy = jasmine.createSpyObj('ModalController', ['dismiss']);

    await TestBed.configureTestingModule({
      imports: [OnboardingComponent],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy }
      ]
    }).compileComponents();

    modalController = TestBed.inject(ModalController) as jasmine.SpyObj<ModalController>;
    fixture = TestBed.createComponent(OnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 slides', () => {
    expect(component.slides.length).toBe(3);
  });

  it('should have correct slide content', () => {
    expect(component.slides[0].title).toBe('Puedes ver tus productos');
    expect(component.slides[0].image).toBe('/assets/images/money.svg');

    expect(component.slides[1].title).toBe('Ahorra tiempo realizando transacciones de forma rápida y segura');
    expect(component.slides[1].image).toBe('/assets/images/stopwatch.svg');

    expect(component.slides[2].title).toBe('Aprovecha las ofertas que tenemos para ti');
    expect(component.slides[2].image).toBe('/assets/images/tag.svg');
  });

  it('should initialize with first slide', () => {
    expect(component.currentSlide()).toBe(0);
  });

  it('should update current slide on slide change', () => {
    const mockEvent = {
      target: {
        swiper: {
          activeIndex: 1
        }
      }
    };

    component.onSlideChange(mockEvent);
    expect(component.currentSlide()).toBe(1);
  });

  it('should return false for isLastSlide on first slide', () => {
    component.currentSlide.set(0);
    expect(component.isLastSlide).toBe(false);
  });

  it('should return true for isLastSlide on last slide', () => {
    component.currentSlide.set(2);
    expect(component.isLastSlide).toBe(true);
  });

  it('should close modal when calling close()', () => {
    component.close();
    expect(modalController.dismiss).toHaveBeenCalled();
  });

  it('should navigate to next slide when not on last slide', () => {
    component.currentSlide.set(0);
    
    const mockSwiper = {
      swiper: {
        slideNext: jasmine.createSpy('slideNext')
      }
    };
    
    spyOn(document, 'querySelector').and.returnValue(mockSwiper as any);
    
    component.nextSlide();
    expect(mockSwiper.swiper.slideNext).toHaveBeenCalled();
  });

  it('should close modal when on last slide and calling nextSlide()', () => {
    component.currentSlide.set(2);
    spyOn(component, 'close');
    
    component.nextSlide();
    expect(component.close).toHaveBeenCalled();
  });
});
