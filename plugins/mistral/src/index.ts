
/**
 * Copyright 2024 The Fire Company
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { genkitPlugin, Plugin } from '@genkit-ai/core';
import MistralClient from '@mistralai/mistralai';

export interface PluginOptions {
  apiKey?: string;
}

export const mistral: Plugin<[PluginOptions] | []> = genkitPlugin(
  'mistral',
  async (options?: PluginOptions) => {
    let apiKey = options?.apiKey || process.env.MISTRAL_API_KEY;
    if (!apiKey)
      throw new Error(
        'Please pass in the API key or set the MISTRALAI_API_KEY environment variable'
      );
    const client = new MistralClient(apiKey);
    return {
      models: [
        // TODO: Add Mistral AI models as needed
      ],
    };
  }
);

export default mistral;

