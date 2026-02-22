import { GoogleGenerativeAI } from '@google/generative-ai';

const key = process.env.GEMINI_API_KEY;

if (!key) {
  console.error('❌ GEMINI_API_KEY environment variable is not set.');
  console.error('Set it with: $env:GEMINI_API_KEY="your-key-here"');
  process.exit(1);
}

console.log(`🔑 Key detected (starts with: ${key.substring(0, 8)}...)`);
console.log('📡 Testing Gemini API call...\n');

try {
  const genAI = new GoogleGenerativeAI(key);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  const result = await model.generateContent('Say "Hello, the Gemini API is working!" in one sentence.');
  const text = result.response.text();
  console.log('✅ SUCCESS! Gemini responded:');
  console.log(text);
} catch (error) {
  console.error('❌ FAILED:', error.message);
  if (error.message.includes('API_KEY_INVALID')) {
    console.error('\n→ Your API key is invalid. Get a new one at: https://aistudio.google.com/apikey');
  } else if (error.message.includes('PERMISSION_DENIED')) {
    console.error('\n→ The Generative Language API may not be enabled for your project.');
    console.error('→ Go to: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
  } else if (error.message.includes('quota')) {
    console.error('\n→ You hit a quota limit. Check: https://aistudio.google.com/apikey');
  }
}
