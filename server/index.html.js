const {AWS_carousel} = require('./config')

module.exports = ( carouselHTML ) => {


  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>StreetBreezy Listing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/listing/static/assets/images/favicon.ico" />

    <!-- Libraries Required for Components -->
    <script
      src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
      integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
      crossorigin="anonymous"
      defer
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
      integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
      integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
      crossorigin="anonymous"
    ></script>

    <!-- Component Stylesheets -->
    <link defer rel="stylesheet" type="text/css" href="${AWS_carousel}/carousel/static/carousel-style.css" />
    <link defer rel="stylesheet" type="text/css" href="${AWS_carousel}/carousel/static/reset.css" />
   
    <!-- Listing Page Stylesheets -->
    <link rel="stylesheet" type="text/css" media="screen" href="/listing/static/reset.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="/listing/static/style.css" />
  </head>
  <body>
    <header>
      <div class="max-width-container">
        <img src="/listing/static/assets/images/white-hamburger.svg" class="menu-icon" />
        <img src="/listing/static/assets/images/street-breezy-logo.png" class="header-logo" />
        <div class="header-links">
          <a>Advertise</a> <a>Recent Searches</a> <a>Sign In</a> <a>|</a>
          <a>Register</a>
        </div>
      </div>
    </header>
    <nav>
      <div class="max-width-container">
        <div class="nav-links">
          <a>Sales</a> <a>Rentals</a> <a>Buildings</a> <a>Resources</a>
          <a>Blog</a>
        </div>
        <div class="search">
          <input type="text" placeholder="e.g. address, building, agent" />
          <img src="/listing/static/assets/images/search-icon.svg" />
        </div>
      </div>
    </nav>

    <div class="main-content">
    <article id="carousel-container">${carouselHTML}</article>
      <article id="details-container"></article>
      <article id="description-container"></article>

      <hr class="separator" />

      <article id="similar-container"></article>
    </div>

    <footer>
      <div class="max-width-container">
        <div class="footer-column">
          <div>The Hamptons Site</div>
          <div>Jersey Site</div>
        </div>
        <div class="footer-column footer-column-two">
          <div>Blog</div>
          <div>We're Hiring!</div>
          <div>Submit Your Listings</div>
        </div>
        <div class="footer-column">
          <div>Help</div>
          <div>Terms of Use & Privacy Policy</div>
          <div>Ad Choice</div>
        </div>
        <div class="footer-column footer-column-four">
          <img src="/listing/static/assets/images/apple-store-logo.svg" />
          <img src="/listing/static/assets/images/google-play-logo.svg" />
        </div>
        <div class="footer-column"></div>
        <span class="footer-social">
          <img src="/listing/static/assets/images/twitter-icon.png" />
          <img src="/listing/static/assets/images/facebook-icon.png" />
          <img src="/listing/static/assets/images/instagram-icon.png" />
        </span>
        <div class="footer-text">
          StreetBreezy 2018-2019 · Made In NYC · A Student Project in Front End
          Development
        </div>
      </div>
    </footer>
  </body>

  <!-- Component Script Bundles -->
<!-- <script  src="${AWS_carousel}/carousel/static/bundle.js"></script> --> 
</html>`
}