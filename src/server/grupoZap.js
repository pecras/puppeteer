const express=require('express')
const app=express()
const porta=process.env.PORT



app.get('/',(req,res)=>{
    res.send('seja bem-vindo')
})

app.listen(porta || 3000,()=>{console.log('Servidor ativo')})