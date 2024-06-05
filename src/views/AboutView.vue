<script setup>

const profilePic = '/profile-image.jpg';
</script>

<template>
  <main class="about">
    <img :src="profilePic" alt="Idaresit's profile picture" class="profile-pic" />
    <div class="content">
      <h1>About Me</h1>
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

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-color-light);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 1rem;
  transition: background-color 0.3s ease;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
</style>