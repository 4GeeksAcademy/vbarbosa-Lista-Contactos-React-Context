

export const initialStore = () => {

  return {
    agendas: null,
    agenda: null,
  }
}
//  NO PUEDE SER ASYNC!!!!
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_agenda_by_slug':
      return {
        ...store,
        agenda: action.payload
      }
    
    default:
      throw Error('Unknown action.');
  }
}