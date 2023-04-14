import { ref } from "vue";
import type {Ref} from 'vue'
// what is usage of Ref? Sometimes we may need to specify complex types for a ref's inner value.We can do that by using the Ref type
//instance:const state:Ref<boolean> = ref(initState);
export function useToggle(initState:boolean) : [Ref<boolean>,()=>void]{
    const state = ref(initState)
    const toggle = function(){
        state.value = !state.value
    }
    return [state,toggle]
}
