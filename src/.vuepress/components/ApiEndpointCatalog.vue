<template>
  <div class="api-reference">
    <div class="api-reference-origin">
      <div>
        <span class="api-reference-eyebrow">{{ copy.apiGateway }}</span>
        <code>{{ origin }}</code>
      </div>
      <button type="button" class="copy-button origin-copy" :title="copiedKey === 'origin' ? copy.copied : copy.copyGateway" @click="copyValue(origin, 'origin')">
        <iconify-icon :icon="copiedKey === 'origin' ? 'lucide:check' : 'lucide:copy'" width="16" height="16"></iconify-icon>
      </button>
    </div>

    <div class="endpoint-catalog">
      <div v-for="endpoint in endpoints" :key="endpoint.key" class="endpoint-row">
        <span class="endpoint-icon" aria-hidden="true">
          <iconify-icon :icon="endpoint.icon" width="17" height="17"></iconify-icon>
        </span>
        <div class="endpoint-name">
          <strong>{{ endpoint.label }}</strong>
          <span>{{ endpoint.hint }}</span>
        </div>
        <div class="endpoint-detail">
          <div class="endpoint-route">
            <b>{{ endpoint.method }}</b>
            <code>{{ endpoint.path }}</code>
          </div>
          <span>{{ endpoint.description }}</span>
        </div>
        <code class="endpoint-url">{{ endpoint.url }}</code>
        <button type="button" class="copy-button" :title="copiedKey === endpoint.key ? copy.copied : `${copy.copyPrefix}${endpoint.label}${copy.copySuffix}`" @click="copyValue(endpoint.url, endpoint.key)">
          <iconify-icon :icon="copiedKey === endpoint.key ? 'lucide:check' : 'lucide:copy'" width="15" height="15"></iconify-icon>
        </button>
      </div>
    </div>

    <p class="copy-status" role="status" aria-live="polite">{{ statusMessage }}</p>
  </div>
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue';

const props = defineProps({
  locale: { type: String, default: 'zh' },
});

const origin = 'https://api.4i.codes';
const endpointContent = {
  zh: [
  {
    key: 'responses',
    label: 'Responses 接口',
    hint: 'Codex 常用',
    method: 'POST',
    description: '适合 Codex 与新式 Agent 调用。',
    path: '/v1/responses',
    icon: 'lucide:braces',
  },
  {
    key: 'chat',
    label: 'Chat Completions 接口',
    hint: '对话常用',
    method: 'POST',
    description: '适合 OpenAI 兼容 SDK 与传统对话客户端。',
    path: '/v1/chat/completions',
    icon: 'lucide:messages-square',
  },
  {
    key: 'anthropic',
    label: 'Anthropic Messages 接口',
    hint: 'Claude 常用',
    method: 'POST',
    description: '适合 Claude SDK 与 Claude Code。',
    path: '/v1/messages',
    icon: 'lucide:bot',
  },
  {
    key: 'image-generation',
    label: '文生图接口',
    hint: 'Image Generations',
    method: 'POST',
    description: '根据文字提示生成图片。',
    path: '/v1/images/generations',
    icon: 'lucide:image',
  },
  {
    key: 'image-edit',
    label: '图生图接口',
    hint: 'Image Edits',
    method: 'POST',
    description: '上传图片并根据提示进行编辑。',
    path: '/v1/images/edits',
    icon: 'lucide:image-plus',
  },
  ],
  en: [
    { key: 'responses', label: 'Responses API', hint: 'For Codex', method: 'POST', description: 'For Codex and modern agent workflows.', path: '/v1/responses', icon: 'lucide:braces' },
    { key: 'chat', label: 'Chat Completions API', hint: 'For chat clients', method: 'POST', description: 'For OpenAI-compatible SDKs and chat clients.', path: '/v1/chat/completions', icon: 'lucide:messages-square' },
    { key: 'anthropic', label: 'Anthropic Messages API', hint: 'For Claude', method: 'POST', description: 'For Claude SDKs and Claude Code.', path: '/v1/messages', icon: 'lucide:bot' },
    { key: 'image-generation', label: 'Image Generations API', hint: 'Text to image', method: 'POST', description: 'Generate an image from a text prompt.', path: '/v1/images/generations', icon: 'lucide:image' },
    { key: 'image-edit', label: 'Image Edits API', hint: 'Image to image', method: 'POST', description: 'Upload and edit an image with a prompt.', path: '/v1/images/edits', icon: 'lucide:image-plus' },
  ],
};

const strings = {
  zh: { apiGateway: 'API 网关', copied: '已复制', copyGateway: '复制 API 网关地址', copyPrefix: '复制', copySuffix: '地址', copySuccess: '地址已复制', copyError: '复制失败，请手动选择地址' },
  en: { apiGateway: 'API gateway', copied: 'Copied', copyGateway: 'Copy API gateway URL', copyPrefix: 'Copy ', copySuffix: ' URL', copySuccess: 'URL copied', copyError: 'Copy failed. Select the URL manually.' },
};

const language = computed(() => props.locale === 'en' ? 'en' : 'zh');
const copy = computed(() => strings[language.value]);
const endpoints = computed(() => endpointContent[language.value].map((endpoint) => ({ ...endpoint, url: `${origin}${endpoint.path}` })));

const copiedKey = ref('');
const statusMessage = ref('');
let clearTimer;

async function copyValue(value, key) {
  try {
    await navigator.clipboard.writeText(value);
    copiedKey.value = key;
    statusMessage.value = copy.value.copySuccess;
  } catch {
    statusMessage.value = copy.value.copyError;
  }

  window.clearTimeout(clearTimer);
  clearTimer = window.setTimeout(() => {
    copiedKey.value = '';
    statusMessage.value = '';
  }, 1800);
}

onUnmounted(() => window.clearTimeout(clearTimer));
</script>

<style scoped>
.api-reference {
  --api-accent: #346453;
  --api-accent-soft: #edf5f1;
  --api-border: #dedbd4;
  --api-border-soft: #ece9e3;
  --api-surface: #fff;
  --api-surface-muted: #f8f7f4;
  --api-text: #252723;
  --api-text-soft: #60645e;
  --api-text-muted: #858981;
  margin: 20px 0 28px;
}

.api-reference-origin {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding: 12px 14px;
  border: 1px solid var(--api-border);
  border-radius: 7px;
  background: var(--api-surface-muted);
}

.api-reference-origin > div {
  display: flex;
  min-width: 0;
  align-items: baseline;
  gap: 12px;
}

.api-reference-eyebrow {
  color: var(--api-text-muted);
  font-size: 12px;
  font-weight: 650;
  white-space: nowrap;
}

.api-reference-origin code {
  overflow-wrap: anywhere;
  color: var(--api-accent);
  font-size: 13px;
  font-weight: 650;
}

.endpoint-catalog {
  overflow: hidden;
  border: 1px solid var(--api-border);
  border-radius: 8px;
  background: var(--api-surface);
}

.endpoint-row {
  display: grid;
  grid-template-columns: auto minmax(130px, 0.8fr) minmax(190px, 1.2fr) minmax(180px, 1fr) auto;
  min-width: 0;
  align-items: center;
  gap: 12px;
  padding: 12px;
}

.endpoint-row + .endpoint-row {
  border-top: 1px solid var(--api-border-soft);
}

.endpoint-icon {
  display: grid;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 6px;
  color: var(--api-accent);
  background: var(--api-accent-soft);
}

.endpoint-name {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 2px;
}

.endpoint-name strong {
  color: var(--api-text);
  font-size: 13px;
  line-height: 1.35;
}

.endpoint-name span,
.endpoint-detail > span {
  color: var(--api-text-muted);
  font-size: 11px;
  line-height: 1.45;
}

.endpoint-detail {
  min-width: 0;
}

.endpoint-detail > span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.endpoint-route {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
}

.endpoint-route b {
  color: var(--api-accent);
  font-family: var(--font-family-mono, monospace);
  font-size: 10px;
}

.endpoint-route code,
.endpoint-url {
  min-width: 0;
  overflow: hidden;
  color: var(--api-text-soft);
  font-family: var(--font-family-mono, monospace);
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.endpoint-url {
  color: var(--api-accent);
}

.copy-button {
  display: inline-grid;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  place-items: center;
  padding: 0;
  border: 1px solid var(--api-border);
  border-radius: 6px;
  color: var(--api-text-soft);
  background: var(--api-surface);
  cursor: pointer;
}

.copy-button:hover,
.copy-button:focus-visible {
  border-color: var(--api-accent);
  color: var(--api-accent);
  outline: none;
}

.origin-copy {
  background: transparent;
}

.copy-status {
  min-height: 18px;
  margin: 7px 2px 0;
  color: var(--api-text-muted);
  font-size: 11px;
  text-align: right;
}

[data-theme="dark"] .api-reference {
  --api-accent: #8ec3ad;
  --api-accent-soft: #203a31;
  --api-border: #454841;
  --api-border-soft: #373a35;
  --api-surface: #242622;
  --api-surface-muted: #2a2c28;
  --api-text: #e9ebe6;
  --api-text-soft: #c4c8c0;
  --api-text-muted: #969c92;
}

@media (max-width: 720px) {
  .endpoint-row {
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 8px;
  }

  .endpoint-name {
    grid-column: 2;
  }

  .endpoint-detail {
    grid-column: 1 / 4;
    grid-row: 2;
  }

  .endpoint-detail > span {
    overflow: visible;
    white-space: normal;
  }

  .endpoint-url {
    grid-column: 1 / 3;
    grid-row: 3;
    overflow: visible;
    overflow-wrap: anywhere;
    white-space: normal;
  }

  .endpoint-row > .copy-button {
    grid-column: 3;
    grid-row: 3;
  }
}

@media (max-width: 420px) {
  .api-reference-origin > div {
    align-items: flex-start;
    flex-direction: column;
    gap: 3px;
  }
}
</style>
