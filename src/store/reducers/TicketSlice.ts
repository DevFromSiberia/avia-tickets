import { Ticket } from '../../models/TiketModel'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TicketState {
  tickets: Ticket[]
  isLoading: boolean
  error: string
  sortTypes: string[]
  currentSorter: string
}

const initialState: TicketState = {
  tickets: [],
  isLoading: false,
  error: '',
  sortTypes: ['Самый дешевый', 'Самый быстрый', 'Самый оптимальный'],
  currentSorter: '',
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
    setSort(state, action: PayloadAction<string>) {
      state.currentSorter = action.payload
      switch (state.currentSorter) {
        case state.sortTypes[0]:
          state.tickets.sort((a, b) => a.price - b.price)
          break
        case state.sortTypes[1]:
          state.tickets.sort((a, b) => a.duration - b.duration)
          break
        case state.sortTypes[2]:
          state.tickets.sort((a, b) => {
            let ticket_1 = !a.connectionAmount ? 0 : a.connectionAmount
            let ticket_2 = !b.connectionAmount ? 0 : b.connectionAmount
            return ticket_1 - ticket_2
          })
          break
        default:
          state.tickets.sort((a, b) => a.id - b.id)
          break
      }
    },
  },
})

export default ticketSlice.reducer
