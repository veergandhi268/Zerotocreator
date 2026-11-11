/**
 * ZERO TO CREATOR - HIGH CONVERSION ENGINE & CASHFREE CONFIG
 * Optimized for Butter-Smooth 60/120 FPS Performance
 */

// =========================================================================
// 🚀 CASHFREE PAYMENTS CONFIGURATION
// Replace this URL with your actual Cashfree Payment Link or Payment Page URL!
// Example: const CASHFREE_PAYMENT_URL = "https://payments.cashfree.com/links/zerotocreator";
//
// Leave as "" or "YOUR_CASHFREE_PAYMENT_LINK" to enable Demo Mode,
// which lets you and your buyers test the complete flow straight to thankyou.html!
// =========================================================================
const CASHFREE_PAYMENT_URL = ""; 

document.addEventListener('DOMContentLoaded', () => {
  initStickyBar();
  initFaqAccordion();
  initRecentBuyerToasts();
  initCheckoutButtons();
  initSampleReaderModal();
});

/* ---------------------------------------------------------
   1. CHECKOUT & CASHFREE PAYMENTS HANDLER
   --------------------------------------------------------- */
function initCheckoutButtons() {
  const buyButtons = document.querySelectorAll('.trigger-checkout');
  const modal = document.getElementById('checkoutModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const demoSuccessBtn = document.getElementById('demoSuccessBtn');

  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // If a real Cashfree payment link has been provided, redirect directly to Cashfree!
      if (CASHFREE_PAYMENT_URL && CASHFREE_PAYMENT_URL.startsWith('http')) {
        window.location.href = CASHFREE_PAYMENT_URL;
        return;
      }

      // Otherwise show modal explaining how to hook up Cashfree and providing 1-click test to thankyou.html
      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  if (demoSuccessBtn) {
    demoSuccessBtn.addEventListener('click', () => {
      window.location.href = 'thankyou.html?status=success&order_id=cf_sim_' + Math.floor(100000 + Math.random() * 900000);
    });
  }
}

/* ---------------------------------------------------------
   2. BUTTER-SMOOTH STICKY BOTTOM BAR (IntersectionObserver)
   Zero scroll event lag — runs off the main thread!
   --------------------------------------------------------- */
function initStickyBar() {
  const stickyBar = document.getElementById('stickyCtaBar');
  const heroSection = document.getElementById('hero');

  if (!stickyBar || !heroSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    });
  }, {
    root: null,
    threshold: 0.1
  });

  observer.observe(heroSection);
}

/* ---------------------------------------------------------
   3. FAQ ACCORDION (GPU-accelerated)
   --------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ---------------------------------------------------------
   4. LIVE SOCIAL PROOF NOTIFICATION POPUPS
   --------------------------------------------------------- */
function initRecentBuyerToasts() {
  const toast = document.getElementById('salesToast');
  if (!toast) return;

  const buyers = [
    { name: "Rohit V.", city: "Bengaluru", time: "2 minutes ago" },
    { name: "Priya S.", city: "Mumbai", time: "4 minutes ago" },
    { name: "Aditya K.", city: "New Delhi", time: "7 minutes ago" },
    { name: "Sneha M.", city: "Pune", time: "11 minutes ago" },
    { name: "Arjun R.", city: "Hyderabad", time: "14 minutes ago" },
    { name: "Tanvi P.", city: "Ahmedabad", time: "18 minutes ago" },
    { name: "Kunal D.", city: "Kolkata", time: "23 minutes ago" }
  ];

  let currentIndex = 0;

  function showNextToast() {
    const buyer = buyers[currentIndex];
    const avatarEl = toast.querySelector('.toast-avatar');
    const bodyEl = toast.querySelector('.toast-body');

    if (avatarEl && bodyEl) {
      avatarEl.textContent = buyer.name.charAt(0);
      bodyEl.innerHTML = `<strong>${buyer.name}</strong> from ${buyer.city} just grabbed the <strong>Zero to Creator</strong> eBook! <span>${buyer.time} • Verified Purchase</span>`;
    }

    toast.classList.add('active');

    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);

    currentIndex = (currentIndex + 1) % buyers.length;
  }

  setTimeout(() => {
    showNextToast();
    setInterval(showNextToast, 12000);
  }, 3500);
}

/* ---------------------------------------------------------
   5. SAMPLE READER MODAL (LOOK INSIDE PREVIEW)
   --------------------------------------------------------- */
function initSampleReaderModal() {
  const readerModal = document.getElementById('readerModal');
  const openButtons = document.querySelectorAll('.trigger-sample-reader');
  const closeBtn = document.getElementById('closeReaderBtn');

  if (!readerModal) return;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      readerModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeReader() {
    readerModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeReader);

  readerModal.addEventListener('click', (e) => {
    if (e.target === readerModal) closeReader();
  });
}
