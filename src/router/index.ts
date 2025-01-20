import { createRouter,createWebHistory,RouteRecordRaw, } from "vue-router";  
import chapter1 from "./chapter1";
const routes:RouteRecordRaw[]=[
    ...chapter1
]
const router =createRouter({
    history:createWebHistory(),
    routes

})
export default router