/* ============================================
   Ishu Creation — Main JavaScript
   Pure vanilla JS. No frameworks.
   ============================================ */

/* ---------- WhatsApp config ---------- */
const WHATSAPP_NUMBER = "94789022447";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------- Sticky header on scroll ---------- */
const header = document.querySelector(".header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }, { passive: true });
}

/* ---------- Mobile menu toggle ---------- */
const toggleBtn = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
if (toggleBtn && mobileNav) {
  toggleBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
}

/* ---------- Highlight current nav link ---------- */
const path = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav a, .mobile-nav a").forEach(a => {
  if (a.getAttribute("href") === path) a.classList.add("active");
});

/* ---------- Scroll reveal using IntersectionObserver ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ---------- Product data (used by products & gallery pages) ---------- */
const PRODUCTS = [
  { id:"rose-tier", title:"White Blossom Promise", category:"Cakes",
    description:"1 kg Single-tier tall vanilla buttercream cake decorated with delicate silver and white edible pearls, topped with fresh white roses and baby's breath flowers.",
    price:"Rs.~5,499", image:"images/CAKES/25.jpg" },
  { id:"stroeberry", title:"Berry Burst Deluxe", category:"Cakes",
    description:"1 kg celebration vanila cake featuring a two-tone pink and cream ombré buttercream finish, accented with a vibrant red drip. whole and halved strawberries.",
    price:"Rs.~5,499", image:"images/CAKES/9.jpg" },
  { id:"3 floor", title:"The Golden Majesty", category:"Cakes",
    description:"2 kg multi-tiered marbled buttercream cake elegantly lined with gold pearl borders. Topped with clusters of and gold spheres and crowned with butterflies and feathers.",
    price:"Rs.~8,999", image:"images/CAKES/cke.jpeg" },
  { id:"purple", title:"Amethyst Dream Cake", category:"Cakes",
    description:"1.5 kg two-tone lavender buttercream cake. Topped with matching giant piped cupcakes and crowned with shimmering silver sprinkles and delicate gold-trimmed purple butterflies.",
    price:"Rs.~4,999", image:"images/CAKES/18.jpg" },
  { id:"marmaride", title:"Ocean Princess Treasures", category:"Cakes",
    description:"1 kg buttercream custom celebration cake. Topped with a large mermaid tail cutout and crowned with scattered white pearls and colorful underwater coral toppers.",
    price:"Rs.~3,999", image:"images/CAKES/26.jpg" },
  { id:"sir", title:"Gentleman’s Hot Pink", category:"Cakes",
    description:"1 kg hot pink buttercream cake. Topped with a handcrafted black fondant shirt collar and striped necktie, and crowned with a dark piped rosette border at the base.",
    price:"Rs.~4,999", image:"images/CAKES/5.jpg" },
  { id:"red", title:"Ruby & Gold Butterfly", category:"Cakes",
    description:"1 kg custom design butter cake elegantly. Decorated with floating laser-cut gold butterflies along the sides, and crowned with a modern black birthday script topper.",
    price:"Rs.~4,499", image:"images/CAKES/42.jpg" },
  { id:"pink", title:"Golden Shimmer Rose Cake", category:"Cakes",
    description:"1 kg custom design cake accented with a pristine white rose at the base and a reflective gold script birthday topper. crowned with bold pink lettering for personalized messages.",
    price:"Rs.~4,999", image:"images/CAKES/50.jpg" },
  { id:"husband", title:"Suited & Booted Milestone", category:"Cakes",
    description:"1 kg buttercream cake decorated with a black fondant tuxedo jacket, buttons, and a striking red bowtie centerpiece. Topped with a sprinkling of mini gold pearls.",
    price:"Rs.~4,499", image:"images/CAKES/40.jpg" },
  { id:"purple2", title:"The Violet Rosette Ombré", category:"Cakes",
    description:"1 kg butter cake detailed with tiny piped buttercream flowers along the sides. Topped with multi-tonal purple frosting swirls, and crowned with a spacious.",
    price:"Rs.~2,999", image:"images/CAKES/36.jpg" },
  { id:"strawberry", title:"The Strawberry Fields Cake", category:"Cakes",
    description:"500g fresh cream cake elegantly lined with sliced strawberries along the base. Topped with large piped buttercream swirls and crowned with whole, vibrant strawberries.",
    price:"Rs.~3,999", image:"images/CAKES/7.jpg" },
  { id:"black-magic", title:"The Black Velvet Sparkle", category:"Cakes",
    description:"1 kg jet-black buttercream cake. Topped with glittering gold and holographic paper butterflies and crowned with scattered mixed gold and silver edible pearls.",
    price:"Rs.~4,999", image:"images/CAKES/28.jpg" },
  { id:"nirupana", title:"Minimalist Monochrome Art", category:"Cakes",
    description:"1 kg sharp cream buttercream cake designed with a contrasting jet-black base wrap. Topped with a hand-piped theatrical mask illustration and crowned with a delicate border.",
    price:"Rs.~3,800", image:"images/CAKES/6.jpg" },
  { id:"blue-choko", title:"The Ocean Drip & Ganache", category:"Cakes",
    description:"1 kg chokolate cake finished with a blue and white ombré buttercream gradient. Topped with a rich, glossy dark chocolate drip and crowned with clusters of shiny gold.",
    price:"Rs.~3,999", image:"images/CAKES/10.jpg" },
  { id:"rider", title:"Rider’s Dream Cake", category:"Cakes",
    description:"1 kg cream-to-green gradient buttercream cake detailed with a vibrant lime green chocolate drip. Topped with a motocross rider jumping over a track of green rosette swirls.",
    price:"Rs.~4,499", image:"images/CAKES/17.jpg" },
  { id:"oreo", title:"Oreo Bliss & Gold Dust", category:"Cakes",
    description:"1 kg celebration cake finished with black-to-white ombré buttercream gradient. Topped with a full circular crown of large buttercream rosettes alternating with chocolate cookie.",
    price:"Rs.~2,999", image:"images/CAKES/8.jpg" },
  { id:"youtube", title:"YouTube Creator’s Drip", category:"Cakes",
    description:"2 kg buttercream cake detailed with a striking bright red chocolate drip along the sides. Topped with a YouTube play button cutout and crowned with chocolate wafer bars, cookies.",
    price:"Rs.~4,499", image:"images/CAKES/11.jpg" },
  { id:"awrudu", title:"The Violet Glow", category:"Cakes",
    description:"500g Butter cake finished with a gentle purple marbled buttercream pattern along the sides. Topped with a crescent crown of bi-color purple rosettes.",
    price:"Rs.~3999", image:"images/CAKES/12.jpg" },
  { id:"pink-mom", title:"Fuchsia Garland Bliss", category:"Cakes",
    description:"1 kg light pink buttercream cake elegantly bordered with a full circular crown of vibrant fuchsia rosettes and star pipings. Topped with metallic gold mini pearls.",
    price:"Rs.~3,999", image:"images/CAKES/13.jpg" },
  { id:"purple-mom", title:"Violet Garland Bliss", category:"Cakes",
    description:"1 kg butter cake beautifully finished with a textured purple-to-pink ombré buttercream gradient. Topped with a full circular crown of rich mauve rosettes and star pipings.",
    price:"Rs.~3,999", image:"images/CAKES/14.jpg" },
  { id:"amma", title:"The Azure Gold Horizon", category:"Cakes",
    description:"1 kg blue gradient cake with a shimmering gold rim. Decorated with blue and white spheres, fine sugar pearls, and a white board featuring glittery black custom lettering.",
    price:"Rs.~3,499", image:"images/CAKES/16.jpg" },
  { id:"cricket", title:"Boundary Hitter’s Dream", category:"Cakes",
    description:"1 kg green ombré cake textured with piped grass patches. Topped with a cricket bat, wickets, balls, and a gold birthday plaque over a black board.",
    price:"Rs.~4,999", image:"images/CAKES/3.png" },
  { id:"pink beauty", title:"The Fuchsia Butterfly Glow", category:"Cakes",
    description:"1 kg pink ombré cake featuring golden butterfly cutouts and glossy bubble clusters. Topped with gold pearls, and bold pink custom lettering on the board.",
    price:"Rs.~4,999", image:"images/CAKES/20.jpg" },
  { id:"doll", title:"The Pink Ombré Princess", category:"Cakes",
    description:"1 kg custom birthday cake styled like a classic fashion doll. Features a beautiful ombré gown adorned with tiny flying butterflies, making it an enchanting centerpiece.",
    price:"Rs.~5,499", image:"images/CAKES/22.jpg" },
  { id:"pink-amma-2", title:"Vibrant Magenta Ombré", category:"Cakes",
    description:"1 kg pink ombré combed cake adorned with golden butterflies and glossy spheres. Topped with rosettes, a script birthday plaque, white pearls.",
    price:"Rs.~4,499", image:"images/CAKES/27.jpg" },
  { id:"strowbry-sudda", title:"Strawberry Velvet Drip", category:"Cakes",
    description:"1 kg red-and-white ombré cake wrapped in a bright red glaze drip. Crowned with fresh strawberries, cream rosettes, and a white board featuring bold",
    price:"Rs.~5,499", image:"images/CAKES/30.png" },
  { id:"princess", title:"The Royal Princess Castle", category:"Cakes",
    description:"1 kg pink combed buttercream cake topped with a Disney princess castle cutout. Features elegant butterfly accents, pink spheres, pearl dragees.",
    price:"Rs.~4,299", image:"images/CAKES/31.jpg" },
  { id:"blue-sudda", title:"The Ocean Rosette Crown", category:"Cakes",
    description:"1 kg blue ombré combed cake topped with a full circular crown of vibrant aqua rosettes. Features a script birthday plaque, white pearl dragees",
    price:"Rs.~3,999", image:"images/CAKES/32.jpg" },
  { id:"yellow", title:"The Amber Garland Dream", category:"Cakes",
    description:"1 kg vibrant yellow combed cake accented with a matching orange-yellow drip. Crowned with rich star-piped rosettes, three glittery golden butterflies.",
    price:"Rs.~3,999", image:"images/CAKES/33.jpg" },
  { id:"heart blue", title:"Gilded Hearts Blue Twilight", category:"Cakes",
    description:"1 kg blue gradient combed cake layered with a deep blue chocolate drip. Lavishly topped with foil-wrapped gold and silver chocolate hearts,rich rosettes",
    price:"Rs.~4,499", image:"images/CAKES/35.jpg" },
  { id:"red-heart-shape", title:"The Crimson Rosette Heart", category:"Cakes",
    description:"1 kg heart-shaped cream cake elegantly bordered with a lush crown of textured red rosettes. Adorned with silver butterflies, metallic pearls",
    price:"Rs.~2,999", image:"images/CAKES/37.jpg" },
  { id:"white-rose", title:"The Butterfly Cascade Cake", category:"Cakes",
    description:"1 kg combed buttercream cake fading from ivory to sweet pink. Adorned with delicate paper butterflies, shimmering metallic gold pearls.",
    price:"Rs.~4,499", image:"images/CAKES/38.jpg" },
  { id:"batting-bro", title:"Green Crease Virat Fan Cake", category:"Cakes",
    description:"1 kg yellow-to-green gradient cake styled with realistic piped grass borders. Features a Virat Kohli cutout, two large cricket balls,a black birthday plaque.",
    price:"Rs.~4,299", image:"images/CAKES/39.png" },
  { id:"fathers-love", title:"Loving Dad Tribute", category:"Cakes",
    description:"1 kg custom family celebration cake combining a fiery red top with a cream-toned base. Adorned with gold dragees, colorful sprinkles, and personalized greetings.",
    price:"Rs.~3,999", image:"images/CAKES/43.jpg" },
  { id:"amma-cup", title:"Floral Birthday Garland", category:"Cakes",
    description:"1 kg cream birthday cake surrounded by a vibrant ring of pink and fuchsia rosettes. Paired cupcakes topped with gold butterflies and custom board lettering.",
    price:"Rs.~3,299", image:"images/CAKES/45.jpg" },
  { id:"dr-janaka", title:"Chocolate Ribbon Milestone", category:"Cakes",
    description:"1 kg combed cream cake topped with a custom clinic logo print. Framed by rich chocolate rosettes, glittery gold spheres,a butterfly cutout",
    price:"Rs.~3,499", image:"images/CAKES/44.jpg" },
  { id:"ameesha", title:"Chocolate Crown Cake", category:"Cakes",
    description:"1 kg striped chocolate ombré cake wrapped in a dark cocoa drip. Crowned with alternating mocha and vanilla cream rosettes shimmering silver dragees.",
    price:"Rs.~4,999", image:"images/CAKES/48.jpg" },
  { id:"petalbd", title:"The Gilded Petal Birthday", category:"Cakes",
    description:"1 kg pastel-banded birthday cake topped with a rich wreath of dual-toned pink rosettes. Paired with two matching cupcakes fine silver dragees.",
    price:"Rs.~4,499", image:"images/CAKES/49.jpg" },
  { id:"tatta-pink", title:"Gilded Pastels Ribbon Bliss", category:"Cakes",
    description:"1 kg combed buttercream cake fading from ivory to a vibrant fuchsia pink. Adorned with colorful paper butterflies, shimmering metallic gold pearls, large golden spheres.",
    price:"Rs.~4,299", image:"images/CAKES/51.jpg" },
  { id:"butterfly", title:"Lavender Butterfly Cascade", category:"Cakes",
    description:"combed buttercream cake gracefully fading from ivory to deep violet. Adorned with gold-trimmed purple paper butterflies, clusters of lavender spheres, gold dragees.",
    price:"Rs.~4,499", image:"images/CAKES/52.jpg" },
  { id:"pinky-mom", title:"The Gilded Rose Palette", category:"Cakes",
    description:"1 kg combed pastel cake fading into a rich pink textured base. Crowned with a large magenta rose, gold wire fans, mixed spheres, and custom script lettering for Amma.",
    price:"Rs.~4,499", image:"images/CAKES/54.jpg" },
  { id:"gilded-ruby", title:"Gilded Ruby Ombré ", category:"Cakes",
    description:"1 kg combed cream cake transitioning into a vivid red ruffled base. Splashed with mini red hearts, gold dragees, glossy red and white spheres, and a gold acrylic topper.",
    price:"Rs.~3,499", image:"images/CAKES/56.jpeg" },


  
  { id:"bento-2", title:"The Wildflower Bento", category:"Bento Cake",
    description:"This cute 750g bento-style cake brings a rustic meadow aesthetic to life. Decorated with delicate buttercream floral sprays, shimmering gold dragees.",
    price:"Rs.~2,999", image:"images/CAKES/Bentho/15.jpg" },
  { id:"bento-3", title:"The Pink Palette Bento Box", category:"Bento Cake",
    description:"A charming 500g mini bento birthday box featuring a pastel pink frosted cake. Accompanied by two matching rose-piped cupcakes, gold pearl clusters.",
    price:"Rs.~1,999", image:"images/CAKES/Bentho/56.jpg" },
  { id:"bento-4", title:"Gilded Sakura Cream Dream", category:"Bento Cake",
    description:"An artistic 500g mini bento cake featuring smooth cream icing. Beautifully hand-painted with a textured chocolate branch, vibrant red buttercream blossoms.",
    price:"Rs.~1,700", image:"images/CAKES/Bentho/61.jpeg" },
  { id:"bento-5", title:"A Dad’s Love Bento Box", category:"Bento Cake",
    description:"A heartwarming 500g mini bento box showcasing the pure bond of a dad's love with a beautiful parent-child cutout. Completed with two cupcakes and sprinkles.",
    price:"Rs~.1,999", image:"images/CAKES/Bentho/57.jpg" },
  { id:"bento-1", title:"Midnight Cocoa Bento Pearl", category:"Bento Cake",
    description:"500g mini bento cake layered with light mocha frosting and a glossy dark chocolate mirror glaze. Crowned with chocolate pearls and dusting of silver sugar beads.",
    price:"Rs~.1,999", image:"images/CAKES/Bentho/1.jpg" },
  { id:"bento-6", title:"Ruby Noir Starlet Platter", category:"Bento Cake",
    description:"500g mini bento box showcasing a charcoal-grey cake frosted with a dense wreath of black, red, and cream rosettes. with two star-piped mosaic cupcakes and gold pearls",
    price:"Rs~.1,999", image:"images/CAKES/Bentho/59.jpg" },
  { id:"bento-7", title:"The Pink Palette Bento Box", category:"Bento Cake",
    description:"500g mini bento birthday box featuring a pastel pink frosted cake. Accompanied by two matching rose-piped cupcakes, gold pearl clusters, and silver dragees.",
    price:"Rs.~1,999", image:"images/CAKES/Bentho/60.jpg" },
  { id:"bento-8", title:"The Cross-Hatch Cocoa", category:"Bento Cake",
    description:"500g mini bento cake featuring a smooth cream base accented with a bold chocolate cross-hatch pattern. Ringed with chocolate pearls and sparkling silver beads.",
    price:"Rs.~1,700", image:"images/CAKES/Bentho/2.jpg" },
  { id:"bento-9", title:"Sweet Anniversary Heart", category:"Bento Cake",
    description:"A romantic 500g mini bento cake featuring cream icing, a glossy hand-piped bunch of red heart balloons, and red ruffles. Accompanied by two cupcakes.",
    price:"Rs.~2,200", image:"images/CAKES/Bentho/58.png" },
  { id:"bento-10", title:"Cobalt Meadow Pearl Cake", category:"Bento Cake",
    description:"500g mini bento cake layered with rich, deep-blue textured swirls. Elegantly decorated with blue and black butterflies and a delicate scatter of white pearls.",
    price:"Rs.~1,799", image:"images/CAKES/Bentho/55.jpg" },
  { id:"bento-11", title:"Sweet Lavender Meadow Set", category:"Bento Cake",
    description:"500g mini bento box showcasing smooth cream icing with hand-piped purple lettering for Amma. Bordered by delicate lavender clusters and boxed with cupcakes.",
    price:"Rs.~1,999", image:"images/CAKES/Bentho/46.jpg" },
  { id:"bento-12", title:"Gilded Ruby Ribbon Cake", category:"Bento Cake",
    description:"500g mini bento cake wrapped in smooth cream icing. Hand-decorated with vibrant red 3D hearts, shimmering gold pearls, and a sculpted red fondant birthday banner.",
    price:"Rs.~1,799", image:"images/CAKES/Bentho/19.jpg" },
  

  { id:"cup-1", title:"White-Blue Roses ", category:"Cup Cake",
    description:"A stunning 4-piece cupcake box featuring dynamic two-tone sapphire and cream buttercream rosettes.",
    price:"Rs.~699", image:"images/CAKES/Cup/61.jpg" },
  { id:"cup-2", title:"Rose Cupcake Collection", category:"Cup Cake",
    description:"This stunning 12-piece assortment captures a gorgeous botanical garden aesthetic. Masterfully piped with large swirling roses.",
    price:"Rs.~1,999", image:"images/CAKES/Cup/65.jpg" },
  { id:"cup-3", title:"Bubblegum Rose Cupcake", category:"Cup Cake",
    description:"A charming 4-piece cupcake box featuring smooth, baby pink buttercream piped into flawless rosettes.",
    price:"Rs.~700", image:"images/CAKES/Cup/63.jpg" },
  { id:"cup-4", title:"Rosette Party Pack", category:"Cup Cake",
    description:"The ultimate crowd-pleaser for birthdays, school events, or gender reveal celebrations! Each cupcake is finished with rainbow sprinkles",
    price:"Rs.~120 ", image:"images/CAKES/Cup/66.jpg" },
  { id:"cup-5", title:"Wedding Red Roses", category:"Cup Cake",
    description:"An elegant wedding favor featuring a gorgeous, deep-red buttercream rose piped flawlessly over moist cake layers. Packaged in a neat.",
    price:"Rs.~300", image:"images/CAKES/Cup/69.jpg" },
  { id:"cup-6", title:"Triple Chocolate Crunch", category:"Cup Cake",
    description:"Upgrade your party dessert table with this crowd-pleasing party pack! These cleanly portioned, a premium multi-layered chocolate experience.",
    price:"Rs.~350", image:"images/CAKES/Cup/67.jpg" },


  { id:"pot-1", title:"Earthen Choco-Lava Pots", category:"Pot Cake",
    description:"A uniquely rustic dessert experience! This premium chocolate cake is baked directly inside a traditional, reusable terracotta clay pot.",
    price:"Rs.~499 S", image:"images/CAKES/Mutti/70.jpg" },
  { id:"pot-2", title:"Ruby-Berry Terracotta Pots", category:"Pot Cake",
    description:"Premium chocolate cake is layered inside an authentic earthenware clay pot and coated in a glossy dark chocolate fudge. It is loaded with white and dark chocolate chips.",
    price:"Rs.~999 M", image:"images/CAKES/Mutti/71.jpg" },
  { id:"pot-3", title:"The White Chip Terracotta", category:"Pot Cake",
    description:"creamy white chocolate chips that beautifully frame the midnight-dark chocolate ganache underneath. Artistically finished through the center with a delicate dusting",
    price:"Rs.~1,499 L", image:"images/CAKES/Mutti/3.jpeg" },
  
  
  

  { id:"chocolate-1", title:"Classic Chocolate Box", category:"Gift Hampers",
    description:"A beautifully curated chocolate gift box packed with popular treats like KitKat, Dairy Milk, Go Fresh, Crunchy and a decorative red rose.",
    price:"Rs.~", image:"images/GIFTBOX/1.png" },
  { id:"chocolate-2", title:"Custom Chocolate Box", category:"Gift Hampers",
    description:"A vibrant snack gift box overflowing with delicious treats, featuring potato chips, hazelnut chocolates, wafers, and colorful bite-sized candies.",
    price:"Rs.~", image:"images/GIFTBOX/33.jpg" },
  { id:"chocolate-3", title:"Classic Chocolate Box", category:"Gift Hampers",
    description:"An ultimate chocolate lover's gift box, densely packed with assorted goodies including Toren Classic bars, Wonderful chocolates, and sweet caramels.",
    price:"Rs.~", image:"images/GIFTBOX/2.png" },
  { id:"chocolate-4", title:"Sweets & Snacks Gift Box", category:"Gift Hampers",
    description:"A delightful snack hamper featuring a handwritten message card, Super Snaks chips, chocolate wafers, and plenty of colorful candy packets.",
    price:"Rs.~", image:"images/GIFTBOX/11.jpg" },
  { id:"chocolate-5", title:"Birthday Bliss Snack Box", category:"Gift Hampers",
    description:"A vibrant birthday gift hamper packed with potato chips, oat chocolates, Go Fresh choko, assorted candies, and a personalized message card.",
    price:"Rs.~", image:"images/GIFTBOX/13.jpg" },
  { id:"chocolate-6", title:"Sweet Celebration Treat Box", category:"Gift Hampers",
    description:"A fun-filled gift box overflowing with colorful goodies, featuring Maoji Happy Cups, Zarin coconut bars, Oat Choco, and a cute cupcake greeting card.",
    price:"Rs.~", image:"images/GIFTBOX/14.jpg" },
  { id:"chocolate-7", title:"Ruby Romance Snack Hamper", category:"Gift Hampers",
    description:"A vibrant red-themed gift box featuring Cocomo biscuits, Chini Mini chocolate beans, Oat Chocolates, a large white bow, and a heartfelt handwritten love note.",
    price:"Rs.~", image:"images/GIFTBOX/18.jpg" },
  { id:"chocolate-8", title:"Crimson Crunch Snack Box", category:"Gift Hampers",
    description:"An exciting red-themed gift hamper overflowing with tasty treats, including Pran Potata spicy biscuits, Twins crispy rolls, Choco Zoo biscuits, and potato chips.",
    price:"₹Rs.~", image:"images/GIFTBOX/32.jpg" },
  { id:"chocolate-9", title:"Golden Ribbon Snacking", category:"Gift Hampers",
    description:"A beautiful gift hamper featuring a handwritten love letter tied with a gold bow, chocolate-flavored Oat Choco, Chini Mini candies, and a plumeria hair claw clip.",
    price:"Rs.~", image:"images/GIFTBOX/24.jpg" },
  { id:"men-1", title:"Signature Gentleman's Crate", category:"Gift Hampers",
    description:"A premium men's gift hamper featuring Gold Arctic cologne spray, a refreshing can of Pepsi, assorted sweet treats, and a sleek red present box.",
    price:"Rs.~", image:"images/GIFTBOX/6.jpg" },
  { id:"men-2", title:"Urban Essentials Men's", category:"Gift Hampers",
    description:"An elegant men's lifestyle gift box featuring Artwalk sandals, a stylish polo shirt, Casablanca eau de parfum, a sleek wristwatch, and a premium leather wallet.",
    price:"Rs.~", image:"images/GIFTBOX/12.jpg" },
  { id:"men-3", title:"Ultimate Customized Men's", category:"Gift Hampers",
    description:"A customized men's gift box featuring a personalized framed photo, a stylish polo shirt, Gold Arctic cologne spray, assorted cookies, and a matching blue-checkered gift wrap.",
    price:"Rs.~", image:"images/GIFTBOX/28.jpg" },
  { id:"men-4", title:"Special Brew Celebration", category:"Gift Hampers",
    description:"A lively celebration gift box loaded with a bottle of Carlsberg Special Brew, Sun Crush Appletizer drinks, an \"I Love You\" acrylic light, and a colorful mix of sweet snacks.",
    price:"Rs.~", image:"images/GIFTBOX/16.jpg" },
  { id:"men-5", title:"Lion Lager Party Platter Box", category:"Gift Hampers",
    description:"A fun celebration gift box loaded with a can of Lion Lager, red and green potato chip bags, Oat Choco, assorted candies, and a heart-patterned card.",
    price:"Rs.~", image:"images/GIFTBOX/29.jpg" },
  { id:"men-6", title:"Golden Snowflake Premium", category:"Gift Hampers",
    description:"An upscale men's gift box featuring a bottle of Carlsberg Special Brew, an elegant wristwatch, Elephant House Orange Crush, Gold Classic cologne, and tasty snacks.",
    price:"Rs.~", image:"images/GIFTBOX/31.jpg" },
  { id:"mix-1", title:"Heartburst Sweet Explosion", category:"Gift Hampers",
    description:"An exquisite, multi-layered red explosion gift box shaped with layers of hearts, unfolding to reveal assorted mini chocolates, candies, and a central treat nest.",
    price:"Rs.~", image:"images/GIFTBOX/7.jpg" },
  { id:"mix-2", title:"Love & Rainbows", category:"Gift Hampers",
    description:"An adorable girls' gift box packed with a custom romantic artwork, a mint green bottle, a tassel wallet, fuzzy scrunchies, KitKat chocolates, and colorful unicorn accessories.",
    price:"Rs.~", image:"images/GIFTBOX/8.jpg" },
  { id:"mix-3", title:"Pink Wallet Mix", category:"Gift Hampers",
    description:"A charming gift box filled with a Cactus Love bottle, a pink quilted wallet, a delicate necklace, mini hair claws, fuzzy scrunchies, and assorted sweet treats.",
    price:"Rs.~", image:"images/GIFTBOX/10.jpg" },
  { id:"mix-4", title:"Sweet Corgi Clips & Treats", category:"Gift Hampers",
    description:"A delightful pastel-themed gift hamper featuring a Cactus Love bottle, adorable corgi hair clips, a plush bunny scrunchie, Oat Choco, and an assortment of purple candies.",
    price:"Rs.~", image:"images/GIFTBOX/15.jpg" },
  { id:"kids", title:"Ultimate Kids' Play & Snack", category:"Gift Hampers",
    description:"A vibrant kids' gift hamper packed with a colorful pencil set, a pink pop-it pencil case, a jump rope, fruit Mentos, and playful novelty accessories.",
    price:"Rs.~", image:"images/GIFTBOX/17.jpg" },
  { id:"mix-5", title:"Hello Kitty Sweetheart Plush", category:"Gift Hampers",
    description:"An adorable gift box featuring a plush Hello Kitty holding a heart, Twins chocolate wafer rolls, colorful hair scrunchies, floral claw clips, and assorted sweet treats.",
    price:"Rs.~", image:"images/GIFTBOX/20.jpg" },
  { id:"mix-6", title:"Ultimate Polka Dot ", category:"Gift Hampers",
    description:"A charming red polka-dot gift box featuring a quilted pink clutch wallet, a large red hair bow, a sweet handwritten birthday card, potato chips, and assorted candies.",
    price:"Rs.~", image:"images/GIFTBOX/23.jpg" },
  { id:"mix-7", title:"Chocolate & Plush Toy", category:"Gift Hampers",
    description:"A massive kids' gift hamper packed with a red backpack, water bottles, a cute purple plush kitten, colorful hair clips, lollipops, and Touch chocolate bars.",
    price:"Rs.~", image:"images/GIFTBOX/26.jpg" },
  { id:"mix-8", title:"Crimson Bear & Treats", category:"Gift Hampers",
    description:"A vibrant floral gift basket loaded with a plush red teddy bear, a large bag of potato chips, Touch chocolate bars, Cocotinto wafers, and various colorful candies.",
    price:"Rs.~", image:"images/GIFTBOX/27.jpg" },
  { id:"mix-9", title:"Ultimate Red & Black Style", category:"Gift Hampers",
    description:"gift hamper featuring a black Poaba crossbody bag, a quilted crimson zip-around wallet, a sleek white bottle, Uswatte Tipi Chips, a soft drink bottle, and assorted sweet treats.",
    price:"Rs.~", image:"images/GIFTBOX/30.jpg" },
  { id:"explosion", title:"Birthday Surprise Explosion", category:"Gift Hampers",
    description:"A beautifully crafted orange explosion gift box designed for birthdays, featuring layers of Cadbury Dairy Milk and KitKat chocolate bars, personalized hand-drawn illustrations",
    price:"Rs.~", image:"images/GIFTBOX/37.jpeg" },
  { id:"mix-10", title:"Cute Kitty Floral Accessory", category:"Gift Hampers",
    description:"gold polka-dot gift box featuring a plush Hello Kitty holding a heart, paired with a collection of colorful hair scrunchies, floral hair clips, braided elastics, and water bottle.",
    price:"Rs.~", image:"images/GIFTBOX/36.jpeg" },
  { id:"mix-11", title:"Magenta Rose & Lifestyle", category:"Gift Hampers",
    description:"A vibrant magenta-wrapped gift box featuring a pink checkered wallet, a gradient water bottle, a patterned folding umbrella, a single wrapped faux rose, and Della cookies.",
    price:"Rs.~", image:"images/GIFTBOX/39.jpeg" },
  { id:"mix-12", title:"Ultimate Sweet & Savory", category:"Gift Hampers",
    description:"A vibrant red-patterned gift box loaded with a variety of snacks, featuring a large bag of Potato Chips, Rosso Bianco hazelnut wafers, a chocolate bar, and assorted candies.",
    price:"Rs.~", image:"images/GIFTBOX/40.jpeg" },
  { id:"mix-13", title:"Snack Explosion Box", category:"Gift Hampers",
    description:"gift basket overflowing with premium snacks, featuring a large green bag of Potato Chips, a Jouvent hazelnut chocolate bar, Rosso Bianco an wafers, a Go Fresh chocolate bar",
    price:"Rs.~", image:"images/GIFTBOX/41.jpeg" },
  
  


  { id:"flower bouquet", title:"Crimson & White Blossom Bouquet", category:"Custom Orders",
    description:"wrapped floral bouquet featuring fresh red and white roses mixed with white daisies and a large chrysanthemum, presented in a sleek black and gold wrap tied with ribbon",
    price:"Rs.~", image:"images/custom/19.jpg" },
  { id:"flower+gifts", title:"Red Rose Bouquet & Pink Wallet Combo", category:"Custom Orders",
    description:"wrapped fresh bouquet of red and white roses paired alongside a red polka-dot gift box that includes a quilted pink clutch wallet, a large red hair bow",
    price:"Rs.~", image:"images/custom/22.jpg" },
  { id:"flower+gifts2", title:"Lavender Fields Floral & Chocolate", category:"Custom Orders",
    description:"A premium gift set featuring a fresh purple and white wildflower bouquet, an elegant silver wristwatch in a crimson box, and a selection of assorted chocolates.",
    price:"Rs.~", image:"images/custom/38.jpeg" },
  { id:"flowers+gifts3", title:"Family Photo Mug & Floral Celebration", category:"Custom Orders",
    description:"celebration gift set featuring a custom family photo mug, a fresh bouquet of white and red daisies, and a gourmet cake decorated with a vibrant red heart-blossom tree.",
    price:"Rs.~", image:"images/custom/pck.jpeg" },
  { id:"giftpkg", title:"Glow & Handsome Cool Sport Care", category:"Custom Orders",
    description:"A sleek men's gift set featuring Glow & Handsome instant brightness facewash, an Evo Men Deo roll-on, and a packaged Tiger Eye beaded bracelet.",
    price:"Rs.~", image:"images/custom/39.jpeg" },
  { id:"Accessory Pack", title:"Lavender Dream Bow & Scrunchie Gift", category:"Custom Orders",
    description:"collection of pastel purple hair accessories, featuring a fuzzy bunny scrunchie, a lavender claw clip, beaded bracelets with cute charms, floral hair ties, and a satin bow",
    price:"Rs.~", image:"images/custom/41.jpeg" },
  { id:"items", title:"Accessory Set", category:"Custom Orders",
    description:"set of featuring a Stitch-theme hot water bag, a pack of hair elastics, a claw clip with a flower detail, a heart-shaped clip, bracelet, a keychain, mini floral hair clips.",
    price:"Rs.~", image:"images/custom/40.jpeg" },
  { id:"items2", title:"Accessory Hamper", category:"Custom Orders",
    description:"Stitch and Angel hot water bag, beautifully arranged inside a kraft gift box with a large pink heart-patterned bow, floral hair clips, and pastel accessories.",
    price:"Rs.~", image:"images/custom/42.jpeg" },
  { id:"items-3", title:"Accessory Bundle", category:"Custom Orders",
    description:"Stitch-themed hot water bag, a pack of hair elastics, a fabric bow, a claw clip, a beaded charm bracelet, a heart-shaped clip, and an assortment of hair clips.",
    price:"Rs.~", image:"images/custom/43.jpeg" },
];

/* ---------- Render product grid ---------- */
function renderProducts(containerId, list) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = list.map(p => `
    <article class="product-card reveal">
      <div class="img-wrap"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
      <div class="info">
        <div class="cat">${p.category}</div>
        <h3>${p.title}</h3>
        <p class="desc">${p.description}</p>
        <div class="row">
          <span class="price">${p.price}</span>
          <a class="btn btn-primary" target="_blank" rel="noopener"
             href="${buildWhatsAppUrl(`Hello Ishu Creation! 🎂\nI'd like to order:\n• ${p.title} (${p.price})`)}">
            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>`).join("");
  // Re-observe new reveal elements
  container.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* ---------- Gallery filter ---------- */
function initGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  renderProducts("gallery-grid", PRODUCTS);
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.dataset.cat;
      const filtered = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
      renderProducts("gallery-grid", filtered);
    });
  });
}

/* ---------- Init products page ---------- */
const productsGrid = document.getElementById("products-grid");
if (productsGrid) {
  const listToShow = path === "index.html" ? PRODUCTS.slice(0, 6) : PRODUCTS;
  renderProducts("products-grid", listToShow);
}
initGallery();

/* ---------- Contact form → WhatsApp ---------- */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const f = contactForm;
    const msg = `Hello Ishu Creation! 🎂\n` +
                `Name: ${f.name.value}\n` +
                `Phone: ${f.phone.value}\n` +
                `Event: ${f.event.value}\n` +
                `Message: ${f.message.value}`;
    window.open(buildWhatsAppUrl(msg), "_blank");
  });
}

/* ---------- Reviews (localStorage) ---------- */
function loadReviews() {
  try { return JSON.parse(localStorage.getItem("ishu_reviews") || "[]"); }
  catch { return []; }
}
function saveReviews(list) {
  localStorage.setItem("ishu_reviews", JSON.stringify(list));
}
function renderReviews() {
  const wrap = document.getElementById("reviews-list");
  if (!wrap) return;
  const seed = [
    { name:"Priya S.", image:"images/REVIEWS/review1.png", date:"2026-04-12" },
    { name:"Sunidhi M.", image:"images/REVIEWS/review2.png", date:"2025-12-28" },
    { name:"Nayana D.", image:"images/REVIEWS/review3.png", date:"2026-03-15" },
    { name:"Kavii  N.", image:"images/REVIEWS/review6.png", date:"2025-01-10" },
    { name:"Yenuki R.", image:"images/REVIEWS/review4.png", date:"2025-11-20" },
    { name:"Sunidi K.", image:"images/REVIEWS/review5.png", date:"2026-01-30" },
    
  ];
  const all = [...loadReviews(), ...seed];
  wrap.innerHTML = all.map(r => `
    <div class="review reveal">
      ${r.image ? `<div class="review-image"><img src="${r.image}" alt="${r.name} review"></div>` : ""}
      ${r.text ? `<p>\"${r.text}\"</p>` : ""}
      ${typeof r.stars === 'number' ? `<div class="stars">${"★".repeat(r.stars)}${"☆".repeat(5-r.stars)}</div>` : ""}
      <div class="name">${r.name}</div>
      <div class="date">${r.date}</div>
    </div>`).join("");
  wrap.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}
renderReviews();

const reviewForm = document.getElementById("review-form");
if (reviewForm) {
  reviewForm.addEventListener("submit", e => {
    e.preventDefault();
    const f = reviewForm;
    const newReview = {
      name: f.name.value,
      stars: parseInt(f.stars.value, 10),
      text: f.text.value,
      date: new Date().toISOString().slice(0,10),
    };

    const saveReview = (imageData) => {
      if (imageData) newReview.image = imageData;
      const list = loadReviews();
      list.unshift(newReview);
      saveReviews(list);
      f.reset();
      renderReviews();
      alert("Thank you for your feedback! 🌸");
    };

    const file = f.productImage.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => saveReview(reader.result);
      reader.readAsDataURL(file);
    } else {
      saveReview();
    }
  });
}

/* ============================================
           AI CAKE IMAGE GENERATION FUNCTION
           ============================================ */
        
        function generateCakeImage() {
            const prompt = document.getElementById('aiPrompt').value;
            const resultDiv = document.getElementById('aiResult');
            const loadingDiv = document.getElementById('aiLoading');
            const outputText = document.getElementById('aiOutput');
            const imageElement = document.getElementById('generatedCakeImage');
            
            // Validate input
            if (!prompt || prompt.trim().length < 10) {
                alert('Please describe your dream cake in more detail! (At least 10 characters)');
                return;
            }
            
            // Hide result, show loading
            resultDiv.classList.remove('show');
            loadingDiv.style.display = 'block';
            imageElement.style.display = 'none';
            
            // Enhance prompt for better cake images
            const enhancedPrompt = enhanceCakePrompt(prompt);
            
            // Generate image using Pollinations.ai (FREE - no API key needed!)
            const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=800&height=800&nologo=true&model=flux`;
            
            // Load the image
            imageElement.onload = function() {
                // Hide loading, show result
                loadingDiv.style.display = 'none';
                resultDiv.classList.add('show');
                imageElement.style.display = 'block';
                
                // Generate description
                const design = createCakeDesign(prompt);
                outputText.innerHTML = design;
                
                // Store the design for WhatsApp order
                window.currentCakeDesign = prompt;
                window.currentCakeImage = imageURL;
            };
            
            imageElement.onerror = function() {
                // If image fails to load, try alternative
                console.log('Trying alternative image generation...');
                
                const alternativeURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=800&height=800&nologo=true`;
                
                imageElement.src = alternativeURL;
                
                // If alternative also fails
                imageElement.onerror = function() {
                    loadingDiv.style.display = 'none';
                    resultDiv.classList.add('show');
                    imageElement.style.display = 'none';
                    
                    outputText.innerHTML = `
                        <div style="background: #ffe5e5; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
                            <strong>⚠️ Image Generation Unavailable</strong><br>
                            The AI image service is currently unavailable. However, we've saved your design description!<br><br>
                            <strong>Your Design:</strong> "${prompt}"
                        </div>
                        ${createCakeDesign(prompt)}
                    `;
                    
                    window.currentCakeDesign = prompt;
                };
            };
            
            // Set the image source to trigger loading
            imageElement.src = imageURL;
        }
        
        // Enhance the prompt to get better cake images
        function enhanceCakePrompt(userPrompt) {
            const enhancement = "Professional food photography, luxury bakery cake, elegant decoration, high-quality, studio lighting, detailed, realistic, ";
            let enhanced = enhancement + userPrompt;
            
            if (!userPrompt.toLowerCase().includes('cake')) {
                enhanced += " cake";
            }
            
            enhanced += ", premium quality, beautiful presentation, artisan bakery style";
            
            return enhanced;
        }
        
        // Helper function to create design description
        function createCakeDesign(prompt) {
            const lowerPrompt = prompt.toLowerCase();
            
            const hasFlowers = lowerPrompt.includes('flower') || lowerPrompt.includes('rose') || lowerPrompt.includes('floral');
            const hasGold = lowerPrompt.includes('gold');
            const hasTiers = lowerPrompt.match(/(\d+)[\s-]?tier/);
            const tierCount = hasTiers ? hasTiers[1] : '2';
            
            let colors = [];
            if (lowerPrompt.includes('pink')) colors.push('pink');
            if (lowerPrompt.includes('white')) colors.push('white');
            if (lowerPrompt.includes('blue')) colors.push('blue');
            if (lowerPrompt.includes('purple')) colors.push('purple');
            if (lowerPrompt.includes('lavender')) colors.push('lavender');
            if (colors.length === 0) colors = ['pastel'];
            
            let flavor = 'vanilla';
            if (lowerPrompt.includes('chocolate')) flavor = 'chocolate';
            if (lowerPrompt.includes('red velvet')) flavor = 'red velvet';
            if (lowerPrompt.includes('lemon')) flavor = 'lemon';
            if (lowerPrompt.includes('strawberry')) flavor = 'strawberry';
            
            return `
                <div style="text-align: center;">
                <strong>🎨 Your Custom Cake Design</strong><br><br>
                </div>
                
                <strong>Structure:</strong> ${tierCount}-tier ${flavor} cake<br>
                <strong>Color Scheme:</strong> ${colors.join(', ')} tones<br>
                <strong>Decorations:</strong> ${hasFlowers ? 'Fresh edible flowers, ' : ''}${hasGold ? 'Gold leaf accents, ' : ''}buttercream frosting<br>
                <strong>Ingredients:</strong> 100% natural, premium quality<br>
                <strong>Style:</strong> Elegant luxury bakery aesthetic<br><br>
                
                <strong>Your Vision:</strong><br>
                <em>"${prompt}"</em><br><br>
                
                <strong>Estimated Price:</strong> Contact us for quote<br>
                <strong>Lead Time:</strong> 3-5 days (rush orders may be available)<br><br>
                
                Ready to make this dream a reality? Click below to order! 👇
            `;
        }
        
        // Order custom cake via WhatsApp
        function orderCustomCake() {
            const design = window.currentCakeDesign || 'Custom AI-generated cake design';
            const imageURL = window.currentCakeImage || '';
            const phoneNumber = '94757011651';
            
            let message = `Hi Ishu Creations! 🎂✨\n\nI'd like to order a custom cake based on this AI-generated design:\n\n"${design}"\n\n`;
            
            if (imageURL) {
                message += `Image reference: ${imageURL}\n\n`;
            }
            
            message += `Please contact me to discuss:\n- Pricing\n- Availability\n- Delivery details\n\nThank you!`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            window.open(whatsappURL, '_blank');
        }

// Prevent form submission in designer form
const designerForm = document.getElementById('designer-form');
if (designerForm) {
  designerForm.addEventListener('submit', e => e.preventDefault());
}

/* ============= SCROLL-ACTIVATED NUMBER COUNTERS ============= */
/* Animates any element with [data-target] from 0 to its target
   value the first time it scrolls into view. Supports decimals
   (data-decimals) and an optional suffix (data-suffix like "+", "%", "★"). */
(function () {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length || !('IntersectionObserver' in window)) {
    // Fallback: just set the final values
    counters.forEach(el => {
      el.textContent = (el.dataset.target || '') + (el.dataset.suffix || '');
    });
    return;
  }

  function animate(el) {
    const target = parseFloat(el.dataset.target) || 0;
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1600; // ms
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic for a smooth finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        io.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => io.observe(el));
})();

/* ---------- Back to top button behavior ---------- */
(function(){
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  // Show after user scrolls down a bit
  const toggle = () => {
    if (window.scrollY > 250) btn.classList.add('show');
    else btn.classList.remove('show');
  };

  window.addEventListener('scroll', toggle, { passive: true });
  // Initial state
  toggle();

  // Smooth scroll to top
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
