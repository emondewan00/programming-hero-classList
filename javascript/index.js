
const milestoneData=JSON.parse(data).data;

function displayList(){
    const list= document.getElementById("video-list");
    list.innerHTML=`${milestoneData.map(data=>{
        return`<div class="milestone" id="${data._id}">
        <div class="milestone-heading border-2 border-bottom">
            <div class="checkbox pe-3" >
                <input type="checkbox" name="" id="" onClick="doneList(this,${data._id})">
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


function doneList(ele,id){
    const listDiv=document.getElementById("hallo");
    const list= document.getElementById("video-list");
    const getEle=document.getElementById(id);
    if(ele.checked){
        list.removeChild(getEle);
        listDiv.appendChild(getEle);
        const doneModule=listDiv.children;
        sortElement(doneModule,"hallo");
    }else{
        listDiv.removeChild(getEle)
        list.appendChild(getEle);
        const video=list.children;
        sortElement(video,"video-list")
    }
}



function sortElement(parent,section){
    const listDiv=document.getElementById(section);
    const sortTed=Array.from(parent).sort((a,b)=>{
        return a.id - b.id
    })
    for (let x of sortTed){
        listDiv.appendChild(x);
    }
}




