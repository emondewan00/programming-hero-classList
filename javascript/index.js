
const milestoneData=JSON.parse(data).data;

function displayList(){
    const list= document.getElementById("video-list");
    list.innerHTML=`${milestoneData.map(data=>{
        return`<div class="milestone">
        <div class="milestone-heading border-2 border-bottom">
            <div class="checkbox pe-3">
                <input type="checkbox" name="" id="">
            </div>
            <div class="milestone-text" onClick="myFunction(this)" >
                <h3>${data.name}</h3>
            </div>
        </div>
        <div class="milestone-body" id="milestone-body">
            ${data.modules.map(mdata=>{
                return `<h6 class="py-2">${mdata.name}<h6/>`
            }).join('')}
        </div>
      </div>`
    }).join('')}`
}
displayList()



function myFunction(ele){
    const crouunt=ele.parentElement.nextSibling.nextSibling;
    const shown=document.querySelector(".show");
    
    if(!crouunt.classList.contains("show")&&shown){
        shown.classList.remove("show")
    }
    crouunt.classList.toggle("show");
}
