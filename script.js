const btnScrollToTop = document.querySelector("#btnScrollToTop");

window.addEventListener("scroll", () => {
    if(scrollY > 400){
        btnScrollToTop.classList.add("show")
    }else{
        btnScrollToTop.classList.remove("show")
    }
})

btnScrollToTop.addEventListener("click", function(){
    // window.scrollTo(0, 0);
    
    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth",
    // });

    $("html, boddy").animate({scrollTop: 0}, "slow");
});

// Contact me form script
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxjDv6iHufm03OFqZXWisP6r_gBMZWltpD8V6xTsf7pEJL-hc5URxNzftDW32vU-La18A/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

let num1 = 365;
let num2 = 180;


console.log(`The sum of two no.s is ${num1+num2}`);

// let heading = document.querySelector("h2");
// heading.innerText = `The sum of two no.s is ${result}`;
