<template>
  <header class="ficodes-topbar">
    <div class="ficodes-topbar-inner">
      <a class="ficodes-topbar-brand" href="https://4i.codes">
        <img class="ficodes-topbar-logo" src="/doc/logo.png" alt="4i.codes" />
        <span class="ficodes-topbar-brand-name">4i.codes</span>
      </a>
      <nav class="ficodes-topbar-nav" aria-label="Primary">
        <a href="https://4i.codes">首页</a>
        <a href="/doc/" class="is-active">文档</a>
        <a href="https://4i.codes/status">状态</a>
        <a href="https://4i.codes/contact">联系</a>
        <a href="https://4i.codes/about">关于</a>
        <button
          class="ficodes-topbar-theme"
          type="button"
          aria-label="切换主题"
          @click="toggleTheme"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path
              d="M12 3v1.6M12 19.4V21M3 12h1.6M19.4 12H21M5.6 5.6l1.13 1.13M17.27 17.27l1.13 1.13M5.6 18.4l1.13-1.13M17.27 6.73l1.13-1.13"
            ></path>
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// 占位:目前只有浅色主题,按钮保留为将来暗色/多主题铺路
const toggleTheme = () => {
  /* no-op placeholder */
};
</script>

<style lang="scss">
.ficodes-topbar {
  position: fixed;
  top: 16px;
  left: 4%;
  right: 4%;
  z-index: 200;
  pointer-events: none;
}

.ficodes-topbar-inner {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 12px 24px;
  background: rgba(255, 252, 246, 0.86);
  backdrop-filter: blur(14px) saturate(1.05);
  -webkit-backdrop-filter: blur(14px) saturate(1.05);
  border: 1px solid rgba(35, 28, 21, 0.1);
  border-radius: 999px;
  box-shadow: 0 12px 32px rgba(20, 16, 12, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.4) inset;
}

.ficodes-topbar-brand {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--ink, #161311);
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.ficodes-topbar-logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 42%;
  border: 1px solid rgba(35, 28, 21, 0.1);
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.9),
    rgba(220, 210, 195, 0.5)
  );
  flex-shrink: 0;
}

.ficodes-topbar-brand-name {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--ink, #161311);
}

.ficodes-topbar-nav {
  display: flex;
  align-items: center;
  gap: clamp(16px, 1.6vw, 26px);
}

.ficodes-topbar-nav > a {
  position: relative;
  padding: 6px 0;
  font-size: clamp(0.86rem, 0.94vw, 0.96rem);
  font-weight: 500;
  letter-spacing: 0.06em;
  color: rgba(33, 27, 22, 0.62);
  text-decoration: none;
  transition: color 180ms ease;

  &:hover {
    color: var(--ink, #161311);
    text-decoration: none;
  }

  &.is-active {
    color: var(--ink, #161311);
    font-weight: 700;

    &::after {
      content: "";
      position: absolute;
      left: 12%;
      right: 12%;
      bottom: 0;
      height: 2px;
      border-radius: 2px;
      background: rgba(18, 15, 12, 0.82);
    }
  }
}

.ficodes-topbar-theme {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgba(22, 18, 15, 0.72);
  transition: background 180ms ease, color 180ms ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: var(--ink, #161311);
  }
}

// 暗色模式适配
html[data-theme="dark"] {
  .ficodes-topbar-inner {
    background: rgba(24, 20, 16, 0.86);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4),
      0 1px 0 rgba(255, 255, 255, 0.06) inset;
  }
  .ficodes-topbar-brand-name,
  .ficodes-topbar-nav > a.is-active {
    color: #f7f1e8;
  }
  .ficodes-topbar-nav > a {
    color: rgba(247, 241, 232, 0.62);

    &:hover {
      color: #f7f1e8;
    }
    &.is-active::after {
      background: rgba(247, 241, 232, 0.82);
    }
  }
  .ficodes-topbar-theme {
    color: rgba(247, 241, 232, 0.72);
    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #f7f1e8;
    }
  }
}

// 内容区留出顶栏空间
.vp-page,
.vp-blog-page,
.vp-sidebar,
.vp-toc {
  padding-top: 68px !important;
}

@media (max-width: 720px) {
  .ficodes-topbar {
    top: 8px;
    left: 2%;
    right: 2%;
  }
  .ficodes-topbar-inner {
    padding: 10px 14px;
    gap: 12px;
    border-radius: 24px;
    flex-wrap: wrap;
  }
  .ficodes-topbar-brand-name {
    font-size: 1rem;
  }
  .ficodes-topbar-nav {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}
</style>
