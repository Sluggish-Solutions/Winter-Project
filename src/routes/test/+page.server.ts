import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({apiKey: OPENAI_API_KEY})
export const load = (async () => {
	const image = await openai.images.generate({
		prompt: 'cat', 
		response_format:'b64_json'
	})

	console.log(image)
	  
	return {base64: image.data[0].b64_json}
	//return {url: image.data.url}
}) 