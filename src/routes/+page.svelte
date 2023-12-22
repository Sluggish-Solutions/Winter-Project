<script> 
    let tabs =[
        {name: 'About', link:'#projects'},
        {name: 'Login in', link: '#about'}
    ];
    </script>
    
    <header class={"sticky z-[20] top-0 duration-200 px-0 flex items-center justify-between py-4 "} style="background-color: #000814;">
    
        <h1 class="sm: flexbox px-5" style="color: #FFC300; font-size: 24px;">
            <b class="font-bold poppins">Chat GPT Picasso </h1>
        <div>
            <div class="sm:flex items-center gap-4 hidden" style="color: #FFC300;">
            {#each tabs as tab, index}
                <a
                    href={tab.link}
                    class="duration-200 hover:text-violet-400"
                    target={index === 2 ? "_blank" : ""}
                >
                    <p>{tab.name}</p>
                </a>
            {/each}
            </div>
            
            
            
            <div class="sm:hidden absolute right-5 absolute top-2 " >
                <script>
                    var x=false;
                    function TestsFunction() {
                        console.log(x);
                        var T = document.getElementById("drop");
                        x = !x;
                        if (x) {
                            T.style.display = "block";
                        } else {
                            T.style.display = "none";
                        }
                    }
                </script>
                <button onclick="TestsFunction()" ><img src="/images/dropicon.png" alt="not working"></button>
                <div class="outline outline-offset-2 absolute right-2 bg-white px-2 py-2 " style="display:none; outline-color: #FFC300; background-color: #000814" id="drop">
                    {#each tabs as tab, index}
                    <a
                        href={tab.link}
                        class="duration-200  hover:text-violet-400"
                        target={index === 2 ? "_blank" : ""}
                    >
                        <p>{tab.name}</p>
                    </a>
                    {/each}
                </div>
            </div>
             
        </div>    
    
    </header>