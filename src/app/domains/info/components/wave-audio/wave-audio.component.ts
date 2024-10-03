import { AfterViewInit, Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent implements AfterViewInit {

  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;

  private waveRef!: WaveSurfer;
  isPlaying = signal(false);
  ngAfterViewInit() {
    this.waveRef = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
      waveColor: 'violet',
      progressColor: 'purple'
    });
    this.waveRef.on('play', () => {
      this.isPlaying.set(true);
    });
    this.waveRef.on('pause', () => {
      this.isPlaying.set(false);
    });
  }

  playPause() {
    this.waveRef.playPause();
  }
}
