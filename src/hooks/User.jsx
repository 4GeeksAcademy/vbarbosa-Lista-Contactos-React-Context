
export const createUser = () => {

    const url = 'https://playground.4geeks.com/contact/agendas/vbarbosa';
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
      
    const getAgenda = () => {
        fetch(url,options)
      
            .then(response => {
                console.log(response)
                if (!response.ok) throw new Error (`error status code:${response.status}`)
                   return response.json()
                  
            })
            .then(parsedJson => {
                console.log(parsedJson.contacts);
                setList(parsedJson.contacts);
            })
      
            .catch(err => console.log(err))
          }     
    return (
        getAgenda()
    );
}