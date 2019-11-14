import { Component, OnInit } from '@angular/core';
import { Account } from "./models/account";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private limit: number = 3;
  private config: object = {
    accountNumber: '',
    accountBalance: ''
  }

  private accounts: Account[] = [
		new Account(1, 'IRA', 5200, 5763.36, 5767.97),
		new Account(2, 'AAA', 1812, 2010926.12, 2006703.16),
		new Account(3, 'AAA', 3810, 10050054.07,  10043019.98),	
		new Account(4, 'REG', 2019, 13465679.34, 13465679.34),
		new Account(5, 'IRA', 146, 15884302.39, 15879537.02),
		new Account(6, 'AAA', 29, 39160334.42, 39187746.61)
	];

	constructor() { }
  
  ngOnInit() { }

  loadMore() {
    this.limit++;
  }

  calculateCashChange(today: number, yesterday: number): number {
    return Math.abs(today - yesterday);
  };
  
  calculatePercentageChange(today: number, yesterday: number): string {
    let sign = '';

    if (Math.sign(today - yesterday) < 0) {
      sign = '-';
    } else if (Math.sign(today - yesterday) > 0) {
      sign = '+';
    }

    return `${sign}${((this.calculateCashChange(today, yesterday)/yesterday) * 100).toFixed(2)}%`;
  };

  sort(sortKey: string): void {
    if(this.config[sortKey] === 'ascending') {
      this.config[sortKey] = 'descending';
      this.accounts.sort((a, b) => (a[sortKey] < b[sortKey]) ? 1 : -1);
    } else {
      this.config[sortKey] = 'ascending';
      this.accounts.sort((a, b) => (a[sortKey] < b[sortKey]) ? 1 : -1).reverse();
    }
  }
}
