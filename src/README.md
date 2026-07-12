---
title: 4i.codes文档站
icon: fa7-solid:home-lg
pageClass: custom-home
article: false
pageInfo: false
editLink: false
lastUpdated: false
contributors: false
comment: false
breadcrumb: false
copyright: false
footer: Copyright © 2026-present 4i.codes
---

<div class="home-page">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="logo-container">
        <img :src="$withBase('/logo.png')" alt="4i.codes" class="hero-logo" />
      </div>
      <h1 class="hero-title">
        <span class="gradient-text">4i.codes</span>
      </h1>
      <p class="hero-tagline">For I, For me — 面向开发者的 AI API 中转平台</p>
      <p class="hero-description">
        统一接入 GPT / Claude / Gemini / Grok 全系模型。<br>
        原生兼容 OpenAI、Anthropic 协议，5 分钟完成接入,按 token 透明计费。
      </p>
      <div class="hero-actions">
        <a href="/doc/docs/quick_start/intro.html" class="btn btn-primary shimmer-effect">
          <span class="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true">
              <path d="M5 12h14"/>
              <path d="m13 6 6 6-6 6"/>
            </svg>
          </span>
          快速开始
        </a>
        <a href="https://4i.codes/status" class="btn btn-secondary glass-effect">
          <span class="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="18" height="18" aria-hidden="true">
              <rect x="3" y="12" width="4" height="8" rx="1"/>
              <rect x="10" y="7" width="4" height="13" rx="1"/>
              <rect x="17" y="3" width="4" height="17" rx="1"/>
            </svg>
          </span>
          服务监控
        </a>
      </div>
      <div class="hero-stats glass-panel">
        <div class="stat-item">
          <span class="stat-number">99.9%+</span>
          <span class="stat-label">稳定运行</span>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
          <span class="stat-number">5,000B+</span>
          <span class="stat-label">累计 Token</span>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
          <span class="stat-number">10,000+</span>
          <span class="stat-label">服务客户</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features-section">
    <div class="section-header">
      <div class="badge">Core Features</div>
      <h2 class="section-title">为什么选择 4i.codes？</h2>
      <p class="section-subtitle">一站式 AI Agent 中转解决方案，让您轻松接入最强大的 AI</p>
    </div>
    <div class="features-grid">
      <div class="feature-card glass-card">
        <div class="feature-icon-wrapper">
          <iconify-icon icon="logos:claude-icon" width="32" height="32"></iconify-icon>
        </div>
        <h3 class="feature-title">Claude 全系</h3>
        <p class="feature-description">Claude-Opus-4.x / Claude-Sonnet-4.x / Claude-Sonnet-5 / Claude-Fable-5，兼容原生 /v1/messages,推理与代码能力顶级。</p>
      </div>
      <div class="feature-card glass-card">
        <div class="feature-icon-wrapper">
          <iconify-icon icon="hugeicons:chat-gpt" width="32" height="32"></iconify-icon>
        </div>
        <h3 class="feature-title">GPT 全系</h3>
        <p class="feature-description">GPT-5.x 系列,兼容 /v1/chat/completions 和 /v1/responses 新协议,面向 Agent 与工具调用优化。</p>
      </div>
      <div class="feature-card glass-card">
        <div class="feature-icon-wrapper">
          <iconify-icon icon="vscode-icons:file-type-gemini" width="32" height="32"></iconify-icon>
        </div>
        <h3 class="feature-title">Gemini & Grok</h3>
        <p class="feature-description">Gemini 3.x 多模态能力 + Grok 4.x 快速推理,补齐主流模型矩阵,一个 key 覆盖全部。</p>
      </div>
      <div class="feature-card glass-card">
        <div class="feature-icon-wrapper">
          <iconify-icon icon="mynaui:api-solid" width="32" height="32"></iconify-icon>
        </div>
        <h3 class="feature-title">统一 API</h3>
        <p class="feature-description">一个 API Key 访问所有模型,标准化接口,与官方 SDK 无缝兼容,零学习成本迁移。</p>
      </div>
      <div class="feature-card glass-card">
        <div class="feature-icon-wrapper">
          <iconify-icon icon="stash:balance-solid" width="32" height="32"></iconify-icon>
        </div>
        <h3 class="feature-title">稳定路由 · 透明计费</h3>
        <p class="feature-description">多节点智能路由 + 故障自动降级,99.9%+ SLA。按 token 精确计费,账单可查可下载,无隐藏费用。</p>
      </div>
    </div>
  </section>

  <!-- Integration Section -->
  <section class="integration-section">
    <div class="section-header">
      <div class="badge">Integration</div>
      <h2 class="section-title">灵活的接入方式</h2>
      <p class="section-subtitle">无论您使用什么技术栈，都能轻松集成</p>
    </div>
    <div class="integration-grid">
      <div class="integration-card glass-card">
        <div class="integration-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="34" height="34" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3"/><path d="M13 15h4"/></svg></div>
        <h3 class="integration-title">CLI 工具</h3>
        <p class="integration-description">简单易用的命令行工具，开箱即用，适合快速测试与脚本集成。</p>
      </div>
      <div class="integration-card glass-card">
        <div class="integration-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="34" height="34" aria-hidden="true"><path d="M3 8 12 3l9 5"/><path d="m3 8 9 5 9-5"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg></div>
        <h3 class="integration-title">多语言 SDK</h3>
        <p class="integration-description">提供 Python, Node.js, Go 等主流语言 SDK，类型安全，调用便捷。</p>
      </div>
      <div class="integration-card glass-card">
        <div class="integration-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="34" height="34" aria-hidden="true"><path d="M12 3v3.5a1.5 1.5 0 0 0 3 0V4h5v5h-2.5a1.5 1.5 0 0 0 0 3H21v6.5a1.5 1.5 0 0 1-1.5 1.5H13v-3a1.5 1.5 0 0 0-3 0v3H3v-6.5a1.5 1.5 0 0 1 1.5-1.5H7a1.5 1.5 0 0 0 0-3H4V4h8Z"/></svg></div>
        <h3 class="integration-title">IDE 插件</h3>
        <p class="integration-description">深度集成 VS Code 与 JetBrains IDE，在编码环境中直接使用 AI 能力。</p>
      </div>
    </div>
  </section>
</div>

<style scoped>
/* 
  Modern Theme Variables 
  Scoped to .home-page to avoid polluting global namespace unnecessarily, 
  but utilizing global vars where appropriate.
*/
.home-page {
  --primary-color: #6366f1;
  --primary-glow: rgba(99, 102, 241, 0.4);
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  
  --text-main: #1e293b;
  --text-muted: #64748b;
  
  --bg-gradient-start: #f8fafc;
  --bg-gradient-end: #ffffff;
  
  --card-bg: rgba(255, 255, 255, 0.6);
  --card-border: rgba(255, 255, 255, 0.5);
  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  --card-hover-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  font-family: 'Inter', -apple-system, sans-serif;
  color: var(--text-main);
  background: linear-gradient(to bottom, var(--bg-gradient-start), var(--bg-gradient-end));
}

/* Dark Mode Overrides */
.dark .home-page,
html[data-theme="dark"] .home-page {
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  
  --bg-gradient-start: #0f172a;
  --bg-gradient-end: #020617;
  
  --card-bg: rgba(30, 41, 59, 0.4);
  --card-border: rgba(255, 255, 255, 0.05);
  --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

/* Layout */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 4rem 2rem;
  overflow: hidden;
}

/* Background Effects */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float 15s ease-in-out infinite;
}

.orb-1 {
  width: 50vw;
  height: 50vw;
  max-width: 600px;
  max-height: 600px;
  background: radial-gradient(circle, var(--primary-color), transparent 70%);
  top: -10%;
  right: -5%;
  opacity: 0.3;
}

.orb-2 {
  width: 40vw;
  height: 40vw;
  max-width: 500px;
  max-height: 500px;
  background: radial-gradient(circle, var(--accent-color), transparent 70%);
  bottom: 0;
  left: -10%;
  opacity: 0.2;
  animation-delay: -5s;
}

.orb-3 {
  width: 30vw;
  height: 30vw;
  max-width: 400px;
  max-height: 400px;
  background: radial-gradient(circle, var(--secondary-color), transparent 70%);
  top: 40%;
  left: 60%;
  opacity: 0.2;
  animation-delay: -8s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, -40px); }
  66% { transform: translate(-20px, 20px); }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  width: 100%;
}

.logo-container {
  margin-bottom: 2rem;
}

.hero-logo {
  width: 140px;
  height: 140px;
  border-radius: 28px;
  box-shadow: 0 0 50px var(--primary-glow);
  animation: logoFloat 4s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.hero-logo:hover {
  transform: scale(1.05) rotate(2deg);
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  margin: 0 0 1rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 1rem;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-muted);
  margin: 0 auto 3rem;
  line-height: 1.7;
  max-width: 600px;
}

/* Actions */
.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 99px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white !important;
  box-shadow: 0 10px 25px -5px var(--primary-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 35px -5px var(--primary-glow);
}

.shimmer-effect::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: skewX(-20deg);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  20% { left: 200%; }
  100% { left: 200%; }
}

.btn-secondary {
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--text-main) !important;
  border: 1px solid var(--card-border);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

/* Stats */
.hero-stats {
  display: inline-flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 3rem;
  border-radius: 24px;
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider {
  width: 1px;
  height: 40px;
  background: var(--card-border);
  opacity: 0.5;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Features */
.features-section {
  padding: 8rem 2rem;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 99px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 1rem;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.glass-card {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--card-hover-shadow);
  border-color: rgba(99, 102, 241, 0.3);
}

.glass-card:hover::before {
  opacity: 1;
}

.feature-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.feature-icon {
  font-size: 2rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: var(--text-main);
}

.feature-description {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0 0 2rem;
  min-height: 3.2em;
}

/* Integration */
.integration-section {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.03));
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.integration-card {
  text-align: center;
  padding: 3rem 2rem;
}

.integration-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.9), rgba(220, 210, 195, 0.5));
  border: 1px solid rgba(35, 28, 21, 0.08);
  color: var(--ink, #161311);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.integration-card:hover .integration-icon {
  transform: scale(1.2);
}

.integration-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: var(--text-main);
}

.integration-description {
  font-size: 1rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    width: 100%;
  }
  
  .divider {
    width: 40px;
    height: 1px;
  }
  
  .hero-title {
    font-size: 3rem;
  }
}
</style>
