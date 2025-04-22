
export const initialStore = () => {

  return {
    agendas: null,
    agenda: null
  }
  
}

//  NO PUEDE SER ASYNC!!!!
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_my_agenda':
      return {
        ...store,
        agenda: action.payload
      }
      
    // case 'get_agendas':
    //   return {
    //     ...store,
    //     agendas: action.payload
    //   }

    default:
      throw Error('Unknown action.');
  }
}