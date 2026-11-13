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
const CASHFREE_PAYMENT_URL = "https://payments.cashfree.com/forms/zerotocreator"; 

document.addEventListener('DOMContentLoaded', () => {
  initStickyBar();
  initFaqAccordion();
  initSampleReaderModal();
  initPixelCheckoutTracking();
});

/* ---------------------------------------------------------
   1. META PIXEL INITIATE CHECKOUT TRACKING
   Fires seamlessly in the background when user clicks to buy
   --------------------------------------------------------- */
function initPixelCheckoutTracking() {
  const ctaLinks = document.querySelectorAll('a[href*="cashfree.com"]');
  ctaLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (typeof fbq === 'function') {
        fbq('track', 'InitiateCheckout', {
          content_name: 'Zero to Creator (2026 Edition)',
          value: 111,
          currency: 'INR',
          num_items: 1
        });
      }
    });
  });
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
