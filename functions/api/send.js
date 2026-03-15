export async function onRequestPost(context){

const webhook = context.env.DISCORD_WEBHOOK_URL

const body = await context.request.json()

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
content: body.message
})
})

return new Response(JSON.stringify({ok:true}),{
headers:{ "Content-Type":"application/json"}
})

}
