import {createApp} from "./app";

export default context =>{
    return new Promise((resolve,reject)=>{
        const {app,router} = createApp(context);
        // 跳转首屏地址;
        router.push(context.url);
        router.onReady(()=>{
            resolve(app)
        },reject);
    })
}