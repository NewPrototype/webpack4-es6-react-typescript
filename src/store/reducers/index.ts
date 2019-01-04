import { INIT }  from 'store/actions';

const initState = {
  permission_menus: [],

};
export default function app(state = initState, action:{type:string,params:{}}) {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state,{...action.params} );
    default:
      return state;
  }
}
