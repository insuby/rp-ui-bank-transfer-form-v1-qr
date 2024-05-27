export type Bet = {
  coefficient: 1.7
  created_at: Date
  game: number
  id: string
  is_active: boolean
  is_multiplier: boolean
  potential_win: string
  price: string
  result_bet: 'Win' | 'Prop'
  user: number
  username: string
}