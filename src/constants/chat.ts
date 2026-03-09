import { v4 as uuidv4 } from 'uuid';
import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';
import useStore from '@store/store';

const date = new Date();
const dateString =
  date.getFullYear() +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  ('0' + date.getDate()).slice(-2);

// default system message obtained using the following method: https://twitter.com/DeminDimin/status/1619935545144279040
export const _defaultSystemMessage =
  import.meta.env.VITE_DEFAULT_SYSTEM_MESSAGE ??
  `You are ChatGPT, a large language model trained by OpenAI.
Carefully heed the user's instructions. 
Respond in Japanese using Markdown.`;

export const modelOptions: ModelOptions[] = [
  'gpt-4.1-mini',
  'gpt-4.1-nano',
  'gpt-4.1',
  'o4-mini',
  'o3',
];

export const defaultModel = 'gpt-4.1-mini';

export const modelMaxToken = {
  'gpt-4.1': 1048576,
  'gpt-4.1-mini': 1048576,
  'gpt-4.1-nano': 1048576,
  'o4-mini': 200000,
  'o3': 200000,
  // Legacy models retained for backward compatibility with existing saved chats
  'o3-mini': 200000,
  'gpt-4o': 128000,
  'gpt-4o-mini': 128000,
};

export const modelCost = {
  'gpt-4.1': {
    prompt: { price: 0.002, unit: 1000 },
    completion: { price: 0.008, unit: 1000 },
  },
  'gpt-4.1-mini': {
    prompt: { price: 0.0004, unit: 1000 },
    completion: { price: 0.0016, unit: 1000 },
  },
  'gpt-4.1-nano': {
    prompt: { price: 0.0001, unit: 1000 },
    completion: { price: 0.0004, unit: 1000 },
  },
  'o4-mini': {
    prompt: { price: 0.0011, unit: 1000 },
    completion: { price: 0.0044, unit: 1000 },
  },
  'o3': {
    prompt: { price: 0.002, unit: 1000 },
    completion: { price: 0.008, unit: 1000 },
  },
  // Legacy models retained for backward compatibility with existing saved chats
  'o3-mini': {
    prompt: { price: 0.0011, unit: 1000 },
    completion: { price: 0.0044, unit: 1000 },
  },
  'gpt-4o': {
    prompt: { price: 0.0025, unit: 1000 },
    completion: { price: 0.01, unit: 1000 },
  },
  'gpt-4o-mini' : {
    prompt: { price: 0.00015, unit: 1000 },
    completion: { price: 0.0006, unit: 1000 },
  },
};

export const defaultUserMaxToken = 4000;

export const _defaultChatConfig: ConfigInterface = {
  model: defaultModel,
  max_tokens: defaultUserMaxToken,
  temperature: 1,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (
  title?: string,
  folder?: string
): ChatInterface => ({
  id: uuidv4(),
  title: title ? title : 'New Chat',
  messages:
    useStore.getState().defaultSystemMessage.length > 0
      ? [{ role: 'system', content: useStore.getState().defaultSystemMessage }]
      : [],
  config: { ...useStore.getState().defaultChatConfig },
  titleSet: false,
  folder,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];
