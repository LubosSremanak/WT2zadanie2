import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {OlympicService} from '../../shared/services/olympic.service';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {OlympicWinnerDetail} from '../../shared/model/olympic-winner-detail';

@Component({
  selector: 'app-olympic-winner-detail',
  templateUrl: './olympic-winner-detail.component.html',
  styleUrls: ['./olympic-winner-detail.component.css']
})
export class OlympicWinnerDetailComponent implements OnInit, AfterViewInit {
  @Input() id: number;
  @Input() animationState: string;
  @ViewChild('olympicDetail', {read: ViewContainerRef}) olympicDetailContainer: ViewContainerRef;

  constructor(private olympicService: OlympicService,
              private resolver: ComponentFactoryResolver,
  ) {
  }

  public getOlympicWinnerDetailById(id: number): void {
    this.olympicService.getOlympicWinner(id).subscribe(res => {
        const data: OlympicWinnerDetail = JSON.parse(JSON.stringify(res))[0];
        const componentFactory = this.resolver.resolveComponentFactory(PersonDetailComponent);
        this.olympicDetailContainer.clear();
        const personDetailComponent =
          this.olympicDetailContainer.createComponent(componentFactory).instance as PersonDetailComponent;
        personDetailComponent.olympicDetail = data;
        personDetailComponent.animationState = this.animationState;
      }
    );
  }

  ngAfterViewInit(): void {
    this.getOlympicWinnerDetailById(this.id);
  }

  ngOnInit(): void {
  }


}
