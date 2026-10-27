/**
 * Background Music Synthesizer (BGM) using Web Audio API
 * Generates an authentic, serene, upbeat, and child-friendly acoustic chime/marimba
 * melodic accompaniment tailored for Islamic educational adventures.
 */

class BackgroundMusicEngine {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private timerId: number | null = null;
  private currentStep: number = 0;
  public isEnabled: boolean = true;
  public volume: number = 0.35; // Gentle background level

  // Melodic scale: C major pentatonic with octave notes for calm warmth
  // C4, D4, E4, G4, A4, C5, D5, E5, G5
  private readonly MELODY_NOTES = [
    261.63, // C4 (0)
    293.66, // D4 (1)
    329.63, // E4 (2)
    392.00, // G4 (3)
    440.00, // A4 (4)
    523.25, // C5 (5)
    587.33, // D5 (6)
    659.25, // E5 (7)
    783.99, // G5 (8)
  ];

  // 16-step soothing adventure loop sequence (indexes in MELODY_NOTES, -1 for rest)
  private readonly MELODY_PATTERN = [
    5, 7, 8, 7, 5, 3, 4, 3,
    2, 3, 5, 3, 2, 0, 2, 3,
    5, 7, 8, 7, 5, 7, 8, 7,
    6, 5, 3, 4, 5, 3, 2, 0,
  ];

  // Soft root bass notes for chord accompaniment
  private readonly CHORD_BASS = [
    130.81, // C3
    110.00, // A2
    87.31,  // F2
    98.00,  // G2
  ];

  private initContext(): boolean {
    if (typeof window === 'undefined') return false;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return !!this.ctx;
  }

  /**
   * Play an acoustic marimba / chime bell timbre note
   */
  private playPluck(freq: number, time: number, duration: number = 0.45, gainMultiplier: number = 1.0) {
    if (!this.ctx || !this.isEnabled) return;

    try {
      const osc = this.ctx.createOscillator();
      const oscHarmonic = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Soft triangle + sine wave for gentle warm bell/chime feel
      osc.type = 'triangle';
      oscHarmonic.type = 'sine';

      osc.frequency.setValueAtTime(freq, time);
      oscHarmonic.frequency.setValueAtTime(freq * 2, time);

      // Low-pass filter to keep sound rounded and friendly
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, time);
      filter.frequency.exponentialRampToValueAtTime(400, time + duration);

      const targetGain = this.volume * 0.12 * gainMultiplier;
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(targetGain, time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(filter);
      oscHarmonic.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(time);
      oscHarmonic.start(time);
      osc.stop(time + duration + 0.05);
      oscHarmonic.stop(time + duration + 0.05);
    } catch {
      // Ignore audio scheduling errors
    }
  }

  /**
   * Play a soft warm background pad bass note
   */
  private playPad(freq: number, time: number, duration: number = 1.6) {
    if (!this.ctx || !this.isEnabled) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, time);

      const targetGain = this.volume * 0.06;
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(targetGain, time + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(time);
      osc.stop(time + duration + 0.1);
    } catch {
      // Silent catch
    }
  }

  private step() {
    if (!this.isRunning || !this.isEnabled || !this.ctx) return;

    const now = this.ctx.currentTime;
    const noteIdx = this.MELODY_PATTERN[this.currentStep % this.MELODY_PATTERN.length];

    if (noteIdx >= 0 && noteIdx < this.MELODY_NOTES.length) {
      const freq = this.MELODY_NOTES[noteIdx];
      // Accent on beat 1 and 3 of every 4 steps
      const isBeat = this.currentStep % 4 === 0;
      this.playPluck(freq, now, isBeat ? 0.6 : 0.38, isBeat ? 1.2 : 0.85);
    }

    // Every 8 steps (~1.8 seconds), play a warm chord root pad
    if (this.currentStep % 8 === 0) {
      const chordIdx = Math.floor(this.currentStep / 8) % this.CHORD_BASS.length;
      const bassFreq = this.CHORD_BASS[chordIdx];
      this.playPad(bassFreq, now, 1.7);
    }

    this.currentStep++;
  }

  public start() {
    if (this.isRunning) return;
    if (!this.initContext()) return;

    this.isRunning = true;
    this.currentStep = 0;

    // Tempo: ~135 BPM eighth notes = 222ms per step
    const stepIntervalMs = 230;
    this.timerId = window.setInterval(() => {
      this.step();
    }, stepIntervalMs);
  }

  public stop() {
    this.isRunning = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public toggle(): boolean {
    this.isEnabled = !this.isEnabled;
    if (this.isEnabled) {
      this.start();
    } else {
      this.stop();
    }
    return this.isEnabled;
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
  }

  public getIsPlaying(): boolean {
    return this.isRunning && this.isEnabled;
  }
}

export const bgm = new BackgroundMusicEngine();
