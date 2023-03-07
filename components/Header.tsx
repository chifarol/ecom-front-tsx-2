import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <header
      className="mega-nav mega-nav--mobile mega-nav--desktop@md position-relative hide-nav hide-nav--fixed ie:bg js-mega-nav js-hide-nav js-hide-nav--main"
      data-nav-target-class="mega-nav--expanded"
      data-theme="dark-1"
    >
      <div className="mega-nav__container">
        {/* 👇 logo */}
        <a href="/" className="mega-nav__logo">
          <svg width={104} height={30} viewBox="0 0 104 30">
            <title>Go to homepage</title>
            <path
              fill="var(--color-contrast-higher)"
              d="M43.371 6.3v15.482c0 .567-.01 1.587.543 1.758a7.624 7.624 0 001.992.132c2.012 0 3.842-2.683 4.5-3.831a11.223 11.223 0 001.319-3.581h.689q-.087 1.069-.088 2.754 0 3.252.2 5.346c-6.586-.087-10.41-.111-17.373 0v-.6c2.34 0 2.139-1.266 2.139-2.578V6.3c0-2.091-.254-2.515-2.139-2.578v-.6q1.714.088 5.346.088 3.457 0 5.3-.088v.6c-2.299-.001-2.428.794-2.428 2.578zM69.446 16.6c0 4.278-1.508 8.188-7.7 8.188-4.324 0-7.72-1.827-7.72-8.188 0-6.18 3.187-8.233 7.72-8.233 5.525-.003 7.7 3.05 7.7 8.233zm-9.814 0c0 2.558.243 7.588 2.109 7.588s2.095-5.03 2.095-7.588-.211-7.632-2.095-7.632c-1.866-.003-2.109 5.06-2.109 7.632zM103.532 16.6c0 4.278-1.509 8.188-7.7 8.188-4.324 0-7.72-1.827-7.72-8.188 0-6.18 3.187-8.233 7.72-8.233 5.525-.003 7.7 3.05 7.7 8.233zm-9.814 0c0 2.558.243 7.588 2.109 7.588s2.095-5.03 2.095-7.588-.211-7.632-2.095-7.632c-1.866-.003-2.109 5.06-2.109 7.632zM86.907 23.672c0 3.175-2.654 4.813-3.991 5.413-3.269 1.468-8 .795-9.053.557s-2.879-.783-2.879-2.132c0-1.4 1.721-1.421 2.791-1.538a3.138 3.138 0 002.146-.835c-.568.011-2.734.223-3.97-1.208a3.606 3.606 0 01-.226-3.656c.249-.5.922-1.555 3.507-2.739a4.58 4.58 0 01-3.647-4.365 4.469 4.469 0 013.384-4.277 12.818 12.818 0 015.464-.411 4.849 4.849 0 01.813-3.493A3.007 3.007 0 0183.787 3.9c1.672 0 2.593.9 2.593 2.007a1.937 1.937 0 01-1.216 1.703 3.4 3.4 0 01-2.893-.132A2.929 2.929 0 0181.238 6.3a5.74 5.74 0 00-.161 2.27c4.2.843 4.6 3.35 4.6 4.6 0 2.866-2.348 4.805-7.046 4.805a12.73 12.73 0 01-2.842-.293c-.536.348-1.172.715-1.172 1.494q0 .981 1.07.981H82.5c1.316-.001 4.407.219 4.407 3.515zm-10.766 3.413c0 2.19 1.821 2.4 2.71 2.4a3.723 3.723 0 003.405-1.619 3.206 3.206 0 00.491-1.764c0-.484-.155-.967-1.377-.967h-4.849a4.312 4.312 0 00-.38 1.95zm.966-13.916c0 1.543.058 4.263 1.524 4.263 1.487 0 1.538-2.72 1.538-4.263s-.075-4.263-1.538-4.263c-1.443 0-1.524 2.73-1.524 4.263z"
            />
            <path fill="var(--color-primary)" d="M14 14V1H1v26h27V14H14z" />
            <path fill="var(--color-primary)" d="M14 1h14v13L14 1z" />
          </svg>
        </a>
        {/* 👇 icon buttons --mobile */}
        <div className="mega-nav__icon-btns mega-nav__icon-btns--mobile">
          <a href="cart.html" className="mega-nav__icon-btn">
            <svg className="icon" viewBox="0 0 24 24">
              <title>Go to cart page</title>
              <g
                className="icon__group"
                fill="none"
                strokeLinecap="square"
                strokeLinejoin="miter"
                stroke="currentColor"
              >
                <polyline points="4,4 22,4 19,14 4,14 " />
                <circle
                  cx={4}
                  cy={22}
                  r={2}
                  fill="currentColor"
                  stroke="none"
                />
                <circle
                  cx={20}
                  cy={22}
                  r={2}
                  fill="currentColor"
                  stroke="none"
                />
                <polyline
                  points="1,1 4,4 4,14 2,18 23,18 "
                  strokeLinecap="butt"
                />
              </g>
            </svg>
          </a>
          <button
            className="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus"
            aria-label="Toggle search"
            aria-controls="mega-nav-search"
          >
            <svg className="icon" viewBox="0 0 24 24">
              <g
                className="icon__group"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit={10}
              >
                <path d="M4.222 4.222l15.556 15.556" />
                <path d="M19.778 4.222L4.222 19.778" />
                <circle cx="9.5" cy="9.5" r="6.5" />
              </g>
            </svg>
          </button>
          <button
            className="reset mega-nav__icon-btn mega-nav__icon-btn--menu js-mega-nav-trigger js-tab-focus"
            aria-label="Toggle menu"
            aria-controls="mega-nav-navigation"
          >
            <svg className="icon" viewBox="0 0 24 24">
              <g
                className="icon__group"
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeMiterlimit={10}
              >
                <path d="M1 6h22" />
                <path d="M1 12h22" />
                <path d="M1 18h22" />
              </g>
            </svg>
          </button>
        </div>
        <div
          className="mega-nav__nav js-mega-nav__nav"
          id="mega-nav-navigation"
          role="navigation"
          aria-label="Main"
        >
          <div className="mega-nav__nav-inner">
            <ul className="mega-nav__items">
              <li className="mega-nav__label">Menu</li>
              {/* 👇 layout 1 -> tabbed content */}
              <li className="mega-nav__item js-mega-nav__item">
                <button className="reset mega-nav__control js-mega-nav__control js-tab-focus">
                  Products
                  <i className="mega-nav__arrow-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 16 16">
                      <g
                        className="icon__group"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeMiterlimit={10}
                      >
                        <path d="M2 2l12 12" />
                        <path d="M14 2L2 14" />
                      </g>
                    </svg>
                  </i>
                </button>
                <div className="mega-nav__sub-nav-wrapper">
                  <div className="mega-nav__sub-nav mega-nav__sub-nav--layout-1">
                    {/* 👇 links - visible on mobile */}
                    <ul className="mega-nav__sub-items">
                      <li className="mega-nav__sub-item">
                        <a
                          href="product-v1.html"
                          className="mega-nav__sub-link"
                        >
                          <span className="flex items-center gap-xs">
                            <img
                              className="block width-lg height-lg radius-50% object-cover"
                              src="assets/img/mega-site-nav-img-1.jpg"
                              alt="Image description"
                            />
                            <i>Product One</i>
                          </span>
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="product-v2.html"
                          className="mega-nav__sub-link"
                        >
                          <span className="flex items-center gap-xs">
                            <img
                              className="block width-lg height-lg radius-50% object-cover"
                              src="assets/img/mega-site-nav-img-2.jpg"
                              alt="Image description"
                            />
                            <i>Product Two</i>
                          </span>
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="product-v1.html"
                          className="mega-nav__sub-link"
                        >
                          <span className="flex items-center gap-xs">
                            <img
                              className="block width-lg height-lg radius-50% object-cover"
                              src="assets/img/mega-site-nav-img-3.jpg"
                              alt="Image description"
                            />
                            <i>Product Three</i>
                          </span>
                        </a>
                      </li>
                    </ul>
                    {/* 👇 tabs - visible on desktop */}
                    <div className="mega-nav__tabs grid gap-lg js-tabs">
                      <ul
                        className="col-4 mega-nav__tabs-controls js-tabs__controls"
                        aria-label="Select a product"
                      >
                        <li>
                          <a
                            href="#tabProduct1"
                            className="mega-nav__tabs-control js-tab-focus"
                            aria-selected="true"
                          >
                            <span className="flex items-center gap-xs">
                              <img
                                className="block width-lg height-lg radius-50% object-cover"
                                src="assets/img/mega-site-nav-img-1.jpg"
                                alt="Image description"
                              />
                              <i className="margin-right-xxxs">Product One</i>
                              <svg
                                className="icon icon--xs margin-left-auto"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                              >
                                <path
                                  d="M5,2l6,6L5,14"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="square"
                                  strokeMiterlimit={10}
                                  strokeWidth={1}
                                />
                              </svg>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#tabProduct2"
                            className="mega-nav__tabs-control js-tab-focus"
                            aria-selected="true"
                          >
                            <span className="flex items-center gap-xs">
                              <img
                                className="block width-lg height-lg radius-50% object-cover"
                                src="assets/img/mega-site-nav-img-2.jpg"
                                alt="Image description"
                              />
                              <i className="margin-right-xxxs">Product Two</i>
                              <svg
                                className="icon icon--xs margin-left-auto"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                              >
                                <path
                                  d="M5,2l6,6L5,14"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="square"
                                  strokeMiterlimit={10}
                                  strokeWidth={1}
                                />
                              </svg>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#tabProduct3"
                            className="mega-nav__tabs-control js-tab-focus"
                            aria-selected="true"
                          >
                            <span className="flex items-center gap-xs">
                              <img
                                className="block width-lg height-lg radius-50% object-cover"
                                src="assets/img/mega-site-nav-img-3.jpg"
                                alt="Image description"
                              />
                              <i className="margin-right-xxxs">Product Three</i>
                              <svg
                                className="icon icon--xs margin-left-auto"
                                viewBox="0 0 16 16"
                                aria-hidden="true"
                              >
                                <path
                                  d="M5,2l6,6L5,14"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="square"
                                  strokeMiterlimit={10}
                                  strokeWidth={1}
                                />
                              </svg>
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="col-8 js-tabs__panels">
                        <section
                          id="tabProduct1"
                          className="mega-nav__tabs-panel js-tabs__panel"
                        >
                          <a
                            href="product-v1.html"
                            className="mega-nav__tabs-img margin-bottom-md"
                          >
                            <img
                              className="block width-100%"
                              src="assets/img/mega-site-nav-img-1.jpg"
                              alt="Image description"
                            />
                          </a>
                          <div className="text-component">
                            <h1 className="text-xl">Product One</h1>
                            <p className="color-contrast-medium">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Amet, quaerat.
                            </p>
                            <p>
                              <a
                                href="product-v1.html"
                                className="btn btn--subtle"
                              >
                                Shop Now
                              </a>
                            </p>
                          </div>
                        </section>
                        <section
                          id="tabProduct2"
                          className="mega-nav__tabs-panel js-tabs__panel"
                        >
                          <a
                            href="product-v2.html"
                            className="mega-nav__tabs-img margin-bottom-md"
                          >
                            <img
                              className="block width-100%"
                              src="assets/img/mega-site-nav-img-2.jpg"
                              alt="Image description"
                            />
                          </a>
                          <div className="text-component">
                            <h1 className="text-xl">Product Two</h1>
                            <p className="color-contrast-medium">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Amet, quaerat.
                            </p>
                            <p>
                              <a
                                href="product-v2.html"
                                className="btn btn--subtle"
                              >
                                Shop Now
                              </a>
                            </p>
                          </div>
                        </section>
                        <section
                          id="tabProduct3"
                          className="mega-nav__tabs-panel js-tabs__panel"
                        >
                          <a
                            href="product-v1.html"
                            className="mega-nav__tabs-img margin-bottom-md"
                          >
                            <img
                              className="block width-100%"
                              src="assets/img/mega-site-nav-img-3.jpg"
                              alt="Image description"
                            />
                          </a>
                          <div className="text-component">
                            <h1 className="text-xl">Product Three</h1>
                            <p className="color-contrast-medium">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Amet, quaerat.
                            </p>
                            <p>
                              <a
                                href="product-v1.html"
                                className="btn btn--subtle"
                              >
                                Shop Now
                              </a>
                            </p>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* 👇 layout 2 -> multiple lists */}
              <li className="mega-nav__item js-mega-nav__item">
                <button className="reset mega-nav__control js-mega-nav__control js-tab-focus">
                  Pages
                  <i className="mega-nav__arrow-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 16 16">
                      <g
                        className="icon__group"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeMiterlimit={10}
                      >
                        <path d="M2 2l12 12" />
                        <path d="M14 2L2 14" />
                      </g>
                    </svg>
                  </i>
                </button>
                <div className="mega-nav__sub-nav-wrapper">
                  <div className="mega-nav__sub-nav mega-nav__sub-nav--layout-2">
                    <ul className="mega-nav__sub-items">
                      <li className="mega-nav__label">Shop</li>
                      <li className="mega-nav__sub-item">
                        <a href="shop.html" className="mega-nav__sub-link">
                          All Products
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="shop-categories.html"
                          className="mega-nav__sub-link"
                        >
                          Categories
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="shop-category.html"
                          className="mega-nav__sub-link"
                        >
                          Category
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="product-v1.html"
                          className="mega-nav__sub-link"
                        >
                          Product v1
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="product-v2.html"
                          className="mega-nav__sub-link"
                        >
                          Product v2
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="cart.html" className="mega-nav__sub-link">
                          Cart
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="checkout.html" className="mega-nav__sub-link">
                          Checkout
                        </a>
                      </li>
                    </ul>
                    <ul className="mega-nav__sub-items">
                      <li className="mega-nav__label">Extra Pages</li>
                      <li className="mega-nav__sub-item">
                        <a href="index.html" className="mega-nav__sub-link">
                          Home v1
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="home-v2.html" className="mega-nav__sub-link">
                          Home v2
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="about-us.html" className="mega-nav__sub-link">
                          About Us
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="404.html" className="mega-nav__sub-link">
                          404
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="thank-you.html" className="mega-nav__sub-link">
                          Thank You
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="basic-page.html"
                          className="mega-nav__sub-link"
                        >
                          Basic Page
                        </a>
                      </li>
                    </ul>
                    <ul className="mega-nav__sub-items">
                      <li className="mega-nav__label">Blog</li>
                      <li className="mega-nav__sub-item">
                        <a href="blog.html" className="mega-nav__sub-link">
                          Blog Gallery v1
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="blog-v2.html" className="mega-nav__sub-link">
                          Blog Gallery v2
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="blog-post.html" className="mega-nav__sub-link">
                          Blog Post
                        </a>
                      </li>
                    </ul>
                    <ul className="mega-nav__sub-items">
                      <li className="mega-nav__label">Account</li>
                      <li className="mega-nav__sub-item">
                        <a href="log-in.html" className="mega-nav__sub-link">
                          Log In
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="account-settings.html"
                          className="mega-nav__sub-link"
                        >
                          Settings
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="account-addresses.html"
                          className="mega-nav__sub-link"
                        >
                          Addresses
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="account-order-history.html"
                          className="mega-nav__sub-link"
                        >
                          Order History
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="account-order-details.html"
                          className="mega-nav__sub-link"
                        >
                          Order Details
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="account-wishlist.html"
                          className="mega-nav__sub-link"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="account-payment-methods.html"
                          className="mega-nav__sub-link"
                        >
                          Payment Methods
                        </a>
                      </li>
                    </ul>
                    <div className="mega-nav__card width-100% max-width-xs margin-x-auto">
                      <a href="shop.html" className="block overflow-hidden">
                        <figure className="aspect-ratio-4:3">
                          <img
                            className="block width-100%"
                            src="assets/img/mega-site-nav-img-1.jpg"
                            alt="Image description"
                          />
                        </figure>
                      </a>
                      <div className="margin-top-sm">
                        <h3 className="text-base">
                          <a href="shop.html" className="mega-nav__card-title">
                            Browse all →
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* 👇 layout 3 -> gallery */}
              <li className="mega-nav__item js-mega-nav__item">
                <button className="reset mega-nav__control js-mega-nav__control js-tab-focus">
                  Gallery
                  <i className="mega-nav__arrow-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 16 16">
                      <g
                        className="icon__group"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeMiterlimit={10}
                      >
                        <path d="M2 2l12 12" />
                        <path d="M14 2L2 14" />
                      </g>
                    </svg>
                  </i>
                </button>
                <div className="mega-nav__sub-nav-wrapper">
                  <div className="mega-nav__sub-nav mega-nav__sub-nav--layout-3">
                    <div className="mega-nav__card">
                      <a
                        href="shop-category.html"
                        className="block overflow-hidden"
                      >
                        <figure className="aspect-ratio-4:3">
                          <img
                            className="block width-100%"
                            src="assets/img/mega-site-nav-img-4.jpg"
                            alt="Image description"
                          />
                        </figure>
                      </a>
                      <div className="margin-top-sm">
                        <h3 className="text-base">
                          <a
                            href="shop-category.html"
                            className="mega-nav__card-title"
                          >
                            Clothing
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="mega-nav__card">
                      <a
                        href="shop-category.html"
                        className="block overflow-hidden"
                      >
                        <figure className="aspect-ratio-4:3">
                          <img
                            className="block width-100%"
                            src="assets/img/mega-site-nav-img-5.jpg"
                            alt="Image description"
                          />
                        </figure>
                      </a>
                      <div className="margin-top-sm">
                        <h3 className="text-base">
                          <a
                            href="shop-category.html"
                            className="mega-nav__card-title"
                          >
                            Shoes
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="mega-nav__card">
                      <a
                        href="shop-category.html"
                        className="block overflow-hidden"
                      >
                        <figure className="aspect-ratio-4:3">
                          <img
                            className="block width-100%"
                            src="assets/img/mega-site-nav-img-6.jpg"
                            alt="Image description"
                          />
                        </figure>
                      </a>
                      <div className="margin-top-sm">
                        <h3 className="text-base">
                          <a
                            href="shop-category.html"
                            className="mega-nav__card-title"
                          >
                            Home
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="mega-nav__card">
                      <a
                        href="shop-category.html"
                        className="block overflow-hidden"
                      >
                        <figure className="aspect-ratio-4:3">
                          <img
                            className="block width-100%"
                            src="assets/img/mega-site-nav-img-7.jpg"
                            alt="Image description"
                          />
                        </figure>
                      </a>
                      <div className="margin-top-sm">
                        <h3 className="text-base">
                          <a
                            href="shop-category.html"
                            className="mega-nav__card-title"
                          >
                            Accessories
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* 👇 layout 4 -> single list */}
              <li className="mega-nav__item js-mega-nav__item">
                <button className="reset mega-nav__control js-mega-nav__control js-tab-focus">
                  Support
                  <i className="mega-nav__arrow-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 16 16">
                      <g
                        className="icon__group"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        strokeMiterlimit={10}
                      >
                        <path d="M2 2l12 12" />
                        <path d="M14 2L2 14" />
                      </g>
                    </svg>
                  </i>
                </button>
                <div className="mega-nav__sub-nav-wrapper">
                  <div className="mega-nav__sub-nav mega-nav__sub-nav--layout-4">
                    <ul className="mega-nav__sub-items">
                      <li className="mega-nav__label">Help &amp; Support</li>
                      <li className="mega-nav__sub-item">
                        <a
                          href="help-center.html"
                          className="mega-nav__sub-link"
                        >
                          Help Center
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="faq.html" className="mega-nav__sub-link">
                          Frequently Asked Questions
                        </a>
                      </li>
                      <li className="mega-nav__sub-item">
                        <a href="contact.html" className="mega-nav__sub-link">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="mega-nav__label">Other</li>
              {/* 👇 link */}
              <li className="mega-nav__item">
                <a
                  href="https://codyhouse.co/ds/docs/templates"
                  className="mega-nav__control"
                  target="_blank"
                  rel="noopener"
                >
                  Docs
                </a>
              </li>
              {/* 👇 Account link --mobile */}
              <li className="mega-nav__item hide@md">
                <a href="account-settings.html" className="mega-nav__control">
                  Account
                </a>
              </li>
            </ul>
            <ul className="mega-nav__items">
              {/* 👇 icon buttons --desktop */}
              <li className="mega-nav__icon-btns mega-nav__icon-btns--desktop">
                <a
                  href="cart.html"
                  className="mega-nav__icon-btn"
                  aria-controls="cart-drawer"
                >
                  <svg className="icon" viewBox="0 0 24 24">
                    <title>Go to cart page</title>
                    <g
                      className="icon__group"
                      fill="none"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      stroke="currentColor"
                    >
                      <polyline points="4,4 22,4 19,14 4,14 " />
                      <circle
                        cx={4}
                        cy={22}
                        r={2}
                        fill="currentColor"
                        stroke="none"
                      />
                      <circle
                        cx={20}
                        cy={22}
                        r={2}
                        fill="currentColor"
                        stroke="none"
                      />
                      <polyline
                        points="1,1 4,4 4,14 2,18 23,18 "
                        strokeLinecap="butt"
                      />
                    </g>
                  </svg>
                  <span className="counter counter--critical">
                    2 <i className="sr-only">items in cart</i>
                  </span>
                </a>
                <div className="dropdown js-dropdown">
                  <div className="mega-nav__icon-btn dropdown__wrapper inline-block">
                    <a
                      href="account-settings.html"
                      className="color-inherit flex height-100% width-100% flex-center dropdown__trigger"
                    >
                      <svg className="icon" viewBox="0 0 24 24">
                        <title>Go to account settings</title>
                        <g
                          className="icon__group"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          strokeMiterlimit={10}
                        >
                          <circle cx={12} cy={6} r={4} />
                          <path d="M12 13a8 8 0 00-8 8h16a8 8 0 00-8-8z" />
                        </g>
                      </svg>
                    </a>
                    <ul
                      className="dropdown__menu"
                      aria-label="submenu"
                      data-theme="default"
                    >
                      <li>
                        <a
                          href="account-order-history.html"
                          className="dropdown__item"
                        >
                          Orders
                        </a>
                      </li>
                      <li>
                        <a
                          href="account-wishlist.html"
                          className="dropdown__item"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li>
                        <a
                          href="account-addresses.html"
                          className="dropdown__item"
                        >
                          Addresses
                        </a>
                      </li>
                      <li className="dropdown__separator" role="separator" />
                      <li>
                        <a
                          href="account-settings.html"
                          className="dropdown__item"
                        >
                          Account Settings
                        </a>
                      </li>
                      <li>
                        <a href="#0" className="dropdown__item">
                          Log out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  className="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus"
                  aria-label="Toggle search"
                  aria-controls="mega-nav-search"
                >
                  <svg className="icon" viewBox="0 0 24 24">
                    <g
                      className="icon__group"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeMiterlimit={10}
                    >
                      <path d="M4.222 4.222l15.556 15.556" />
                      <path d="M19.778 4.222L4.222 19.778" />
                      <circle cx="9.5" cy="9.5" r="6.5" />
                    </g>
                  </svg>
                </button>
              </li>
              {/* 👇 button */}
              <li className="mega-nav__item">
                <a
                  href="log-in.html"
                  className="btn btn--contrast mega-nav__btn"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* 👇 search */}
        <div
          className="mega-nav__search js-mega-nav__search"
          id="mega-nav-search"
        >
          <div className="mega-nav__search-inner">
            <input
              className="form-control width-100%"
              type="reset search"
              name="megasite-search"
              id="megasite-search"
              placeholder="Search..."
              aria-label="Search"
            />
            <div className="margin-top-lg">
              <p className="mega-nav__label">Quick Links</p>
              <ul>
                <li>
                  <a href="help-center.html" className="mega-nav__quick-link">
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="account-order-history.html"
                    className="mega-nav__quick-link"
                  >
                    Your Orders
                  </a>
                </li>
                <li>
                  <a
                    href="account-wishlist.html"
                    className="mega-nav__quick-link"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="mega-nav__quick-link">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="mega-nav__quick-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
