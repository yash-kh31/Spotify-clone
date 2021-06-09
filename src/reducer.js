export const initialState={
    user:null ,
    playlists: [] ,
    playing : false , 
    item:null ,
    //token:"BQACP5Cb67iwqG1LnPxYjC3uZ4RoCdy46NAdlv6eOMFiDxTGnV338CCc0dKotcGeqzr3je5TsJzBFre5gQ9BNg87Is2VKQDpp60CXaRwSOvvBlsJIJRLTr4xvtfasBtKKX1U38JJn8r52MhuzGw143hIsAHJRHKvPhdAnlR7ZAPg7z2yw9M5"
}

const reducer = (state , action ) => {

    console.log(action);

    switch(action.type) {
        case "SET_USER" : 
          return {
              ...state,
              user:action.user
          };
        case "SET_TOKEN" :
          return{
              ...state ,
              token : action.token

          }; 
        case "SET_PLAYLISTS" :
            return {
                ...state,
                playlists:action.playlists
            } 
        case "SET_DISCOVER_WEEKLY" :
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }      
          default : 
          return state;    
    }

}

export default reducer;