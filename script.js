const addnew_note_text = document.querySelector("main")






function savenotes() {
    const savingnotes = document.querySelectorAll(".note textarea")
    console.log(savingnotes)
    const data = []
    savingnotes.forEach((note) => {
        data.push(note.value)
    })
    //storing note
    localStorage.setItem("savingnotes", JSON.stringify(data))

}





document.querySelector("button").addEventListener("click", function () {
    addnewnote()
})

 

function addnewnote(text="") {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool-bar">
        <div>
            <img src="images/keepnotes.png">
            <ion-icon name="bookmark-outline" class="save"></ion-icon>
            <ion-icon name="trash-outline" class="delete"></ion-icon>
        </div>
    </div>
    <textarea placeholder="Write something...">${text}</textarea>
    `


    note.querySelector(".delete").addEventListener("click", function () {
        note.remove()
        savenotes()
    })

    note.querySelector(".save").addEventListener("click", function () {
        savenotes()
    })

    addnew_note_text.appendChild(note)
    savenotes()

}






(
    function (){
        const local_strorage_data=JSON.parse(localStorage.getItem("savingnotes"))
       local_strorage_data.forEach((local_strorage_data)=>{
        addnewnote(local_strorage_data)
       })
    } 
)()








