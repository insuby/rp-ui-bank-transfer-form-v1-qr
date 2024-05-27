import { Bet } from '@typings/bet';

export type User = {
  id: number
  email: string
  username: string
  balance: number
  bet: Pick<Bet, 'price' | 'coefficient' | 'potential_win' | 'created_at'>
};