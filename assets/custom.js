$(document).ready(function() {
    $('.hero-back-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2500,

    });

    $('.hero-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                dotsClass: 'slick-dots custom-dots'
            }
        }]
    });

    $('.trending-slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        speed: 500,
        centerMode: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 641,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    $('.product-slider-image').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
    });


    $('.card-slider-wrapper').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        speed: 500,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.pdp-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 500,
        responsive: [{
                breakpoint: 1921,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $(".close-popup, .popup-overlay").on("click", function() {
        $(".newslatter-popup").removeClass("popup-open");
    });


    $(".filter-lable").click(function() {
        $(".filter-lable").removeClass("active");
        $(".filter-inner").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    })
    
    $(".filter-var-lable").click(function() {
        $(".filter-var-lable").removeClass("active");
        $(".filter-var ul").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    })

    $(".cm-add-bag").on("click", function(e) {
        e.preventDefault();
        $(".mob-size-selecter").addClass("active");
    });
    $(".close-size-popup, .popup-bg").on("click", function() {
        $(".mob-size-selecter").removeClass("active");
    });

    $(".cm-acc-title").click(function() {
        $(".cm-acc-title").removeClass("active");
        $(".cm-acc-desc").slideUp();
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass("active");
        }
    })

    $(".ds-accordion .acc-drop").click(function() {
        $(".pdp-ds-inner").toggleClass("active");
    });

    $(".close-icon").click(function() {
        $(".announcement-bar").slideUp();
        if ($(window).width() > 991) {
            var mnh = 164 - $(".announcement-bar").outerHeight();
            $('.hero-section').attr('style', 'height: calc(100vh - ' + mnh + 'px)');
        }
    });

    $(".menu-hemburger a").on("click", function(e) {
        e.preventDefault();
        $(".mobile-menu, body").addClass("active-menu");
    });
    $(".menu-overlay, .close-menu").on("click", function() {
        $(".mobile-menu, body").removeClass("active-menu");
        $('.cm-menu-inner').find('.has-children').removeClass('is-open');
    });

    $(".open-size-popup").on("click", function(e) {
        e.preventDefault();
        $(".size-guide-popup, body").addClass("active-popup");
    });
    $(".size-overlay, .guide-popup-close").on("click", function() {
        $(".size-guide-popup, body").removeClass("active-popup");
    });

    $('.header-search input').on('focus', function() {
        $(".header-bottom").addClass("active-search");
    });
    $('.close-search').on('click', function() {
        $(".header-bottom").removeClass("active-search");
    });

    // flag : says "remove class when click reaches background"
    var removeClass = true;

    // when clicking the button : toggle the class, tell the background to leave it as is
    // $(".cart a").click(function(e) {
    //     e.preventDefault();
    //     $(".mini-cart, body").toggleClass('active-cart');
    //     removeClass = false;
    // });

    // when clicking the div : never remove the class
    $(".mini-cart").click(function() {
        removeClass = false;
    });

    // when click event reaches "html" : remove class if needed, and reset flag
    $("html, .close-cart").click(function() {
        if (removeClass) {
            $(".mini-cart, body").removeClass('active-cart');
        }
        removeClass = true;
    });


    $(window).on("resize", function() {
        var rightposition = $(".head-bottom-inner").offset().left;
        $(".mini-cart").css("right", rightposition);
    }).resize();

    if ($('.trending-slider').length > 0) {
        $(window).on("resize", function() {
            var leftposition = $(".new-ar-product").offset().left;
            $(".trending-slider .slick-list").css("padding-left", leftposition);
        }).resize();
    }


    // ==========================================================================
    //  ACCORDION TAB
    // ==========================================================================

    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs-main li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs-main li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs-main li").removeClass("active");
        $("ul.tabs-main li[rel^='" + d_activeTab + "']").addClass("active");
    });


    /* Extra class "tab_last" 
       to add border to right side
       of last tab */
    $('ul.tabs-main li').last().addClass("tab_last");

    /*accordian js start here*/
    // When any accordion title is clicked...
    $(".accordion__title").click(function() {
        const $accordion_wrapper = $(this).parent();
        const $accordion_content = $(this).parent().find(".accordion__content").first();
        const $accordion_open = "accordion--open";

        // If this accordion is already open
        if ($accordion_wrapper.hasClass($accordion_open)) {
            $accordion_content.slideUp(); // Close the content.
            $accordion_wrapper.removeClass($accordion_open); // Remove the accordionm--open class.
        }
        // If this accordion is not already open
        else {
            $accordion_content.slideDown(); // Show this accordion's content.
            $accordion_wrapper.addClass($accordion_open); // Add the accordion--open class.
        }
    });

    /*accordian js end here*/



    // ==========================================================================
    //  Multi-level accordion nav
    // ==========================================================================
    $('.acnav__label').click(function() {
        var label = $(this);
        var parent = label.parent('.has-children');
        if (parent.hasClass('is-open')) {
            parent.removeClass('is-open');
        } else {
            parent.addClass('is-open');
        }
    });
    $('.back-menu').click(function() {
        $(this).parent().parent().parent().removeClass('is-open')
    });
    // ==========================================================================

    // ==========================================================================
    //  TAB VIEW
    // ==========================================================================

    $('.tabs a').click(function() {

        $('.panel').hide();
        $('.tabs a.active').removeClass('active');
        $(this).addClass('active');

        var panel = $(this).attr('href');
        $(panel).fadeIn(800);

        return false; // prevents link action

    }); // end click 

    $('.tabs li:first a').click();
    // ==========================================================================

    $(window).scroll(function() {
        var sticky = $('header')
        var headerHeight = $("header").height();
        scroll = $(window).scrollTop();
        if (scroll >= 200) {
            sticky.addClass('fixed');
            $('.wrapper').css('margin-top', headerHeight + 'px');
        } else {
            sticky.removeClass('fixed');
            $('.wrapper').css('margin-top', 0 + 'px');
        };

        if ($('.index-template').length > 0) {
            var geth = $('.header-bottom').outerHeight();
            if (scroll >= geth) {
                $('.header-bottom').addClass('menu_fixed');
            } else {
                $('.header-bottom').removeClass('menu_fixed');
            }
        }
    });
    setTimeout(function() {
        $('.newslatter-popup').addClass('popup-open')
    }, 5000);    
    
});

// $(window).on('load resize orientationchange', function() {
//     var sliderheight = $(".pdp-slider").height();
//     var pdpcontent = $(".pdp-details").height();
//     if (sliderheight <= pdpcontent) {
//         $(".product-details-slider").css("min-height", pdpcontent);
//     } else {
//         $(".product-details-slider").css("min-height", sliderheight);
//     }
// });

// $(window).on("resize", function() {
//     //     if(jQuery(window).width() > 767) {
//     var leftposition = $(".new-ar-product").offset().left;
//     $(".trending-slider .slick-list").css("padding-left", leftposition);
//     //     }
// }).resize();
 

function quantity_box() {
    const minusBtns = document.querySelectorAll('.btn-minus');
    const plusBtns = document.querySelectorAll('.btn-plus');

    minusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const input = btn.closest('.qty-box').querySelector('.quantity__input');
            let number = parseInt(input.value) || 0;

            if (number > 0) {
                input.value = number - 1;
            }
        });
    });

    plusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const input = btn.closest('.qty-box').querySelector('.quantity__input');
            let number = parseInt(input.value) || 0;

            input.value = number + 1;
        });
    });
}

quantity_box();

function quantity__button() {
        const decrementBtn = document.getElementById('decrement-btn');
        const incrementBtn = document.getElementById('increment-btn');
        const quantityInput = document.getElementById('quantity-input');

        function decrementValue() {
            // Get the current value, converting it from a string to an integer
            let currentValue = parseInt(quantityInput.value, 10);
            
            // Ensure the value is a number and greater than the minimum (e.g., 1)
            if (!isNaN(currentValue) && currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        }
        function incrementValue() {
            // Get the current value, converting it from a string to an integer
            let currentValue = parseInt(quantityInput.value, 10);
            
            // Ensure the value is a number and less than the maximum (e.g., 100)
            if (!isNaN(currentValue) && currentValue < 100) {
                quantityInput.value = currentValue + 1;
            } else if (isNaN(currentValue)) {
                // Handle cases where the input is empty or invalid
                quantityInput.value = 1; 
            }
        }
        decrementBtn.addEventListener('click', decrementValue);
        incrementBtn.addEventListener('click', incrementValue);
}
// quantity__button();


class VariantSelects extends HTMLElement {
  constructor() {
    super();
  }

    connectedCallback() {
        this.addEventListener('change', (event) => {
        const target = this.getInputForEventTarget(event.target);

            publish(PUB_SUB_EVENTS.optionValueSelectionChange, {
                data: {
                event,
                target,
                selectedOptionValues: this.selectedOptionValues,
                },
            });
        })
    }

    updateSelectionMetadata({ target }) {
        const { value, tagName } = target;

        if (tagName === 'SELECT' && target.selectedOptions.length) {
        Array.from(target.options)
            .find((option) => option.getAttribute('selected'))
            .removeAttribute('selected');
        target.selectedOptions[0].setAttribute('selected', 'selected');

        const swatchValue = target.selectedOptions[0].dataset.optionSwatchValue;
        const selectedDropdownSwatchValue = target
            .closest('.product-form__input')
            .querySelector('[data-selected-value] > .swatch');
        if (!selectedDropdownSwatchValue) return;
        if (swatchValue) {
            selectedDropdownSwatchValue.style.setProperty('--swatch--background', swatchValue);
            selectedDropdownSwatchValue.classList.remove('swatch--unavailable');
        } else {
            selectedDropdownSwatchValue.style.setProperty('--swatch--background', 'unset');
            selectedDropdownSwatchValue.classList.add('swatch--unavailable');
        }

        selectedDropdownSwatchValue.style.setProperty(
            '--swatch-focal-point',
            target.selectedOptions[0].dataset.optionSwatchFocalPoint || 'unset'
        );
        } else if (tagName === 'INPUT' && target.type === 'radio') {
        const selectedSwatchValue = target.closest(`.product-form__input`).querySelector('[data-selected-value]');
        if (selectedSwatchValue) selectedSwatchValue.innerHTML = value;
        }
    }

    getInputForEventTarget(target) {
        return target.tagName === 'SELECT' ? target.selectedOptions[0] : target;
    }

    get selectedOptionValues() {
    return Array.from(this.querySelectorAll('select option[selected], fieldset input:checked')).map(
      ({ dataset }) => dataset.optionValueId,
    );
  }
}

customElements.define('variant-selects', VariantSelects);


class MyElement extends HTMLElement {
constructor() {
super(); // always required
this.demo = undefined
}
connectedCallback() {
    
    this.select = this.querySelector('.variant-select');
    
    this.select.addEventListener('change', (e) => {
        const value = e.target.value;
        this.demo = value
});
}
}

customElements.define("my-element", MyElement);


class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true });
    this.input.addEventListener('change', this.onInputChange.bind(this));
    this.querySelectorAll('button').forEach((button) =>
      button.addEventListener('click', this.onButtonClick.bind(this))
    );

  }

  quantityUpdateUnsubscriber = undefined;

      connectedCallback() {
        this.validateQtyRules();
        this.quantityUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.quantityUpdate, this.validateQtyRules.bind(this));
      }

      disconnectedCallback() {
        if (this.quantityUpdateUnsubscriber) {
          this.quantityUpdateUnsubscriber();
        }
      }

      onInputChange(event) {
        this.validateQtyRules();
      }

      onButtonClick(event) {
        event.preventDefault();
        const previousValue = this.input.value;
        if (event.target.name === 'plus') {
          if (parseInt(this.input.dataset.min) > parseInt(this.input.step) && this.input.value == 0) {
            this.input.value = this.input.dataset.min;
          } else {
            this.input.stepUp();
          }
        } else {
          this.input.stepDown();
        }

        if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);

        if (this.input.dataset.min === previousValue && event.target.name === 'minus') {
          this.input.value = parseInt(this.input.min);
        }
      }

      validateQtyRules() {
        const value = parseInt(this.input.value);
        if (this.input.min) {
            const buttonMinus = this.querySelector(".quantity__button[name='minus']");
            buttonMinus.classList.toggle('disabled', parseInt(value) <= parseInt(this.input.min));
        }
        if (this.input.max) {
            const max = parseInt(this.input.max);
            const buttonPlus = this.querySelector(".quantity__button[name='plus']");
            buttonPlus.classList.toggle('disabled', value >= max);
        }
      }
}

customElements.define('quantity-input', QuantityInput);


class ProductRecommendations extends HTMLElement {
  observer = undefined;

  constructor() {
    super();
  }

  connectedCallback() {
    this.initializeRecommendations(this.dataset.productId);
  }

  initializeRecommendations(productId) {
    this.observer?.unobserve(this);
    this.observer = new IntersectionObserver(
      (entries, observer) => {
        if (!entries[0].isIntersecting) return;
        observer.unobserve(this);
        this.loadRecommendations(productId);
      },
      { rootMargin: '1px 0px 1px 0px' }
    );
    this.observer.observe(this);
  }

  loadRecommendations(productId) {

    // fetch(`${this.dataset.url}&product_id=${productId}&section_id=${this.dataset.sectionId}`)
    var url = `${this.dataset.url}&section_id=${this.dataset.sectionId}&product_id=${productId}&intent=related`
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const html = document.createElement('div');
        html.innerHTML = text;
        const recommendations = html.querySelector('product-recommendations');
        if (recommendations?.innerHTML.trim().length) {
          this.innerHTML = recommendations.innerHTML;
        }

        if (!this.querySelector('slideshow-component') && this.classList.contains('complementary-products')) {
          this.remove();
        }

        if (html.querySelector('.grid__item')) {
          this.classList.add('product-recommendations--loaded');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

customElements.define('product-recommendations', ProductRecommendations);








function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: `application/${type}` },
  };
}

class CartPerformance {
  static #metric_prefix = "cart-performance"

  static createStartingMarker(benchmarkName) {
    const metricName = `${CartPerformance.#metric_prefix}:${benchmarkName}`
    return performance.mark(`${metricName}:start`);
  }

  static measureFromEvent(benchmarkName, event) {
    const metricName = `${CartPerformance.#metric_prefix}:${benchmarkName}`
    const startMarker = performance.mark(`${metricName}:start`, {
      startTime: event.timeStamp
    });

    const endMarker = performance.mark(`${metricName}:end`);

    performance.measure(
      benchmarkName,
      `${metricName}:start`,
      `${metricName}:end`
    );
  }

  static measureFromMarker(benchmarkName, startMarker) {
    const metricName = `${CartPerformance.#metric_prefix}:${benchmarkName}`
    const endMarker = performance.mark(`${metricName}:end`);

    performance.measure(
      benchmarkName,
      startMarker.name,
      `${metricName}:end`
    );
  }

  static measure(benchmarkName, callback) {
    const metricName = `${CartPerformance.#metric_prefix}:${benchmarkName}`
    const startMarker = performance.mark(`${metricName}:start`);

    callback();

    const endMarker = performance.mark(`${metricName}:end`);

    performance.measure(
      benchmarkName,
      `${metricName}:start`,
      `${metricName}:end`
    );
  }
}

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

Shopify.bind = function (fn, scope) {
  return function () {
    return fn.apply(scope, arguments);
  };
};

function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== 'ESCAPE') return;

  const openDetailsElement = event.target.closest('details[open]');
  if (!openDetailsElement) return;

  const summaryElement = openDetailsElement.querySelector('summary');
  openDetailsElement.removeAttribute('open');
  summaryElement.setAttribute('aria-expanded', false);
  summaryElement.focus();
}












  // class GiftProduct extends HTMLElement {
  //   constructor() {
  //     super();
  //     this.productid1 = '';
  //     this.productid2 = '';
  //   }

  //   connectedCallback() {
  //     this.init();
  //   }

  //   init() {
  //     this.bindEvents();
  //     this.restoreCheckbox();
  //   }

  //   bindEvents() {
  //     // Event Delegation
  //     this.addEventListener('click', (e) => {
  //       this.handleAddProduct(e);
  //       this.handleNext(e);
  //       this.handleBack(e);
  //       this.handleDrawerOpen(e);
  //       this.handleClose(e);
  //       this.handleAddToCart(e);
  //     });

  //     this.addEventListener('input', (e) => {
  //       this.handleMessageInput(e);
  //     });

  //     this.addEventListener('change', (e) => {
  //       this.handleCheckbox(e);
  //     });
  //   }

  //   //  Add Product
  //   handleAddProduct(e) {
  //     const btn = e.target.closest('.gift_product_add');
  //     if (!btn) return;

  //     e.preventDefault();

  //     const parentWrap = btn.closest('.wrapping_product');
  //     const image = btn.dataset.image;
  //     const title = btn.dataset.title;

  //     if (parentWrap) {
  //       this.productid1 = btn.dataset.id;

  //       this.querySelector('.item1 .item_image').innerHTML = `<img src="${image}" alt="${title}">`;
  //       this.querySelector('.item1 span').innerText = title;

  //       this.querySelector('.item2 .item_image').classList.add('open_drawer');
  //       this.querySelector('.item2 .item_image_text')?.classList.remove('text-hidden');
  //     } else {
  //       this.productid2 = btn.dataset.id;

  //       this.querySelector('.item2 .item_image').innerHTML = `<img src="${image}" alt="${title}">`;
  //       this.querySelector('.item2 span').innerText = title;

  //       this.querySelector('.item3 .item_image').classList.add('open_drawer');
  //       this.querySelector('.item3 .item_image_text')?.classList.remove('text-hidden');
  //     }
  //   }

  //   //  Next Button
  //   handleNext(e) {
  //     const btn = e.target.closest('.drawer_next_button');
  //     if (!btn) return;

  //     e.preventDefault();

  //     if (btn.closest('.wrapping_product')) {
  //       this.querySelector('.wrapping_product').classList.add('hidden_item');
  //       this.querySelector('.cart_gift_product').classList.remove('hidden_item');
  //     } else {
  //       this.querySelector('.cart_gift_product').classList.add('hidden_item');
  //       this.querySelector('.gift_message').classList.remove('hidden_item');
  //     }
  //   }

  //   //  Back Button
  //   handleBack(e) {
  //     const btn = e.target.closest('.drawer_back_button');
  //     if (!btn) return;

  //     e.preventDefault();

  //     if (btn.closest('.cart_gift_product')) {
  //       this.querySelector('.cart_gift_product').classList.add('hidden_item');
  //       this.querySelector('.wrapping_product').classList.remove('hidden_item');
  //     } else {
  //       this.querySelector('.gift_message').classList.add('hidden_item');
  //       this.querySelector('.cart_gift_product').classList.remove('hidden_item');
  //     }
  //   }

  //   //  Drawer Open
  //   handleDrawerOpen(e) {
  //     const item = e.target.closest('.item_image');
  //     if (!item || !item.classList.contains('open_drawer')) return;

  //     this.querySelector('.cart_gift_drawer').classList.add('active-cart');

  //     if (item.closest('.item2')) {
  //       this.querySelector('.wrapping_product').classList.add('hidden_item');
  //       this.querySelector('.cart_gift_product').classList.remove('hidden_item');
  //     }

  //     if (item.closest('.item3')) {
  //       this.querySelector('.wrapping_product').classList.add('hidden_item');
  //       this.querySelector('.cart_gift_product').classList.add('hidden_item');
  //       this.querySelector('.gift_message').classList.remove('hidden_item');
  //     }
  //   }

  //   //  Close Drawer
  //   handleClose(e) {
  //     const close = e.target.closest('.cart_gift_drawer_close');
  //     if (!close) return;

  //     this.querySelector('.cart_gift_drawer').classList.remove('active-cart');

  //     setTimeout(() => {
  //       this.querySelector('.wrapping_product').classList.remove('hidden_item');
  //       this.querySelector('.cart_gift_product').classList.add('hidden_item');
  //       this.querySelector('.gift_message').classList.add('hidden_item');
  //     }, 300);
  //   }

  //   //  Message Input
  //   handleMessageInput(e) {
  //     if (!e.target.classList.contains('gift_textarea_mess')) return;

  //     const text = e.target.value;
  //     const target = this.querySelector('.item3 .item_image_text p');

  //     if (target) {
  //       target.textContent = text || 'Tap to Select';
  //     }
  //   }

  //   //  Checkbox
  //   handleCheckbox(e) {
  //     if (e.target.id !== 'gift_product_input') return;

  //     localStorage.setItem('giftCheck', e.target.checked);

  //     if (e.target.checked) {
  //       this.querySelector('.item1 .item_image').classList.add('open_drawer');
  //       this.querySelector('.item1 .item_image_text')?.classList.remove('text-hidden');
  //     } else {
  //       this.resetUI();
  //       this.removeCartItems();
  //     }
  //   }

  //   restoreCheckbox() {
  //     const checkbox = this.querySelector('#gift_product_input');
  //     const saved = localStorage.getItem('giftCheck');

  //     if (checkbox && saved !== null) {
  //       checkbox.checked = saved === 'true';
  //     }
  //   }

  //   //  Add to Cart
  //   handleAddToCart(e) {
  //     const btn = e.target.closest('.add_gift_product');
  //     if (!btn) return;

  //     e.preventDefault();

  //     const items = [];

  //     if (this.productid1) {
  //       items.push({ id: this.productid1, quantity: 1, properties: { 'Gift Wrap': true } });
  //     }

  //     if (this.productid2) {
  //       items.push({ id: this.productid2, quantity: 1, properties: { 'Gift Wrap': true } });
  //     }

  //     if (!items.length) {
  //       alert('Select product first');
  //       return;
  //     }

  //     const formData = {
  //       items,
  //       attributes: {
  //         'gift-wrapping': true,
  //         'gift-note': this.querySelector('.gift_textarea_mess')?.value || '',
  //         to_input: this.querySelector('.input_to_field')?.value || '',
  //         from_input: this.querySelector('.input_from_field')?.value || '',
  //       },
  //     };

  //     const sections = ['main-cart'];

  //     fetch(`/cart/add.js?sections=${sections.join(',')}&sections_url=/cart`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         //  Update cart section without reload
  //         const cartContainer = document.getElementById('main_cart_page');
  //         if (cartContainer && data.sections['main-cart']) {
  //           cartContainer.innerHTML = data.sections['main-cart'];
  //         }

  //         //  Close drawer + reset UI
  //         this.querySelector('.cart_gift_drawer').classList.remove('active-cart');

  //         setTimeout(() => {
  //           this.querySelector('.wrapping_product').classList.remove('hidden_item');
  //           this.querySelector('.cart_gift_product').classList.add('hidden_item');
  //           this.querySelector('.gift_message').classList.add('hidden_item');
  //         }, 300);
  //       })
  //       .catch(console.error);
  //   }

  //   //  Reset UI
  //   resetUI() {
  //     const resetBlock = (selector, text) => {
  //       const el = this.querySelector(selector);
  //       if (el) {
  //         el.innerHTML = `<div class="item_image_text text-hidden"><p>Tap to Select</p></div>`;
  //       }

  //       const title = this.querySelector(`${selector.replace('.item_image', '')} span`);
  //       if (title) title.innerText = text;
  //     };

  //     resetBlock('.item1 .item_image', 'Select Wrapping');
  //     resetBlock('.item2 .item_image', 'Select Card');
  //     resetBlock('.item3 .item_image', 'Add Message');
  //   }

  //   checkCartVisibility() {
  //     fetch('/cart.js')
  //       .then((res) => res.json())
  //       .then((cart) => {
  //         const normalItems = cart.items.filter((item) => {
  //           return !(item.properties && item.properties['Gift Wrap']);
  //         });

  //         if (normalItems.length === 0) {
  //           this.style.display = 'none';
  //         } else {
  //           this.style.display = 'block';
  //         }
  //       })
  //       .catch((err) => {
  //         console.error('Cart visibility error:', err);
  //       });
  //   }
  //   //  Remove Gift Items
  //   removeCartItems() {
  //     fetch('/cart.js')
  //       .then((res) => res.json())
  //       .then((cart) => {
  //         let updates = {};
  //         console.log("cart",cart);
  //         cart.items.forEach((item) => {
  //           if (item.properties && item.properties['Gift Wrap']) {
  //             updates[item.key] = 0; //  IMPORTANT: use item.key
  //           }
  //         });

  //         if (Object.keys(updates).length === 0) return;

  //         const sections = ['main-cart'];

  //         return fetch(`/cart/update.js?sections=${sections.join(',')}&sections_url=/cart`, {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({
  //             updates: updates,
  //             attributes: {
  //               'gift-wrapping': false,
  //               'gift-note': '',
  //               to_input: '',
  //               from_input: '',
  //             },
  //           }),
  //         });
  //       })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("This is data :: ",data)
  //         //  Section rendering
  //         const cartContainer = document.getElementById('main_cart_page');
  //         if (cartContainer && data.sections['main-cart']) {
  //           cartContainer.innerHTML = data.sections['main-cart'];
  //         }

  //         this.resetUI();
  //         this.querySelector('.cart_gift_drawer').classList.remove('active-cart');
  //       })
  //       .catch(console.error);
  //   }
  // }
  // customElements.define('gift-product', GiftProduct);


  fetch('/browsing_context_suggestions.json')
  .then(response => response.json())
  .then(data => {
    console.log("THis is josn data for test :: ",data)
    // Access country name, ISO code, or currency
    const countryName = data.detected_values.country.name;
    const countryCode = data.detected_values.country.handle; // e.g., "US"
    console.log("THis is User Location --- ", countryName, countryCode);

    if (countryCode == "AU") {
      console.log(": This is KAGARUSH : ")
    }else{
      console.log(": This is hello World : ")
    }
  })
  .catch(error => console.error('Error fetching geolocation:', error));