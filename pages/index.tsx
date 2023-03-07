import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import Script from "next/script";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <>
        {/* intro */}
        <section
          className="intro intro--top-overlay position-relative z-index-1 diagonal-section-bottom diagonal-section-bottom--flip-x bg-transparent margin-bottom-xxl"
          data-theme="dark-1"
          style={{ backgroundImage: 'url("assets/img/intro-img-1.jpg")' }}
        >
          <div className="container max-width-adaptive-lg padding-top-xxxl padding-bottom-xl">
            <div className="max-width-xs ie:bg ie:padding-md">
              <div
                className="text-sm opacity-60% margin-bottom-xxs reveal-fx reveal-fx--translate-up"
                data-reveal-fx-delta={0}
              >
                This is a Label
              </div>
              <div
                className="text-component margin-bottom-sm reveal-fx reveal-fx--translate-up"
                data-reveal-fx-delay={100}
                data-reveal-fx-delta={0}
              >
                <h1 className="text-xxxxl text-uppercase">
                  Art <em>&amp;</em> Clothing
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  vero aliquam, natus quae architecto hic quod!
                </p>
              </div>
              <div
                className="flex flex-wrap items-center gap-sm reveal-fx reveal-fx--translate-up"
                data-reveal-fx-delay={200}
                data-reveal-fx-delta={0}
              >
                <a href="shop.html" className="btn btn--subtle">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* featured products + deal */}
        <div className="overscroll-section position-relative z-index-1 margin-bottom-xxl js-overscroll-section">
          {/* featured products */}
          <section className="overscroll-section__sticky-content padding-bottom-xxl js-overscroll-section__sticky-content">
            <div className="container max-width-adaptive-lg">
              <h1 className="text-center">Featured Products</h1>
              <div
                className="tabs-v4 js-tabs margin-top-lg"
                data-show-panel-class="tabs-v4__panel--is-visible"
              >
                <ul
                  className="flex flex-wrap justify-center gap-xxs js-tabs__controls"
                  aria-label="Tabs Interface"
                >
                  <li>
                    <a
                      href="#tab-most-wanted"
                      className="tabs-v4__control"
                      aria-selected="true"
                    >
                      Most Wanted
                    </a>
                  </li>
                  <li>
                    <a href="#tab-new-arrival" className="tabs-v4__control">
                      New Arrival
                    </a>
                  </li>
                  <li>
                    <a href="#tab-best-seller" className="tabs-v4__control">
                      Best Seller
                    </a>
                  </li>
                </ul>
                <div
                  className="js-tabs__panels reveal-fx reveal-fx--translate-up"
                  data-reveal-fx-delta={50}
                >
                  <section
                    id="tab-most-wanted"
                    className="padding-top-lg js-tabs__panel"
                  >
                    <div className="grid gap-sm">
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <span className="prod-card-v2__badge" role="text">
                            New <i className="sr-only">product</i>
                          </span>
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-1a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-1b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <span className="prod-card-v2__price">$79</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <span
                            className="prod-card-v2__badge prod-card-v2__badge--discount"
                            role="text"
                          >
                            50% Off
                          </span>
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-2a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-2b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <del className="prod-card-v2__old-price">$79</del>
                              <ins className="prod-card-v2__price">$40</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-3a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-3b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <span className="prod-card-v2__price">$79</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    id="tab-new-arrival"
                    className="padding-top-lg js-tabs__panel"
                  >
                    <div className="grid gap-sm">
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <span className="prod-card-v2__badge" role="text">
                            New <i className="sr-only">product</i>
                          </span>
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-4a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-4b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <span className="prod-card-v2__price">$79</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <span className="prod-card-v2__badge" role="text">
                            New <i className="sr-only">product</i>
                          </span>
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-1a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-1b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <span className="prod-card-v2__price">$79</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <span className="prod-card-v2__badge" role="text">
                            New <i className="sr-only">product</i>
                          </span>
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-5a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-5b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <span className="prod-card-v2__price">$79</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    id="tab-best-seller"
                    className="padding-top-lg js-tabs__panel"
                  >
                    <div className="grid gap-sm">
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <span
                            className="prod-card-v2__badge prod-card-v2__badge--discount"
                            role="text"
                          >
                            50% Off
                          </span>
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-2a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-2b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <del className="prod-card-v2__old-price">$79</del>
                              <ins className="prod-card-v2__price">$40</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-6a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-6b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <del className="prod-card-v2__old-price">$79</del>
                              <ins className="prod-card-v2__price">$40</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6@sm col-4@md">
                        <div className="prod-card-v2">
                          <span
                            className="prod-card-v2__badge prod-card-v2__badge--discount"
                            role="text"
                          >
                            50% Off
                          </span>
                          <a
                            href="#0"
                            className="prod-card-v2__img-link"
                            aria-label="Description of the link"
                          >
                            <figure className="aspect-ratio-4:5">
                              <img
                                src="assets/img/product-card-v2-img-7a.jpg"
                                loading="lazy"
                                alt="Product preview image"
                              />
                              <img
                                src="assets/img/product-card-v2-img-7b.jpg"
                                loading="lazy"
                                alt="Product preview image"
                                aria-hidden="true"
                              />
                            </figure>
                          </a>
                          <div className="padding-sm text-center">
                            <h2 className="text-md font-primary">
                              <a href="#0" className="product-card-v2__title">
                                Product Name
                              </a>
                            </h2>
                            <div className="margin-top-xxxs">
                              <del className="prod-card-v2__old-price">$79</del>
                              <ins className="prod-card-v2__price">$40</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          {/* deal of the week */}
          <section
            className="overscroll-section__scroll-content bg position-relative js-overscroll-section__scroll-content"
            data-theme="light-2"
          >
            <div className="container max-width-adaptive-lg padding-y-xxl position-relative z-index-2">
              <div className="grid gap-md items-center">
                <div className="col-6@md">
                  <div className="text-xs color-contrast-medium text-uppercase letter-spacing-lg margin-bottom-sm">
                    Deal of the week
                  </div>
                  <div className="text-component margin-bottom-md">
                    <h1>Product Name</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum similique delectus voluptatibus!
                    </p>
                    <p className="text-md">
                      <del className="text-line-through color-contrast-medium margin-right-xxs">
                        $199
                      </del>
                      <ins className="text-decoration-none">$99</ins>
                    </p>
                  </div>
                  <div className="shadow-md radius-md padding-sm">
                    <div className="flex flex-wrap gap-sm justify-between items-center">
                      <div>
                        <div
                          className="countdown countdown--has-labels text-lg js-countdown"
                          data-timer={604800}
                          data-labels="D, H, M, S"
                        >
                          <p className="countdown__fallback">
                            This deal ends in 7 days.
                          </p>
                        </div>
                      </div>
                      <a href="#0" className="btn btn--primary">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6@md">
                  <figure className="reveal-fx reveal-fx--clip-x">
                    <img
                      className="block width-100%"
                      src="assets/img/deal-feature-img-1.jpg"
                      loading="lazy"
                      alt="Image description"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <figure
              className="bg-decoration-v2 z-index-1 blend-multiply"
              aria-hidden="true"
            >
              <svg
                className="bg-decoration-v2__svg color-contrast-low opacity-20%"
                viewBox="0 0 1920 450"
                fill="none"
              >
                <g stroke="currentColor" strokeWidth={2}>
                  <rect x={1286} y={64} width={128} height={128} />
                  <circle cx={1350} cy={128} r={64} />
                  <path d="M1286 64L1414 192" />
                  <circle cx={1478} cy={128} r={64} />
                  <rect x={1414} y={192} width={128} height={128} />
                  <circle cx={1478} cy={256} r={64} />
                  <path d="M1414 192L1542 320" />
                  <circle cx={1606} cy={256} r={64} />
                  <rect x={1542} y={320} width={128} height={128} />
                  <circle cx={1606} cy={384} r={64} />
                  <path d="M1542 320L1670 448" />
                  <rect x={1690} y={192} width={128} height={128} />
                  <circle cx={1754} cy={256} r={64} />
                  <path d="M1690 192L1818 320" />
                  <rect x={1542} y={64} width={128} height={128} />
                  <circle cx={1606} cy={128} r={64} />
                  <path d="M1542 64L1670 192" />
                  <circle cx={1478} r={64} />
                </g>
              </svg>
            </figure>
          </section>
        </div>
        {/* shop main categories */}
        <section className="feature-v10">
          <div className="container max-width-adaptive-sm">
            <div className="text-component text-center">
              <h1>Shop by Category</h1>
              <p className="color-contrast-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="padding-y-xl padding-top-xl@md padding-bottom-0@md">
            <div className="container max-width-adaptive-lg">
              <div className="grid">
                <figure className="col-6@md reveal-fx reveal-fx--clip-y">
                  <img
                    className="block width-100% height-100% object-cover"
                    src="assets/img/feature-v10-img-1.jpg"
                    loading="lazy"
                    alt="Image description"
                  />
                </figure>
                <div className="bg-contrast-lower bg-opacity-50% col-6@md">
                  <div className="text-component text-space-y-md height-100% flex flex-column padding-md">
                    <h2>Women</h2>
                    <p className="margin-top-auto">
                      <a href="#0" className="feature-v10__link">
                        <i>Shop Now</i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="padding-y-xl padding-bottom-xxl@md padding-top-0@md"
            data-theme="dark-1"
          >
            <div className="container max-width-adaptive-lg">
              <div className="grid">
                <figure className="col-6@md order-2@md reveal-fx reveal-fx--clip-y">
                  <img
                    className="block width-100% height-100% object-cover"
                    src="assets/img/feature-v10-img-2.jpg"
                    loading="lazy"
                    alt="Image description"
                  />
                </figure>
                <div className="bg-contrast-lower bg-opacity-50% col-6@md order-1@md">
                  <div className="text-component text-space-y-md height-100% flex flex-column padding-md">
                    <h2>Men</h2>
                    <p className="margin-top-auto">
                      <a href="#0" className="feature-v10__link">
                        <i>Shop Now</i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* product color feature */}
        <section
          className="prod-color-feature padding-top-xl padding-bottom-xxl position-relative z-index-1 -translate-y-2 margin-bottom-xxl"
          data-theme="dark-1"
        >
          <div className="container max-width-adaptive-lg position-relative">
            <div className="grid gap-lg items-center">
              <div className="col-6@md order-2@md">
                <div className="text-sm color-contrast-medium margin-bottom-xxs">
                  Label
                </div>
                <div className="text-component">
                  <h1>Product Name</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum similique delectus voluptatibus!
                  </p>
                </div>
                <fieldset className="color-swatches padding-y-sm js-color-swatches left-0 padding-x-sm margin-top-md z-index-2">
                  <legend
                    className="color-swatches__legend text-sm color-contrast-medium margin-bottom-xs"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    Color:{" "}
                    <span className="color-swatches__color color-contrast-high js-color-swatches__color">
                      Black
                    </span>
                  </legend>
                  <select
                    className="js-color-swatches__select"
                    aria-label="Select a color"
                  >
                    <option
                      value="Black"
                      data-style="background-color: #000;"
                      data-custom-attr="data-controls: prd-color-slideshow, data-index: 1"
                    >
                      Black
                    </option>
                    <option
                      value="Gold"
                      data-style="background-color: #d6ad60;"
                      data-custom-attr="data-controls: prd-color-slideshow, data-index: 2"
                    >
                      Gold
                    </option>
                  </select>
                </fieldset>
                <div className="margin-top-md">
                  <a href="#0" className="btn btn--primary">
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="col-6@md order-1@md">
                <div
                  id="prd-color-slideshow"
                  className="slideshow slideshow--transition-prx reveal-fx reveal-fx--translate-up js-slideshow"
                  data-navigation="off"
                >
                  <p className="sr-only">Product Color Variations</p>
                  <ul className="slideshow__content">
                    <li className="slideshow__item bg js-slideshow__item">
                      <figure>
                        <img
                          className="block width-100%"
                          src="assets/img/prod-color-feature-img-1.jpg"
                          alt="Image description"
                        />
                      </figure>
                    </li>
                    <li className="slideshow__item bg js-slideshow__item">
                      <figure>
                        <img
                          className="block width-100%"
                          src="assets/img/prod-color-feature-img-2.jpg"
                          alt="Image description"
                        />
                      </figure>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials */}
        <section className="position-relative z-index-1 margin-bottom-xxl">
          <div className="container max-width-adaptive-lg">
            <div className="margin-bottom-lg">
              <h1 className="text-center">Hear it from our customers.</h1>
            </div>
            <div className="grid gap-sm reveal-fx reveal-fx--translate-up">
              <div className="bg-contrast-lower bg-opacity-30% padding-md text-center flex@md flex-column@md col-4@md">
                <div className="rating rating--read-only js-rating js-rating--read-only margin-bottom-sm">
                  <p className="sr-only">
                    The rating of this product is{" "}
                    <span className="rating__value js-rating__value">3.5</span>{" "}
                    out of 5
                  </p>
                  <div className="rating__control rating__control--is-hidden js-rating__control">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <polygon
                        points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <blockquote className="line-height-md margin-bottom-md">
                  <mark>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </mark>
                  . Eligendi atque doloremque beatae! Doloremque perspiciatis
                  aliquid repellat quasi praesentium, minima nobis assumenda ex?
                </blockquote>
                <footer className="flex flex-column items-center margin-top-auto@md">
                  <figure
                    className="flex-shrink-0 margin-bottom-xxxs"
                    aria-hidden="true"
                  >
                    <img
                      className="block width-xl height-xl radius-50% shadow-md"
                      src="assets/img/testimonials-img-1.jpg"
                      alt="Emily Ewing"
                    />
                  </figure>
                  <cite className="text-sm">
                    <strong>Emily Ewing</strong>
                    <span className="block color-contrast-medium margin-top-xxxxs">
                      Naples, Italy
                    </span>
                  </cite>
                </footer>
              </div>
              <div className="bg-contrast-lower bg-opacity-30% padding-md text-center flex@md flex-column@md col-4@md">
                <div className="rating rating--read-only js-rating js-rating--read-only margin-bottom-sm">
                  <p className="sr-only">
                    The rating of this product is{" "}
                    <span className="rating__value js-rating__value">5</span>{" "}
                    out of 5
                  </p>
                  <div className="rating__control rating__control--is-hidden js-rating__control">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <polygon
                        points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <blockquote className="line-height-md margin-bottom-md">
                  <mark>Lorem ipsum dolor sit amet</mark>, consectetur
                  adipisicing elit. Consectetur, recusandae? Saepe, facere.
                </blockquote>
                <footer className="flex flex-column items-center margin-top-auto@md">
                  <figure
                    className="flex-shrink-0 margin-bottom-xxxs"
                    aria-hidden="true"
                  >
                    <img
                      className="block width-xl height-xl radius-50% shadow-md"
                      src="assets/img/testimonials-img-2.jpg"
                      alt="James Powell"
                    />
                  </figure>
                  <cite className="text-sm">
                    <strong>James Powell</strong>
                    <span className="block color-contrast-medium margin-top-xxxxs">
                      Madrid, Spain
                    </span>
                  </cite>
                </footer>
              </div>
              <div className="bg-contrast-lower bg-opacity-30% padding-md text-center flex@md flex-column@md col-4@md">
                <div className="rating rating--read-only js-rating js-rating--read-only margin-bottom-sm">
                  <p className="sr-only">
                    The rating of this product is{" "}
                    <span className="rating__value js-rating__value">4.5</span>{" "}
                    out of 5
                  </p>
                  <div className="rating__control rating__control--is-hidden js-rating__control">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <polygon
                        points="12 1.489 15.09 7.751 22 8.755 17 13.629 18.18 20.511 12 17.261 5.82 20.511 7 13.629 2 8.755 8.91 7.751 12 1.489"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <blockquote className="line-height-md margin-bottom-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <mark>Suscipit provident numquam velit officiis impedit</mark>
                  , molestiae adipisci architecto dolore expedita esse minima ut
                  asperiores explicabo, aut iure exercitationem quam.
                </blockquote>
                <footer className="flex flex-column items-center margin-top-auto@md">
                  <figure
                    className="flex-shrink-0 margin-bottom-xxxs"
                    aria-hidden="true"
                  >
                    <img
                      className="block width-xl height-xl radius-50% shadow-md"
                      src="assets/img/testimonials-img-3.jpg"
                      alt="Olivia Gribben"
                    />
                  </figure>
                  <cite className="text-sm">
                    <strong>Olivia Gribben</strong>
                    <span className="block color-contrast-medium margin-top-xxxxs">
                      London, UK
                    </span>
                  </cite>
                </footer>
              </div>
            </div>
          </div>
        </section>
        {/* our story */}
        <div
          className="position-relative z-index-1 padding-y-xxl margin-bottom-xxxl"
          data-theme="light-1"
        >
          <div className="container max-width-adaptive-md position-relative z-index-2">
            <article
              className="t-article-v4 padding-md padding-x-lg@md padding-y-xl@md shadow-xs"
              data-theme="default"
            >
              <div className="text-component text-center line-height-lg text-space-y-xxl max-width-xs margin-x-auto">
                <p className="text-xs text-uppercase letter-spacing-lg color-contrast-medium">
                  Our Story
                </p>
                <h1 className="text-xxxl">How a simple idea changed my life</h1>
              </div>
              <div
                className="t-article-v4__divider margin-y-lg"
                aria-hidden="true"
              >
                <span />
              </div>
              <div className="text-component line-height-lg text-space-y-md">
                <figure className="text-component__block text-component__block--outset text-component__block--right reveal-fx reveal-fx--clip-x">
                  <img
                    className="shadow-xs"
                    src="assets/img/article-v4-img-1.jpg"
                    alt="Image description here"
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis incidunt minus vero deserunt illum perspiciatis sed
                  sit. Officia, quia at? Nisi dolores quis culpa nulla eveniet?
                  Rem vel numquam ipsa voluptatum voluptate illo minima,
                  temporibus atque <a href="#0">officia soluta</a> magnam
                  laborum neque alias consequuntur enim aliquid consequatur non
                  accusamus exercitationem. Perspiciatis dolorem a commodi
                  alias, ad corporis iusto magnam in quae deleniti incidunt
                  facilis voluptatibus. Aliquid reprehenderit, provident, totam
                  necessitatibus cumque vel veniam consequuntur maxime iure
                  accusamus explicabo recusandae neque quas?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  sed reprehenderit repellendus sapiente nulla eligendi impedit!
                  Reiciendis placeat dignissimos vitae! Porro sit dicta officiis
                  qui. Enim, eveniet vitae? Fugit, blanditiis.
                </p>
                <p>— With love</p>
              </div>
              <figure className="margin-top-sm">
                <img
                  className="block opacity-80%"
                  src="assets/img/signature.svg"
                  alt="Author signature"
                />
              </figure>
            </article>
          </div>
          <figure
            className="bg-decoration-v2 z-index-1 blend-overlay flip-x"
            aria-hidden="true"
          >
            <svg
              className="bg-decoration-v2__svg color-contrast-higher opacity-30%"
              viewBox="0 0 1920 450"
              fill="none"
            >
              <g stroke="currentColor" strokeWidth={2}>
                <path d="M1750 135C1750 153.565 1742.63 171.37 1729.5 184.497C1716.37 197.625 1698.57 205 1680 205C1661.43 205 1643.63 197.625 1630.5 184.497C1617.37 171.37 1610 153.565 1610 135L1750 135Z" />
                <path d="M1750 275C1750 293.565 1742.63 311.37 1729.5 324.497C1716.37 337.625 1698.57 345 1680 345C1661.43 345 1643.63 337.625 1630.5 324.497C1617.37 311.37 1610 293.565 1610 275L1750 275Z" />
                <path d="M1610 275C1610 256.435 1617.37 238.63 1630.5 225.503C1643.63 212.375 1661.43 205 1680 205C1698.57 205 1716.37 212.375 1729.5 225.503C1742.63 238.63 1750 256.435 1750 275L1610 275Z" />
                <rect
                  width={140}
                  height={140}
                  transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 1750 275)"
                />
                <path d="M1750 -5C1750 13.5652 1742.63 31.3699 1729.5 44.4975C1716.37 57.625 1698.57 65 1680 65C1661.43 65 1643.63 57.625 1630.5 44.4975C1617.37 31.3699 1610 13.5652 1610 -4.99999L1750 -5Z" />
                <path d="M1610 135C1610 116.435 1617.37 98.6301 1630.5 85.5025C1643.63 72.375 1661.43 65 1680 65C1698.57 65 1716.37 72.375 1729.5 85.5025C1742.63 98.6301 1750 116.435 1750 135L1610 135Z" />
                <rect
                  width={140}
                  height={140}
                  transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 1750 135)"
                />
                <path d="M1610 135C1610 153.565 1602.63 171.37 1589.5 184.497C1576.37 197.625 1558.57 205 1540 205C1521.43 205 1503.63 197.625 1490.5 184.497C1477.37 171.37 1470 153.565 1470 135L1610 135Z" />
                <path d="M1610 275C1610 293.565 1602.63 311.37 1589.5 324.497C1576.37 337.625 1558.57 345 1540 345C1521.43 345 1503.63 337.625 1490.5 324.497C1477.37 311.37 1470 293.565 1470 275L1610 275Z" />
                <path d="M1470 275C1470 256.435 1477.37 238.63 1490.5 225.503C1503.63 212.375 1521.43 205 1540 205C1558.57 205 1576.37 212.375 1589.5 225.503C1602.63 238.63 1610 256.435 1610 275L1470 275Z" />
                <path d="M1470 415C1470 396.435 1477.37 378.63 1490.5 365.503C1503.63 352.375 1521.43 345 1540 345C1558.57 345 1576.37 352.375 1589.5 365.503C1602.63 378.63 1610 396.435 1610 415L1470 415Z" />
                <path d="M1470 135C1470 116.435 1477.37 98.6301 1490.5 85.5025C1503.63 72.375 1521.43 65 1540 65C1558.57 65 1576.37 72.375 1589.5 85.5025C1602.63 98.6301 1610 116.435 1610 135L1470 135Z" />
                <rect
                  width={140}
                  height={140}
                  transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 1610 275)"
                />
                <rect
                  width={140}
                  height={140}
                  transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 1610 415)"
                />
                <path d="M1470 -5C1470 13.5652 1462.63 31.3699 1449.5 44.4975C1436.37 57.625 1418.57 65 1400 65C1381.43 65 1363.63 57.625 1350.5 44.4975C1337.37 31.3699 1330 13.5652 1330 -4.99999L1470 -5Z" />
                <path d="M1330 135C1330 116.435 1337.37 98.6301 1350.5 85.5025C1363.63 72.375 1381.43 65 1400 65C1418.57 65 1436.37 72.375 1449.5 85.5025C1462.63 98.6301 1470 116.435 1470 135L1330 135Z" />
                <rect
                  width={140}
                  height={140}
                  transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 1470 135)"
                />
              </g>
            </svg>
          </figure>
        </div>
        {/* socials */}
        <section className="socials-v4 margin-bottom-xxxl">
          <div className="container max-width-adaptive-lg">
            <div className="grid gap-md">
              <div className="col-6@md">
                <div className="text-component">
                  <h1>Watch this space</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    provident impedit consectetur.
                  </p>
                </div>
              </div>
              <div className="col-6@md col-5@lg offset-1@lg">
                <form className="margin-bottom-sm">
                  <div className="flex flex-column flex-row@sm gap-xxxs">
                    <input
                      className="form-control flex-grow min-width-0"
                      aria-label="Email"
                      type="email"
                      placeholder="Your Email"
                    />
                    <button className="btn btn--primary">Subscribe</button>
                  </div>
                </form>
                <ul className="flex gap-xs flex-wrap justify-center justify-end@md">
                  <li>
                    <a href="#0" className="socials-v4__btn">
                      <svg className="icon" viewBox="0 0 32 32">
                        <title>Follow us on Twitter</title>
                        <g>
                          <path d="M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3 c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5 c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z"></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="socials-v4__btn">
                      <svg className="icon" viewBox="0 0 32 32">
                        <title>Follow us on Facebook</title>
                        <path d="M32,16A16,16,0,1,0,13.5,31.806V20.625H9.438V16H13.5V12.475c0-4.01,2.389-6.225,6.043-6.225a24.644,24.644,0,0,1,3.582.312V10.5H21.107A2.312,2.312,0,0,0,18.5,13v3h4.438l-.71,4.625H18.5V31.806A16,16,0,0,0,32,16Z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="socials-v4__btn">
                      <svg className="icon" viewBox="0 0 32 32">
                        <title>Follow us on Youtube</title>
                        <path d="M31.7,9.6c0,0-0.3-2.2-1.3-3.2c-1.2-1.3-2.6-1.3-3.2-1.4C22.7,4.7,16,4.7,16,4.7h0c0,0-6.7,0-11.2,0.3 c-0.6,0.1-2,0.1-3.2,1.4c-1,1-1.3,3.2-1.3,3.2S0,12.2,0,14.8v2.4c0,2.6,0.3,5.2,0.3,5.2s0.3,2.2,1.3,3.2c1.2,1.3,2.8,1.2,3.5,1.4 C7.7,27.2,16,27.3,16,27.3s6.7,0,11.2-0.3c0.6-0.1,2-0.1,3.2-1.4c1-1,1.3-3.2,1.3-3.2s0.3-2.6,0.3-5.2v-2.4 C32,12.2,31.7,9.6,31.7,9.6z M12.7,20.2l0-9l8.6,4.5L12.7,20.2z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="socials-v4__btn">
                      <svg className="icon" viewBox="0 0 32 32">
                        <title>Join our Slack channel</title>
                        <rect x={17} y={1} width={6} height={14} rx={3} />
                        <rect x={1} y={9} width={14} height={6} rx={3} />
                        <rect x={17} y={17} width={14} height={6} rx={3} />
                        <rect x={9} y={17} width={6} height={14} rx={3} />
                        <path d="M12,1a3,3,0,0,0,0,6h3V4A3,3,0,0,0,12,1Z" />
                        <path d="M1,20a3,3,0,0,0,6,0V17H4A3,3,0,0,0,1,20Z" />
                        <path d="M31,12a3,3,0,0,0-6,0v3h3A3,3,0,0,0,31,12Z" />
                        <path d="M20,31a3,3,0,0,0,0-6H17v3A3,3,0,0,0,20,31Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="socials-v4__btn">
                      <svg className="icon" viewBox="0 0 32 32">
                        <title>Follow us on Instagram</title>
                        <path d="M16,3.7c4,0,4.479.015,6.061.087a6.426,6.426,0,0,1,4.51,1.639,6.426,6.426,0,0,1,1.639,4.51C28.282,11.521,28.3,12,28.3,16s-.015,4.479-.087,6.061a6.426,6.426,0,0,1-1.639,4.51,6.425,6.425,0,0,1-4.51,1.639c-1.582.072-2.056.087-6.061.087s-4.479-.015-6.061-.087a6.426,6.426,0,0,1-4.51-1.639,6.425,6.425,0,0,1-1.639-4.51C3.718,20.479,3.7,20.005,3.7,16s.015-4.479.087-6.061a6.426,6.426,0,0,1,1.639-4.51A6.426,6.426,0,0,1,9.939,3.79C11.521,3.718,12,3.7,16,3.7M16,1c-4.073,0-4.584.017-6.185.09a8.974,8.974,0,0,0-6.3,2.427,8.971,8.971,0,0,0-2.427,6.3C1.017,11.416,1,11.927,1,16s.017,4.584.09,6.185a8.974,8.974,0,0,0,2.427,6.3,8.971,8.971,0,0,0,6.3,2.427c1.6.073,2.112.09,6.185.09s4.584-.017,6.185-.09a8.974,8.974,0,0,0,6.3-2.427,8.971,8.971,0,0,0,2.427-6.3c.073-1.6.09-2.112.09-6.185s-.017-4.584-.09-6.185a8.974,8.974,0,0,0-2.427-6.3,8.971,8.971,0,0,0-6.3-2.427C20.584,1.017,20.073,1,16,1Z"></path>
                        <path d="M16,8.3A7.7,7.7,0,1,0,23.7,16,7.7,7.7,0,0,0,16,8.3ZM16,21a5,5,0,1,1,5-5A5,5,0,0,1,16,21Z"></path>
                        <circle cx="24.007" cy="7.993" r="1.8" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- cart drawer --> */}
        <div
          className="modal modal--animate-slide-left flex justify-end bg-contrast-higher bg-opacity-90% js-modal"
          id="cart-drawer"
        >
          <div
            className="modal__content dr-cart bg shadow-md flex flex-column width-100% max-width-xxs js-tab-focus"
            role="alertdialog"
            aria-labelledby="cart-drawer-title"
            aria-describedby="cart-drawer-description"
          >
            <div className="padding-top-sm padding-x-md flex-grow overflow-auto momentum-scrolling overscroll-contain">
              <button className="reset modal__close-btn modal__close-btn--inner float-right position-sticky top-0 js-modal__close js-tab-focus">
                <svg className="icon" viewBox="0 0 20 20">
                  <title>Close modal window</title>
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  >
                    <line x1="3" y1="3" x2="17" y2="17" />
                    <line x1="17" y1="3" x2="3" y2="17" />
                  </g>
                </svg>
              </button>

              <h2 id="cart-drawer-title">Your Cart</h2>

              <ol className="margin-top-md">
                <li className="dr-cart__product">
                  <a href="#0" className="dr-cart__img">
                    <img
                      src="assets/img/cart-drawer-img-1.jpg"
                      alt="Image description"
                    />
                  </a>

                  <div>
                    <h2 className="text-base">
                      <a href="#0" className="color-inherit">
                        Product One
                      </a>
                    </h2>
                    <p className="text-sm color-contrast-medium margin-top-xxxs">
                      Color: Black, Size: M
                    </p>

                    <div className="margin-top-xxxxs">
                      <div className="select dr-cart__select">
                        <select
                          className="select__input form-control"
                          name="selectProductQty1"
                          id="selectProductQty1"
                          data-label="Select product quantity"
                        >
                          <option value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                        </select>

                        <svg
                          className="icon select__icon"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                        >
                          <g strokeWidth="1" stroke="currentColor">
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              points="15.5,4.5 8,12 0.5,4.5 "
                            ></polyline>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="color-contrast-higher">$49.00</p>
                    <button className="dr-cart__remove-btn margin-top-xxxs">
                      Remove
                    </button>
                  </div>
                </li>

                <li className="dr-cart__product">
                  <a href="#0" className="dr-cart__img">
                    <img
                      src="assets/img/cart-drawer-img-2.jpg"
                      alt="Image description"
                    />
                  </a>

                  <div>
                    <h2 className="text-base">
                      <a href="#0" className="color-inherit">
                        Product Two
                      </a>
                    </h2>
                    <p className="text-sm color-contrast-medium margin-top-xxxs">
                      Color: Black, Size: M
                    </p>

                    <div className="margin-top-xxxxs">
                      <div className="select dr-cart__select">
                        <select
                          className="select__input form-control"
                          name="selectProductQty2"
                          id="selectProductQty2"
                          data-label="Select product quantity"
                        >
                          <option value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                        </select>

                        <svg
                          className="icon select__icon"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                        >
                          <g strokeWidth="1" stroke="currentColor">
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeMiterlimit="10"
                              points="15.5,4.5 8,12 0.5,4.5 "
                            ></polyline>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="color-contrast-higher">$49.00</p>
                    <button className="dr-cart__remove-btn margin-top-xxxs">
                      Remove
                    </button>
                  </div>
                </li>
              </ol>
            </div>

            <footer className="bg-contrast-lower bg-opacity-30% padding-x-md padding-y-sm flex-shrink-0">
              <p className="flex justify-between">
                <span>Subtotal:</span> <span>$98.00</span>
              </p>
              <a
                href="#0"
                className="btn btn--primary btn--md width-100% margin-y-xs"
              >
                Checkout &rarr;
              </a>
            </footer>
          </div>
        </div>

        <Script src="assets/js/scripts.js"></Script>
      </>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };
