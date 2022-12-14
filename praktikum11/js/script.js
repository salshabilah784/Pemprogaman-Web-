document.querySelectorAll("a").forEach((a)=>{
    //jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click",(element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // mengambil element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array
    let choices = ["Rock","Paper","Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan komputer == pilihan user (draw)
    if(pilihanUser == pilihanKomputer){
        alert("SERI");
    }

    // pilihan komputer menang
    if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("Komputer MENANG")
    }else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("komputer MENANGG")
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("Komputer MENANGGG")
    }

    // pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("User MENANG")
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("User MENANGG")
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("User MENANGGG")
    }
}