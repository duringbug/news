import { createStore } from '../src/store'
declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $store: createStore;
    }
}