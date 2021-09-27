import { OptionCardComponent } from './option-card.component';
import {ComponentFixture,TestBed} from '@angular/core/testing';


describe('OptionCardComponent',()=>{
    let component:OptionCardComponent;
    let fixture:ComponentFixture<OptionCardComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations:[OptionCardComponent]
        }).compileComponents()
    })

    beforeEach(()=>{
        fixture = TestBed.createComponent(OptionCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should be created',()=>{
        expect(component).toBeTruthy();
    })

    // it('should contain the option name initially',()=>{

    //     expect(component.option).toBe('option name')
    // })
})