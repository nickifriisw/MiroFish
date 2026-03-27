<template>
  <div class="home-container">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="nav-brand">MIROFISH</div>
      <div class="nav-links">
        <a href="https://github.com/666ghj/MiroFish" target="_blank" class="github-link">
          访问我们的 Github 主页 <span class="arrow">↗</span>
        </a>
      </div>
    </nav>

    <div class="main-content">
      <!-- Hero 区域 -->
      <section class="hero-section">
        <div class="hero-left">
          <h1 class="main-title">MiroFish 预测引擎</h1>
          <p class="hero-desc">Upload any report and simulate the future instantly.</p>
          <button class="start-btn" @click="startSimulation">开始模拟</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const startSimulation = () => {
  router.push({ name: 'Process', params: { projectId: 'new' } })
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: #f5f5f5;
}

.navbar {
  height: 60px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}

.nav-brand {
  font-weight: bold;
  font-size: 1.2rem;
}

.github-link {
  color: #fff;
  text-decoration: none;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
}

.hero-section {
  text-align: center;
  padding: 80px 0;
}

.main-title {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

.start-btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.start-btn:hover {
  background: #ff4500;
}
</style>
