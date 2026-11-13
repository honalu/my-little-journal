const postGrid = document.getElementById("postGrid");
const filters = document.getElementById("filters");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function renderPosts(category = "All") {
  const visiblePosts = category === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === category);

  if (visiblePosts.length === 0) {
    postGrid.innerHTML = '<p class="empty-state">No stories in this category yet. Check back soon ♡</p>';
    return;
  }

  postGrid.innerHTML = visiblePosts.map((post, index) => `
    <article class="post-card">
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <div class="post-meta"><span>${post.category}</span><span>${post.date}</span></div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a class="read-link" href="#" data-post="${blogPosts.indexOf(post)}">Read story ↗</a>
    </article>
  `).join("");

  document.querySelectorAll(".read-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const post = blogPosts[Number(link.dataset.post)];
      showPost(post);
    });
  });
}

function showPost(post) {
  // A simple reading popup. Click the close button or outside the panel to return.
  const oldModal = document.getElementById("postModal");
  if (oldModal) oldModal.remove();

  const modal = document.createElement("div");
  modal.id = "postModal";
  modal.className = "modal-backdrop";
  modal.innerHTML = `
    <article class="modal-card" role="dialog" aria-modal="true" aria-label="${post.title}">
      <button class="modal-close" aria-label="Close">×</button>
      <p class="eyebrow">${post.category} · ${post.date}</p>
      <h2>${post.title}</h2>
      <img src="${post.image}" alt="">
      <p class="modal-body">${post.body}</p>
    </article>`;
  document.body.appendChild(modal);
  modal.querySelector(".modal-close").addEventListener("click", () => modal.remove());
  modal.addEventListener("click", event => { if (event.target === modal) modal.remove(); });
}

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderPosts(button.dataset.filter);
});

menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mainNav.classList.remove("open")));

renderPosts();