import { Ticket } from '../../models/TiketModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TicketState {
  tickets: Ticket[]
  isLoading: boolean
  error: string
}

const initialState: TicketState = {
  tickets: [],
  isLoading: false,
  error: '',
}

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true
    },
    usersFetchingSuccess(state, action: PayloadAction<Ticket[]>) {
      state.isLoading = false
      state.error = ''
      state.tickets = action.payload
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default ticketSlice.reducer
