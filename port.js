function myFunction(data){
    console.log(data);
    $(data).css("display","block");   
}
document.addEventListener("DOMContentLoaded", () => {

const contentTabs = document.querySelectorAll(".contentTab");
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)

    })
},{
    rootMargin:"-100px"
})

contentTabs.forEach(tab => {
    observer.observe(tab)
})
}
)


