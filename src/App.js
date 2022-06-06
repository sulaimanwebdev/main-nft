import Header from "./Components/Header";
import HeroSection from "./Components/Hero-section";
import Slider2 from "./Components/Slider-2";
import Slider1 from "./Components/Slider1";

function App() {
  return (
    <>
    <div className="h-full relative w-full bg-[#060023]">
      
     <Header/> 
     <HeroSection/>



     <div className="px-7 z-[999999999] relative mt-[100px] pb-10 mx-auto max-w-[1600px] text-white">
     <div className=" flex items-center justify-between">
       <div className="w-[800px]">
         <div className="text-[#9F00FF] mb-3 font-[500] text-[18px]">ABOUT US</div>
         <div className="text-[34px] font-[700]">About Project</div>
       </div>
       <div className="leading-[28px] opacity-90">
       In order to facilitate universal access to the world of digital art, 0x0.art platform was created through which users can create original digital art using our AI tool, tokenize their art, print it, and authenticate physical reproductions using the Ethereum blockchain as verified assets.
       </div>
     </div>


     <div className="bg-radial-1  mt-[170px] w-full rounded-md flex items-center justify-center gap-[150px]">
        <img src="/images/nft-3.png" alt="nft" className="w-[240px] transform -translate-y-16" />
        <div className="w-[600px]">
          <div className="flex items-center gap-5">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">Every NFT owner will have access to create it's own artwork, using our Artificial Intelligence module, convert it to NFT and claim for relief printed version</div>
          </div>
          <div className="flex items-center gap-5 mt-[28px]">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">1% From Platform Fees And 1% Tokens Royalty</div>
          </div>

          <div className="flex items-center gap-5 mt-[35px]">
            <img src="/images/tick.svg" alt="tick" />
            <div className="font-[700] text-[17px]">Tickets To Virtual Gallery On Metaverse</div>
          </div>

        </div>
     </div>





     <div className=" flex items-center justify-between mt-[120px]">
       <div className="w-[800px]">
         <div className="text-[#9F00FF] mb-3 font-[500] text-[18px]">COLLECTION</div>
         <div className="text-[34px] font-[700]">Are you interested with<br/>this art?</div>
       </div>
       <div className="leading-[28px] opacity-90">
      <a href="/#" className="text-[#9F00FF] font-[600] text-[16px]">CHECK ON OPENSEA</a>
       </div>
     </div>

    <Slider1/>



      <div className="w-full mt-[100px]">
      <div className="text-[#9F00FF] mb-3 font-[500] text-[18px] text-center tracking-wide">PRODUCTS & FEATURES</div>
      <div className="text-center font-[800] text-[38px] tracking-wide">Explore The 0x0 Platform</div>
      <div className="opacity-70 mt-5 text-[17px] max-w-[500px] mx-auto text-center leading-relaxed">We offer a variety of products & services to help you create, validate, and monetize your digital art.</div>
     
     <div className="grid grid-cols-3 gap-7 mt-16">
         <div className="text-center flex items-center justify-center flex-col gap-12 rounded-2xl bg-[#18123A] px-5 py-[50px]">
           <img src="/images/icon-1.svg" alt="icon" />
           <div className="max-w-[300px] leading-relaxed">Create new or list your NFT to print shop. Set price and prints limit. Earn from your NFT.</div>
         </div>
         
         <div className="text-center flex items-center justify-center flex-col gap-12 rounded-2xl bg-[#18123A] px-5 py-[50px]">
           <img src="/images/icon-2.svg" alt="icon" />
           <div className="max-w-[300px] leading-relaxed">Use our AI tool to create awesome artworks from text. print it, convert to nft or sell at 0x0.art</div>
         </div>

         <div className="text-center flex items-center justify-center flex-col gap-12 rounded-2xl bg-[#18123A] px-5 py-[50px]">
           <img src="/images/icon-3.svg" alt="icon" />
           <div className="max-w-[300px] leading-relaxed">List printed artwork. Just scan holo sticker set price and list.</div>
         </div>

     </div>





     <div className="flex items-center w-full justfiy-between gap-[200px] mt-40">
        <div className="w-[900px]">
         <div className="text-[#9F00FF] mb-3 text-[18px] tracking-wide font-[600]">AUTHENTICATION</div>
         <div className="text-[38px] font-[700]">Bridging Digital &<br/>Physical Artwork</div>
         <div className="opacity-70 mt-7">Printed artworks will be able to be certified and authenticated by 0x0 Art's new holographic element, which includes a cryptographic key. This will allow for the creation of a new market for digital artworks. Counterfeiting or removing holographic certificate without damage is impossible.</div>
         <button className='flex mt-[60px] items-center gap-3 bg-white py-4 px-6 rounded-full text-[#9F00FF] font-bold text-[16px] relative'><span className='z-[999]'>VIEW STICKER PROTOTYPE</span> <svg width="20" className='z-[999]' height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L19 4L16 1M1 4L19 4L1 4Z" stroke="#9F00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <div className="w-full absolute top-0 left-0 rounded-full h-full bg-white z-[99]"></div>
             <div className="w-full absolute -top-[3px] -left-[3px] rounded-full h-full bg-[#FFE302]"></div>
             <div className="w-full absolute -bottom-[3px] -right-[3px] rounded-full h-full bg-[#9F00FF]"></div>
             </button>
        </div>

        <div>
          <img src="/images/qr.svg"  alt="qr" className="w-[950px]"/>
         </div>
      </div>


     
     
      </div>
     


     
    </div>


    <div className="bg-radial-2 rounded-2xl w-full">
    <div className="px-7 z-[999999999] relative mt-[100px] pb-10 mx-auto max-w-[1600px]">
    <div className="pt-20 flex items-center gap-16 text-white">
       <div className="w-[800px]">
         <div className="text-[#9F00FF] mb-3 font-[500] text-[18px]">PRINTING</div>
         <div className="text-[34px] font-[700]">New Relief<br/>Printing<br/>Technology</div>
       </div>
       <div className="leading-[28px] opacity-90 max-w-[900px]">
       Each and every customer of 0x0 Art will have access to high-end digital printing services allowing anyone to convert digital artwork into physical artwork that can be sold or traded.
This unique relief printing technology makes it possible to print unique embossing at the same time as the item is digitally printed at virtually any size and without repeating the embossing pattern. So structure and motif can be perfectly matched to each other, or the structure may be completely different than the picture itself – it all depends on the designer’s creativity. 
       </div>
     </div>





       <Slider2/>






       
    <div className="flex items-center w-full justfiy-between gap-[200px] text-white mt-[130px]">
        <div className="w-[600px]">
         <div className="text-[#9F00FF] mb-3 text-[18px] leading-loose font-[600]">NEXT-GEN AI</div>
         <div className="text-[34px] font-[700]">Pretrained AI Drawing Tool</div>
         <div className="opacity-70 mt-7">An AI that has been trained to make artwork based on the language provided by the user in a specific style so that the artwork created will remain unique and indistinguishable from human artists.</div>
         <button className='flex mt-[130px] items-center gap-3 bg-white py-4 px-6 rounded-full text-[#9F00FF] font-bold text-[16px] relative'><span className='z-[999]'>MORE ABOUT AI TOOL</span> <svg width="20" className='z-[999]' height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7L19 4L16 1M1 4L19 4L1 4Z" stroke="#9F00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
             <div className="w-full absolute top-0 left-0 rounded-full h-full bg-white z-[99]"></div>
             <div className="w-full absolute -top-[3px] -left-[3px] rounded-full h-full bg-[#FFE302]"></div>
             <div className="w-full absolute -bottom-[3px] -right-[3px] rounded-full h-full bg-[#9F00FF]"></div>
             </button>
        </div>

        <div>
         <div className="font-[600] text-[17px] mb-5 text-center ">Painting of London underwater city with purple sky</div>
          <img src="/images/nft-4.png"  alt="nft" className="w-[450px]"/>
         </div>
      </div> 









           <div className="mt-[160px] max-w-[800px] mx-auto">
           <div className="text-[#9F00FF] mb-3 font-[500] text-[18px] text-center tracking-wide">Roadmap</div>
      <div className="text-center font-[800] text-white text-[38px] tracking-wide">What are the steps?</div>
      <div className="opacity-70 mt-5 text-[17px] text-white max-w-[500px] mx-auto text-center leading-relaxed">Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus</div>
     

           <div className="mt-20 relative">
             
             <img src="/images/union1.svg" alt="lines" className="absolute top-[28px] -right-[150px]"/>
             <img src="/images/union2.svg" alt="lines" className="absolute top-[342px] -left-[200px]"/>
             <img src="/images/union3.svg" alt="lines" className="absolute top-[658px] -right-[150px]"/>
             <img src="/images/union2.svg" alt="lines" className="absolute top-[972px] -left-[200px]"/>


  
            <div>
              <div className="flex items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">01</div>
                <div className="text-white font-[600] text-[24px]">Phase one 2022 end of Q1</div>
              </div>

              <div className="flex gap-[140px] text-white transform translate-x-[98px] mt-10">

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Splitter Smart Contract Release</li>
                <li className="mb-3 opacity-80">NFT Smart Contract Release</li>
                <li className="mb-3 opacity-80">Whitelist Sale Event</li>
                <li className="mb-3 opacity-80">Holo Sticker Prototype</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Marketplace Visuals, Litepaper</li>
                <li className="mb-3 opacity-80">Test of initial AI module</li>
                <li className="mb-3 opacity-80">Test of 0x0.art platform</li>
              </ul>

              </div>
            </div>






            <div className="mt-[70px]">
              <div className="flex items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">02</div>
                <div className="text-white font-[600] text-[24px]">Phase two 2022 end of Q2</div>
              </div>

              <div className="flex gap-[140px] text-white transform translate-x-[98px] mt-10">

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Admin area for NFT owners (check, withdrawal NFT balance)</li>
                <li className="mb-3 opacity-80">AI Drawing Tool (with conversion to NFT feature)</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Public Mint Event</li>
              </ul>

              </div>
            </div>





            <div className="mt-[145px]">
              <div className="flex items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">03</div>
                <div className="text-white font-[600] text-[24px]">Phase three 2022 end of Q3</div>
              </div>

              <div className="flex gap-[140px]  text-white transform translate-x-[98px] translate-y-5 mt-10">

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Marketplace Launch - Secondary Marketplace (sell, buy, auction)</li>
                <li className="mb-3 opacity-80">Holo Certificate Checker Tool</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Implementation of Unique Pretrained AI Model for Drawing Tool</li>
                <li className="mb-3 opacity-80">Claim Printed Artwork for NFT Owners (38cmx50cm)</li>
              </ul>

              </div>
            </div>





            <div className="mt-[95px]">
              <div className="flex items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">04</div>
                <div className="text-white font-[600] text-[24px]">Phase four 2022 end of Q4</div>
              </div>

              <div className="flex gap-[140px] text-white transform translate-x-[98px] mt-10">

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Implementation of GenArt for Drawing Tool</li>
                <li className="mb-3 opacity-80">Implementation of MultiChain</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Virtual Gallery Launch</li>
              </ul>

              </div>
            </div>








            <div className="mt-[143px]">
              <div className="flex items-center gap-5">
                <div className="w-[60px] h-[60px] text-[18px] flex items-center justify-center rounded-xl bg-[#060023] text-white">05</div>
                <div className="text-white font-[600] text-[24px]">Phase five 2023</div>
              </div>

              <div className="flex gap-[140px] text-white transform translate-x-[98px] mt-10">

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Project development with foundation of art</li>
                <li className="mb-3 opacity-80">Project accountability for European Regional Development Fund</li>
                <li className="mb-3 opacity-80">Exhibition of Most populars artworks on 0x0.art platform</li>
              </ul>

              <ul className="list-disc">
                <li className="mb-3 opacity-80">Cooperation with association of art</li>
                <li className="mb-3 opacity-80">Participation at FESPA GLOBAL PRINT EXPO 2023</li>
              </ul>

              </div>
            </div>












           </div>






           </div>















     
    </div>
    </div>
    
     

















   {/* background circles */}
   <img src="/images/grad-circle.svg" alt="circle" className="absolute left-0 top-[1000px]  w-[400px]"/>


    <svg className='absolute top-[100px] right-[20%] ' width="700px" height="700px" viewBox="0 0 1136 1136" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_27_960)">
<circle cx="568" cy="568" r="168" fill="#143280"/>
</g>
<defs>
<filter id="filter0_f_27_960" x="0" y="0" width="1136" height="1136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_27_960"/>
</filter>
</defs>
</svg>



   <svg className='absolute top-0 -left-7 ' width="596" height="695" viewBox="0 0 596 695" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_27_959)">
<circle cx="28" cy="127" r="168" fill="#9F00FF" fill-opacity="0.7"/>
</g>
<defs>
<filter id="filter0_f_27_959" x="-540" y="-441" width="1136" height="1136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_27_959"/>
</filter>
</defs>
</svg>

    </div>






















    </>
  );
}

export default App;
