import {Component, Input, OnDestroy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnDestroy, AfterViewInit  {
  @Input() pokemon: any;
  audioUrl: string = '';
  @ViewChild('audioPlayer') audioElement!: ElementRef<HTMLAudioElement>;

  progress: number = 0;
  durationDisplay: string = '0:00';
  playButtonIcon: SafeHtml;
  private updateInterval: any;

  private readonly playIcon = `<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>`;

  private readonly pauseIcon = `<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
  </svg>`;

  constructor(private sanitizer: DomSanitizer, private changeDetector: ChangeDetectorRef) {
    this.playButtonIcon = this.sanitizer.bypassSecurityTrustHtml(this.playIcon);
  }

  ngAfterViewInit() {
    if (this.pokemon?.default_variety?.cry_url) {
      this.audioUrl = this.pokemon.default_variety.cry_url;
      this.changeDetector.detectChanges();
    }

    const audio = this.audioElement.nativeElement;
    audio.addEventListener('loadedmetadata', () => this.updateDuration());
    audio.addEventListener('ended', () => this.onAudioEnded());

    this.updateInterval = setInterval(() => {
      if (!audio.paused) {
        this.updateProgress();
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    const audio = this.audioElement.nativeElement;
    audio.removeEventListener('loadedmetadata', () => this.updateDuration());
    audio.removeEventListener('ended', () => this.onAudioEnded());
  }

  togglePlay() {
    const audio = this.audioElement.nativeElement;
    if (audio.paused) {
      audio.play();
      this.playButtonIcon = this.sanitizer.bypassSecurityTrustHtml(this.pauseIcon);
    } else {
      audio.pause();
      this.playButtonIcon = this.sanitizer.bypassSecurityTrustHtml(this.playIcon);
    }
  }

  onSeek(event: Event) {
    const audio = this.audioElement.nativeElement;
    const target = event.target as HTMLInputElement;
    const time = (Number(target.value) / 100) * audio.duration;
    audio.currentTime = time;
    this.updateProgress();
  }

  private updateProgress() {
    const audio = this.audioElement.nativeElement;
    this.progress = (audio.currentTime / audio.duration) * 100;
  }

  private updateDuration() {
    const audio = this.audioElement.nativeElement;
    const duration = Math.round(audio.duration);
    this.durationDisplay = `0:${duration.toString().padStart(2, '0')}`;
  }

  private onAudioEnded() {
    this.progress = 0;
    this.playButtonIcon = this.sanitizer.bypassSecurityTrustHtml(this.playIcon);
  }
}
