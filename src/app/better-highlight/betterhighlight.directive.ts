import { Directive, Renderer2 ,OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {
  @Input() defaultColor:string ='transparent';
  @Input() hightlightColor:string ='purple';

  constructor(private renderer:Renderer2,private elementref:ElementRef) { }

  ngOnInit(){

  // Host bindinf or host listner you can use any of them
  //  this.renderer.setStyle(this.elementref.nativeElement,'background-color','red');
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseHover(event:Event){
   // this.renderer.setStyle(this.elementref.nativeElement,'background-color','green');
   this.backgroundColor=this.hightlightColor;
  }

  @HostListener('mouseleave') mouseLeave(event:Event){
  //  this.renderer.setStyle(this.elementref.nativeElement,'background-color','transparent');
    this.backgroundColor=this.defaultColor;
  }
 @HostBinding('style.backgroundColor') backgroundColor:string;
}
