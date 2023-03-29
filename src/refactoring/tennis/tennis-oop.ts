interface TennisGames {
  wonPoint(playerName: string): void;
  getScore(): string;
}

enum Score {
  'Zero' = 0,
  'One' = 1,
  'Two' = 2,
  'Three' = 3,
  'Four' = 4,
}

export class TennisGame1 implements TennisGames {
  private p1Points = 0;
  private p2points = 0;
  private p1result = '';
  private p2result = '';

  constructor(private player1Name: string, private player2Name: string) {}

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name) this.P1Score();
    else this.P2Score();
  }

  getScore(): string {
    let score = '';
    if (this.p1Points === this.p2points && this.p1Points < Score.Four) {
      if (this.p1Points === Score.Zero) score = 'Love';
      if (this.p1Points === Score.One) score = 'Fifteen';
      if (this.p1Points === Score.Two) score = 'Thirty';
      score += '-All';
    }
    if (this.p1Points === this.p2points && this.p1Points >= Score.Three) score = 'Deuce';

    if (this.p1Points > Score.Zero && this.p2points === Score.Zero) {
      if (this.p1Points === Score.One) this.p1result = 'Fifteen';
      if (this.p1Points === Score.Two) this.p1result = 'Thirty';
      if (this.p1Points === Score.Three) this.p1result = 'Forty';

      this.p2result = 'Love';
      score = `${this.p1result}-${this.p2result}`;
    }
    if (this.p2points > Score.Zero && this.p1Points === Score.Zero) {
      if (this.p2points === Score.One) this.p2result = 'Fifteen';
      if (this.p2points === Score.Two) this.p2result = 'Thirty';
      if (this.p2points === Score.Three) this.p2result = 'Forty';

      this.p1result = 'Love';
      score = `${this.p1result}-${this.p2result}`;
    }

    if (this.p1Points > this.p2points && this.p1Points < Score.Four) {
      if (this.p1Points === Score.Two) this.p1result = 'Thirty';
      if (this.p1Points === Score.Three) this.p1result = 'Forty';
      if (this.p2points === Score.One) this.p2result = 'Fifteen';
      if (this.p2points === Score.Two) this.p2result = 'Thirty';
      score = `${this.p1result}-${this.p2result}`;
    }
    if (this.p2points > this.p1Points && this.p2points < Score.Four) {
      if (this.p2points === Score.Two) this.p2result = 'Thirty';
      if (this.p2points === Score.Three) this.p2result = 'Forty';
      if (this.p1Points === Score.One) this.p1result = 'Fifteen';
      if (this.p1Points === Score.Two) this.p1result = 'Thirty';
      score = `${this.p1result}-${this.p2result}`;
    }

    if (this.p1Points > this.p2points && this.p2points >= Score.Three) {
      score = `Advantage ${this.player1Name}`;
    }

    if (this.p2points > this.p1Points && this.p1Points >= Score.Three) {
      score = `Advantage ${this.player2Name}`;
    }

    if (this.p1Points >= Score.Four && this.p2points >= Score.Zero && this.p1Points - this.p2points >= Score.Two) {
      score = `Win for ${this.player1Name}`;
    }
    if (this.p2points >= Score.Four && this.p1Points >= Score.Zero && this.p2points - this.p1Points >= Score.Two) {
      score = `Win for ${this.player2Name}`;
    }
    return score;
  }

  private SetP1Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P1Score();
    }
  }

  private SetP2Score(score: number): void {
    for (let i = 0; i < score; i++) {
      this.P2Score();
    }
  }

  private P1Score(): void {
    this.p1Points++;
  }

  private P2Score(): void {
    this.p2points++;
  }
}
