// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  if (req.method === 'POST') {
    const {event,model} = req.body;
    res.status(200).json({ event, model });
    console.log('webhokhandler worked event is :',event)
    console.log('webhokhandler worked model is:',model)
  } else {
    // Handle any other HTTP method
    const data = {
      model: model,
    }
    res.status(200).json({ model });
  }
  
  }

 