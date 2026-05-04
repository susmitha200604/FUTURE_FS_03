// ===== ACTIVE NAV LINK HIGHLIGHT =====
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".nav-links a[href*=" + id + "]")?.classList.add("active");
            });
        }
    });
});


// ===== ORDER BUTTON CLICK (WHATSAPP AUTO MESSAGE) =====
document.querySelectorAll(".order-btn").forEach(button => {
    button.addEventListener("click", function () {
        let itemName = this.parentElement.querySelector("h4").innerText;

        let message = `Hi, I want to order ${itemName} from Spicy Bites 🍽️`;
        let phone = "919876543210";

        let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });
});


// ===== SIMPLE SCROLL ANIMATION =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".menu-card").forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    observer.observe(card);
});
let selectedItem = "";

// OPEN POPUP
document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        selectedItem = this.parentElement.querySelector("h4").innerText;
        document.getElementById("foodName").innerText = selectedItem;
        document.getElementById("orderPopup").style.display = "flex";
    });
});

// CLOSE
function closePopup() {
    document.getElementById("orderPopup").style.display = "none";
}

// CONFIRM ORDER
function confirmOrder() {
    let phone = "919876543210";
    let msg = `Hi, I want to order ${selectedItem}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}
function filterItems(type) {
    let items = document.querySelectorAll(".menu-card");

    items.forEach(item => {
        if (type === "all") {
            item.style.display = "block";
        } else {
            item.style.display = item.classList.contains(type) ? "block" : "none";
        }
    });
}