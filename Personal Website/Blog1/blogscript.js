document.addEventListener('DOMContentLoaded', function() {
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    
    const blogPostsContainer = document.getElementById('blog-posts');
    const newPostForm = document.getElementById('new-post-form');

    
    function renderBlogPosts() {
        blogPostsContainer.innerHTML = ''; 

        blogPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p class="post-meta">Published on ${post.date}</p>
                <p>${post.content}</p>
            `;

            blogPostsContainer.appendChild(postElement);
        });
    }

    
    function savePostsToLocalStorage() {
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }

    
    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        const date = new Date().toLocaleDateString(); 

        
        const newPost = {
            title: title,
            date: date,
            content: content
        };

        
        blogPosts.push(newPost);
        savePostsToLocalStorage();

        
        renderBlogPosts();
        newPostForm.reset();
    });

    
    renderBlogPosts();
});