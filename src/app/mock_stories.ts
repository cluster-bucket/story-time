import { Story } from './story';

export const STORIES: Story[] = [
  {
    id: 1,
    title: 'Account Holder withdraws cash',
    role: 'Account Holder',
    feature: 'Withdraw cash from an ATM',
    benefit: 'Get money when the bank is closed',
    scenarios: [
      {
        id: 0,
        title: 'Account has sufficient funds',
        given: 'The account balance is $100',
        event: 'The Account Holder requests $20',
        outcome: 'The ATM should dispense $20'
      }
    ]
  }
];
