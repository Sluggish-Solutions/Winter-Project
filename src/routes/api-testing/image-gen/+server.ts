import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});
 
// Set the runtime to edge for best performance
export const config = {
  runtime: 'edge'
};
 
export async function GET (request){
  const { prompt } = await request.json();
  import OpenAI from "openai";

  const openai = new OpenAI();
  
  async function main() {
    const image = await openai.images.generate({ prompt: "A cute baby sea otter" });
  
    console.log(image.data);
  }
  main();
  // Ask OpenAI for a streaming completion given the prompt
  const response = await openaiimport OpenAI from "openai";

  const openai = new OpenAI();
  
  async function main() {
    const image = await openai.images.generate({ prompt: "A cute baby sea otter" });
  
    console.log(image.data);
  }
  main();
  let image_url = response.data.data[0].url;
 
  // Convert the response into a friendly text-stream
  console.log(image_url)
  // Respond with image url
  return image_url;
}