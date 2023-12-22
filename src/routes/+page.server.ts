import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({apiKey: OPENAI_API_KEY});

export const actions = {
	generateImage: async({request}: {request: any}) => {
		console.log(await request.formData());
		let promptRequest = await request.formData();
		let prompt = promptRequest.get('imgPrompt') || "wtf";
		const image = await openai.images.generate({
			prompt: prompt.toString(),
			response_format: 'b64_json'
		});	

		// * wtf do i do brooooo???

		return {
			b64: image.data,
		};
	}
};
