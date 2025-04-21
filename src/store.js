
export const initialStore = () => {

  return {
    message: null,
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

    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    default:
      throw Error('Unknown action.');
  }
}