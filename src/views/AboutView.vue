<script setup>
const profilePic = '/profile-image.jpg';
</script>

<template>
  <nav class="nav-bar bg-background dark:bg-charcoal p-4 shadow-md dark:shadow-purple-dark">
    <ul class="nav-links flex space-x-4">
      <li>
        <router-link to="/" class="home-button bg-purple text-white py-2 px-4 rounded shadow-lg transition-colors duration-300 hover:bg-purple-dark">
          Home
        </router-link>
      </li>
    </ul>
  </nav>
  <main class="about bg-background dark:bg-charcoal p-6 rounded-lg shadow-md dark:shadow-purple-dark max-w-screen-md mx-auto mt-6">
    <img :src="profilePic" alt="Idaresit's profile picture" class="profile-pic w-32 h-32 rounded-full mx-auto mb-4">
    <div class="content text-charcoal dark:text-gray-100 space-y-4">
      <h1 class="text-3xl font-bold text-center">About Me</h1>
      <p>As a committed professional, my career journey is marked by variety and depth.</p>
      <p>I am a devoted spouse and mother of two, and I have adeptly navigated the demands of family life alongside my academic and professional endeavors. I possess a Bachelor of Arts in English and a Master of Business Administration with a focus on Management.</p>
      <p>My fascination with technology was ignited during my time in the university but it was only recently that I chose to fully embrace this sector.</p>
      <p>My background in UX/UI design, project management, and marketing has endowed me with a versatile skill set and prepared me to excel in whatever paths I choose.</p>
      <p>In 2023, I took a significant step towards fulfilling my technological aspirations by enrolling at AltSchool, with the goal of excelling as a software engineer. This decision is a pivotal point in my career, blending my leadership skills and creative flair with my passion for technology.</p>
      <p>I am committed to nurturing a warm family environment while cultivating a promising career in tech, demonstrating that personal fulfillment and professional advancement can progress together.</p>
      <p>I am keen to apply my extensive abilities to drive innovation in the tech industry.</p>
    </div>
  </main>
</template>

<!-- <style scoped>
.nav-bar {
  background-color: var(--background-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem auto;
  max-width: 800px;
}

.nav-links {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: var(--button-text-color);
  background-color: var(--button-bg-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: var(--button-border-radius);
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.nav-links a:hover {
  background-color: #004085;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 1rem auto;
  transition: background-color 0.3s ease;
  max-width: 800px;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-bottom: 1rem;
  text-align: center;
}

p {
  text-align: justify;
  margin-bottom: 1rem;
  line-height: 1.6;
  max-width: 800px;
}

/* Media Queries */
@media screen and (min-width: 450px) and (max-width: 768px) {
  .nav-bar {
    padding: 0.75rem;
  }

  .nav-links li {
    margin: 0 0.5rem;
  }

  .nav-links a {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  .about {
    padding: 1.5rem;
  }

  .profile-pic {
    width: 120px;
    height: 120px;
  }

  p {
    max-width: 600px;
  }
}

@media screen and (max-width: 450px) {
  .nav-bar {
    padding: 0.5rem;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
  }

  .nav-links li {
    margin: 0.5rem 0;
  }

  .nav-links a {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }

  .about {
    padding: 1rem;
  }

  .profile-pic {
    width: 100px;
    height: 100px;
  }

  p {
    font-size: 0.9rem;
    max-width: 100%;
  }
}
</style> -->