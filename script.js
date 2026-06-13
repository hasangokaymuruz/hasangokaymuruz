
// Search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = prompt('Ara:');
    if (searchTerm) {
        alert('Arama özelliği yakında eklenecek: ' + searchTerm);
    }
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// View buttons
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// New page button
document.querySelector('.new-btn').addEventListener('click', function() {
    alert('Yeni sayfa oluşturma özelliği yakında eklenecek!');
});

// Add page button
document.querySelectorAll('.add-page-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Yeni sayfa ekle özelliği yakında eklenecek!');
    });
});

// Blog card click
document.querySelectorAll('.blog-card:not(.placeholder):not(.empty)').forEach(card => {
    card.addEventListener('click', function() {
        alert('Blog detay sayfası yakında eklenecek!');
    });
});
