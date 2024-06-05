<template>
  <footer class="footer">
    <router-link to="/any-nonexistent-path" class="footer-link">404 Not Found</router-link>
    <router-link to="/error" class="footer-link">Error Boundary</router-link>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--background-color-light);
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ccc;
}

.footer-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #0056b3;
}

/* Media Queries */
@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
  }

  .footer-link {
    margin: 0.5rem 0;
  }
}
</style>