class CartRemoveButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      event.preventDefault();
      const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');
      console.log("cartItems:::",cartItems)
      cartItems.updateQuantity(this.dataset.index, 0, event);
    });
  }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement =
      document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');

    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);

    this.addEventListener('change', debouncedOnChange.bind(this));
    this.input = document.querySelectorAll(".quantity__input")

    this.input.forEach(element => {
      element.addEventListener("change", debouncedOnChange.bind(this))
    });

    // quantity_box();
    // quantity__button();
  }

    getSectionsToRender() {
        return [
        {
            id: 'main-cart',
            section: document.getElementById('main-cart').dataset.id,
            selector: '.js-contents',
        },
        ];
    }

    updateQuantity(line, quantity, event, name, variantId) {
        // this.enableLoading(line);
        const body = JSON.stringify({
          line,
          quantity,
          sections: this.getSectionsToRender().map((section) => section.section),
          sections_url: window.location.pathname,
        });        
        console.log("BODY :::",body)
        const eventTarget = event.currentTarget instanceof CartRemoveButton ? 'clear' : 'change';

        fetch(`/cart/change`, { ...fetchConfig(), ...{ body } })
        .then((response) => response.text())
        .then((state) => {
        const parsedState = JSON.parse(state);
        console.log("parsedState:::",parsedState)
          
        if (parsedState.errors) {
          console.log("this is error in to cart item in cart page")
            quantityElement.value = quantityElement.getAttribute('value');
            this.updateLiveRegions(line, parsedState.errors);
            return;
          }

            let htmlcart = parsedState.sections['template--19268785307875__main'];

            if (htmlcart) {  
              let parsedHTML = new DOMParser().parseFromString(htmlcart, 'text/html');
              let source = parsedHTML.querySelector('cart-items');
              let destination = document.querySelector('cart-items');
              if (source && destination) {
                destination.innerHTML = source.innerHTML;
              }
            }            
        })
        .catch(() => {
          errors.textContent = window.cartStrings.error;  
        })
        .finally(() => {
            this.disableLoading(line);
        });
    }

    validateQuantity(event) {
      console.log("this is main event  ::",event)
      const inputValue = parseInt(event.target.value);
      console.log("inputvalue:::",inputValue)
      const index = event.target.dataset.index;
      let message = '';

      if (inputValue < event.target.dataset.min) {
        message = window.quickOrderListStrings.min_error.replace('[min]', event.target.dataset.min);
      } else if (inputValue > parseInt(event.target.max)) {
        message = window.quickOrderListStrings.max_error.replace('[max]', event.target.max);
      } else if (inputValue % parseInt(event.target.step) !== 0) {
        message = window.quickOrderListStrings.step_error.replace('[step]', event.target.step);
      }

      if (message) {
        this.setValidity(event, index, message);
      } else {
        event.target.setCustomValidity('');
        event.target.reportValidity();
        this.updateQuantity(
          index,
          inputValue,
          event,
          document.activeElement.getAttribute('name'),
          event.target.dataset.quantityVariantId
        );
      }
    }

    onChange(event) {
      this.validateQuantity(event);
    }

    disableLoading(line) {
        // const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
        // mainCartItems.classList.remove('cart__items--disabled');

        // const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
        // const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);

        // cartItemElements.forEach((overlay) => overlay.classList.add('hidden'));
        // cartDrawerItemElements.forEach((overlay) => overlay.classList.add('hidden'));
    }
    
    enableLoading(line) {
        const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
        mainCartItems.classList.add('cart__items--disabled');

        const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
        const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);

        [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

        document.activeElement.blur();
        this.lineItemStatusElement.setAttribute('aria-hidden', false);
    }

    updateLiveRegions(line, message) {
     console.log("this is line counter number ::",line)
     console.log("this is main error message ::",message)
    }
}

customElements.define('cart-items', CartItems);