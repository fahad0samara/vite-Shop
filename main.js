import './style.css'


document.querySelector('#app').innerHTML = `
<header>
<h1 class="logo"><span>self</span>code </h1>
<nav class="nabar">
  <a href="#">home</a>
  <a href="#">about</a>
  <a href="#">service</a>
  <a href="#">product</a>
  <a href="#">contact</a>
</nav>
</header>

<!-----------------------------section Home----------------------------------->
<section class="Home">
<div class="content">
  <h1>new <span>winter</span> <br> collection 2024</h1>
  <p>I design website - If you follow the step-by-step <br>video you will
  able to make a beautiful website using <br> HTML & CSS</p>

  <a href="#" class="btn">shop now</a>
</div>
    <div class="mainImg">
      <img src="home1.jpg" alt="" id="mainimg">
    </div>
    <div class="smallImg">
      <img src="home1.jpg" alt="">
      <img src="home2.jpg" alt="">
      <img src="home4.jpg" alt="">
      <img src="home5.jpg" alt="">
      <img src="home6.jpg" alt="">
      <img src="home7.jpg" alt="">
    </div>

</section>
`

setupCounter(document.querySelector('#counter'))
