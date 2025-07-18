07.18 5:15 PM
document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    {
      title: "10 Side Hustles You Can Start Today",
      link: "https://example-affiliate.com/side-hustles?ref=yourID", // <-- Your affiliate link
      desc: "Check out these easy ideas to generate extra income using platforms like Fiverr and Upwork.",
      cta: "Explore Opportunities"
    },
    {
      title: "Best Freelancing Tools for Beginners",
      link: "https://example-affiliate.com/freelance-tools?ref=yourID", // <-- Your affiliate link
      desc: "These tools can help you save time and land more clients.",
      cta: "Get the Tools"
    },
    {
      title: "Start Affiliate Marketing in 2025",
      link: "https://example-affiliate.com/affiliate-starter-kit?ref=yourID", // <-- Your affiliate link
      desc: "Beginner’s guide + toolkit to make passive income through affiliate programs.",
      cta: "Start Earning"
    }
  ];

  const container = document.getElementById("posts");
  posts.forEach(post => {
    const el = document.createElement("div");
    el.className = "post";
    el.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.desc}</p>
      <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="cta-link">${post.cta}</a>
    `;
    container.appendChild(el);
  });
});
